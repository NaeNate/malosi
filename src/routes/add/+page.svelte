<script lang="ts">
  export let data

  import { BrowserMultiFormatReader } from "@zxing/browser"
  import { onMount } from "svelte"

  const reader = new BrowserMultiFormatReader()
  let food: { name: string; calorie: string; protein: string }
  let video: HTMLVideoElement
  let controls

  onMount(async () => {
    const devices = await BrowserMultiFormatReader.listVideoInputDevices()

    controls = await reader.decodeFromVideoDevice(
      devices[0].deviceId,
      video,
      async (result) => {
        if (result) findFood(result.getText())
      },
    )
  })

  const findFood = async (barcode: string) => {
    const { product } = await fetch(
      `https://world.openfoodfacts.org/api/v3/product/${barcode}?fields=product_name,nutriments`,
    ).then((res) => res.json())

    food = {
      name: product.product_name
        .split(" ")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
        .join(" "),
      calorie: product.nutriments["energy-kcal_serving"],
      protein: product.nutriments.proteins_serving,
    }

    controls.stop()
  }
</script>

{#if food}
  <p class="text-2xl font-semibold">{food.name}</p>
  <p class="text-lg">Calories per serving: {food.calorie}</p>
  <p class="mb-2 text-lg">Protein per serving: {food.protein}</p>

  <form method="post">
    <input placeholder="Servings" name="servings" />

    <input type="hidden" name="name" value={food.name} />
    <input type="hidden" name="calorie" value={food.calorie} />
    <input type="hidden" name="protein" value={food.protein} />
    <input type="hidden" name="userId" value={data.session.user.id} />

    <button>Add</button>
  </form>
{:else}
  <div class="flex justify-center">
    <video bind:this={video}>
      <track kind="captions" />
    </video>
  </div>
{/if}
