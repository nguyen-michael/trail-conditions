<script>
  import { select_multiple_value } from "svelte/internal";

  export let name; // Trail Name
  let condition;
  let description;
  let created;
  let reportTime;

  function setToday() {
    let today = new Date();

    // Remove Time Zone trailing "z". Better way to do this?
    reportTime = today.toISOString().slice(0, -1);
  }

  function updateCondition() {
    created = Date.now();
    console.log(
      `Cond ${condition}, Desc ${description}, on: ${reportTime}, created at ${created}, trail ${name}`
    );
  }
</script>

<textarea bind:value={description} />
<input bind:value={reportTime} type="datetime-local" />
<button on:click={setToday}>Today</button>
<select bind:value={condition}>
  <option value="gtg">100% Good</option>
  <option value="mostly">Mostly Good</option>
  <option selected value="caution">Caution</option>
  <option value="nogo">No Go</option>
</select>
<button on:click={updateCondition}>SEND IT</button>
