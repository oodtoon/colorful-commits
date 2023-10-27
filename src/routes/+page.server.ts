import { GITHUB_KEY } from "$env/static/private";

export async function load() {
  let data: any[] = []
  let page = 1;
  let pageData
  // do {
  //   const response = await fetch(
  //     `https://api.github.com/repos/oodtoon/colorful-commits/commits?per_page=100&page=${page++}`, {
  //       method: "GET",
  //       headers: {
  //         Authorization: `beaerer ${GITHUB_KEY}`
  //       }
  //     }
  //   );
    
  //   pageData = await response.json();
  //   data = data.concat(pageData)

  // } while (pageData.length > 0);
  // let branchShas = data.map((branch: any) => branch.commit.sha)
  // console.log({ data });
  // console.log("new")
  // let dataData = data.map((d) => d.commit.author.date)
  // console.log(dataData)

  // return {
  //   dates: dataData
  // }
  return {
    dates: [1, 2, 3]
  }
}

// async function getCommitDates(sha: string) {
//   let response = await fetch(
//     `https://api.github.com/repos/oodtoon/chess/commits/${sha}`
//   );
//   let data = await response.json();
//   console.log({ data });
// }
