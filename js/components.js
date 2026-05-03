/* DEVELOPER: Brian Rivera, IS117-002, Spring 2026 */

function getNavHTML(activePage) {
  return `
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand" href="index.html">
        <span class="brand-dot"></span>
        2000s Music
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mainNav">
        <ul class="navbar-nav ms-auto align-items-lg-center gap-lg-1">
          <li class="nav-item">
            <a class="nav-link ${activePage==='home'?'active':''}" href="index.html">Home</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle ${['library','player','info'].includes(activePage)?'active':''}" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Music</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item ${activePage==='library'?'active':''}" href="library.html">Song Library</a></li>
              <li><a class="dropdown-item ${activePage==='player'?'active':''}" href="player.html">Song Player</a></li>
              <li><a class="dropdown-item ${activePage==='info'?'active':''}" href="info.html">Song Info</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link ${activePage==='playlists'?'active':''}" href="playlists.html">Playlists</a>
          </li>
          <li class="nav-item">
            <a class="nav-link ${activePage==='favorites'?'active':''}" href="favorites.html">Favorites</a>
          </li>
          <li class="nav-item ms-lg-2">
            <a class="btn-ghost" href="contact.html" style="font-size:0.82rem;padding:0.45rem 1.1rem;">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>`;
}

function getFooterHTML() {
  return `
  <footer class="footer mt-auto py-4" style="background:var(--bg-2) !important;border-top:1px solid var(--border);width:100%;">
    <div class="container">
      <div class="row align-items-start gy-4">
        <div class="col-md-4">
          <div class="footer-brand mb-2">
            <span style="width:7px;height:7px;border-radius:50%;background:var(--green);display:inline-block;box-shadow:0 0 6px var(--green);"></span>
            2000s Music
          </div>
          <p class="footer-copy" style="max-width:220px;line-height:1.6;">Your home for the greatest decade in music. Curated tracks, playlists, and artist stories.</p>
        </div>
        <div class="col-6 col-md-2 offset-md-2">
          <p class="eyebrow mb-3">Navigate</p>
          <div class="d-flex flex-column gap-2">
            <a href="index.html" class="footer-link">Home</a>
            <a href="library.html" class="footer-link">Library</a>
            <a href="playlists.html" class="footer-link">Playlists</a>
            <a href="favorites.html" class="footer-link">Favorites</a>
          </div>
        </div>
        <div class="col-6 col-md-2">
          <p class="eyebrow mb-3">Music</p>
          <div class="d-flex flex-column gap-2">
            <a href="player.html" class="footer-link">Player</a>
            <a href="info.html" class="footer-link">Song Info</a>
            <a href="contact.html" class="footer-link">Contact</a>
          </div>
        </div>
        <div class="col-md-2">
          <p class="eyebrow mb-3">Legal</p>
          <div class="d-flex flex-column gap-2">
            <a href="#" class="footer-link">Terms of Use</a>
            <a href="#" class="footer-link">Privacy Policy</a>
            <a href="#" class="footer-link">DMCA</a>
          </div>
        </div>
      </div>
      <hr class="divider my-4">
      <div class="d-flex flex-wrap justify-content-between align-items-center gap-3">
        <p class="footer-copy">© 2026 2000s Music. All rights reserved.</p>
        <p class="footer-copy">IS117-002 · Educational Project · Spring 2026 · Brian Rivera</p>
      </div>
    </div>
  </footer>`;
}
