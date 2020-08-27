<script>
  import { Tabs, TabList, TabPanel, Tab } from "./tabs.js";
  import UpdatePanel from "./UpdatePanel.svelte";
  import { db } from "./firebase";
  import { collectionData } from "rxfire/firestore";
  import { startWith } from "rxjs/operators";
  export let name;
  export let location;
  export let description;
  let condition;
  let lastUpdated;

  // Set up query
  const query = db
    .collection("conditions")
    .where("trail", "==", name)
    .orderBy("created", "desc")
    .limit(1);

  const results = collectionData(query).pipe(startWith([]));
  $: condition = $results[0].condition;
</script>

{#each $results as result}{console.log(result, results, $results)}{/each}

<Tabs>
  <TabList>
    <Tab>Condition</Tab>
    <Tab>Update</Tab>
    <Tab>Trail Info</Tab>
  </TabList>

  <TabPanel>
    <h2>{condition}</h2>
    <p>updated: {lastUpdated}</p>
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
