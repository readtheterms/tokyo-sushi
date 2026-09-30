/* Shared behavior for every page: mobile menu, today's hours, footer year. */
(function () {
  // ---- Mobile hamburger menu ----
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  if (toggle && nav) {
    const setOpen = (open) => {
      toggle.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("open", open);
    };
    toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
    nav.addEventListener("click", (e) => { if (e.target.closest("a")) setOpen(false); });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && nav.classList.contains("open")) { setOpen(false); toggle.focus(); }
    });
    window.matchMedia("(min-width: 860px)").addEventListener("change", (e) => { if (e.matches) setOpen(false); });
  }

  // ---- Highlight today's row in any hours table ----
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
  document.querySelectorAll("[data-day]").forEach((row) => {
    if (row.dataset.day === today) row.classList.add("today");
  });

  // ---- Current year in the footer ----
  document.querySelectorAll("[data-year]").forEach((el) => { el.textContent = new Date().getFullYear(); });
})();
