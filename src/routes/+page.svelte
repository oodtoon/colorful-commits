<script lang="ts">
  import Commit from "$lib/components/Commit.svelte";
  import Contributions from "$lib/components/Contributions.svelte";
  import CommitBox from "$lib/components/CommitBox.svelte";
  import WordEntry from "$lib/components/WordEntry.svelte";
  import LayoutMaker from "$lib/components/LayoutMaker.svelte";
  import { Letters } from "$lib/letters";
  import type { wordData } from "$lib/types";

  let commitDay: number = 0;
  let commitDays: (number | null)[] = [];
  let wordToWrite: string;
  let totalCommits: number[] = [];

  $: if (commitDay) {
    commitDays.push(commitDay);
    commitDays = commitDays;
  }

  $: if (totalCommits.length > 1) {
    // console.log(totalCommits);
    commitDays = totalCommits;
    commitDays = commitDays;
  }

  function getCurrentLetter(string: string) {
    let char;
    switch (string) {
      case " ":
        char = Letters["space"];
        break;
      case "?":
        char = Letters["question"];
        break;
      case "!":
        char = Letters["exclaim"];
        break;
      case ".":
        char = Letters["period"];
        break;
      default:
        char = Letters[string as keyof typeof Letters];
    }
    return char;
  }

  function getNearestMultipleOfSeven(num: number) {
    if (num % 7 === 0) {
      return num
    } else {
      return getNearestMultipleOfSeven(num+1)
    }
  }

  function getStartingSquare(width: number) {
    const startSquare = 182 - Math.floor((width*7)/2)
    return getNearestMultipleOfSeven(startSquare)
  }

  function getTotalWidth(string: string) {
    let width: number = 0;
    for (let i = 0; i < string.length; i++) {
      width += getCurrentLetter(string[i]).width;
    }
    return width;
  }

  function getWordData(string: string) {
    return string.split("").reduce((acc: wordData, val, index) => {
      let letter = getCurrentLetter(val);
      acc[index.toString() + val] = { width: letter.width, lastSquare: 0 };
      return acc;
    }, {});
  }

  function getTotalCommitsToMakeMessage(string: string) {
    let totalCommits: number = 0;
    for (let i = 0; i < string.length; i++) {
      totalCommits += getCurrentLetter(string[i]).trueCount;
    }
    return totalCommits;
  }

  $: if (wordToWrite) {

    wordToWrite = wordToWrite.toLocaleLowerCase()

    let numberOfCommits = commitDays.length;
    commitDays = [];

    let dataObj = getWordData(wordToWrite);

    const startingSquareShift = getStartingSquare(getTotalWidth(wordToWrite));

    for (let i = 0; i < wordToWrite.length; i++) {
      let currentLetter = getCurrentLetter(wordToWrite[i]);

      if (currentLetter.trueCount <= numberOfCommits) {
        let letterDates: number[] = [];
        numberOfCommits -= currentLetter.trueCount;

        currentLetter.layout.forEach((val, index) => {
          if (val) {
            if (i === 0) {
              letterDates.push(index + 1 + startingSquareShift);
            } else {
              letterDates.push(index + 1 + commitDays[commitDays.length - 1]!);
            }
          }
        });
        commitDays = commitDays.concat(letterDates);
        const dataKey = (i.toString() + wordToWrite[i]) as string;
        dataObj[dataKey as keyof typeof dataObj].lastSquare =
          commitDays[commitDays.length - 1];
      } else {
        console.log("not enough commits to write that word");
      }
    }

    let commitsUsed = commitDays[commitDays.length - 1];
    const remainderCommits: number[] = [];

    for (let i = 0; i < numberOfCommits; i++) {
      numberOfCommits -= 1;
      remainderCommits.push(i + commitsUsed!);
    }

    const earlyCommits: (number | null)[] = [];
    for (let i = startingSquareShift; i > 0; i--) {
      numberOfCommits -= 1;
      earlyCommits.push(i);
    }
    commitDays = commitDays.concat(remainderCommits);
    commitDays = earlyCommits.concat(commitDays);
  }
</script>

<h1>Welcome to gitHired</h1>

<Commit bind:commitDay bind:totalCommits />

<Contributions let:day>
  <CommitBox {day} {commitDays} />
</Contributions>
<div>{wordToWrite}</div>

<WordEntry bind:wordToWrite />

<LayoutMaker />

<style>
</style>
