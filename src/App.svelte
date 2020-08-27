<script>
  import { slide } from "svelte/transition";
  import Trail from "./Trail.svelte";
  import trails from "./trails-info";

  let allTrails = trails;

  let search = "";

  $: if (search !== "") {
    allTrails = trails.filter((trail) => {
      return trail.name.toLowerCase().includes(search.toLowerCase());
    });
  }

  $: if (search === "") {
    allTrails = trails;
  }

  const expand = (trail) => {
    allTrails = allTrails.map((t) => {
      if (t.name === trail.name) {
        t.opened = !t.opened;
      }
      return t;
    });
  };
</script>

<style>
  .accordion {
    margin-bottom: 10px;
  }

  .slider {
    border: 1px solid #eee;
    padding: 4px 20px;

    /* Added some color to illustrate the issue */
    background-color: #fefefe;
  }

  .full-width {
    width: 100%;
  }

  main {
    text-align: center;
    padding: 1em;
    max-width: 320px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 1.5em;
  }

  @media (min-width: 768px) {
    main {
      max-width: 600px;
    }
    h1 {
      font-size: 2em;
    }
  }

  @media (min-width: 1024px) {
    main {
      max-width: 800px;
    }
    h1 {
      font-size: 2.5em;
    }
  }

  @media (min-width: 1440px) {
    main {
      max-width: 1024px;
    }
    h1 {
      font-size: 3em;
    }
  }
</style>

<main>
  <h1>Austin MTB Trail Conditions</h1>
  <input class="full-width" bind:value={search} placeholder="search!" />
  <hr />
  {#each allTrails as trail}
    <div class="accordion">
      <button class="full-width" on:click={() => expand(trail)}>
        {trail.name}: CONDITION HERE, as of: LAST UPDATEDED HERE
      </button>
      {#if trail.opened}
        <div class="slider" transition:slide={{ duration: 250 }}>
          <Trail {...trail} />
        </div>
      {/if}
    </div>
  {/each}
</main>
