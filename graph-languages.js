import { Octokit } from "https://esm.sh/octokit";
const octokit = new Octokit({
  auth: process.env.TOKEN,
});
const OWNER = "fabioVitorTavares";
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
  "#A73121",
  "#D2DE32",
  "#9D44C0",
  "#0E21A0",
  "#C63D2F",
  "#94A684",
  "#A2C579",
  "#618264",
  "#3085C3",
  "#D83F31",
  "#5B0888",
  "#D80032",
  "#B4B4B3",
  "#E55604",
  "#004225",
  "#FFB000",
  "#35A29F",
  "#FFCC70",
  "#662549",
  "#4F709C",
  "#AED2FF",
  "#A6FF96",
  "#A73121",
  "#D2DE32",
  "#9D44C0",
  "#0E21A0",
  "#C63D2F",
  "#94A684",
  "#A2C579",
  "#FFB6D9",
  "#7091F5",
  "#FFC436",
  "#279EFF",
  "#352F44",
  "#EBE76C",
  "#A8DF8E",
  "#85E6C5",
  "#F8DE22",
  "#618264",
  "#3085C3",
  "#D83F31",
  "#5B0888",
  "#D80032",
  "#B4B4B3",
  "#E55604",
  "#004225",
  "#FFB000",
  "#35A29F",
  "#FFCC70",
  "#662549",
  "#4F709C",
  "#AED2FF",
  "#A6FF96",
  "#A73121",
  "#D2DE32",
  "#9D44C0",
  "#0E21A0",
  "#C63D2F",
  "#94A684",
  "#A2C579",
  "#FFB6D9",
  "#7091F5",
  "#FFC436",
  "#279EFF",
  "#352F44",
  "#EBE76C",
  "#A8DF8E",
  "#85E6C5",
  "#F8DE22",
];

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

function getElement(id) {
  return document.getElementById(id);
}

function generateDataOfGrphLanguages(languages) {
  const tolltip = getElement("tooltip-graph-languages");

  const setOfLanguages = languages
    .map((obj) => {
      return [...Object.keys(obj.languages)];
    })
    .flat(1);

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

  const keysLanguagesArray = Object.keys(keysLanguages)
    .map((language) => {
      return { ...keysLanguages[language], language };
    })
    .sort((a, b) => (a.percent > b.percent ? -1 : 1));

  let degAcumulate = 0;
  const styleGraph = keysLanguagesArray.map((language, index) => {
    const deg = degAcumulate + language?.percent * 360;
    const partStyle = {
      degInitial: degAcumulate,
      degFinaly: deg,
      color: colors[index],
      percent: language?.percent,
      language: language.language,
    };
    degAcumulate += language?.percent * 360;
    degAcumulate = Math.min(degAcumulate, 360);
    return partStyle;
  });

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
      x: e?.offsetX - e?.target?.offsetWidth / 2,
      y: e?.offsetY - e?.target?.offsetHeight / 2,
    };
    const pointDeg = getDegWithXY(pointInGrph.x, pointInGrph.y);
    for (const s in styleGraph) {
      if (
        styleGraph[s].degInitial < pointDeg &&
        pointDeg < styleGraph[s].degFinaly
      ) {
        tolltip.textContent = `${styleGraph[s].language}   ${(
          styleGraph[s].percent * 100
        ).toFixed(2)}%`;
        tolltip.style = `
            display: block;
            background-color: ${styleGraph[s].color};
            left: ${e.pageX - 20}px;
            top: ${e.pageY - 40}px;
            `;
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
    tolltip.style = `display: none`;
    for (const s in styleGraph) {
      partsGraph[
        s
      ].style = `${partsGraph[s].style["cssText"]} transform: scale(1);`;
    }
  }

  const styleGraph2 = styleGraph.copyWithin();
  const dataLegnt = styleGraph2.slice(0, 4);

  const legend = getElement("legend-grapg-languages");

  dataLegnt.flatMap((language) => {
    const mark = document.createElement("div");
    mark.setAttribute("class", "mark-legend");
    mark.style = `background-color: ${language.color}`;

    const nameLanguage = document.createElement("span");
    nameLanguage.innerText = language.language;

    const lineLegend = document.createElement("div");
    lineLegend.setAttribute("class", "line-legend");

    lineLegend.appendChild(mark);
    lineLegend.appendChild(nameLanguage);

    legend.appendChild(lineLegend);
  });
}
function getDegWithXY(x, y) {
  const deg = (Math.atan2(x, y * -1) * 180) / Math.PI;
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

(async function main() {
  const languages = await fetchLanguages(REPOS);
  generateDataOfGrphLanguages(languages);
})();
