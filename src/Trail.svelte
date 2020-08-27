<script>
  import { Tabs, TabList, TabPanel, Tab } from "./tabs.js";
  export let name;
  export let location;
  export let description;
  export let condition;
  export let lastUpdated;
  export let trailId;
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
    <p>Inputs here</p>
    <p>Trail ID: {trailId}</p>
  </TabPanel>
  <TabPanel>
    <h2>{name}</h2>
    <p>{location}</p>
    <p>description: {description}</p>
  </TabPanel>
</Tabs>
