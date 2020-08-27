<script>
  import { Tabs, TabList, TabPanel, Tab } from "./tabs.js";
  import UpdatePanel from "./UpdatePanel.svelte";
  export let name;
  export let location;
  export let description;
  let condition;
  let lastUpdated;
  let trailId;

  // We should gather DB info here. This will update indiv updates as they're added
</script>

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
