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
