<script>
  import { fly } from 'svelte/transition';
  export let url = "";
</script>

<div class="transition-outer">
  {#key url}
    <div class="transition-inner"
        in:fly={{ y:-50, duration: 500, delay: 500 }}
        out:fly={{ y:50, duration: 500 }}>
      <slot />
    </div>
  {/key}
</div>

<style>
  .transition-outer {
    display: grid;
    grid-template: 1fr 1fr;
  }
  .transition-inner {
    grid-row: 1;
    grid-column: 1;
  }
</style>