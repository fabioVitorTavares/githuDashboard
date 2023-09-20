import { Octokit } from "https://esm.sh/octokit";
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

const OWNER = "fabioVitorTavares";

async function fetchLanguages(repos) {
  const promises = repos?.map((repo) => {
    return octokit.request("GET /repos/{owner}/{repo}/languages", {
      owner: OWNER,
      repo,
    });
  });

  const responses = await Promise.allSettled(promises);

  const languages = responses.map((response, index) => {
    if (response?.status === "fulfilled") {
      return {
        repo: repos[index],
        languages: response?.value?.data,
      };
    }
  });

  return languages;
}

async function fetchRepo(repo) {
  // const resposeCommits = await fetch(
  //   `https://api.github.com/repos/fabioVitorTavares/${repo}/commits`
  // );
  // const dataCommits = await resposeCommits.json();

  console.log("Log line 35: ", { data });
}

(async function main() {
  const languages = await fetchLanguages(REPOS);

  generateDataOfGrphLanguages(languages);
})();

function generateDataOfGrphLanguages(languages) {
  console.log("Log line 90: ", languages);

  const setOfLanguages = languages
    .map((obj) => {
      return [...Object.keys(obj.languages)];
    })
    .flat(1);

  console.log("Log line 90: ", setOfLanguages);
  const keysLanguages = {};
  setOfLanguages.flatMap((language) => {
    if (!Object.keys(keysLanguages).includes(language)) {
      keysLanguages[language] = {
        percent: 0,
        code: 0,
        occurrence: 0,
      };
    }
  });

  languages.flatMap((obj) => {
    Object.keys(obj?.languages).flatMap((language) => {
      keysLanguages[language].code += obj?.languages[language];
      keysLanguages[language].occurrence += 1;
    });
  });

  const totalOccurrences = Object.keys(keysLanguages).reduce((a, b) => {
    return a + keysLanguages[b]?.occurrence;
  }, 0);

  Object.keys(keysLanguages).flatMap((language) => {
    keysLanguages[language].percent = Number(
      (keysLanguages[language].occurrence / totalOccurrences).toFixed(2)
    );
  });
  console.log(keysLanguages);
}
