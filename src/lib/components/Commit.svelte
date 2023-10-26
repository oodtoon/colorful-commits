<script lang="ts">
  export let commitDay
  export let totalCommits
  let day: number;
  let commitNumber: number


  function handleCommit() {
    if (day < 1 || day > 365) {
      window.alert("number must be within range of 1-365");
    } else {
      commitDay = day
    }
  }

  function handleAddCommits() {
    const arr = []
    for (let i = 1; i < commitNumber + 1; i++) {
      arr.push(i)
    }
    totalCommits = arr
  }
</script>

<div class="container">
  <label
    ><input type="number" min="1" max="365" bind:value={day} /><button
      on:click={handleCommit}>Commit</button
    ></label
  >
  <label><input type="number" min="1" max="365" bind:value={commitNumber}/><button on:click={handleAddCommits}>Add multiple commits in order</button></label>
</div>

<style></style>
