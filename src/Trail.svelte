<script>
  import { Tabs, TabList, TabPanel, Tab } from "./tabs.js";
  import { slide } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
  import { conditionSwitcher, processDate } from "./utils.js";

  import UpdatePanel from "./UpdatePanel.svelte";
  import { db } from "./firebase";
  import { collectionData } from "rxfire/firestore";
  import { startWith } from "rxjs/operators";

  export let name;
  export let shortName;
  export let longName;
  export let location;
  export let description;
  export let opened;

  let locationURL = `https://www.google.com/maps/search/${location.replace(
    " ",
    "+"
  )}`;

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

  .header .name {
    font-weight: bold;
  }

  .nogo {
    color: #F94144;
    font-weight: bold;
  }
  .caution {
    color: #F3722C;
    font-weight: bold;
  }
  .mostly {
    color: #90BE6D;
    font-weight: bold;
  }
  .gtg {
    color: #43AA8B;
    font-weight: bold;
  }
  
  .need {
    color: #F8961E;
    font-weight: bold;
  }
</style>

{#if $results.length !== 0}
  {#each $results as result}
    <div class="accordion">
      <div class="header" on:click={() => expand()}>
        <span class="name">{shortName}</span>
        :
        <span class={result.condition}>
          {conditionSwitcher(result.condition)}
        </span>
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
              <h2 class={result.condition}>{conditionSwitcher(result.condition)}</h2>
              <p>{result.description}</p>
              <p>updated: {processDate(result.created).datetime}</p>
            </TabPanel>
            <TabPanel>
              <h2>Update condition</h2>
              <UpdatePanel {name} />
            </TabPanel>
            <TabPanel>
              <h2>{longName}</h2>
              <a href={locationURL}>{location}</a>
              <p>{description}</p>
            </TabPanel>
          </Tabs>
        </div>
      {/if}
    </div>
  {/each}
{:else if $results.length === 0}
  <div class="accordion">
    <div class="header" on:click={() => expand()}>
      <span class="name">{shortName}</span>
      :
      <span class="need">Needs condition</span>
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
            <h2>No Status Condition</h2>
            <p>Please update if you have information.</p>
          </TabPanel>
          <TabPanel>
            <h2>Update condition</h2>
            <UpdatePanel {name} />
          </TabPanel>
          <TabPanel>
            <h2>{longName}</h2>
            <a href={locationURL} target="_blank" rel="noreferrer">
              {location}
            </a>
            <p>{description}</p>
          </TabPanel>
        </Tabs>
      </div>
    {/if}
  </div>
{/if}
