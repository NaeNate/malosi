<script lang="ts">
  export let data

  let totals = { c: 0, p: 0 }

  if (data.day) {
    totals.c = data.day.foods.reduce((total, food) => {
      return total + food.calorie * food.servings
    }, 0)

    totals.p = data.day.foods.reduce((total, food) => {
      return total + food.protein * food.servings
    }, 0)
  }

  const die = async (id: number) => {
    await fetch("/die", {
      method: "POST",
      body: JSON.stringify({ id }),
      headers: { "Content-Type": "application/json" },
    })

    location.reload()
  }
</script>

<h1 class="gradient mb-4 text-6xl font-bold">Malosi</h1>

{#if data.session}
  <a
    href="add"
    class="absolute bottom-0 right-0 m-4 flex size-16 items-center justify-center rounded-full bg-primary"
  >
    <div class="aboslute h-10 w-2 rounded-full bg-secondary" />
    <div class="absolute h-2 w-10 rounded-full bg-secondary" />
  </a>

  <p class="text-3xl">
    Calories Remaining: {data.session.user.calorie - totals.c}
  </p>

  <p class="mb-4 text-3xl">
    Protein Remaining: {data.session.user.protein - totals.p}
  </p>

  {#if data.day}
    <p class="mb-2 text-3xl font-semibold">Foods Today</p>

    <div class="relative flex flex-col gap-2">
      {#each data.day.foods as food}
        <div class="rounded border p-2">
          <p class="text-xl">{food.name}</p>

          <p>{food.calorie} Calories, {food.protein} Protein</p>
          <p>{food.servings} {food.servings === 1 ? "Serving" : "Servings"}</p>

          <button
            on:click={() => die(food.id)}
            class="absolute right-2 top-2 bg-transparent p-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="red"
              class="size-7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
        </div>
      {/each}
    </div>
  {/if}
{/if}
