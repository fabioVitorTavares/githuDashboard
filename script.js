import { Octokit, App } from "https://esm.sh/octokit";
const octokit = new Octokit({
  auth: "",
});

async function fetchData() {
  const { data } = await octokit.request("GET /repos/{owner}/{repo}/commits", {
    owner: "fabioVitorTavares",
    repo: "githubDashboard",
  });

  console.log("Log line 15: ", data);
}
fetchData();
// }
// async function fetchData() {
//   fetch("https://api.github.com/repos/fabioVitorTavares/githubDashboard").then(
//     (value) => {
//       console.log("Log line 17: ", value);
//       value.json().then((json) => {
//         console.log("Log line 19: ", json);
//       });
//     }
//   );
// }

// async function fetchRepo(repo) {
//   const response = await fetch(
//     `https://api.github.com/repos/fabioVitorTavares/${repo}`
//   );
//   const data = await response.json();
//   console.log("Log line 29: ", { data });

//   const resposeCommits = await fetch(data?.commits_url);
//   const dataCommits = await resposeCommits.json();

//   console.log("Log line 35: ", { dataCommits });
// }

// fetchRepo("githubDashboard");
