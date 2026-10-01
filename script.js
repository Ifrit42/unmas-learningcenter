/* ============================================================
   DATA
   ============================================================ */

const categories = [
  { id:"short-course", title:"Short Course",      desc:"Kelas singkat & praktis untuk upgrade skill cepat.",     icon:"📘", color:"bg-brand-light text-brand" },
  { id:"microteaching",title:"Microteaching",     desc:"Latih kemampuan mengajar dengan sesi terstruktur.",      icon:"🎓", color:"bg-gold-light text-gold-dark" },
  { id:"bnsp",         title:"Sertifikasi BNSP",  desc:"Dapatkan sertifikasi resmi yang diakui industri.",       icon:"🏅", color:"bg-brand-light text-brand" },
];

const courses = [
  { id:1, title:"Dasar Public Speaking untuk Pengajar", category:"microteaching", instructor:"Rina Kartika", level:"Pemula",   duration:"4 jam", rating:4.8, price:"Rp 199.000", thumb:"https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&q=80" },
  { id:2, title:"Persiapan Sertifikasi BNSP Bidang IT", category:"bnsp",          instructor:"Budi Santoso", level:"Menengah", duration:"8 jam", rating:4.9, price:"Rp 749.000", thumb:"https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80" },
  { id:3, title:"UI/UX Fundamental dalam 7 Hari",       category:"short-course",  instructor:"Andi Pratama", level:"Pemula",   duration:"6 jam", rating:4.7, price:"Rp 249.000", thumb:"https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=600&q=80" },
  { id:4, title:"Microteaching: Teknik Mengajar Efektif",category:"microteaching",instructor:"Sari Dewi",    level:"Pemula",   duration:"5 jam", rating:4.8, price:"Rp 219.000", thumb:"https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80" },
  { id:5, title:"Manajemen Proyek Agile",               category:"short-course",  instructor:"Fajar Nugroho",level:"Menengah", duration:"7 jam", rating:4.6, price:"Rp 279.000", thumb:"https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80" },
  { id:6, title:"Strategi Lolos Asesmen BNSP",          category:"bnsp",          instructor:"Hendra Wijaya",level:"Lanjutan", duration:"10 jam",rating:4.9, price:"Rp 899.000", thumb:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80" },
];

const CATEGORY_COURSES = {
  "short-course": [
    { id:1, title:"UI/UX Fundamental dalam 7 Hari",      instructor:"Andi Pratama", level:"Pemula",   duration:"6 jam", rating:4.7, price:249000, thumb:"https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=600&q=80" },
    { id:2, title:"Manajemen Proyek Agile",              instructor:"Fajar Nugroho",level:"Menengah", duration:"7 jam", rating:4.6, price:279000, thumb:"https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80" },
    { id:3, title:"Digital Marketing untuk Pemula",      instructor:"Nadia Rahma",  level:"Pemula",   duration:"5 jam", rating:4.8, price:219000, thumb:"https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&q=80" },
    { id:4, title:"Excel untuk Produktivitas Kerja",     instructor:"Yoga Setiawan",level:"Pemula",   duration:"4 jam", rating:4.7, price:179000, thumb:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80" },
    { id:5, title:"Data Analytics Dasar dengan Python",  instructor:"Clara Wijaya", level:"Menengah", duration:"9 jam", rating:4.8, price:349000, thumb:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80" },
    { id:6, title:"Public Speaking Kilat",               instructor:"Rina Kartika", level:"Pemula",   duration:"3 jam", rating:4.9, price:159000, thumb:"https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&q=80" },
  ],
  "microteaching": [
    { id:1, title:"Microteaching: Teknik Mengajar Efektif",instructor:"Sari Dewi",   level:"Pemula",   duration:"5 jam", rating:4.8, price:219000, thumb:"https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80" },
    { id:2, title:"Dasar Public Speaking untuk Pengajar",  instructor:"Rina Kartika",level:"Pemula",   duration:"4 jam", rating:4.8, price:199000, thumb:"https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&q=80" },
    { id:3, title:"Perancangan RPP & Modul Ajar",          instructor:"Budi Hartono",level:"Menengah", duration:"6 jam", rating:4.7, price:259000, thumb:"https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80" },
    { id:4, title:"Asesmen & Evaluasi Pembelajaran",       instructor:"Maya Lestari",level:"Menengah", duration:"5 jam", rating:4.6, price:239000, thumb:"https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80" },
    { id:5, title:"Classroom Management Modern",           instructor:"Agus Prasetyo",level:"Pemula",  duration:"4 jam", rating:4.8, price:209000, thumb:"https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80" },
    { id:6, title:"Peer Teaching & Refleksi Praktik",      instructor:"Sari Dewi",   level:"Lanjutan", duration:"6 jam", rating:4.9, price:289000, thumb:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80" },
  ],
  "bnsp": [
    { id:1, title:"Persiapan Sertifikasi BNSP Bidang IT",  instructor:"Budi Santoso", level:"Menengah", duration:"8 jam",  rating:4.9, price:749000, thumb:"https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80" },
    { id:2, title:"Strategi Lolos Asesmen BNSP",           instructor:"Hendra Wijaya",level:"Lanjutan", duration:"10 jam", rating:4.9, price:899000, thumb:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80" },
    { id:3, title:"BNSP Skema Digital Marketing",          instructor:"Nadia Rahma",  level:"Menengah", duration:"8 jam",  rating:4.8, price:799000, thumb:"https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&q=80" },
    { id:4, title:"BNSP Skema Manajemen SDM",              instructor:"Dewi Anggraini",level:"Menengah",duration:"9 jam",  rating:4.7, price:829000, thumb:"https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80" },
    { id:5, title:"Portofolio Asesmen BNSP",               instructor:"Rian Kusuma",  level:"Pemula",   duration:"6 jam",  rating:4.8, price:699000, thumb:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80" },
    { id:6, title:"Simulasi Wawancara Asesor BNSP",        instructor:"Hendra Wijaya",level:"Lanjutan", duration:"5 jam",  rating:4.9, price:649000, thumb:"https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80" },
  ],
};

/* ============================================================
   SHARED UI (topbar, mobile menu, language) — safe on every page
   ============================================================ */

(function initSharedUI() {
  // Topbar hide on scroll
  const topbar = document.getElementById("topbar");
  if (topbar) {
    const HIDE_AT = 80;
    const SHOW_AT = 20;

    window.addEventListener("scroll", () => {
      const y = window.scrollY;
      if (y > HIDE_AT) topbar.classList.add("is-hidden");
      else if (y < SHOW_AT) topbar.classList.remove("is-hidden");
      // between 20–80 → keep current state, no flapping
    }, { passive: true });
  }

  // Mobile menu
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => mobileMenu.classList.toggle("hidden"));
  }

  // Language switcher
  const langButtons = document.querySelectorAll(".lang-btn");
  if (langButtons.length) {
    langButtons.forEach(btn => {
      btn.addEventListener("click", () => setActiveLang(btn.dataset.lang));
    });
    setActiveLang("id");
  }
  function setActiveLang(lang) {
    langButtons.forEach(b => b.classList.toggle("active", b.dataset.lang === lang));
    document.documentElement.lang = lang;
  }
})();

/* ============================================================
   HOMEPAGE
   ============================================================ */

function initHomePage() {
  const categoryGrid = document.getElementById("categoryGrid");
  const filterBar    = document.getElementById("filterBar");
  const courseGrid   = document.getElementById("courseGrid");
  const emptyState   = document.getElementById("emptyState");
  const searchForm   = document.getElementById("searchForm");
  const searchInput  = document.getElementById("searchInput");

  // Guard: not the homepage → bail out silently
  if (!categoryGrid || !filterBar || !courseGrid) return;

  // --- Categories ---
  categoryGrid.innerHTML = categories.map(c => `
    <a href="${c.id}.html" class="category-card border border-slate-200 rounded-2xl p-6 bg-white block">
      <div class="category-icon w-12 h-12 flex items-center justify-center rounded-xl text-2xl ${c.color} transition-colors">${c.icon}</div>
      <h3 class="mt-4 font-bold text-lg">${c.title}</h3>
      <p class="mt-1 text-sm text-ink-muted">${c.desc}</p>
      <span class="inline-block mt-4 text-sm font-semibold text-brand">Lihat kursus →</span>
    </a>
  `).join("");

  // --- Filter pills ---
  filterBar.innerHTML = `
    <button class="filter-pill active text-sm border border-slate-300 rounded-full px-4 py-1.5" data-filter="all">Semua</button>
    ${categories.map(c => `
      <button class="filter-pill text-sm border border-slate-300 rounded-full px-4 py-1.5" data-filter="${c.id}">${c.title}</button>
    `).join("")}
  `;

  // --- Course renderer ---
  function renderCourses(filter = "all", query = "") {
    const q = query.toLowerCase();
    const list = courses.filter(c => {
      const matchCat = filter === "all" || c.category === filter;
      const matchQ = !q || c.title.toLowerCase().includes(q) || c.instructor.toLowerCase().includes(q);
      return matchCat && matchQ;
    });

    if (!list.length) {
      courseGrid.innerHTML = "";
      emptyState.classList.remove("hidden");
      return;
    }
    emptyState.classList.add("hidden");

    courseGrid.innerHTML = list.map(c => `
      <article class="course-card bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col">
        <div class="overflow-hidden">
          <img src="${c.thumb}" alt="${c.title}" class="h-44 w-full object-cover" />
        </div>
        <div class="p-5 flex flex-col flex-1">
          <span class="text-xs font-bold text-gold-dark uppercase tracking-widest">
            ${categories.find(x => x.id === c.category)?.title || ""}
          </span>
          <h3 class="mt-1 font-bold leading-snug text-ink">${c.title}</h3>
          <p class="text-sm text-ink-muted mt-1">${c.instructor}</p>
          <div class="mt-2 flex items-center gap-3 text-xs text-ink-muted">
            <span>⭐ ${c.rating}</span><span>•</span><span>${c.duration}</span><span>•</span><span>${c.level}</span>
          </div>
          <div class="mt-auto pt-4 flex items-center justify-between border-t border-slate-100">
            <span class="font-bold text-brand">${c.price}</span>
            <a href="course-detail.html" class="text-sm font-semibold text-brand hover:text-gold-dark transition">Detail →</a>
          </div>
        </div>
      </article>
    `).join("");
  }

  renderCourses();

  // --- Interactions ---
  let currentFilter = "all";
  let currentQuery = "";

  filterBar.addEventListener("click", e => {
    const btn = e.target.closest(".filter-pill");
    if (!btn) return;
    filterBar.querySelectorAll(".filter-pill").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    renderCourses(currentFilter, currentQuery);
  });

  searchForm?.addEventListener("submit", e => {
    e.preventDefault();
    currentQuery = searchInput.value.trim();
    renderCourses(currentFilter, currentQuery);
    document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });
  });

  document.querySelectorAll(".popular-tag").forEach(tag => {
    tag.addEventListener("click", () => {
      const val = tag.textContent.trim();
      if (searchInput) searchInput.value = val;
      currentQuery = val.toLowerCase();
      renderCourses(currentFilter, currentQuery);
      document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });
    });
  });
}

/* ============================================================
   CATEGORY PAGE
   ============================================================ */

function initCategoryPage(slug) {
  const grid = document.getElementById("categoryCourseGrid");
  if (!grid) return;

  const emptyState = document.getElementById("categoryEmpty");
  const sortSelect = document.getElementById("sortSelect");
  const levelBar   = document.getElementById("levelBar");
  const countEl    = document.getElementById("courseCount");

  let state = { level: "all", sort: "popular" };

  function formatPrice(n) {
    return "Rp " + n.toLocaleString("id-ID");
  }

  function render() {
    let list = [...(CATEGORY_COURSES[slug] || [])];

    if (state.level !== "all") list = list.filter(c => c.level === state.level);

    switch (state.sort) {
      case "rating":     list.sort((a,b) => b.rating - a.rating); break;
      case "price-asc":  list.sort((a,b) => a.price - b.price);   break;
      case "price-desc": list.sort((a,b) => b.price - a.price);   break;
      default:           list.sort((a,b) => b.rating - a.rating);
    }

    if (countEl) countEl.textContent = `${list.length} kursus`;

    if (!list.length) {
      grid.innerHTML = "";
      emptyState?.classList.remove("hidden");
      return;
    }
    emptyState?.classList.add("hidden");

    grid.innerHTML = list.map(c => `
      <article class="course-card bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col">
        <div class="overflow-hidden">
          <img src="${c.thumb}" alt="${c.title}" class="h-44 w-full object-cover" />
        </div>
        <div class="p-5 flex flex-col flex-1">
          <span class="text-xs font-bold text-gold-dark uppercase tracking-widest">${c.level}</span>
          <h3 class="mt-1 font-bold leading-snug text-ink">${c.title}</h3>
          <p class="text-sm text-ink-muted mt-1">${c.instructor}</p>
          <div class="mt-2 flex items-center gap-3 text-xs text-ink-muted">
            <span>⭐ ${c.rating}</span><span>•</span><span>${c.duration}</span>
          </div>
          <div class="mt-auto pt-4 flex items-center justify-between border-t border-slate-100">
            <span class="font-bold text-brand">${formatPrice(c.price)}</span>
            <button class="text-sm font-semibold text-brand hover:text-gold-dark transition">Detail →</button>
          </div>
        </div>
      </article>
    `).join("");
  }

  sortSelect?.addEventListener("change", e => {
    state.sort = e.target.value;
    render();
  });

  levelBar?.addEventListener("click", e => {
    const btn = e.target.closest("[data-level]");
    if (!btn) return;
    levelBar.querySelectorAll("[data-level]").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    state.level = btn.dataset.level;
    render();
  });

  render();
}

/* ============================================================
   REGISTER PAGE
   ============================================================ */

function initRegisterPage() {
  const form = document.getElementById("registerForm");
  if (!form) return;

  const successBanner = document.getElementById("registerSuccess");
  const pwInput       = document.getElementById("password");
  const pwBar         = document.getElementById("pwStrengthBar");
  const pwLabel       = document.getElementById("pwStrengthLabel");
  const interestBar   = document.getElementById("interestBar");
  const terms         = document.getElementById("terms");

  const selectedInterests = new Set();

  /* ---- Show / hide password ---- */
  document.querySelectorAll("[data-toggle-password]").forEach(btn => {
    btn.addEventListener("click", () => {
      const input = document.getElementById(btn.dataset.togglePassword);
      if (!input) return;
      input.type = input.type === "password" ? "text" : "password";
    });
  });

  /* ---- Password strength meter ---- */
  pwInput?.addEventListener("input", () => {
    const v = pwInput.value;
    let score = 0;
    if (v.length >= 8) score++;
    if (/[A-Z]/.test(v)) score++;
    if (/[0-9]/.test(v)) score++;
    if (/[^A-Za-z0-9]/.test(v)) score++;

    pwBar.className = "h-full transition-all duration-300";
    if (!v) {
      pwBar.style.width = "0%";
      pwLabel.textContent = "—";
      pwLabel.className = "text-xs text-ink-muted w-16 text-right";
      return;
    }

    const map = [
      { w: "25%",  cls: "weak",   label: "Lemah",   color: "text-red-600" },
      { w: "50%",  cls: "weak",   label: "Lemah",   color: "text-red-600" },
      { w: "75%",  cls: "medium", label: "Sedang",  color: "text-gold-dark" },
      { w: "100%", cls: "strong", label: "Kuat",    color: "text-brand" },
      { w: "100%", cls: "strong", label: "Sangat kuat", color: "text-brand" },
    ];
    const m = map[Math.min(score, 4)];
    pwBar.style.width = m.w;
    pwBar.classList.add(m.cls);
    pwLabel.textContent = m.label;
    pwLabel.className = `text-xs w-16 text-right ${m.color}`;
  });

  /* ---- Interest pills ---- */
  interestBar?.addEventListener("click", e => {
    const btn = e.target.closest(".interest-pill");
    if (!btn) return;
    const val = btn.dataset.interest;
    if (selectedInterests.has(val)) {
      selectedInterests.delete(val);
      btn.classList.remove("active");
    } else {
      selectedInterests.add(val);
      btn.classList.add("active");
    }
  });

  /* ---- Validation helpers ---- */
  function setError(input, show) {
    const wrap = input.closest("div");
    const err  = wrap?.querySelector(".field-error") || input.parentElement.parentElement.querySelector(".field-error");
    input.classList.toggle("input-invalid", show);
    input.classList.toggle("input-valid", !show && input.value.trim() !== "");
    if (err) err.classList.toggle("hidden", !show);
  }

  function validateField(input) {
    const v = input.value.trim();
    switch (input.id) {
      case "fullName":
        return v.length >= 3;
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      case "phone":
        return /^[0-9]{9,15}$/.test(v.replace(/\D/g, ""));
      case "password":
        return v.length >= 8 && /[A-Za-z]/.test(v) && /[0-9]/.test(v);
      case "confirmPassword":
        return v === pwInput.value && v !== "";
      default:
        return true;
    }
  }

  /* ---- Live validation on blur ---- */
  ["fullName","email","phone","password","confirmPassword"].forEach(id => {
    const input = document.getElementById(id);
    input?.addEventListener("blur", () => setError(input, !validateField(input)));
    input?.addEventListener("input", () => {
      if (input.classList.contains("input-invalid")) setError(input, !validateField(input));
    });
  });

  /* ---- Submit ---- */
  form.addEventListener("submit", e => {
    e.preventDefault();

    const fields = ["fullName","email","phone","password","confirmPassword"].map(id => document.getElementById(id));
    let valid = true;

    fields.forEach(input => {
      const ok = validateField(input);
      setError(input, !ok);
      if (!ok) valid = false;
    });

    if (!terms.checked) {
      const err = terms.closest("div").querySelector(".field-error");
      err?.classList.remove("hidden");
      valid = false;
    } else {
      const err = terms.closest("div").querySelector(".field-error");
      err?.classList.add("hidden");
    }

    if (!valid) {
      form.querySelector(".input-invalid")?.focus();
      return;
    }

    /* No backend — simulate success */
    const payload = {
      name:  document.getElementById("fullName").value.trim(),
      email: document.getElementById("email").value.trim(),
      phone: "+62" + document.getElementById("phone").value.replace(/\D/g, ""),
      interests: [...selectedInterests],
    };
    console.log("Register payload:", payload);

    form.classList.add("hidden");
    successBanner?.classList.remove("hidden");
    successBanner?.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

/* ============================================================
   LOGIN PAGE
   ============================================================ */

function initLoginPage() {
  const form = document.getElementById("loginForm");
  if (!form) return;

  const successBanner = document.getElementById("loginSuccess");
  const errorBanner   = document.getElementById("loginError");
  const emailInput    = document.getElementById("loginEmail");
  const pwInput       = document.getElementById("loginPassword");
  const rememberMe    = document.getElementById("rememberMe");

  /* ---- Show / hide password (shared logic) ---- */
  document.querySelectorAll("[data-toggle-password]").forEach(btn => {
    btn.addEventListener("click", () => {
      const input = document.getElementById(btn.dataset.togglePassword);
      if (!input) return;
      input.type = input.type === "password" ? "text" : "password";
    });
  });

  /* ---- Validation helpers ---- */
  function setError(input, show) {
    const wrap = input.closest("div");
    const err  = wrap?.querySelector(".field-error");
    input.classList.toggle("input-invalid", show);
    input.classList.toggle("input-valid", !show && input.value.trim() !== "");
    if (err) err.classList.toggle("hidden", !show);
  }

  function validateEmail(input) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim());
  }

  function validatePassword(input) {
    return input.value.length >= 8;
  }

  /* ---- Live validation ---- */
  emailInput?.addEventListener("blur", () => setError(emailInput, !validateEmail(emailInput)));
  emailInput?.addEventListener("input", () => {
    if (emailInput.classList.contains("input-invalid")) setError(emailInput, !validateEmail(emailInput));
  });

  pwInput?.addEventListener("blur", () => setError(pwInput, !validatePassword(pwInput)));
  pwInput?.addEventListener("input", () => {
    if (pwInput.classList.contains("input-invalid")) setError(pwInput, !validatePassword(pwInput));
  });

  /* ---- Optional: restore remembered email ---- */
  const savedEmail = localStorage.getItem("unmas_remember_email");
  if (savedEmail && emailInput) {
    emailInput.value = savedEmail;
    if (rememberMe) rememberMe.checked = true;
  }

  /* ---- Submit ---- */
  form.addEventListener("submit", e => {
    e.preventDefault();

    // Hide previous banners
    successBanner?.classList.add("hidden");
    errorBanner?.classList.add("hidden");

    const emailOk = validateEmail(emailInput);
    const pwOk    = validatePassword(pwInput);

    setError(emailInput, !emailOk);
    setError(pwInput, !pwOk);

    if (!emailOk || !pwOk) {
      form.querySelector(".input-invalid")?.focus();
      return;
    }

    // Demo credentials check
    // Since there's no backend, "anything valid" logs in.
    // Change this block later to a real fetch() call.
    const credentials = {
      email: emailInput.value.trim(),
      password: pwInput.value,
      remember: rememberMe?.checked || false,
    };
    console.log("Login payload:", credentials);

    // Remember me
    if (credentials.remember) {
      localStorage.setItem("unmas_remember_email", credentials.email);
    } else {
      localStorage.removeItem("unmas_remember_email");
    }

    // Simulate success
    form.classList.add("opacity-50", "pointer-events-none");
    successBanner?.classList.remove("hidden");
    successBanner?.scrollIntoView({ behavior: "smooth", block: "center" });

    // Redirect after a short delay (demo)
    setTimeout(() => {
      // window.location.href = "index.html"; // uncomment when ready
    }, 1500);
  });
}

/* ============================================================
   COURSE DETAIL PAGE
   ============================================================ */

function initCourseDetailPage() {
  const curriculum = document.getElementById("curriculum");
  if (!curriculum) return;

  /* ---- Accordion: rotate chevron when open ---- */
  const items = curriculum.querySelectorAll(".curriculum-item");
  items.forEach(item => {
    const chev = item.querySelector(".chev");
    const sync = () => {
      if (!chev) return;
      chev.style.transform = item.open ? "rotate(90deg)" : "rotate(0deg)";
    };
    item.addEventListener("toggle", sync);
    sync();
  });

  /* ---- Animate related-course card hover (already in style.css) ---- */

  /* ---- Optional: scroll spy for "share" / "copy link" ---- */
  document.querySelectorAll('[aria-label="Copy link"]').forEach(btn => {
    btn.addEventListener("click", () => {
      navigator.clipboard?.writeText(window.location.href);
      btn.classList.add("text-brand", "border-brand");
      setTimeout(() => btn.classList.remove("text-brand", "border-brand"), 1200);
    });
  });
}
