<script>
  import HelpModal from "./HelpModal.svelte";
  import Trail from "./Trail.svelte";
  import trails from "./trails-info";

  // Array of trail names
  /*   let names = trails.map((trail) => {
    return trail.name;
  }); */

  let allTrails = trails.sort((a, b) => {
    return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
  });

  let openModal = false;

  // Eliminate Search For now
  /*   let search = "";

  $: if (search !== "") {
    allTrails = trails.filter((trail) => {
      return trail.name.toLowerCase().includes(search.toLowerCase());
    });
  }

  $: if (search === "") {
    allTrails = trails.sort((a, b) => {
      return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
    });
  } */

  const handleExpand = (event) => {
    allTrails = allTrails.map((t) => {
      if (t.name === event.detail.trailName) {
        t.opened = !t.opened;
      }
      return t;
    });
  };

  const handleModalClose = () => {
    openModal = false;
  };
</script>

<style>
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

  button {
    /* position: absolute;
    top: 1rem;
    left: 50%; */
    width: 4rem;
    border: 1px solid #eee;
    background-color: #fefefe;
    padding: 0.25rem 0.5rem;
    font-weight: bolder;
    border-radius: 12px;
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
  <HelpModal {openModal} on:close={handleModalClose} />
  <button
    on:click={() => {
      openModal = !openModal;
    }}>
    ?
  </button>
  <h1>Austin MTB Trail Conditions</h1>

  <!-- <input class="full-width" bind:value={search} placeholder="search!" /> -->
  <hr />
  {#each allTrails as trail}
    <Trail {...trail} on:expand={handleExpand} />
  {/each}
</main>
