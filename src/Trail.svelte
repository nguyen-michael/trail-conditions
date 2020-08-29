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

  let condition;
  let updated;
  let conditionDescription;

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
</style>

{#if $results}

  {#each $results as result}
  {console.log(result)}
    <div class="accordion">
      <div class="full-width" on:click={() => expand()}>
        {name}: {result.condition}, as of: {result.created}
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
              <h2>{result.condition}</h2>
              <p>updated: {result.created}</p>
              <p>{result.description}</p>
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
{:else}
  <div class="accordion">
    <button class="full-width" on:click={() => expand()}>
      {name}: Needs condition
    </button>
    {#if opened}
      <div class="slider" transition:slide={{ duration: 250 }}>
        <Tabs>
          <TabList>
            <Tab>Condition</Tab>
            <Tab>Update</Tab>
            <Tab>Trail Info</Tab>
          </TabList>

          <TabPanel>
            <h2>No info</h2>
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
