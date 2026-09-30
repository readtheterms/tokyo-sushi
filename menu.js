/* Builds the tabbed menu on menu.html from menu-data.js. No need to edit this file. */
(function () {
  const root = document.getElementById("menu-app");
  if (!root || typeof MENU === "undefined") return;

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
  ));

  const price = (p) => p
    ? `<span class="price">$${esc(p)}</span>`
    : `<span class="price price-tbd" title="Please call for current price">—</span>`;

  const item = (it) => `
    <li class="menu-item">
      <div class="item-head">
        <span class="item-name">${esc(it.name)}</span>
        <span class="leader" aria-hidden="true"></span>
        ${price(it.price)}
      </div>
      ${it.desc ? `<p class="item-desc">${esc(it.desc)}</p>` : ""}
    </li>`;

  const group = (g) => `
    <div class="menu-group">
      ${g.title ? `<h3>${esc(g.title)}</h3>` : ""}
      ${g.note ? `<p class="group-note">${esc(g.note)}</p>` : ""}
      <ul class="menu-list">${g.items.map(item).join("")}</ul>
    </div>`;

  const tabs = MENU.map((t) => `
    <button type="button" class="menu-tab" role="tab" id="tab-${t.id}"
      aria-controls="panel-${t.id}" aria-selected="false" tabindex="-1">${esc(t.title)}</button>`).join("");

  const panels = MENU.map((t) => `
    <section class="menu-panel" role="tabpanel" id="panel-${t.id}" aria-labelledby="tab-${t.id}" tabindex="0" hidden>
      <h2 class="panel-title">${esc(t.title)}</h2>
      ${t.note ? `<p class="panel-note">${esc(t.note)}</p>` : ""}
      ${t.groups.map(group).join("")}
    </section>`).join("");

  root.innerHTML = `
    <div class="menu-tabs-wrap">
      <div class="menu-tabs container" role="tablist" aria-label="Menu categories">${tabs}</div>
    </div>
    <div class="menu-panels container">${panels}</div>`;

  const tablist = root.querySelector('[role="tablist"]');
  const tabEls = [...root.querySelectorAll('[role="tab"]')];

  function select(index, { focus = false, updateHash = true } = {}) {
    tabEls.forEach((tab, i) => {
      const on = i === index;
      tab.setAttribute("aria-selected", String(on));
      tab.tabIndex = on ? 0 : -1;
      document.getElementById("panel-" + MENU[i].id).hidden = !on;
    });
    const tab = tabEls[index];
    // Keep the selected tab visible in the scrollable tab bar.
    tablist.scrollLeft = tab.offsetLeft - (tablist.clientWidth - tab.offsetWidth) / 2;
    if (focus) tab.focus();
    if (updateHash) history.replaceState(null, "", "#" + MENU[index].id);
  }

  const indexFromHash = () => {
    const i = MENU.findIndex((t) => t.id === location.hash.slice(1));
    return i < 0 ? 0 : i;
  };

  tablist.addEventListener("click", (e) => {
    const tab = e.target.closest('[role="tab"]');
    if (!tab) return;
    select(tabEls.indexOf(tab));
    // If the reader had scrolled deep into a long tab, jump back to the top of the menu.
    if (root.getBoundingClientRect().top < 0) root.scrollIntoView();
  });

  tablist.addEventListener("keydown", (e) => {
    const current = tabEls.indexOf(document.activeElement);
    if (current < 0) return;
    const last = tabEls.length - 1;
    const next = { ArrowRight: current + 1, ArrowLeft: current - 1, Home: 0, End: last }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    select(next > last ? 0 : next < 0 ? last : next, { focus: true });
  });

  window.addEventListener("hashchange", () => select(indexFromHash(), { updateHash: false }));
  select(indexFromHash(), { updateHash: false });
})();
