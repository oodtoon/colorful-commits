<script lang="ts">
  let word: string
  export let wordToWrite: string

  function handleWordSelect() {
    if (word.length > 10) {
      window.alert("word is too long. Must be 10 characters or less")
    } else {
      wordToWrite = word
    }
    
  }
</script>

<div class="word-container">
  <label><input bind:value={word} type="text" max=10/><button on:click={handleWordSelect}>Create word</button></label>
</div>

<style></style>