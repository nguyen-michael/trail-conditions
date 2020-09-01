<script>
  import { Tabs, TabList, TabPanel, Tab } from "./tabs.js";
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";

  const dispatch = createEventDispatcher();

  function overlayClick(e) {
    if ("close" in e.target.dataset) {
      dispatch("close");
    }
  }

  export let openModal;
</script>

<style>
  /*   div {
    width: 100vw;
    height: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    padding: auto 0;
  } */

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .modal-container {
    position: relative;
    background-color: #ffffff;
    width: 90vw;
    margin: 1rem auto 0.2rem;
    box-shadow: 0 3px 10px #555;
    padding: 4px 20px;
    text-align: left;
  }
</style>

{#if openModal}
  <div>
    <div
      class="modal-overlay"
      data-close
      on:click={overlayClick}
      transition:fade={{ duration: 150 }}>
      <div class="modal-container">
        <Tabs>
          <TabList>
            <Tab>Help</Tab>
            <Tab>Attributions</Tab>
          </TabList>

          <TabPanel>
            <h2>What's goin' on, here?!</h2>
            <p>
              This is an app to crowd-source trail conditions in the Austin
              area. Trail conditions are user-reported. To get started, click or
              tap a trail and you'll be presented with current conditions. If
              there are no current conditions or they're outdated, hit the
              "update" tab and update it yourself! It will sync to the live
              server and will be updated for everyone.
            </p>
            <p>Simple guidelines for conditions:</p>
            <ul>
              <li>
                GTG should be used only for trails completely, 100% rideable.
              </li>
              <li>
                For caution and mostly statuses, please clarify in the
                description.
              </li>
              <li>No Go should be used for wet trails or closed trails.</li>
            </ul>
          </TabPanel>

          <TabPanel>
            <h2>Attributions</h2>
            <p>
              Made by Michael Nguyen, you may know me from the past as a Dirt
              Components wheelbuilder, a Monkey Wrench Bicycles mechanic or
              we've had a chat on the trail!
            </p>
            <p>
              Inspired by various Austin MTB Trail Conditions <a
                href="https://www.facebook.com/groups/325119181430845/">
                facebook group
              </a> discussions and Anthony Chen's <a href="https://austintrailconditions.com/">website</a>
            </p>
            <p>
              Built with <a href="https://svelte.dev/">Svelte.js</a> and favicon
              from <a
                href="https://www.freefavicon.com/freefavicons/objects/iconinfo/cog-2-152-275104.html">
                here
              </a> . Social sharing image from <a
                href="https://unsplash.com/@simmerdownjpg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">here</a>.
            </p>
            <p>(I'm available for hire / Lookin' for a job!)</p>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  </div>
{/if}
