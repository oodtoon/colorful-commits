<script lang="ts">
</script>

<div class="commit-container">
  {#each { length: 365 } as _, index}
    {@const day = index +1}
      <slot {day}/>
  {/each}
</div>

<style>

.commit-container {
  border: 3px solid black;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 140px;
  gap: 2px;
  max-width: 1000px;
  border-radius: 4px;
}
</style>

