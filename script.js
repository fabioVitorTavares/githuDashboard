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

const mapDegTag = {
  1: 0.0175,
  2: 0.0349,
  3: 0.0524,
  4: 0.0699,
  5: 0.0875,
  6: 0.1051,
  7: 0.1228,
  8: 0.1405,
  9: 0.1584,
  10: 0.1763,
  11: 0.1944,
  12: 0.2126,
  13: 0.2309,
  14: 0.2493,
  15: 0.2679,
  16: 0.2867,
  17: 0.3057,
  18: 0.3249,
  19: 0.3443,
  20: 0.364,
  21: 0.3839,
  22: 0.404,
  23: 0.4245,
  24: 0.4452,
  25: 0.4663,
  26: 0.4877,
  27: 0.5095,
  28: 0.5317,
  29: 0.5543,
  30: 0.5774,
  31: 0.6009,
  32: 0.6249,
  33: 0.6494,
  34: 0.6745,
  35: 0.7002,
  36: 0.7265,
  37: 0.7536,
  38: 0.7813,
  39: 0.8098,
  40: 0.8391,
  41: 0.8693,
  42: 0.9004,
  43: 0.9325,
  44: 0.9657,
  45: 1,
  46: 1.0355,
  47: 1.0724,
  48: 1.1106,
  49: 1.1504,
  50: 1.1918,
  51: 1.2349,
  52: 1.2799,
  53: 1.327,
  54: 1.3764,
  55: 1.4281,
  56: 1.4826,
  57: 1.5399,
  58: 1.6003,
  59: 1.6643,
  60: 1.7321,
  61: 1.804,
  62: 1.8807,
  63: 1.9626,
  64: 2.0503,
  65: 2.1445,
  66: 2.246,
  67: 2.3559,
  68: 2.4751,
  69: 2.6051,
  70: 2.7475,
  71: 2.9042,
  72: 3.0777,
  73: 3.2709,
  74: 3.4874,
  75: 3.7321,
  76: 4.0108,
  77: 4.3315,
  78: 4.7046,
  79: 5.1446,
  80: 5.6713,
  81: 6.3138,
  82: 7.1154,
  83: 8.1443,
  84: 9.5144,
  85: 11.4301,
  86: 14.3007,
  87: 19.0811,
  88: 28.6363,
  89: 57.29,
};

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

  const partsGraph = [];
  styleGraph.flatMap((graphStyle, index) => {
    const partGrph = document.createElement("div");
    partGrph.setAttribute("class", "part-graph");
    partGrph.setAttribute("id", `part-graph-${index}`);
    partGrph.style = getStyle(graphStyle);
    partGrph.addEventListener("mousemove", hoverGraph);
    partGrph.addEventListener("mouseleave", outGraph);
    graphContainer.appendChild(partGrph);
    partsGraph.push(partGrph);
  });
  function hoverGraph(e) {
    const pointInGrph = {
      x: e?.pageX - e?.target?.offsetLeft - 200,
      y: (e?.pageY - e?.target?.offsetTop - 200) * -1,
    };
    const pointDeg = getDegWithXY(pointInGrph.x, pointInGrph.y);
    for (const s in styleGraph) {
      const enter = styleGraph[s].degInitial < pointDeg;
      pointDeg < styleGraph[s].degFinaly;
      if (
        styleGraph[s].degInitial < pointDeg &&
        pointDeg < styleGraph[s].degFinaly
      ) {
        partsGraph[
          s
        ].style = `${partsGraph[s].style["cssText"]} transform: scale(1.15);`;
      } else {
        partsGraph[
          s
        ].style = `${partsGraph[s].style["cssText"]} transform: scale(1);`;
      }
    }
  }
  function outGraph(e) {
    for (const s in styleGraph) {
      partsGraph[
        s
      ].style = `${partsGraph[s].style["cssText"]} transform: scale(1);`;
    }
  }
}
function getDegWithXY(x, y) {
  const deg = (Math.atan2(x, y) * 180) / Math.PI;
  if (deg < 0) {
    return 360 + deg;
  }
  return deg;
}

function getStyle({ degInitial, degFinaly, color }) {
  return `background: conic-gradient(
    #FFF0 0deg, #FFF0 ${degInitial}deg,
    ${color} ${degInitial}deg, ${color} ${degFinaly}deg,
    #FFF0 ${degFinaly}deg, #FFF0 360deg)`;
}
