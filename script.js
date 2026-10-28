/* ===== CHANGE THIS FOR EVERY FESTIVAL ===== */
const OFFER = {
  festival: "Deepavali",        // festival name
  oldPrice: 3000,               // struck-through price
  price: 500,                   // current offer price
  endDate: "2026-11-05T23:59:59" // offer end (leave "" to hide countdown)
};
/* ========================================== */

const $ = (s) => document.querySelector(s);
const set = (s, v) => { const e = $(s); if (e) e.textContent = v; };

// Offer text
set("#old-price", OFFER.oldPrice);
set("#new-price", OFFER.price);
set("#offer-badge", OFFER.festival + " Special Offer");
set("#festival-tag", OFFER.festival + " Offer");
const off = Math.round((1 - OFFER.price / OFFER.oldPrice) * 100);
set("#save-text", "You save ₹" + (OFFER.oldPrice - OFFER.price) + " (" + off + "% OFF)");

// Countdown
const timer = $("#timer");
function tick() {
  if (!timer) return;
  const ms = new Date(OFFER.endDate) - new Date();
  if (!OFFER.endDate || ms <= 0) { timer.hidden = true; return; }
  const d = Math.floor(ms / 864e5), h = Math.floor(ms % 864e5 / 36e5), m = Math.floor(ms % 36e5 / 6e4);
  timer.hidden = false;
  timer.textContent = "⏳ Offer ends in " + d + "d " + h + "h " + m + "m";
}
tick(); setInterval(tick, 30000);

// Mobile menu
const menu = $("#menu"), burger = $(".burger");
burger.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
});
menu.addEventListener("click", (e) => { if (e.target.tagName === "A" && !e.target.classList.contains("ddb")) menu.classList.remove("open"); });

// Header shadow
addEventListener("scroll", () => $("header").classList.toggle("s", scrollY > 20), { passive: true });

// Scroll reveal
const io = new IntersectionObserver((es) => es.forEach((e) => {
  if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
}), { threshold: 0.15 });
document.querySelectorAll("[data-r]").forEach((el) => io.observe(el));

// Gallery + lightbox
const P = "https://images.pexels.com/photos/";
const G = [
  ["6800133", "Birthday surprise"], ["10280642", "Love and connection"], ["32315685", "Wedding journey"],
  ["6182909", "Family memories"], ["6405786", "Friends celebrating"], ["38492025", "Tender beginnings"],
  ["8770112", "A lifetime of love"], ["7972741", "Achievement"], ["5860963", "A phone full of memories"], ["196664", "A thoughtful surprise"]
];
const gal = $("#gallery"), lb = $("#lb");
G.filter(() => gal).forEach(([id, alt]) => {
  const i = new Image();
  i.loading = "lazy"; i.alt = alt;
  i.src = P + id + "/pexels-photo-" + id + ".jpeg?auto=compress&cs=tinysrgb&w=800";
  i.onclick = () => { lb.querySelector("img").src = i.src.replace("w=800", "w=1400"); lb.hidden = false; };
  gal.appendChild(i);
});
lb.onclick = () => (lb.hidden = true);
addEventListener("keydown", (e) => { if (e.key === "Escape") lb.hidden = true; });

// Hide video section if intro.mp4 is missing
$("video source")?.addEventListener("error", () => ($("#watch").hidden = true));

set("#yr", new Date().getFullYear());

// Occasions dropdown (tap / keyboard)
document.querySelectorAll(".ddb").forEach((b) => b.addEventListener("click", (e) => { e.preventDefault(); b.parentElement.classList.toggle("open"); }));