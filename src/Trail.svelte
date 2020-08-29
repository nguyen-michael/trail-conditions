<script>
  import { Tabs, TabList, TabPanel, Tab } from "./tabs.js";
  import { slide } from "svelte/transition";
  import { createEventDispatcher } from "svelte";

  import UpdatePanel from "./UpdatePanel.svelte";
  import { db } from "./firebase";
  import { collectionData } from "rxfire/firestore";
  import { startWith } from "rxjs/operators";

  export let name;
  export let location;
  export let description;
  export let opened;

  const dispatch = createEventDispatcher();

  function expand() {
    dispatch("expand", { trailName: name });
  }

  // Set up query
  const query = db
    .collection("conditions")
    .where("trail", "==", name)
    .orderBy("created", "desc")
    .limit(1);

  const results = collectionData(query).pipe(startWith([]));

  function processDate(ms) {
    const timeDisplayOptions = {
      timeZoneName: "short",
    };
    const datetime = new Date(ms).toLocaleString("en-US", timeDisplayOptions);
    const now = new Date();
    const agoMillis = now - new Date(ms);

    const ago = timeDifference(agoMillis);

    return { datetime, ago };
  }

  function timeDifference(elapsed) {
    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerMonth = msPerDay * 30;
    const msPerYear = msPerDay * 365;

    if (elapsed < msPerMinute) {
      return Math.round(elapsed / 1000) + "s ago";
    } else if (elapsed < msPerHour) {
      return Math.round(elapsed / msPerMinute) + "min ago";
    } else if (elapsed < msPerDay) {
      return Math.round(elapsed / msPerHour) + "hr ago";
    } else if (elapsed < msPerMonth) {
      return "approximately " + Math.round(elapsed / msPerDay) + "d ago";
    } else if (elapsed < msPerYear) {
      return (
        "approximately " + Math.round(elapsed / msPerMonth) + " months ago"
      );
    } else {
      return "approximately " + Math.round(elapsed / msPerYear) + "y ago";
    }
  }
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

  .header {
    border: 1px solid #ccc;
    padding: 0.5rem 0;
    background-color: #fcfcfc;
  }

  .nogo {
    color: red;
    font-weight: bold;
  }
  .caution {
    color: orange;
    font-weight: bold;
  }
  .mostly {
    color: greenyellow;
    font-weight: bold;
  }
  .gtg {
    color: forestgreen;
    font-weight: bold;
  }
</style>

{#if $results.length !== 0}
  {#each $results as result}
    <div class="accordion">
      <div class="header" on:click={() => expand()}>
        {name}:
        <span class={result.condition}>{result.condition}</span>
        as of: {processDate(result.created).ago}
      </div>
      {#if opened}
        <div class="slider" transition:slide={{ duration: 250 }}>
          <Tabs>
            <TabList>
              <Tab>Condition</Tab>
              <Tab>Update</Tab>
              <Tab>Trail Info</Tab>
            </TabList>

            <TabPanel>
              <h2 class={result.condition}>{result.condition}</h2>
              <p>{result.description}</p>
              <p>updated: {processDate(result.created).datetime}</p>
            </TabPanel>
            <TabPanel>
              <h2>Update condition</h2>
              <UpdatePanel {name} />
            </TabPanel>
            <TabPanel>
              <h2>{name}</h2>
              <p>{location}</p>
              <p>description: {description}</p>
            </TabPanel>
          </Tabs>
        </div>
      {/if}
    </div>
  {/each}
{:else if $results.length === 0}
  <div class="accordion">
    <div class="header" on:click={() => expand()}>{name}: Needs condition</div>
    {#if opened}
      <div class="slider" transition:slide={{ duration: 250 }}>
        <Tabs>
          <TabList>
            <Tab>Condition</Tab>
            <Tab>Update</Tab>
            <Tab>Trail Info</Tab>
          </TabList>

          <TabPanel>
            <h2>No Status Condition</h2>
            <p>Please update if you have information.</p>
          </TabPanel>
          <TabPanel>
            <h2>Update condition</h2>
            <UpdatePanel {name} />
          </TabPanel>
          <TabPanel>
            <h2>{name}</h2>
            <p>{location}</p>
            <p>description: {description}</p>
          </TabPanel>
        </Tabs>
      </div>
    {/if}
  </div>
{/if}
