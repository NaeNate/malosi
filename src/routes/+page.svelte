<script lang="ts">
  export let data
  console.log(data)
</script>

<h1 class="gradient text-6xl font-bold">Malosi</h1>

{#if data.session}
  <a href="add">Add</a>
{/if}
