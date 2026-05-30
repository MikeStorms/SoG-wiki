// Shared navigation for the Willowshore Wiki
// Called on every page: renderNav(currentPage)

const NAV = [
  {
    section: "De Wereld",
    items: [
      { id: "golarion",   label: "Golarion",       href: "golarion.html" },
      { id: "tian-xia",   label: "Tian Xia",        href: "tian-xia.html" },
    ]
  },
  {
    section: "De Regio",
    items: [
      { id: "lung-wa",    label: "Het Keizerrijk Lung Wa", href: "lung-wa.html" },
      { id: "shenmen",    label: "Shenmen",          href: "shenmen.html" },
      { id: "willowshore",label: "Willowshore",      href: "willowshore.html" },
    ]
  },
  {
    section: "Geloof & Filosofie",
    items: [
      { id: "religies",   label: "Religies van Shenmen", href: "religies.html" },
      { id: "sangpotshi", label: "Sangpotshi",       href: "sangpotshi.html" },
      { id: "kami",       label: "Kami & Geesten",   href: "kami.html" },
    ]
  },
  {
    section: "Cultuur & Praktisch",
    items: [
      { id: "cultuur",    label: "Cultuur & Dagelijks Leven", href: "cultuur.html" },
      { id: "talen",      label: "Talen",             href: "talen.html" },
      { id: "cold-iron",  label: "Cold Iron & Wapens",href: "cold-iron.html" },
    ]
  },
];

function renderNav(currentId) {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;

  let html = `
    <div class="sidebar-header">
      <div class="sidebar-logo">Spelersgids</div>
      <div class="sidebar-title">De Annalen van Willowshore</div>
      <div class="sidebar-subtitle">Season of Ghosts — Pathfinder 2e</div>
    </div>
    <div class="sidebar-divider"></div>
    <nav>
      <div class="nav-section">
        <a href="index.html" class="nav-item${currentId === 'home' ? ' active' : ''}">◈ Startpagina</a>
      </div>
  `;

  for (const section of NAV) {
    html += `<div class="nav-section"><div class="nav-section-title">${section.section}</div>`;
    for (const item of section.items) {
      const active = item.id === currentId ? ' active' : '';
      html += `<a href="${item.href}" class="nav-item${active}">${item.label}</a>`;
    }
    html += `</div>`;
  }

  html += `</nav>`;
  sidebar.innerHTML = html;
}

function renderFooter() {
  const footer = document.querySelector('footer');
  if (footer) {
    footer.innerHTML = `Spelersgids voor <em>Season of Ghosts</em> (Pathfinder 2e). Inhoud gebaseerd op Paizo's gepubliceerde materialen. Enkel voor persoonlijk gebruik.`;
  }
}
