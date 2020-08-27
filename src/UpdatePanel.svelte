<script>
  import { db } from "./firebase";
  export let name; // Trail Name

  let condition;
  let description;
  let created;

  function updateCondition() {
    created = Date.now();

    db.collection("conditions").add({
      condition,
      trail: name,
      description,
      created,
    });
  }
</script>

<textarea bind:value={description} />
<select bind:value={condition}>
  <option value="gtg">100% Good</option>
  <option value="mostly">Mostly Good</option>
  <option selected value="caution">Caution</option>
  <option value="nogo">No Go</option>
</select>
<button on:click={updateCondition}>SEND IT</button>
