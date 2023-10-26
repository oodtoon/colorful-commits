<script lang="ts">
  export let day: number;
  export let commitDays: (number|null)[];

  let pastYearDates: number[] = [];

  const oneDay = 24 * 60 * 60 * 1000;
  const today = Math.floor(new Date().getTime());

  for (let i = 0; i < 366; i++) {
    if (i === 0) {
      pastYearDates.unshift(today);
    } else {
      pastYearDates.unshift(today - oneDay * i);
    }
    pastYearDates = pastYearDates;
  }
</script>

<div
  class="square"
  class:commit={commitDays.includes(day)}
  data-date-id={new Date(pastYearDates[day]).toLocaleDateString("en-CA")}
>
  {day}
</div>

<style>
  .square {
    height: 14px;
    width: 14px;
    color: transparent;
    border: 1px solid black;
    border-radius: 4px;
    background-color: rgb(42, 39, 39);
  }

  .commit {
    background-color: rgb(77, 226, 77);
  }
</style>
