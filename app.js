// =========================================================
// 1. PUBLICATIONS & SPRINGER BOOKS DATASET
// =========================================================
const PUBLICATIONS = [
  {
    id: "biocat2025",
    year: 2025,
    type: "Journal Article",
    category: "rice",
    title: "Integrated Management of Hexavalent Chromium Stress and Blast Pathogenesis in Rice using Exiguobacterium indicum OMCW-10",
    authors: "Naik, A. K. D., & Sahu, B. B. et al.",
    journal: "Biocatalysis and Agricultural Biotechnology",
    doi: "https://scholar.google.com/citations?user=HiRg_msAAAAJ&hl=en",
    bibtex: `@article{sahu2025exiguobacterium,
  title={Integrated Management of Hexavalent Chromium Stress and Blast Pathogenesis in Rice using Exiguobacterium indicum OMCW-10},
  author={Naik, Arya Kumar Dibyananda and Sahu, Binod Bihari},
  journal={Biocatalysis and Agricultural Biotechnology},
  year={2025},
  publisher={Elsevier}
}`
  },
  {
    id: "parween2022",
    year: 2022,
    type: "Journal Article",
    category: "nhr",
    title: "An Arabidopsis nonhost resistance gene, IMPORTIN ALPHA 2 provides immunity against rice sheath blight pathogen, Rhizoctonia solani",
    authors: "Parween, D., & Sahu, B. B.",
    journal: "Current Research in Microbial Sciences, 3, 100109",
    doi: "https://doi.org/10.1016/j.crmicr.2022.100109",
    bibtex: `@article{parween2022arabidopsis,
  title={An Arabidopsis nonhost resistance gene, IMPORTIN ALPHA 2 provides immunity against rice sheath blight pathogen, Rhizoctonia solani},
  author={Parween, Daraksha and Sahu, Binod Bihari},
  journal={Current Research in Microbial Sciences},
  volume={3},
  pages={100109},
  year={2022},
  doi={10.1016/j.crmicr.2022.100109}
}`
  },
  {
    id: "plantstress2022",
    year: 2022,
    type: "Review Article",
    category: "rice",
    title: "The Impact of Microbes in Plant Immunity and Priming Induced Inheritance: A Sustainable Approach for Crop Protection",
    authors: "Mohapatra, R., & Sahu, B. B. et al.",
    journal: "Plant Stress (Elsevier)",
    doi: "https://scholar.google.com/citations?user=HiRg_msAAAAJ&hl=en",
    bibtex: `@article{sahu2022priming,
  title={The Impact of Microbes in Plant Immunity and Priming Induced Inheritance: A Sustainable Approach for Crop Protection},
  author={Sahu, Binod Bihari and others},
  journal={Plant Stress},
  year={2022},
  publisher={Elsevier}
}`
  },
  {
    id: "tpj2021",
    year: 2021,
    type: "Journal Article",
    category: "nhr",
    title: "Arabidopsis Nonhost Resistance PSS30 Gene Enhances Broad-spectrum Disease Resistance in the Soybean Cultivar Williams 82",
    authors: "Sahu, B. B., Kambakam, S., Ngaki, M. N., et al. & Bhattacharyya, M. K.",
    journal: "The Plant Journal, 107(5), 1432–1446",
    doi: "https://doi.org/10.1111/tpj.15392",
    bibtex: `@article{sahu2021arabidopsis,
  title={Arabidopsis Nonhost Resistance PSS30 Gene Enhances Broad-spectrum Disease Resistance in the Soybean Cultivar Williams 82},
  author={Sahu, Binod Bihari and Kambakam, Sekhar and Ngaki, Micheline N and Bhattacharyya, Madan K},
  journal={The Plant Journal},
  volume={107},
  number={5},
  pages={1432--1446},
  year={2021},
  doi={10.1111/tpj.15392}
}`
  },
  {
    id: "springerPanicle2021",
    year: 2021,
    type: "Springer Monograph",
    category: "book",
    title: "Panicle Architecture of Rice and its Relationship with Grain Filling",
    authors: "Mohapatra, P. K., & Sahu, B. B.",
    journal: "Springer International Publishing (ISBN: 978-3-030-67897-5)",
    doi: "https://doi.org/10.1007/978-3-030-67897-5",
    bibtex: `@book{mohapatra2021panicle,
  title={Panicle Architecture of Rice and its Relationship with Grain Filling},
  author={Mohapatra, Pravat Kumar and Sahu, Binod Bihari},
  year={2021},
  publisher={Springer International Publishing},
  doi={10.1007/978-3-030-67897-5}
}`
  },
  {
    id: "springerOmics2021",
    year: 2021,
    type: "Edited Volume",
    category: "book",
    title: "Omics Science for Rhizosphere Biology",
    authors: "Pudake, R. N., Sahu, B. B., Kumari, M., & Sharma, A. K. (Eds.)",
    journal: "Springer Singapore (Rhizosphere Biology Series)",
    doi: "https://doi.org/10.1007/978-981-16-0889-6",
    bibtex: `@book{pudake2021omics,
  title={Omics Science for Rhizosphere Biology},
  editor={Pudake, R N and Sahu, Binod Bihari and Kumari, Maya and Sharma, Anil K},
  year={2021},
  publisher={Springer Singapore},
  doi={10.1007/978-981-16-0889-6}
}`
  },
  {
    id: "plantphys2018",
    year: 2018,
    type: "Journal Article",
    category: "nhr",
    title: "Arabidopsis novel Glycine-rich plasma membrane PSS1 protein enhances disease resistance in Transgenic Soybean plants",
    authors: "Wang, B., Sumit, R., Sahu, B. B., Ngaki, M. N., Srivastava, S. K., Yang, Y., Swaminathan, S., & Bhattacharyya, M. K.",
    journal: "Plant Physiology, 176(1), 865–878",
    doi: "https://doi.org/10.1104/pp.16.01982",
    bibtex: `@article{wang2018arabidopsis,
  title={Arabidopsis novel Glycine-rich plasma membrane PSS1 protein enhances disease resistance in Transgenic Soybean plants},
  author={Wang, Bing and Sumit, R and Sahu, Binod Bihari and Ngaki, Micheline N and Bhattacharyya, Madan K},
  journal={Plant Physiology},
  volume={176},
  number={1},
  pages={865--878},
  year={2018},
  doi={10.1104/pp.16.01982}
}`
  },
  {
    id: "plos2017",
    year: 2017,
    type: "Journal Article",
    category: "nhr",
    title: "Investigation of the Fusarium virguliforme Transcriptomes Induced during Infection of Soybean Roots Suggests that Enzymes with Hydrolytic Activities Could Play a Major Role in Root Necrosis",
    authors: "Sahu, B. B., Baumbach, J. L., Singh, P., Srivastava, S. K., Yi, X., & Bhattacharyya, M. K.",
    journal: "PLOS ONE, 12(1), e0169963",
    doi: "https://doi.org/10.1371/journal.pone.0169963",
    bibtex: `@article{sahu2017investigation,
  title={Investigation of the Fusarium virguliforme Transcriptomes Induced during Infection of Soybean Roots},
  author={Sahu, Binod Bihari and Baumbach, Jordan L and Singh, P and Bhattacharyya, Madan K},
  journal={PLOS ONE},
  volume={12},
  number={1},
  pages={e0169963},
  year={2017},
  doi={10.1371/journal.pone.0169963}
}`
  },
  {
    id: "bmcgen2012",
    year: 2012,
    type: "Methods / Genomics",
    category: "nhr",
    title: "Sequence based polymorphic (SBP) marker technology for targeted genomic regions: its application in generating a molecular map of the Arabidopsis thaliana genome",
    authors: "Sahu, B. B., Sumit, R., Srivastava, S. K., & Bhattacharyya, M. K.",
    journal: "BMC Genomics, 13(1), 20",
    doi: "https://doi.org/10.1186/1471-2164-13-20",
    bibtex: `@article{sahu2012sequence,
  title={Sequence based polymorphic (SBP) marker technology for targeted genomic regions: its application in generating a molecular map of the Arabidopsis thaliana genome},
  author={Sahu, Binod Bihari and Sumit, R and Srivastava, SK and Bhattacharyya, Madan K},
  journal={BMC Genomics},
  volume={13},
  number={1},
  pages={20},
  year={2012},
  doi={10.1186/1471-2164-13-20}
}`
  },
  {
    id: "bmcplant2009",
    year: 2009,
    type: "Journal Article",
    category: "abiotic",
    title: "Isolation, identification and expression analysis of salt-induced genes in Suaeda maritima, a natural halophyte, using PCR-based suppression subtractive hybridization",
    authors: "Sahu, B. B., & Shaw, B. P.",
    journal: "BMC Plant Biology, 9(1), 69",
    doi: "https://doi.org/10.1186/1471-2229-9-69",
    bibtex: `@article{sahu2009isolation,
  title={Isolation, identification and expression analysis of salt-induced genes in Suaeda maritima, a natural halophyte, using PCR-based suppression subtractive hybridization},
  author={Sahu, Binod Bihari and Shaw, Birendra Prasad},
  journal={BMC Plant Biology},
  volume={9},
  number={1},
  pages={69},
  year={2009},
  doi={10.1186/1471-2229-9-69}
}`
  }
];

// =========================================================
// 2. TEAM & ALUMNI DATASET
// =========================================================
const TEAM_DATA = {
  phd: [
    { name: "Kalpana Dalei", initials: "KD", tenure: "Enrolled: Jan 2016", topic: "Plant Immunity & Nonhost Resistance Mechanisms" },
    { name: "Vivekananda Mohanta", initials: "VM", tenure: "Enrolled: Jul 2019", topic: "Molecular Plant-Pathogen Interactions" },
    { name: "Reecha Mohapatra", initials: "RM", tenure: "Enrolled: Sep 2020", topic: "Plant-Pathogen Interaction & Priming-Induced Immunity" },
    { name: "Arya Kumar Dibyananda Naik", initials: "AN", tenure: "Enrolled: Aug 2021", topic: "Plant-Microbe Interaction under Abiotic & Heavy Metal Stress" },
    { name: "Rishi Kesh", initials: "RK", tenure: "Enrolled: Aug 2021", topic: "Plant Immunity & Defense Signaling" },
    { name: "Dambarudhar Bindhani", initials: "DB", tenure: "Enrolled: Jan 2026", topic: "Biotic Stress & Crop Defense Genetics" },
    { name: "Renibala Sahu", initials: "RS", tenure: "Enrolled: Jan 2026", topic: "Plant-Pathogen Interaction and Plant Biotechnology" },
    { name: "Nirakar Behera", initials: "NB", tenure: "Enrolled: Jan 2026", topic: "Genetic & Physiological Iron (Fe) Biofortification in Rice" },
    { name: "Tanmayee Behera", initials: "TB", tenure: "Enrolled: Jul 2026", topic: "Plant Immunity & Development of Effector/Metabolite Plant Vaccines" }
  ],
  alumni: [
    {
      name: "Dr. Debasish Pati",
      initials: "DP",
      tenure: "Ph.D. Awarded: Jul 2025 (Enrolled Jul 2018)",
      topic: "Thesis: AtMTHFR2 Regulated One Carbon Metabolism Contributes Towards Broad-Spectrum Disease Resistance in Arabidopsis"
    },
    {
      name: "Dr. Daraksha Parween",
      initials: "DP",
      tenure: "Ph.D. Awarded: Sep 2022 (Enrolled Jul 2016)",
      topic: "Thesis: Identification and Characterization of a Nonhost Resistance Gene in Arabidopsis Against Rhizoctonia solani for Durable Rice Sheath Blight Resistance"
    },
    {
      name: "Dr. Eram Sultan",
      initials: "ES",
      tenure: "Ph.D. Awarded: Oct 2019 (Enrolled Jul 2014)",
      topic: "Thesis: Identification and Characterization of a Nonhost Resistance Gene in Arabidopsis Against Rice Blast Pathogen Magnaporthe oryzae"
    }
  ]
};

// Render Publications
const pubListEl = document.getElementById("pubList");
const pubSearchEl = document.getElementById("pubSearch");
const filterBtns = document.querySelectorAll(".filter-btn");
let activeCategory = "all";

function renderPublications() {
  const query = pubSearchEl.value.trim().toLowerCase();
  const filtered = PUBLICATIONS.filter(pub => {
    const matchesCat = activeCategory === "all" || pub.category === activeCategory;
    const matchesText =
      pub.title.toLowerCase().includes(query) ||
      pub.authors.toLowerCase().includes(query) ||
      pub.journal.toLowerCase().includes(query) ||
      String(pub.year).includes(query);
    return matchesCat && matchesText;
  });

  if (filtered.length === 0) {
    pubListEl.innerHTML = `<div class="pub-item"><p>No matching publications found. Try clearing the search filter.</p></div>`;
    return;
  }

  pubListEl.innerHTML = filtered
    .map(
      pub => `
    <article class="pub-item">
      <div>
        <div>
          <span class="pub-year-badge">${pub.year}</span>
          <span class="pub-type-badge">${pub.type}</span>
        </div>
        <h3 class="pub-title">${pub.title}</h3>
        <p class="pub-authors">${pub.authors}</p>
        <p class="pub-journal">${pub.journal}</p>
      </div>
      <div class="pub-actions">
        <a href="${pub.doi}" target="_blank" rel="noopener" class="sm-btn">DOI / Source ↗</a>
        <button class="sm-btn bib-btn" data-id="${pub.id}">Cite BibTeX</button>
      </div>
    </article>
  `
    )
    .join("");

  document.querySelectorAll(".bib-btn").forEach(btn => {
    btn.addEventListener("click", () => openBibModal(btn.dataset.id));
  });
}

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeCategory = btn.dataset.filter;
    renderPublications();
  });
});

pubSearchEl.addEventListener("input", renderPublications);

// BibTeX Modal Handler
const bibModal = document.getElementById("bibModal");
const bibContent = document.getElementById("bibContent");
const closeModalBtn = document.getElementById("closeModal");
const copyBibBtn = document.getElementById("copyBibBtn");

function openBibModal(pubId) {
  const pub = PUBLICATIONS.find(p => p.id === pubId);
  if (!pub) return;
  bibContent.textContent = pub.bibtex;
  bibModal.classList.add("open");
}

closeModalBtn.addEventListener("click", () => bibModal.classList.remove("open"));
bibModal.addEventListener("click", e => {
  if (e.target === bibModal) bibModal.classList.remove("open");
});

copyBibBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(bibContent.textContent);
  copyBibBtn.textContent = "✓ Copied to Clipboard!";
  setTimeout(() => {
    copyBibBtn.textContent = "Copy BibTeX to Clipboard";
  }, 1800);
});

// Render Team Grid
const teamGridEl = document.getElementById("teamGrid");
const teamTabs = document.querySelectorAll(".team-tab");

function renderTeam(groupKey) {
  const members = TEAM_DATA[groupKey] || [];
  teamGridEl.innerHTML = members
    .map(
      m => `
    <div class="member-card">
      <div class="member-top">
        <div class="member-Avatar">${m.initials}</div>
        <div>
          <div class="member-name">${m.name}</div>
          <div class="member-tenure">${m.tenure}</div>
        </div>
      </div>
      <p class="member-topic">${m.topic}</p>
    </div>
  `
    )
    .join("");
}

teamTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    teamTabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    renderTeam(tab.dataset.group);
  });
});

// =========================================================
// 3. LAB GALLERY & PROFESSOR'S ACHIEVEMENTS ENGINE
// =========================================================
function createScientificSVG(title, subtitle, accentHex, tagText) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 380">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#092219"/>
        <stop offset="100%" stop-color="${accentHex}"/>
      </linearGradient>
    </defs>
    <rect width="600" height="380" fill="url(#bg)"/>
    <circle cx="510" cy="80" r="110" fill="rgba(255,255,255,0.05)"/>
    <circle cx="90" cy="320" r="140" fill="rgba(255,255,255,0.04)"/>
    <path d="M 40 290 Q 180 210 310 260 T 560 190" fill="none" stroke="rgba(134,239,172,0.3)" stroke-width="3" stroke-dasharray="6,6"/>
    <rect x="36" y="36" width="190" height="28" rx="6" fill="rgba(255,255,255,0.12)"/>
    <text x="48" y="55" fill="#86efac" font-family="monospace" font-size="12" font-weight="bold">${tagText}</text>
    <text x="36" y="175" fill="#ffffff" font-family="Georgia, serif" font-size="22" font-weight="bold">${title}</text>
    <text x="36" y="210" fill="#cbe3d9" font-family="sans-serif" font-size="14">${subtitle}</text>
    <text x="36" y="345" fill="#86efac" font-family="monospace" font-size="12">LPIMG • Dr. B. B. Sahu Lab • NIT Rourkela</text>
  </svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

const DEFAULT_GALLERY_ITEMS = [
  {
    id: "gal-1",
    title: "Springer Monograph: Panicle Architecture of Rice & Grain Filling",
    category: "achievement",
    categoryLabel: "Prof. Achievement",
    date: "2021 • Springer",
    image: createScientificSVG(
      "Springer Nature Monograph",
      "Mohapatra & Sahu • Rice Panicle Architecture & Grain Filling",
      "#0d6847",
      "BOOK PUBLICATION"
    ),
    caption: "Authored by Prof. P. K. Mohapatra and Dr. Binod Bihari Sahu (Springer International Publishing), detailing hormonal, genetic, and metabolic control of spikelet development in rice panicles."
  },
  {
    id: "gal-2",
    title: "Arabidopsis IMPORTIN α2 Conferring Rice Sheath Blight Immunity",
    category: "wetlab",
    categoryLabel: "Wet-Lab Assay",
    date: "2022 • Pathosystem",
    image: createScientificSVG(
      "Rhizoctonia solani Infection Assay",
      "Detached Leaf & Whole-Plant Screening (IMPORTIN ALPHA 2)",
      "#115e59",
      "WET-LAB PHENOTYPING"
    ),
    caption: "Phenotypic evaluation and Trypan blue / DAB staining demonstrating nonhost resistance transferred from Arabidopsis IMPORTIN ALPHA 2 against the necrotrophic rice sheath blight fungus Rhizoctonia solani."
  },
  {
    id: "gal-3",
    title: "Dual RNA-Seq & Structural Effector-Host Docking Pipeline",
    category: "computational",
    categoryLabel: "Bioinformatics & 3D",
    date: "2026 • In-Silico & HPC",
    image: createScientificSVG(
      "M. oryzae Effector Interactomics",
      "Time-Series Dual RNA-Seq (0-144 hpi) & 3D Structural Docking",
      "#1e3a8a",
      "COMPUTATIONAL BIOLOGY"
    ),
    caption: "Multi-tier computational pipeline integrating time-series dual RNA-seq differential expression (Kallisto/DESeq2/WGCNA) with 3D structural modeling of Magnaporthe oryzae invasive effectors interacting with rice immune targets."
  },
  {
    id: "gal-4",
    title: "US Patent & The Plant Journal Breakthrough on PSS1 & PSS30 NHR Genes",
    category: "achievement",
    categoryLabel: "Prof. Achievement",
    date: "Patent & Plant J.",
    image: createScientificSVG(
      "Patented NHR Crop Technology",
      "Transgenic Soybean Resistance vs. P. sojae & F. virguliforme",
      "#7c2d12",
      "US PATENT / PLANT J."
    ),
    caption: "Identification and transgenic validation of Arabidopsis Nonhost Resistance genes PSS1 and PSS30 enhancing broad-spectrum immunity against oomycete and fungal root rot pathogens."
  },
  {
    id: "gal-5",
    title: "AtMTHFR2 One-Carbon Metabolism & Exiguobacterium Biopriming",
    category: "wetlab",
    categoryLabel: "Wet-Lab Assay",
    date: "2025 • Metabolomics",
    image: createScientificSVG(
      "1C Metabolism & Biopriming",
      "AtMTHFR2 Defense & Exiguobacterium indicum OMCW-10 Assay",
      "#065f46",
      "METABOLOMICS & PGPR"
    ),
    caption: "Investigating folate/methionine one-carbon metabolic reprogramming in plant defense alongside simultaneous Cr(VI) remediation and rice blast suppression using Exiguobacterium indicum OMCW-10."
  },
  {
    id: "gal-6",
    title: "National Hands-On Workshop on Gene Cloning & Plant-Microbe Interactions",
    category: "events",
    categoryLabel: "Workshop & Lab Life",
    date: "2024–2026 • NIT Rourkela",
    image: createScientificSVG(
      "Hands-On Molecular Training",
      "Gene Cloning, Transgenics & Plant-Microbe Workshops at NITR",
      "#3730a3",
      "WORKSHOP & MENTORSHIP"
    ),
    caption: "Dr. Binod Bihari Sahu and LPIMG doctoral scholars conducting hands-on laboratory training in molecular cloning, vector construction, and plant-pathogen interaction assays at the Department of Life Science, NIT Rourkela."
  }
];

const CATEGORY_LABELS = {
  achievement: "Prof. Achievement",
  wetlab: "Wet-Lab Assay",
  computational: "Bioinformatics & 3D",
  events: "Workshop & Lab Life"
};

let activeGalleryFilter = "all";
const galleryGridEl = document.getElementById("galleryGrid");
const gFilterBtns = document.querySelectorAll(".g-filter-btn");

function getGalleryItems() {
  const savedCustom = JSON.parse(localStorage.getItem("lpimg_custom_gallery") || "[]");
  return [...savedCustom, ...DEFAULT_GALLERY_ITEMS];
}

function renderGallery() {
  const allItems = getGalleryItems();
  const filtered = allItems.filter(
    item => activeGalleryFilter === "all" || item.category === activeGalleryFilter
  );

  galleryGridEl.innerHTML = filtered
    .map(
      item => `
    <article class="gallery-card" data-id="${item.id}">
      <div class="gallery-thumb">
        <img src="${item.image}" alt="${item.title}" loading="lazy" />
        <span class="gallery-cat-pill">${item.categoryLabel || CATEGORY_LABELS[item.category]}</span>
        <span class="gallery-date-pill">${item.date}</span>
      </div>
      <div class="gallery-body">
        <h3>${item.title}</h3>
        <p>${item.caption}</p>
      </div>
    </article>
  `
    )
    .join("");

  document.querySelectorAll(".gallery-card").forEach(card => {
    card.addEventListener("click", () => openLightbox(card.dataset.id));
  });
}

gFilterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    gFilterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeGalleryFilter = btn.dataset.gfilter;
    renderGallery();
  });
});

// Lightbox Viewer
const lightboxModal = document.getElementById("lightboxModal");
const closeLightboxBtn = document.getElementById("closeLightbox");

function openLightbox(itemId) {
  const item = getGalleryItems().find(i => i.id === itemId);
  if (!item) return;
  document.getElementById("lightboxMediaWrap").innerHTML = `<img src="${item.image}" alt="${item.title}" />`;
  document.getElementById("lbCategory").textContent = item.categoryLabel || CATEGORY_LABELS[item.category];
  document.getElementById("lbDate").textContent = item.date;
  document.getElementById("lbTitle").textContent = item.title;
  document.getElementById("lbCaption").textContent = item.caption;
  lightboxModal.classList.add("open");
}

closeLightboxBtn.addEventListener("click", () => lightboxModal.classList.remove("open"));
lightboxModal.addEventListener("click", e => {
  if (e.target === lightboxModal) lightboxModal.classList.remove("open");
});

// Localhost Upload Modal Logic
const uploadModal = document.getElementById("uploadModal");
const openUploadModalBtn = document.getElementById("openUploadModalBtn");
const closeUploadModalBtn = document.getElementById("closeUploadModal");
const galleryUploadForm = document.getElementById("galleryUploadForm");
const clearCustomGalleryBtn = document.getElementById("clearCustomGalleryBtn");
const exportGalleryJsonBtn = document.getElementById("exportGalleryJsonBtn");

openUploadModalBtn.addEventListener("click", () => uploadModal.classList.add("open"));
closeUploadModalBtn.addEventListener("click", () => uploadModal.classList.remove("open"));
uploadModal.addEventListener("click", e => {
  if (e.target === uploadModal) uploadModal.classList.remove("open");
});

galleryUploadForm.addEventListener("submit", e => {
  e.preventDefault();
  const title = document.getElementById("imgTitle").value.trim();
  const category = document.getElementById("imgCategory").value;
  const date = document.getElementById("imgDate").value.trim();
  const pathInput = document.getElementById("imgPath").value.trim();
  const caption = document.getElementById("imgCaption").value.trim();
  const fileInput = document.getElementById("imgFile");

  const saveNewItem = imageSrc => {
    const newItem = {
      id: "custom-" + Date.now(),
      title,
      category,
      categoryLabel: CATEGORY_LABELS[category],
      date,
      image: imageSrc,
      caption
    };
    const existing = JSON.parse(localStorage.getItem("lpimg_custom_gallery") || "[]");
    existing.unshift(newItem);
    localStorage.setItem("lpimg_custom_gallery", JSON.stringify(existing));
    renderGallery();
    galleryUploadForm.reset();
    uploadModal.classList.remove("open");
  };

  if (fileInput.files && fileInput.files[0]) {
    const reader = new FileReader();
    reader.onload = event => saveNewItem(event.target.result);
    reader.readAsDataURL(fileInput.files[0]);
  } else if (pathInput) {
    saveNewItem(pathInput);
  } else {
    saveNewItem(
      createScientificSVG(title.slice(0, 26), date, "#0d6847", CATEGORY_LABELS[category].toUpperCase())
    );
  }
});

clearCustomGalleryBtn.addEventListener("click", () => {
  localStorage.removeItem("lpimg_custom_gallery");
  renderGallery();
  uploadModal.classList.remove("open");
});

exportGalleryJsonBtn.addEventListener("click", () => {
  const jsonStr = JSON.stringify(getGalleryItems(), null, 2);
  navigator.clipboard.writeText(jsonStr);
  exportGalleryJsonBtn.textContent = "✓ JSON Copied!";
  setTimeout(() => {
    exportGalleryJsonBtn.textContent = "Export JSON";
  }, 2000);
});

// =========================================================
// 4. CONTACT FORM & THEME / NAVIGATION HANDLERS
// =========================================================
const inquiryForm = document.getElementById("inquiryForm");
inquiryForm.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("appName").value.trim();
  const role = document.getElementById("appRole").value;
  const affiliation = document.getElementById("appAffiliation").value.trim();
  const message = document.getElementById("appMessage").value.trim();

  const subject = encodeURIComponent(`[LPIMG Lab Inquiry - ${role}] ${name}`);
  const body = encodeURIComponent(
    `Dear Dr. Binod Bihari Sahu,\n\n` +
    `I am writing to express my interest in joining/collaborating with the Laboratory of Plant Immunity and Molecular Genetics (LPIMG) at NIT Rourkela as a ${role}.\n\n` +
    `• Name: ${name}\n` +
    `• Current Affiliation / Fellowship: ${affiliation}\n\n` +
    `Statement of Interest:\n${message}\n\n` +
    `I have attached my curriculum vitae (CV) and academic transcripts for your kind perusal.\n\n` +
    `Sincerely,\n${name}`
  );

  window.location.href = `mailto:sahub@nitrkl.ac.in?subject=${subject}&body=${body}`;
});

// Theme Toggle (Light / Dark Mode)
const themeToggleBtn = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const savedTheme = localStorage.getItem("lpimg_theme") || "light";
document.documentElement.setAttribute("data-theme", savedTheme);
themeIcon.textContent = savedTheme === "dark" ? "☀️" : "🌙";

themeToggleBtn.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("lpimg_theme", next);
  themeIcon.textContent = next === "dark" ? "☀️" : "🌙";
});

// Mobile Navigation Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navLinks = document.getElementById("navLinks");
mobileMenuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Initialize Everything on Page Load
document.getElementById("yearSpan").textContent = new Date().getFullYear();
renderPublications();
renderTeam("phd");
renderGallery();
