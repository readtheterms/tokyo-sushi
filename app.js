/* ============================================================
   TOKYO SUSHI — PAGE BUILDER
   This file reads menu-data.js and fills in the website.
   You do NOT need to edit this file. Edit menu-data.js instead.
   ============================================================ */

(function () {
  // Small helper to safely show text
  function esc(s) {
    return String(s).replace(/[&<>"]/g, c => (
      { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]
    ));
  }

  // ---- Restaurant name as a two-tone wordmark (last word in red) ----
  setWordmark("brand-name", RESTAURANT.name);
  setWordmark("hero-name", RESTAURANT.name);
  setWordmark("footer-name", RESTAURANT.name);

  // ---- Tagline / address ----
  setText("hero-tagline", RESTAURANT.tagline);
  setText("footer-address", RESTAURANT.address);
  setText("address-text", RESTAURANT.address);

  // ---- Phone (shown as plain tappable text in the nav and hero) ----
  const telHref = "tel:" + RESTAURANT.phone.replace(/[^0-9+]/g, "");
  ["nav-call", "hero-phone"].forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.textContent = RESTAURANT.phone; el.setAttribute("href", telHref); }
  });
  const phoneLink = document.getElementById("phone-link");
  if (phoneLink) { phoneLink.textContent = RESTAURANT.phone; phoneLink.setAttribute("href", telHref); }

  // ---- Social links ----
  buildSocials("socials-root");
  buildSocials("footer-socials");

  // ---- Year in footer ----
  setText("year", new Date().getFullYear());

  // ---- Build the menu ----
  const root = document.getElementById("menu-root");
  if (root) {
    root.innerHTML = MENU.map(section => {
      const items = section.items.map(it => `
        <div class="menu-item">
          <div class="menu-item-main">
            <div class="menu-item-name">${esc(it.name)}</div>
            ${it.desc ? `<div class="menu-item-desc">${esc(it.desc)}</div>` : ""}
          </div>
          ${it.price ? `<div class="menu-item-price">${esc(it.price)}</div>` : ""}
        </div>`).join("");
      return `
        <div class="menu-section${section.wide ? " wide" : ""}">
          <h3>${esc(section.title)}</h3>
          ${section.note ? `<p class="menu-note">${esc(section.note)}</p>` : ""}
          <div class="menu-items">${items}</div>
        </div>`;
    }).join("");
  }

  // ---- Build the hours (and highlight today) ----
  const hoursRoot = document.getElementById("hours-root");
  if (hoursRoot) {
    const todayName = new Date().toLocaleDateString("en-US", { weekday: "long" });
    hoursRoot.innerHTML = RESTAURANT.hours.map(h => {
      const isToday = h.day === todayName ? " class=\"today\"" : "";
      return `<tr${isToday}><td>${esc(h.day)}</td><td>${esc(h.time)}</td></tr>`;
    }).join("");
  }

  // ---- Helpers ----
  function setWordmark(id, name) {
    const el = document.getElementById(id);
    if (!el) return;
    const words = String(name).trim().split(/\s+/);
    const last = words.pop();
    const lead = words.join(" ");
    el.innerHTML = (lead ? esc(lead) + " " : "") + `<span class="accent">${esc(last)}</span>`;
  }

  function buildSocials(id) {
    const el = document.getElementById(id);
    if (!el) return;
    const links = [];
    if (RESTAURANT.instagram) {
      links.push(`<a href="${esc(RESTAURANT.instagram)}" target="_blank" rel="noopener">Instagram${
        RESTAURANT.instagramHandle ? " " + esc(RESTAURANT.instagramHandle) : ""}</a>`);
    }
    if (RESTAURANT.yelp) {
      links.push(`<a href="${esc(RESTAURANT.yelp)}" target="_blank" rel="noopener">Yelp</a>`);
    }
    el.innerHTML = links.join("");
  }

  function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }
})();
