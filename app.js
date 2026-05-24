const riskMeta = {
  low: { label: "Low concern", color: "var(--green)", score: 18 },
  monitoring: { label: "Monitoring", color: "var(--yellow)", score: 42 },
  regional: { label: "Regional outbreak", color: "var(--orange)", score: 61 },
  high: { label: "High-risk outbreak", color: "var(--red)", score: 78 },
  pandemic: { label: "Pandemic potential", color: "var(--purple)", score: 91 }
};

const diseases = [
  {
    name: "Ebola",
    family: "Viral hemorrhagic fever",
    incubation: "2 to 21 days",
    symptoms: "Fever, severe weakness, vomiting, diarrhea, bleeding in advanced disease.",
    transmission: "Direct contact with blood or body fluids, contaminated materials, and some animal reservoirs.",
    mortality: "Historically 25% to 90% depending on outbreak, care access, and virus species.",
    treatment: "Supportive care, rehydration, careful fluid management, and approved monoclonal antibody therapies for Zaire ebolavirus where available.",
    vaccine: "Vaccines exist for Zaire ebolavirus in targeted response settings.",
    ppe: "Contact and droplet precautions with strict eye protection; airborne precautions for aerosol-generating procedures.",
    worker: "Use trained observers for donning and doffing, rapid isolation, exposure logging, and waste controls.",
    travel: "Avoid direct contact with sick people, bodies, wild animal meat, and healthcare settings without proper protection.",
    timeline: ["1976: first recognized outbreaks", "2014-2016: West Africa epidemic", "2018-2020: DRC outbreak", "2022-2026: intermittent regional alerts"]
  },
  {
    name: "Marburg",
    family: "Viral hemorrhagic fever",
    incubation: "2 to 21 days",
    symptoms: "Abrupt fever, chills, headache, myalgia, rash, gastrointestinal illness, hemorrhagic signs.",
    transmission: "Direct contact with infected body fluids, contaminated surfaces, and fruit bat reservoirs.",
    mortality: "Reported case fatality often ranges from 24% to 88%.",
    treatment: "No widely approved specific antiviral; early supportive care is critical.",
    vaccine: "No broadly licensed vaccine; candidates may be used in trials or emergency research protocols.",
    ppe: "High-level contact precautions, eye protection, trained doffing, and isolation.",
    worker: "Maintain a high index of suspicion for compatible illness with travel or exposure history.",
    travel: "Follow official outbreak notices and avoid caves, mines, and contact with ill people in affected areas.",
    timeline: ["1967: first recognized", "2004-2005: Angola outbreak", "2023: Equatorial Guinea and Tanzania alerts", "2026: watchlist monitoring"]
  },
  {
    name: "Avian influenza",
    family: "Influenza A viruses",
    incubation: "Usually 2 to 8 days",
    symptoms: "Fever, cough, sore throat, conjunctivitis, shortness of breath, pneumonia in severe cases.",
    transmission: "Primarily bird or animal exposure; limited human-to-human transmission has been uncommon.",
    mortality: "Varies by subtype and detection; severe human H5 infections can have high reported fatality.",
    treatment: "Antivirals such as oseltamivir may be recommended by clinicians and public health authorities.",
    vaccine: "Candidate vaccine viruses and limited stockpiles exist for some subtypes.",
    ppe: "Respiratory and eye protection for animal exposure or healthcare evaluation of suspected cases.",
    worker: "Ask about poultry, dairy, wild bird, and occupational exposures; coordinate testing with public health.",
    travel: "Avoid live bird markets and sick or dead animals in affected regions.",
    timeline: ["1997: H5N1 human cases in Hong Kong", "2013: H7N9 emergence", "2022-2026: broad animal outbreaks with human exposure monitoring"]
  },
  {
    name: "Hantavirus",
    family: "Rodent-borne viral disease",
    incubation: "Usually 1 to 8 weeks",
    symptoms: "Fever, fatigue, muscle aches, dizziness, gastrointestinal symptoms, cough, and respiratory distress.",
    transmission: "Inhalation of aerosolized virus from infected rodent urine, droppings, or saliva.",
    mortality: "Hantavirus pulmonary syndrome can be fatal, with reported fatality around one third of recognized U.S. cases.",
    treatment: "Supportive care and early intensive respiratory support when needed.",
    vaccine: "No licensed vaccine in the United States.",
    ppe: "Avoid sweeping dry rodent waste; use wet disinfection and respiratory protection for high-risk cleanup.",
    worker: "Consider exposure history in compatible severe respiratory illness and notify public health.",
    travel: "Avoid rodent-infested cabins, campsites, barns, and storage areas; ventilate and disinfect before cleaning.",
    timeline: ["1993: Four Corners outbreak recognized", "2000s-2026: sporadic regional cases and exposure advisories"]
  },
  {
    name: "Mpox",
    family: "Orthopoxvirus",
    incubation: "3 to 17 days",
    symptoms: "Rash, fever, swollen lymph nodes, fatigue, muscle aches, respiratory symptoms.",
    transmission: "Close skin-to-skin contact, bodily fluids, respiratory secretions during prolonged contact, contaminated materials.",
    mortality: "Generally lower for clade II; clade I has historically caused more severe disease.",
    treatment: "Supportive care; antivirals may be considered for severe disease or high-risk patients.",
    vaccine: "JYNNEOS vaccination is used for prevention in eligible groups and response campaigns.",
    ppe: "Contact and droplet precautions; airborne precautions for aerosol-generating procedures.",
    worker: "Collect lesion swabs correctly, cover lesions, and counsel exposed contacts through public health.",
    travel: "Review destination advisories and vaccination eligibility when outbreaks are reported.",
    timeline: ["1970: first human case recognized", "2022: international outbreak", "2024-2026: clade-specific monitoring"]
  },
  {
    name: "MERS",
    family: "Middle East respiratory syndrome coronavirus",
    incubation: "Usually 5 to 6 days, range 2 to 14 days",
    symptoms: "Fever, cough, shortness of breath, pneumonia, and gastrointestinal symptoms in some patients.",
    transmission: "Camel exposure and limited person-to-person spread, especially in healthcare settings.",
    mortality: "Reported fatality is high among recognized cases, especially with comorbidities.",
    treatment: "Supportive care; no broadly approved specific antiviral treatment.",
    vaccine: "No licensed human vaccine.",
    ppe: "Standard, contact, airborne, and eye protection for suspected cases in healthcare settings.",
    worker: "Ask about travel, camel exposure, healthcare exposure, and clusters of severe respiratory illness.",
    travel: "Follow official guidance for Arabian Peninsula travel and avoid contact with sick camels.",
    timeline: ["2012: first identified", "2015: South Korea healthcare-associated outbreak", "2012-2026: intermittent Arabian Peninsula cases"]
  },
  {
    name: "SARS-like coronavirus",
    family: "Novel or severe acute respiratory coronavirus signal",
    incubation: "Unknown for novel signals; compare with official case definitions as they are released.",
    symptoms: "Respiratory cluster symptoms may include fever, cough, shortness of breath, pneumonia, or severe lower respiratory disease.",
    transmission: "Unknown until confirmed; respiratory, healthcare, and zoonotic pathways are assessed first.",
    mortality: "Unknown for novel signals and should not be inferred from early reports.",
    treatment: "Follow official clinical guidance and local public health testing instructions.",
    vaccine: "No pathogen-specific vaccine unless the agent is identified and covered by existing products.",
    ppe: "Use respiratory, eye, contact, and standard precautions for suspected severe novel respiratory infection.",
    worker: "Separate confirmed data from suspected reports, escalate clusters, and preserve exposure timelines.",
    travel: "Use official advisories and avoid rumor-based decisions while verification is pending.",
    timeline: ["2002-2003: SARS outbreak", "2019-2020: SARS-CoV-2 emergence", "2026: novel respiratory cluster watch category"]
  },
  {
    name: "Measles",
    family: "Paramyxovirus",
    incubation: "7 to 21 days from exposure to rash",
    symptoms: "High fever, cough, coryza, conjunctivitis, Koplik spots, and rash.",
    transmission: "Highly contagious airborne spread.",
    mortality: "Risk rises with malnutrition, low vaccination coverage, pregnancy, infancy, and immunocompromise.",
    treatment: "Supportive care; vitamin A in selected pediatric cases under guidance.",
    vaccine: "MMR vaccine is highly effective.",
    ppe: "Airborne isolation; use N95 or higher respiratory protection in healthcare settings.",
    worker: "Verify immunity, isolate suspected cases immediately, and report rapidly.",
    travel: "Ensure MMR vaccination is current before international travel.",
    timeline: ["1963: first licensed vaccine", "2000: elimination declared in U.S.", "2019 and 2024-2026: resurgence linked to undervaccination"]
  },
  {
    name: "Dengue",
    family: "Flavivirus",
    incubation: "4 to 10 days",
    symptoms: "High fever, severe headache, eye pain, joint pain, rash, bleeding warning signs.",
    transmission: "Aedes mosquito-borne.",
    mortality: "Usually below 1% with early recognition and care; severe dengue is dangerous.",
    treatment: "Supportive care and fluid management; avoid NSAIDs until dengue is excluded.",
    vaccine: "Vaccine recommendations vary by country, age, and prior infection status.",
    ppe: "Mosquito bite prevention, repellents, screens, and vector control.",
    worker: "Watch for warning signs and local transmission in suitable mosquito regions.",
    travel: "Use repellents, long sleeves, permethrin-treated clothing, and screened lodging.",
    timeline: ["1950s: severe dengue recognized", "2010s: global expansion", "2023-2026: record activity in the Americas and other regions"]
  },
  {
    name: "Chikungunya",
    family: "Alphavirus",
    incubation: "Usually 3 to 7 days",
    symptoms: "Fever and often severe joint pain, headache, muscle pain, rash, and fatigue.",
    transmission: "Aedes mosquito-borne.",
    mortality: "Deaths are uncommon but severe disease can occur in newborns, older adults, and people with comorbidities.",
    treatment: "Supportive care, hydration, fever control, and pain management under clinical guidance.",
    vaccine: "Vaccine availability and recommendations vary by country and risk group.",
    ppe: "Mosquito bite prevention and vector control.",
    worker: "Differentiate from dengue, Zika, malaria, and other febrile travel illnesses.",
    travel: "Use repellents, protective clothing, and screened lodging in outbreak areas.",
    timeline: ["1952: first described in Tanzania", "2005-2006: Indian Ocean outbreak", "2013 onward: Americas spread", "2026: regional travel monitoring"]
  },
  {
    name: "Zika",
    family: "Flavivirus",
    incubation: "Usually 3 to 14 days",
    symptoms: "Often mild fever, rash, joint pain, conjunctivitis, muscle pain, and headache.",
    transmission: "Aedes mosquito-borne, sexual transmission, congenital transmission, and blood exposure risk.",
    mortality: "Deaths are rare, but congenital infection can cause severe fetal outcomes.",
    treatment: "Supportive care; avoid NSAIDs until dengue is excluded.",
    vaccine: "No licensed vaccine.",
    ppe: "Mosquito bite prevention and sexual transmission precautions when advised.",
    worker: "Prioritize pregnancy counseling, testing eligibility, and local vector risk.",
    travel: "Pregnant travelers should review official destination guidance before travel.",
    timeline: ["1947: virus identified", "2015-2016: Americas epidemic", "2016 onward: congenital syndrome response", "2026: travel-associated monitoring"]
  },
  {
    name: "Nipah virus",
    family: "Henipavirus",
    incubation: "4 to 14 days, sometimes longer",
    symptoms: "Fever, headache, cough, breathing difficulty, encephalitis, seizures, coma.",
    transmission: "Fruit bat reservoirs, contaminated food, animal exposure, and person-to-person spread in some outbreaks.",
    mortality: "Often 40% to 75% in recognized outbreaks.",
    treatment: "Supportive intensive care; no broadly approved specific therapy.",
    vaccine: "No licensed human vaccine.",
    ppe: "Contact, droplet, and eye protection; strengthen airborne precautions for high-risk procedures.",
    worker: "Rapidly isolate suspected encephalitis clusters and trace contacts.",
    travel: "Avoid raw date palm sap and contact with sick animals in affected regions.",
    timeline: ["1998-1999: Malaysia and Singapore emergence", "2001 onward: Bangladesh outbreaks", "2018-2026: recurrent India alerts"]
  },
  {
    name: "Plague",
    family: "Yersinia pestis bacterial infection",
    incubation: "Usually 1 to 7 days",
    symptoms: "Fever, chills, weakness, swollen lymph nodes in bubonic plague; pneumonia in pneumonic plague.",
    transmission: "Flea bites, infected animals, and respiratory droplets for pneumonic plague.",
    mortality: "Can be severe or fatal without prompt antibiotics; outcomes improve with early treatment.",
    treatment: "Prompt antibiotics and supportive care under clinical supervision.",
    vaccine: "No routinely available public vaccine in most settings.",
    ppe: "Droplet precautions for suspected pneumonic plague; standard precautions for bubonic disease care.",
    worker: "Report suspected cases urgently and start isolation for pneumonic presentations.",
    travel: "Avoid sick or dead animals and use flea prevention in endemic areas.",
    timeline: ["Historical pandemics over centuries", "1894: Y. pestis identified", "Modern era: endemic regional outbreaks and sporadic cases"]
  },
  {
    name: "Lassa fever",
    family: "Arenavirus viral hemorrhagic fever",
    incubation: "Usually 6 to 21 days",
    symptoms: "Fever, weakness, headache, sore throat, chest pain, vomiting, bleeding, shock in severe cases.",
    transmission: "Rodent excreta, contaminated food or household items, and person-to-person spread in healthcare settings.",
    mortality: "Overall fatality is lower than among hospitalized severe cases; pregnancy carries high risk.",
    treatment: "Supportive care; ribavirin may be used early under clinical guidance.",
    vaccine: "No licensed vaccine.",
    ppe: "Contact and droplet precautions with eye protection; strengthen infection prevention and control.",
    worker: "Use safe injection, lab, waste, and burial practices; protect maternity services in affected areas.",
    travel: "Avoid rodent exposure and food contamination in endemic regions.",
    timeline: ["1969: first described in Nigeria", "Annual West Africa outbreaks", "2026: seasonal and regional surveillance"]
  },
  {
    name: "Polio",
    family: "Enterovirus",
    incubation: "Usually 7 to 10 days",
    symptoms: "Often asymptomatic; fever, sore throat, meningitis, acute flaccid paralysis in rare cases.",
    transmission: "Fecal-oral and oral-oral spread.",
    mortality: "Paralytic disease can be fatal, especially with respiratory muscle involvement.",
    treatment: "Supportive care and rehabilitation.",
    vaccine: "IPV and OPV are used globally depending on program needs.",
    ppe: "Standard precautions plus careful hygiene and sanitation controls.",
    worker: "Report acute flaccid paralysis and support wastewater or environmental surveillance.",
    travel: "Check polio vaccine requirements and recommendations for destination countries.",
    timeline: ["1950s: vaccine era begins", "1988: global eradication initiative", "2022-2026: wastewater and vaccine-derived poliovirus monitoring"]
  }
];

const outbreaks = [
  { disease: "Ebola", location: "Equateur Province, DRC", level: "country", risk: "regional", cases: 34, deaths: 14, transmission: "contact", trend: "stable", status: "Confirmed", updated: "2026-05-22", source: "WHO Disease Outbreak News", url: "https://www.who.int/emergencies/disease-outbreak-news", x: 55, y: 54, continent: "Africa", r0: null, hospital: 72 },
  { disease: "Marburg", location: "Rwanda", level: "country", risk: "high", cases: 66, deaths: 15, transmission: "contact", trend: "decreasing", status: "Confirmed", updated: "2026-05-21", source: "WHO and Ministry of Health", url: "https://www.who.int", x: 57, y: 53, continent: "Africa", r0: null, hospital: 81 },
  { disease: "Avian influenza", location: "United States dairy and poultry surveillance", level: "us", risk: "monitoring", cases: 18, deaths: 0, transmission: "zoonotic", trend: "increasing", status: "Confirmed", updated: "2026-05-23", source: "CDC Avian Influenza", url: "https://www.cdc.gov/flu/avianflu/", x: 21, y: 34, continent: "North America", r0: 0.2, hospital: 19 },
  { disease: "Mpox", location: "Central Africa regional clade I monitoring", level: "continent", risk: "pandemic", cases: 2450, deaths: 83, transmission: "contact", trend: "increasing", status: "Confirmed", updated: "2026-05-20", source: "WHO mpox situation reports", url: "https://www.who.int/health-topics/mpox", x: 56, y: 51, continent: "Africa", r0: 1.2, hospital: 14 },
  { disease: "Measles", location: "Texas, United States", level: "state", risk: "regional", cases: 221, deaths: 1, transmission: "respiratory", trend: "increasing", status: "Confirmed", updated: "2026-05-22", source: "State health department and CDC", url: "https://www.cdc.gov/measles/", x: 19, y: 39, continent: "North America", r0: 14, hospital: 22 },
  { disease: "Dengue", location: "Brazil and Southern Cone", level: "country", risk: "high", cases: 426000, deaths: 1680, transmission: "vector", trend: "stable", status: "Confirmed", updated: "2026-05-19", source: "PAHO dengue surveillance", url: "https://www.paho.org/en/topics/dengue", x: 33, y: 68, continent: "South America", r0: 2.1, hospital: 9 },
  { disease: "Chikungunya", location: "Indian Ocean region", level: "region", risk: "monitoring", cases: 8200, deaths: 4, transmission: "vector", trend: "increasing", status: "Suspected", updated: "2026-05-18", source: "ECDC communicable disease threats", url: "https://www.ecdc.europa.eu/en", x: 63, y: 63, continent: "Africa", r0: 1.8, hospital: 6 },
  { disease: "MERS", location: "Arabian Peninsula", level: "region", risk: "monitoring", cases: 12, deaths: 4, transmission: "respiratory", trend: "stable", status: "Confirmed", updated: "2026-05-17", source: "WHO MERS updates", url: "https://www.who.int/health-topics/middle-east-respiratory-syndrome-coronavirus-mers", x: 62, y: 43, continent: "Asia", r0: 0.7, hospital: 88 },
  { disease: "Nipah virus", location: "Kerala, India", level: "state", risk: "high", cases: 8, deaths: 2, transmission: "zoonotic", trend: "stable", status: "Suspected", updated: "2026-05-16", source: "Government health alert", url: "https://www.mohfw.gov.in/", x: 70, y: 52, continent: "Asia", r0: 0.6, hospital: 91 },
  { disease: "Polio", location: "Wastewater detections, New York", level: "state", risk: "monitoring", cases: 0, deaths: 0, transmission: "food-water", trend: "stable", status: "Suspected", updated: "2026-05-15", source: "CDC and state health department", url: "https://www.cdc.gov/polio/", x: 25, y: 32, continent: "North America", r0: 5, hospital: 3 },
  { disease: "Hantavirus", location: "Four Corners, United States", level: "state", risk: "low", cases: 3, deaths: 1, transmission: "zoonotic", trend: "decreasing", status: "Confirmed", updated: "2026-05-13", source: "CDC special pathogens", url: "https://www.cdc.gov/hantavirus/", x: 17, y: 38, continent: "North America", r0: null, hospital: 74 },
  { disease: "Plague", location: "Madagascar highlands", level: "region", risk: "monitoring", cases: 41, deaths: 6, transmission: "vector", trend: "stable", status: "Confirmed", updated: "2026-05-12", source: "WHO and national ministry", url: "https://www.who.int/health-topics/plague", x: 60, y: 66, continent: "Africa", r0: 1.1, hospital: 44 },
  { disease: "Lassa fever", location: "Nigeria", level: "country", risk: "regional", cases: 918, deaths: 162, transmission: "zoonotic", trend: "decreasing", status: "Confirmed", updated: "2026-05-18", source: "Nigeria CDC", url: "https://ncdc.gov.ng/", x: 51, y: 48, continent: "Africa", r0: 0.9, hospital: 36 },
  { disease: "Zika", location: "Thailand travel-associated monitoring", level: "country", risk: "low", cases: 19, deaths: 0, transmission: "vector", trend: "stable", status: "Suspected", updated: "2026-05-11", source: "Travel health notices", url: "https://wwwnc.cdc.gov/travel", x: 75, y: 53, continent: "Asia", r0: 1.4, hospital: 2 },
  { disease: "SARS-like coronavirus", location: "Novel respiratory cluster watch", level: "global", risk: "monitoring", cases: 23, deaths: 2, transmission: "respiratory", trend: "increasing", status: "Suspected", updated: "2026-05-23", source: "ProMED and official verification pending", url: "https://promedmail.org/", x: 68, y: 35, continent: "Asia", r0: null, hospital: 48 }
];

const modeContent = {
  public: {
    title: "General public",
    text: "Plain-language summaries focus on what is known, where risk is changing, and when to follow official public health guidance. This app does not diagnose illness."
  },
  clinical: {
    title: "Healthcare worker",
    text: "Clinical mode prioritizes isolation precautions, PPE, exposure history, testing coordination, and healthcare worker safety notes."
  },
  epi: {
    title: "Public health",
    text: "Public health mode adds signal status, geographic spread, trend interpretation, R-naught when available, hospitalization rates, and source auditability."
  },
  travel: {
    title: "Travel",
    text: "Travel mode filters guidance by destination risk, vaccine status, prevention steps, and official travel notices."
  }
};

const appState = {
  disease: "all",
  severity: "all",
  transmission: "all",
  level: "global",
  mode: "public",
  mapView: "markers",
  selectedDisease: diseases[0].name,
  savedAlerts: [
    "Mpox in Central Africa at regional outbreak or higher",
    "Measles in Texas when cases increase by 25",
    "Avian influenza guidance update for healthcare workers"
  ],
  audit: ["System seeded 15 source-linked outbreak records."]
};

const formatter = new Intl.NumberFormat("en-US");
const byId = (id) => document.getElementById(id);

function init() {
  hydrateControls();
  wireEvents();
  renderAll();
  window.addEventListener("hashchange", routeFromHash);
  routeFromHash();
}

function hydrateControls() {
  const names = ["all", ...new Set([...diseases.map((d) => d.name), ...outbreaks.map((o) => o.disease)])].sort((a, b) => a === "all" ? -1 : a.localeCompare(b));
  byId("diseaseSelect").innerHTML = names.map((name) => `<option value="${name}">${name === "all" ? "All diseases" : name}</option>`).join("");
  byId("alertDisease").innerHTML = names.filter((n) => n !== "all").map((name) => `<option>${name}</option>`).join("");
  byId("alertRisk").innerHTML = Object.entries(riskMeta).map(([key, item]) => `<option value="${key}">${item.label}</option>`).join("");
}

function wireEvents() {
  byId("themeToggle").addEventListener("click", () => {
    document.documentElement.dataset.theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    drawCharts();
  });
  byId("authButton").addEventListener("click", () => {
    byId("authButton").textContent = byId("authButton").textContent === "Sign in" ? "Signed in" : "Sign in";
    toast("Authentication stub toggled. Preferences and saved locations are ready for API integration.");
  });
  ["modeSelect", "levelSelect", "diseaseSelect", "severitySelect", "transmissionSelect"].forEach((id) => {
    byId(id).addEventListener("change", (event) => {
      const key = id.replace("Select", "");
      appState[key] = event.target.value;
      renderAll();
    });
  });
  document.querySelectorAll("[data-map-view]").forEach((button) => {
    button.addEventListener("click", () => {
      appState.mapView = button.dataset.mapView;
      document.querySelectorAll("[data-map-view]").forEach((item) => item.classList.toggle("active", item === button));
      renderMap();
    });
  });
  byId("alertForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const rule = `${byId("alertDisease").value} in ${byId("alertLocation").value} at ${riskMeta[byId("alertRisk").value].label} or higher`;
    appState.savedAlerts.unshift(rule);
    renderSavedAlerts();
    toast("Alert rule created with push and email delivery enabled.");
  });
  byId("adminForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const item = {
      disease: byId("adminDisease").value,
      location: byId("adminLocation").value,
      level: "region",
      risk: scoreToRisk(Number(byId("adminRiskScore").value)),
      cases: Number(byId("adminCases").value),
      deaths: Number(byId("adminDeaths").value),
      transmission: "zoonotic",
      trend: "stable",
      status: byId("adminStatus").value,
      updated: new Date().toISOString().slice(0, 10),
      source: "Trusted admin correction",
      url: byId("adminSource").value,
      x: 66,
      y: 48,
      continent: "Asia",
      r0: null,
      hospital: 50
    };
    outbreaks.unshift(item);
    appState.audit.unshift(`${item.updated}: ${item.status} record for ${item.disease} in ${item.location} added by trusted user.`);
    renderAll();
    toast("Outbreak record added and source link attached.");
  });
  byId("exportReport").addEventListener("click", () => toast("Premium PDF export prepared. Connect a server renderer to generate signed reports."));
}

function routeFromHash() {
  const route = location.hash.replace("#", "") || "dashboard";
  document.querySelectorAll(".route").forEach((section) => section.classList.toggle("active", section.id === route));
  document.querySelectorAll(".primary-nav a").forEach((link) => link.classList.toggle("active", link.dataset.route === route));
  if (route === "analytics") drawCharts();
}

function filteredOutbreaks() {
  return outbreaks.filter((item) => {
    const diseaseOk = appState.disease === "all" || item.disease === appState.disease;
    const severityOk = appState.severity === "all" || item.risk === appState.severity;
    const transmissionOk = appState.transmission === "all" || item.transmission === appState.transmission;
    const levelOk = appState.level === "global" || item.level === appState.level || (appState.level === "us" && ["us", "state", "county"].includes(item.level));
    return diseaseOk && severityOk && transmissionOk && levelOk;
  });
}

function renderAll() {
  const now = "May 24, 2026 10:15 AM ET";
  byId("lastUpdatedHero").textContent = now;
  renderMetrics();
  renderMap();
  renderAlertFeed();
  renderTable();
  renderMode();
  renderProfiles();
  renderSavedAlerts();
  renderAudit();
  if (document.querySelector("#analytics.active")) drawCharts();
}

function renderMetrics() {
  const data = filteredOutbreaks();
  const cases = data.reduce((sum, item) => sum + item.cases, 0);
  const deaths = data.reduce((sum, item) => sum + item.deaths, 0);
  const cfr = cases ? ((deaths / cases) * 100).toFixed(2) : "0.00";
  const highRisk = data.filter((item) => ["high", "pandemic"].includes(item.risk)).length;
  const countries = new Set(data.map((item) => item.location.split(",").pop().trim())).size;
  const cards = [
    ["Active signals", data.length],
    ["Case counts", formatter.format(cases)],
    ["Deaths", formatter.format(deaths)],
    ["Case fatality rate", `${cfr}%`],
    ["High-risk alerts", highRisk],
    ["Countries/regions", countries],
    ["Increasing trends", data.filter((item) => item.trend === "increasing").length],
    ["Confirmed reports", data.filter((item) => item.status === "Confirmed").length],
    ["Suspected reports", data.filter((item) => item.status === "Suspected").length],
    ["Avg risk score", Math.round(data.reduce((sum, item) => sum + riskMeta[item.risk].score, 0) / Math.max(data.length, 1))]
  ];
  byId("metricsGrid").innerHTML = cards.map(([label, value]) => `<div class="metric-card"><span>${label}</span><strong>${value}</strong></div>`).join("");
}

function renderMap() {
  const map = byId("worldMap");
  map.innerHTML = `
    <div class="continent north-america"></div>
    <div class="continent south-america"></div>
    <div class="continent europe"></div>
    <div class="continent africa"></div>
    <div class="continent asia"></div>
    <div class="continent australia"></div>
  `;
  filteredOutbreaks().forEach((item, index) => {
    const marker = document.createElement("button");
    marker.className = `map-marker risk-${item.risk}`;
    marker.type = "button";
    marker.style.left = `${item.x}%`;
    marker.style.top = `${item.y}%`;
    marker.style.color = riskMeta[item.risk].color;
    const size = appState.mapView === "heat" ? Math.min(62, 18 + Math.sqrt(item.cases || 1) / 12) : appState.mapView === "time" ? 12 + (index % 5) * 5 : 16;
    marker.style.width = `${size}px`;
    marker.style.height = `${size}px`;
    marker.dataset.label = `${item.disease}: ${item.location}`;
    marker.ariaLabel = marker.dataset.label;
    marker.addEventListener("click", () => {
      appState.disease = item.disease;
      byId("diseaseSelect").value = item.disease;
      renderAll();
      toast(`${item.disease} selected. Showing ${item.status.toLowerCase()} reports and source dates.`);
    });
    map.appendChild(marker);
  });
  byId("riskLegend").innerHTML = Object.entries(riskMeta).map(([key, item]) => `<span class="risk-pill risk-${key}">${item.label}</span>`).join("");
}

function renderAlertFeed() {
  const feed = filteredOutbreaks()
    .filter((item) => item.trend === "increasing" || ["high", "pandemic"].includes(item.risk))
    .slice(0, 6);
  byId("alertFeed").innerHTML = feed.map((item) => `
    <article class="feed-item">
      <strong>${item.disease} - ${item.location}</strong>
      <span>${riskPill(item.risk)} <span class="status-tag">${item.status}</span></span>
      <small>${item.trend} trend. Source: <a href="${item.url}" target="_blank" rel="noreferrer">${item.source}</a>, ${item.updated}</small>
    </article>
  `).join("");
}

function renderTable() {
  byId("outbreakRows").innerHTML = filteredOutbreaks().map((item) => {
    const cfr = item.cases ? ((item.deaths / item.cases) * 100).toFixed(2) : "0.00";
    return `
      <tr>
        <td><strong>${item.disease}</strong><br><span class="status-tag">${item.status}</span></td>
        <td>${item.location}</td>
        <td>${riskPill(item.risk)}<br><small>Score ${riskMeta[item.risk].score}</small></td>
        <td>${formatter.format(item.cases)}</td>
        <td>${formatter.format(item.deaths)}</td>
        <td>${cfr}%</td>
        <td>${labelize(item.transmission)}</td>
        <td>${trendIcon(item.trend)} ${item.trend}</td>
        <td>${item.updated}</td>
        <td><a href="${item.url}" target="_blank" rel="noreferrer">${item.source}</a></td>
      </tr>
    `;
  }).join("");
}

function renderMode() {
  const content = modeContent[appState.mode];
  byId("modeTitle").textContent = content.title;
  byId("modeSummary").innerHTML = `
    <p>${content.text}</p>
    <div class="profile-cell">
      <strong>Safety language</strong>
      <p>No medical diagnosis is provided. Confirmed and suspected reports are labeled separately. Seek medical care and follow official guidance when symptoms or exposure risks apply.</p>
    </div>
  `;
}

function renderProfiles() {
  const list = byId("profileList");
  list.innerHTML = diseases.map((item) => `
    <button class="profile-button ${item.name === appState.selectedDisease ? "active" : ""}" type="button" data-profile="${item.name}">
      <strong>${item.name}</strong>
      <small>${item.family}</small>
    </button>
  `).join("");
  list.querySelectorAll("button").forEach((button) => button.addEventListener("click", () => {
    appState.selectedDisease = button.dataset.profile;
    renderProfiles();
  }));
  const disease = diseases.find((item) => item.name === appState.selectedDisease) || diseases[0];
  const currentLocations = outbreaks.filter((item) => item.disease === disease.name).map((item) => `${item.location} (${item.status})`).join(", ") || "No active seeded signals.";
  byId("profileDetail").innerHTML = `
    <p class="eyebrow">Disease profile</p>
    <h2>${disease.name}</h2>
    <p>${disease.family}. Information is educational and should be checked against official public health guidance.</p>
    <div class="profile-grid">
      ${profileCell("Incubation", disease.incubation)}
      ${profileCell("Symptoms", disease.symptoms)}
      ${profileCell("Transmission", disease.transmission)}
      ${profileCell("Mortality rate", disease.mortality)}
      ${profileCell("Current locations", currentLocations)}
      ${profileCell("Treatment", disease.treatment)}
      ${profileCell("Vaccine status", disease.vaccine)}
      ${profileCell("PPE / isolation", disease.ppe)}
      ${profileCell("Healthcare worker considerations", disease.worker)}
      ${profileCell("Travel guidance", disease.travel)}
      ${profileCell("Recent official alerts", outbreaks.filter((item) => item.disease === disease.name).map((item) => `${item.source}, ${item.updated}`).join("; ") || "No recent seeded official alert.")}
      ${profileCell("Historical timeline", disease.timeline.join(" | "))}
    </div>
  `;
}

function renderSavedAlerts() {
  byId("savedAlerts").innerHTML = appState.savedAlerts.map((item) => `<article class="saved-item"><strong>${item}</strong><small>Channels: push notification and email. Premium rules can include saved locations, reports, and facility checklists.</small></article>`).join("");
}

function renderAudit() {
  byId("auditTrail").innerHTML = appState.audit.map((item) => `<article class="saved-item"><strong>${item}</strong><small>Admin changes are designed for role-based API review before publication.</small></article>`).join("");
}

function drawCharts() {
  const theme = getComputedStyle(document.documentElement);
  const color = theme.getPropertyValue("--accent").trim();
  const muted = theme.getPropertyValue("--muted").trim();
  const line = theme.getPropertyValue("--line").trim();
  const data = filteredOutbreaks().slice(0, 8);
  drawBarChart("casesChart", data.map((item) => item.disease), data.map((item) => item.cases), color, muted, line);
  drawBarChart("deathsChart", data.map((item) => item.disease), data.map((item) => item.deaths), "#c73535", muted, line);
  drawBarChart("spreadChart", [...new Set(data.map((item) => item.continent))], [...new Set(data.map((item) => item.continent))].map((continent) => data.filter((item) => item.continent === continent).length), "#0f9f8f", muted, line);
  drawBarChart("severityChart", data.map((item) => item.disease), data.map((item) => item.r0 || item.hospital), "#8050c7", muted, line);
}

function drawBarChart(id, labels, values, barColor, textColor, lineColor) {
  const canvas = byId(id);
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  ctx.clearRect(0, 0, width, height);
  const max = Math.max(...values, 1);
  const left = 52;
  const bottom = height - 48;
  const chartHeight = height - 80;
  const gap = 12;
  const barWidth = Math.max(18, (width - left - 24) / Math.max(values.length, 1) - gap);
  ctx.strokeStyle = lineColor;
  ctx.lineWidth = 1;
  for (let i = 0; i < 4; i += 1) {
    const y = bottom - (chartHeight / 3) * i;
    ctx.beginPath();
    ctx.moveTo(left, y);
    ctx.lineTo(width - 16, y);
    ctx.stroke();
  }
  values.forEach((value, index) => {
    const x = left + index * (barWidth + gap);
    const h = Math.max(4, (value / max) * chartHeight);
    ctx.fillStyle = barColor;
    ctx.fillRect(x, bottom - h, barWidth, h);
    ctx.fillStyle = textColor;
    ctx.font = "12px system-ui";
    ctx.save();
    ctx.translate(x + 3, bottom + 15);
    ctx.rotate(-0.55);
    ctx.fillText(labels[index].slice(0, 16), 0, 0);
    ctx.restore();
  });
  ctx.fillStyle = textColor;
  ctx.font = "12px system-ui";
  ctx.fillText(formatter.format(max), 8, 24);
  ctx.fillText("0", 30, bottom);
}

function riskPill(risk) {
  return `<span class="risk-pill risk-${risk}">${riskMeta[risk].label}</span>`;
}

function profileCell(title, body) {
  return `<div class="profile-cell"><strong>${title}</strong><p>${body}</p></div>`;
}

function trendIcon(trend) {
  if (trend === "increasing") return "up";
  if (trend === "decreasing") return "down";
  return "flat";
}

function labelize(value) {
  return value.split("-").map((part) => part[0].toUpperCase() + part.slice(1)).join(" ");
}

function scoreToRisk(score) {
  if (score >= 86) return "pandemic";
  if (score >= 72) return "high";
  if (score >= 55) return "regional";
  if (score >= 30) return "monitoring";
  return "low";
}

function toast(message) {
  const toastEl = byId("toast");
  toastEl.textContent = message;
  toastEl.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toastEl.classList.remove("show"), 3200);
}

init();
