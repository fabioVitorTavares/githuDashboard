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

console.log("Log line 30: ", REPOS);

async function fetchRepo(repo) {
  const resposeCommits = await fetch(
    `https://api.github.com/repos/fabioVitorTavares/${repo}/commits`
  );
  const dataCommits = await resposeCommits.json();

  console.log("Log line 35: ", { dataCommits });
}

(function main() {
  REPOS.map((repo) => fetchRepo(repo));
})();

// fetchRepo("githubDashboard");