import { Octokit, App } from "https://esm.sh/octokit";
const octokit = new Octokit({
  auth: "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",
});

const REPOS = [
  "githubDashboard",
  "Habitus",
  "learningShellScript",
  "maratonaJavaDevDojo",
  "Animations",
  "divShootWithHtml2canvas",
  "projectWebTemplate",
  "pdfComponent",
  "guideDev",
  "products-list",
  "products-api",
  "Pagination-springboot",
  "Tasks-mobile",
  "my-portfolio",
  "endpoint-update-user",
  "Mask-components",
  "car-personalization",
  "Tasks",
  "Pagination-react",
  "send-email",
  "magic-cube",
  "Rotas-no-react",
  "Authenticated-Routes",
  "Tasks-Backend",
  "tasks-api",
  "login-page",
  "EFC1-GCC253---Complexidade-e-Projeto-de-Algoritmos",
  "de-bem-com-as-unhas",
  "ToDoList",
  "Simulacao-reacao-ao-panico-netlogo",
  "e-commerce",
  "fabioVitorTavares",
  "rocket-pay",
];

const BASE_URL = "https://api.github.com/repos/";
const OWNER = "fabioVitorTavares";

async function fetchLanguages(repos) {
  const data = await octokit.request("GET /repos/{owner}/{repo}/languages", {
    owner: OWNER,
    repo: repos[0],
  });

  console.log("Log line 51: ", data);
  // const promises = repos?.map((repo) => {
  //   return octokit.request("GET /repos/{owner}/{repo}/issues", {
  //     owner: OWNER,
  //     repo,
  //   });
  // });
  // const responses = await Promise.allSettled(promises);

  // const jsonPromises = responses.map((response) => {
  //   console.log("Log line 55: ", response);
  // });
  // const jsonResponses = await Promise.allSettled(jsonPromises);

  // jsonResponses.map((jsonObject) => console.log("Log line 50: ", jsonObject));
  // const languages = [];
}

async function fetchRepo(repo) {
  // const resposeCommits = await fetch(
  //   `https://api.github.com/repos/fabioVitorTavares/${repo}/commits`
  // );
  // const dataCommits = await resposeCommits.json();

  console.log("Log line 35: ", { data });
}

(function main() {
  fetchLanguages([REPOS[0]]);
  // REPOS.map((repo) => fetchRepo(repo));
})();

// fetchRepo("githubDashboard");
