<script lang="ts">
  // export let data

  import { BrowserMultiFormatReader } from "@zxing/browser"
  const codeReader = new BrowserMultiFormatReader()

  let barcode = true
</script>

<button on:click={() => (barcode = !barcode)}>Manual</button>

{#if barcode}
  <p>Barcdoe</p>
{:else}
  <form>
    <p>Calorie</p>
    <input name="calorie" />
  </form>
{/if}
