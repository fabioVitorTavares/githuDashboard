import { Octokit } from "https://esm.sh/octokit";
const octokit = new Octokit({
  auth: "",
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

function getElement(id) {
  return document.getElementById(id);
}
async function fetchData() {
  const promisesCommits = REPOS?.map((repo) => {
    return octokit.request("GET /repos/{owner}/{repo}/commits", {
      owner: OWNER,
      repo,
    });
  });
  const responsesCommits = await Promise.allSettled(promisesCommits);

  const numerosCommits = responsesCommits.flatMap((response, index) => {
    if (response?.status === "fulfilled") {
      return {
        repo: REPOS[index],
        commits: response?.value?.data,
      };
    }
  });
  return numerosCommits;
}

function getMaxCount(object) {
  return object[
    Object.keys(object).reduce((i, j) => {
      return object[i]?.count > object[j]?.count ? i : j;
    }, 0)
  ]?.count;
}

function generateLineGraph(data) {
  const commitOfMonths = {};
  data.flatMap((d) => {
    d.commits.flatMap((c) => {
      const month = new Date(c.commit.author.date)
        .toLocaleDateString()
        .replace(/..\//, "");

      commitOfMonths[`${month}|${d.repo}`] = 1;
    });
  });

  const monthCount = {};
  for (const key in commitOfMonths) {
    const monthKey = key.replace(/\|.*/g, "");

    if (monthCount[monthKey]) {
      monthCount[monthKey].count += 1;
    } else {
      monthCount[monthKey] = { count: 1 };
    }
  }

  const tooltip = getElement("tooltip-graph-lines");
  const graphLineContainer = getElement("graph-update-projects-x-months");
  const ajustX = 750 / Object.keys(monthCount).length;
  const ajustY = 350 / getMaxCount(monthCount);
  const pointsXY = [];
  Object.keys(monthCount).flatMap((monthKey, index) => {
    const y = monthCount[monthKey].count * ajustY;
    const x = index * ajustX;
    pointsXY.push({ x: x + 10, y: y + 10 });
    const point = document.createElement("div");
    point.addEventListener("mousemove", hoverPoint);
    point.addEventListener("mouseleave", outPoint);
    point.setAttribute("class", "point-graph-line");
    point.setAttribute(
      "id",
      `${monthKey}-${monthCount[monthKey].count}*${index}`
    );
    point.style = `
    left: ${x}px;
    bottom: ${y}px;`;

    const spanMonth = document.createElement("span");
    const spanCount = document.createElement("span");
    spanMonth.setAttribute("class", "span-month-graph-line");
    spanMonth.setAttribute("id", `span-month-graph-line-${index}`);
    spanCount.setAttribute("class", "span-count-graph-line");
    spanCount.setAttribute(
      "id",
      `span-count-graph-line-${monthCount[monthKey].count}`
    );

    spanMonth.innerHTML = monthKey;
    spanMonth.style = `left: ${x}px`;

    spanCount.innerHTML = index;
    spanCount.style = `top: ${380 - index * ajustY}px`;

    graphLineContainer.appendChild(point);
    graphLineContainer.appendChild(spanMonth);
    graphLineContainer.appendChild(spanCount);
  });

  const montMap = {
    "01": "Jan",
    "02": "Fev",
    "03": "Mar",
    "04": "Abr",
    "05": "Mai",
    "06": "Jun",
    "07": "Jul",
    "08": "Ago",
    "09": "Set",
    10: "Out",
    11: "Nov",
    12: "Dez",
  };

  function hoverPoint(e) {
    const infos = `Mês: ${
      montMap[e.target.id.replace(/\/.*/g, "")]
    }/${e.target.id.replace(/(.*\/..)|(-.*)/g, "")}<br>
    Projetos: ${e.target.id.replace(/(.*-)|(\*.)/g, "")}`;

    tooltip.innerHTML = `${infos}`;
    tooltip.style = `
    display: block;
    background-color: green;
    left: ${e.pageX + 10}px;
    top: ${e.pageY - 80}px;
    `;
  }
  function outPoint(e) {
    tooltip.style = `
    display: none;
    `;
  }
  pointsXY.reduce((p1, p2) => {
    if (p1 === 0) {
      return p2;
    }
    const svg = document.createElement("sgv");

    svg.innerHTML = `
      <svg width="800px" height="400px">
        <line x1="${p1.x | 0 || 0}" y1="${400 - (p1.y | 0) || 0}" x2="${
      p2.x | 0
    }" y2="${400 - (p2.y | 0)}" 
        stroke="green"></line> 
      </svg>    
    `;

    graphLineContainer.appendChild(svg);

    return p2;
  }, 0);
}

(async function main() {
  const data = await fetchData();

  generateLineGraph(data);
})();
