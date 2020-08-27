<script>
  import { slide } from "svelte/transition";
  import Trail from "./Trail.svelte";

  // Hard coded trails, will be replaced with data source and basics will be extracted to
  // helper file.
  let trails = [
    {
      name: "walnut",
      description:
        "Narrow in places and twisty througout, this leg churner is sure to keep you on you toes. Sight lines are fantastic and the flow is amazing. Watch that you don't overshoot the switchback to stay on the black diamond descent - the blue route is completely overgrown. This created a reroute of the single track. Perfect flow day with hard moist dirt with only 1/2 bird baths along the way!Narrow in places and twisty througout, this leg churner is sure to keep you on you toes. Sight lines are fantastic and the flow is amazing. Watch that you don't overshoot the switchback to stay on the black diamond descent - the blue route is completely overgrown. This created a reroute of the single track. Perfect flow day with hard moist dirt with only 1/2 bird baths along the way!",
      location: "here",
      condition: "good",
      lastUpdated: "yesterday",
      trailId: "21314561461",
      opened: false,
    },
    {
      name: "Brushy",
      description:
        "The exposed rock section near the bottom is a highlight of the trail giving the exposed granite slabs of Squamish a run for their money. Logs embedded in the trail have been installed to signal technical terrain. You now have to ride down an asphalt trail and cut off onto a gravel trail before getting back to the old single track. The upper half is more technical with lots of rocks and a step up onto a boulder. The area can be accessed from the end of Densmore's Lane, the end of Old Petty Harbour Road and from Huntingdale Drive.",
      location: "Too far",
      condition: "not good",
      lastUpdated: "2m ago",
      trailId: "55345234",
      opened: false,
    },
    {
      name: "BCGB",
      description:
        "Ridgeline is a crown jewel of Dupont State Recreational Forest. I've master huck to flat though! Although it's not technical there are plenty of opportunities to slip in the loose rock and end up with some serious road rash, especially at the speeds you'll be going on the downhills! This trail can be ridden as a loop, or could be ridden as an out-in-back. It's mostly a hike-a-bike up and then has an advanced all-mountain feel coming down.",
      location: "Poop Water",
      condition: "too wet",
      lastUpdated: "this morning",
      trailId: "123123123",
      opened: false,
    },
    {
      name: "thumper",
      description:
        "Few sniper rocks on the trail. Very loose and dry. Don't miss this trail! Freeze-thaw cycle isn't awful, but does make this trail rather slick. The end of the jump line trail there is a fairly steep climb to get to the next section.!",
      location: "yaupon",
      condition: "????",
      lastUpdated: "4 weeks ago",
      trailId: "666",
      opened: false,
    },
  ];

  let allTrails = trails;

  let search = "";

  $: if (search !== "") {
    trails = allTrails.filter((trail) => {
      return trail.name.toLowerCase().includes(search.toLowerCase());
    });
  }

  $: if (search === "") {
    trails = allTrails;
  }

  const expand = (trail) => {
    trails = trails.map((t) => {
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
  <input class="full-width" bind:value={search} placeholder="search!" />
  <hr />
  {#each trails as trail}
    <div class="accordion">
      <button class="full-width" on:click={() => expand(trail)}>
        {trail.name}: {trail.condition}, as of: {trail.lastUpdated}
      </button>
      {#if trail.opened}
        <div class="slider" transition:slide={{ duration: 250 }}>
          <Trail {...trail} />
        </div>
      {/if}
    </div>
  {/each}
</main>
