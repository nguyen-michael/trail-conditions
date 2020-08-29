<script>
  import { db } from "./firebase";
  export let name; // Trail Name

  let condition;
  let description;
  let created;

  let sent = false;

  function updateCondition() {
    created = Date.now();

    db.collection("conditions").add({
      condition,
      trail: name,
      description,
      created,
    });

    sent = true;
    description = "";

    setTimeout(() => {
      sent = false;
    }, 1500);
  }
</script>

<style>
  button {
    border: 1px solid black;
  }

  button:hover {
    background-color: transparent;
  }

  .sent {
    background-color:chartreuse ;
  }

  textarea {
    resize: vertical;
  }
</style>

<textarea bind:value={description} class="full-width" />
<select bind:value={condition}>
  <option value="gtg">100% Good</option>
  <option value="mostly">Mostly Good</option>
  <option selected value="caution">Caution</option>
  <option value="nogo">No Go</option>
</select>
<button on:click={updateCondition} class:sent="{sent}">{sent ? 'SENT!' : 'SEND IT!'}</button>
