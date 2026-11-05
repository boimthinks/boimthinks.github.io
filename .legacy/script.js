/* ===== TAB NAVIGATION ===== */
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});

/* ===== CONTRIBUTION GRAPH ===== */
function generateContribGraph() {
  const container = document.getElementById('contribGraph');
  const totalCells = 52 * 7;
  const levels = ['l0', 'l1', 'l2', 'l3', 'l4'];
  const weights = [0.45, 0.25, 0.15, 0.10, 0.05];

  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell ' + weightedRandom(levels, weights);
    container.appendChild(cell);
  }
}

function weightedRandom(items, weights) {
  const rand = Math.random();
  let cumulative = 0;
  for (let i = 0; i < items.length; i++) {
    cumulative += weights[i];
    if (rand < cumulative) return items[i];
  }
  return items[items.length - 1];
}

generateContribGraph();

/* ===== REPOSITORY DATA ===== */
const repos = [
  {
    name: 'pireki',
    desc: 'Website Pireki',
    lang: 'Astro',
    color: '#ff5a03',
    stars: 0,
    forks: 0
  },
  {
    name: 'lincah',
    desc: 'Website Travel Palembang',
    lang: 'Astro',
    color: '#ff5a03',
    stars: 0,
    forks: 0
  },
  {
    name: 'sriwijayagrafika',
    desc: 'Website Sriwijaya Grafika',
    lang: 'Astro',
    color: '#ff5a03',
    stars: 1,
    forks: 0
  },
  {
    name: 'docov3',
    desc: '',
    lang: 'TypeScript',
    color: '#3178c6',
    stars: 0,
    forks: 0
  },
  {
    name: 'EasyWebPAuto',
    desc: 'Alat otomasi sederhana berbasis Python untuk mengonversi gambar ke WebP secara masal',
    lang: 'Python',
    color: '#3572A5',
    stars: 0,
    forks: 0
  }
];

function renderRepos() {
  const grid = document.getElementById('repoGrid');
  repos.forEach(repo => {
    const card = document.createElement('div');
    card.className = 'repo-card';
    card.innerHTML = `
      <h3><i class="fa-regular fa-folder"></i>${repo.name}</h3>
      <p>${repo.desc}</p>
      <div class="repo-meta">
        <span>
          <span class="lang-color" style="background:${repo.color}"></span>
          ${repo.lang}
        </span>
        <span><i class="fa-regular fa-star"></i> ${repo.stars}</span>
        <span><i class="fa-solid fa-code-fork"></i> ${repo.forks}</span>
      </div>
    `;
    grid.appendChild(card);
  });
}

renderRepos();

