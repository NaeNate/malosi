<script>
  import { signIn, signOut } from "@auth/sveltekit/client"
  import "../app.css"

  export let data
  let drop = false
</script>

<nav class="flex gap-4 p-4">
  <a href="/" class="gradient text-2xl font-semibold">Malosi</a>
  <a href="/" class="text-2xl">About</a>

  <div class="ml-auto">
    {#if data.session}
      <button
        on:click={() => (drop = !drop)}
        class="size-12 rounded-full bg-primary"
      />

      {#if drop}
        <div
          class="absolute right-0 m-2 flex w-48 flex-col rounded border p-2 shadow"
        >
          <a
            href="/settings"
            class="rounded p-1.5 hover:bg-[#eee5be]"
            on:click={() => (drop = !drop)}
          >
            Settings
          </a>

          <button
            on:click={signOut}
            class="rounded bg-background p-1.5 text-left hover:bg-[#eee5be]"
          >
            Sign Out
          </button>
        </div>
      {/if}
    {:else}
      <button on:click={() => signIn("google")}>Sign In</button>
    {/if}
  </div>
</nav>

<main class="mx-auto my-8 w-4/5">
  <slot />
</main>
