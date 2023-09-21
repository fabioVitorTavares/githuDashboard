import { Octokit } from "https://esm.sh/octokit";
const octokit = new Octokit({
  auth: "",
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

const colors = [
  "blue",
  "yellow",
  "fuchsia",
  "red",
  "gray",
  "blueviolet",
  "chartreuse",
  "crimson",
  "darkgreen",
  "darkturquoise",
  "indigo",
  "orangered",
  "blue",
  "yellow",
  "fuchsia",
  "red",
  "gray",
  "blueviolet",
  "chartreuse",
  "crimson",
  "darkgreen",
  "darkturquoise",
  "indigo",
  "orangered",
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
function getElement(id) {
  return document.getElementById(id);
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
      (keysLanguages[language].occurrence / totalOccurrences).toFixed(4)
    );
  });

  let degAcumulate = 0;
  const styleGraph = Object.keys(keysLanguages).map((language, index) => {
    const deg = degAcumulate + keysLanguages[language]?.percent * 360;
    const partStyle = {
      degInitial: degAcumulate,
      degFinaly: deg,
      color: colors[index],
    };
    degAcumulate += keysLanguages[language]?.percent * 360;
    degAcumulate = Math.min(degAcumulate, 360);
    return partStyle;
  });

  console.log("Log line 169: ", styleGraph);

  const graphContainer = getElement("graph-languages-container");

  styleGraph.flatMap((graphStyle) => {
    const partGrph = document.createElement("div");
    partGrph.setAttribute("class", "part-graph");
    partGrph.style = getStyle(graphStyle);
    partGrph.addEventListener("mousemove", hoverGrap);
    graphContainer.appendChild(partGrph);
  });
}

function hoverGrap(e) {
  // this.style += " transform: scale(1.2);";
  console.log("Log line 179: ", e);
}

function getStyle({ degInitial, degFinaly, color }) {
  return `background: conic-gradient(
    #FFF0 0deg, #FFF0 ${degInitial}deg,
    ${color} ${degInitial}deg, ${color} ${degFinaly}deg,
    #FFF0 ${degFinaly}deg, #FFF0 360deg)`;
}
