<script lang="ts">
  let btns: number[] = [];
  for (let i = 1; i < 36; i++) {
    btns.push(i);
    btns = btns;
  }

  let layout: boolean[] = [];
  for (let i = 0; i < 35; i++) {
    layout.push(i < 7 || i % 7 === 0 || i % 7 === 6);
  }

  function handleClick(index: number) {
    layout[index] = !layout[index];
  }

  function handleLayoutDisplay() {
    console.log("layout", layout);
    const trueCount = layout.filter(letter => letter)
    console.log("true count:", trueCount.length)
  }

  function clearCanvas() {
    layout = layout.map((val, i) => {
      if (i < 7 || i % 7 === 0 || i % 7 === 6) {
        return true;
      } else {
        return false;
      }
    });
  }
</script>

<div class="box">
  {#each btns as btn, i}
    <button
      class="btn"
      class:clicked={layout[i]}
      id={btn.toString()}
      on:click={() => {
        handleClick(i);
      }}
    />
  {/each}
</div>

<button on:click={handleLayoutDisplay}>Git Layout</button>
<button on:click={clearCanvas}>Clear Canvas</button>

<style>
  .box {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-height: 130px;
    max-width: 90px;
    gap: 1px;
    border: 3px solid black;
  }

  .btn {
    height: 16px;
    width: 16px;
    color: transparent;
    border: 1px solid black;
    border-radius: 4px;
    background-color: grey;
    cursor: pointer;
  }

  .clicked {
    background-color: green;
  }
</style>
