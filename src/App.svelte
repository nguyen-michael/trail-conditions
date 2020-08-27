<script>
  import Tab from "./Tab.svelte";
  import TabList from "./TabList.svelte";
  import Trail from "./Trail.svelte";

  let trails = [
    {
      name: "walnut",
      description: "flowiy fun yay",
      location: "here",
      condition: "good",
      lastUpdated: "yesterday",
      trailId: "21314561461",
    },
    {
      name: "Brushy",
      description: "Rocks",
      location: "Too far",
      condition: "good",
      lastUpdated: "2m ago",
      trailId: "55345234",
    },
    {
      name: "BCGB",
      description: "GOAT",
      location: "Poop Water",
      condition: "good",
      lastUpdated: "this morning",
      trailId: "123123123",
    },
    {
      name: "thumper",
      description: "AHHHHHHHHH!",
      location: "yaupon",
      condition: "????",
      lastUpdated: "4 weeks ago",
      trailId: "666",
    },
  ];
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

  @media (min-width: 768px) {
    main {
      max-width: 600px;
    }
    h1 {
      color: #ff3e00;
      text-transform: uppercase;
      font-size: 2em;
    }
  }

  @media (min-width: 1024px) {
    main {
      max-width: 800px;
    }
    h1 {
      color: #ff3e00;
      text-transform: uppercase;
      font-size: 2.5em;
    }
  }

  @media (min-width: 1440px) {
    main {
      max-width: 1024px;
    }
    h1 {
      color: #ff3e00;
      text-transform: uppercase;
      font-size: 3em;
    }
  }
</style>

<main>
  <h1>Austin MTB Trail Conditions</h1>
  <input type="text" placeholder="search!" />
  {#each trails as trail}
    <Trail {...trail} />
  {/each}
</main>
