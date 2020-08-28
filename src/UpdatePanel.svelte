<script>
  import { db } from "./firebase";
  export let name; // Trail Name

  let condition;
  let description;
  let created;

  function updateCondition() {
    created = Date.now();

    // Previous way to update by adding all conds to a collection.
    // Will be useful to revisit.
    /*     db.collection("conditions").add({
      condition,
      trail: name,
      description,
      created,
    }); */

    /*     db.collection("conditions").doc(name).update({
      condition,
      description,
      created,
    }); */

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
