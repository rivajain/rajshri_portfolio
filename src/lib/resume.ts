export const profile = {
  name: "Rajshri Jain",
  title: "Senior Product Marketing Manager",
  phone: "+353-89-474-3772",
  email: "rajshri.jain94@gmail.com",
  linkedin: "linkedin.com/in/rajshri-jain",
  linkedinUrl: "https://linkedin.com/in/rajshri-jain",
  location: "Co. Kildare, Ireland",
  status: "Stamp 4",
  summary:
    "Senior Product Marketing Manager with 8+ years of B2B SaaS and enterprise software experience, specialising in go-to-market strategy, messaging and positioning, and cross-functional programme delivery across EMEA and US markets. Proven record of driving pipeline growth and translating complex SaaS product capabilities into compelling value propositions — across BSI Entropy, BSI Connect, and AI-driven platforms. Skilled in competitive intelligence, Gartner analyst engagement, pricing strategy, and leading integrated marketing programmes. Experienced in organisational change leadership, coaching peers, and acting as a market evangelist across EHS, supply chain, and digital risk domains.",
};

export const metrics = [
  { value: "8+", label: "Years in B2B SaaS marketing" },
  { value: "20%", label: "Uplift in EMEA pipeline generation" },
  { value: "30%", label: "YoY marketing-generated revenue growth" },
  { value: "12", label: "Key EMEA markets owned" },
];

export type Role = {
  id: string;
  company: string;
  companyContext: string;
  role: string;
  period: string;
  bullets: string[];
};

export const roles: Role[] = [
  {
    id: "bsi-senior",
    company: "BSI Group",
    companyContext: "Global Standards, EHS, Supply Chain & Digital Risk Solutions",
    role: "Global Marketing Specialist (Senior PMM)",
    period: "Mar 2023 – Present",
    bullets: [
      "Led EMEA GTM strategy for BSI's SaaS and consulting portfolio — including BSI Entropy (compliance & risk platform), BSI Connect (regulatory intelligence platform), and EHS & Supply Chain consulting services — owning messaging, positioning, and campaign localisation across 12 key markets, driving a 20% uplift in regional pipeline generation.",
      "Developed SaaS product positioning frameworks aligned to diverse customer segments and buyer personas; worked closely with Sales, Product, and regional teams to ensure messaging consistency across global and local touchpoints.",
      "Served as competitive intelligence lead, tracking the enterprise SaaS, EHS, and supply chain landscape; synthesised insights for internal stakeholders and influenced product and campaign strategy through whitespace analysis.",
      "Partnered with Regional Directors on Gartner-backed thought leadership — sourcing and curating analyst research to brief senior stakeholders, inform campaign strategy, and elevate credibility of external-facing content across EMEA.",
      "Built and maintained 40+ localised EMEA sales enablement assets (solution briefs, pitch decks, case studies, battle cards), correlating with an 18% improvement in deal velocity; integrated campaigns achieved 30% YoY growth in marketing-generated revenue.",
      "Provided formal written pricing analysis identifying premium pricing as a key driver of account churn, directly informing senior leadership's commercial positioning and packaging decisions.",
      "Coached team members on SEO and AEO (Answer Engine Optimisation) best practices, improving content discoverability across search and AI-driven platforms.",
      "Led cross-functional organisational change programmes as a key stakeholder: CRM transformation (improving data accuracy, reporting speed, and reducing manual processes); AMAS & EMEA website refresh (successfully launched across both regions); and full brand refresh rollout for EMEA including collateral updates, team adoption, and division-specific feedback to global brand teams.",
      "Bridged 10+ functional teams across EMEA and global HQ ensuring 100% on-time GTM execution; leveraged GA4, Pardot, Marketo, Google Ad Manager, and Workfront for performance tracking and attribution.",
    ],
  },
  {
    id: "bsi-executive",
    company: "BSI Group",
    companyContext: "Global Standards, EHS, Supply Chain & Digital Risk Solutions",
    role: "Global Marketing Executive",
    period: "Feb 2021 – Mar 2023",
    bullets: [
      "Defined and executed global GTM strategies for SaaS and consulting solutions, collaborating with Sales, Product, and Legal — delivering 30% YoY growth in marketing-generated revenue, 20% increase in online visibility, and 10% growth in website traffic.",
      "Managed multi-channel demand generation (SEM, PPC, email, webinars, podcasts, social) hitting pipeline and conversion targets; produced core content assets including messaging frameworks, campaign copy, solution briefs, and battle cards.",
      "Coordinated EMEA and US regional marketing plans, building joint GTM materials with cross-regional teams; managed LinkedIn Sponsored Campaigns, Google AdWords, and analytics reporting to improve campaign performance and efficiency.",
    ],
  },
  {
    id: "digiworld",
    company: "DigiWorld Ireland",
    companyContext: "Digital Marketing Agency",
    role: "Digital Marketing Consultant",
    period: "July 2020 – Jan 2021",
    bullets: [
      "Consulted with Irish SMEs on digital transformation, implementing scalable inbound marketing and long-term content strategies, leading to a 78% increase in organic search traffic across legal, FMCG, and IT sectors.",
      "Used Google Analytics to track web traffic and user behaviour, providing actionable insights to refine client marketing strategies, improve conversion rates, and demonstrate measurable ROI.",
      "Managed Google Ads, PPC, SEM, SEO, and email campaigns; produced data-backed KPI reports and presentations guiding clients on advertising best practices and media spend optimisation.",
    ],
  },
  {
    id: "agnitio",
    company: "Agnitio",
    companyContext: "AI, Virtual Reality & IoT Solutions",
    role: "Marketing Specialist",
    period: "Dec 2017 – Aug 2019",
    bullets: [
      "Spearheaded the B2B market launch of an AI-driven chatbot — developing GTM strategy, messaging, and value propositions — achieving 14% YoY revenue growth and 10% increase in platform sign-ups within 3 months via targeted webinars and roadshows.",
      "Led competitive analysis, user research, and market intelligence gathering to inform product positioning and feature roadmap decisions; managed full client lifecycle from onboarding and strategy sessions through to upsell and renewal opportunities.",
      "Improved client satisfaction by 20% and cut response turnaround from 24h to 6h through structured delivery tracking; drove a 9.5% MoM increase in lead generation through targeted marketing and campaign management.",
    ],
  },
  {
    id: "learn4exam",
    company: "Learn4exam",
    companyContext: "eLearning Platform",
    role: "Marketing Operations Associate",
    period: "Jul 2016 – Nov 2017",
    bullets: [
      "Grew monthly organic lead generation by 21% through funnel analysis and trigger-based lead capture; analysed user journeys to identify drop-off points and integrated re-engagement triggers to recover leads.",
      "Led a platform redevelopment project reducing page load times by 24%; delivered a critical Agile project in 60% of planned time; managed online communities across LinkedIn, Facebook, Twitter, Quora, and Reddit.",
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  org: string;
  period: string;
  focus: string;
  detail: string[];
  outcomes: string[];
};

export const projects: Project[] = [
  {
    id: "emea-gtm",
    title: "EMEA go-to-market for BSI Entropy & BSI Connect",
    org: "BSI Group",
    period: "Mar 2023 – Present",
    focus: "GTM strategy, messaging & positioning, campaign localisation",
    detail: [
      "Owned messaging, positioning, and campaign localisation across 12 key markets for BSI's SaaS and consulting portfolio.",
      "Developed SaaS positioning frameworks aligned to customer segments and buyer personas, with Sales, Product, and regional teams.",
    ],
    outcomes: ["20% uplift in regional pipeline generation", "100% on-time GTM execution across 10+ teams"],
  },
  {
    id: "enablement-library",
    title: "Localised EMEA sales enablement library",
    org: "BSI Group",
    period: "Mar 2023 – Present",
    focus: "Sales enablement, content strategy",
    detail: [
      "Built and maintained 40+ localised assets: solution briefs, pitch decks, case studies, and battle cards.",
      "Integrated campaigns tied enablement to demand generation across EMEA.",
    ],
    outcomes: ["18% improvement in deal velocity", "30% YoY growth in marketing-generated revenue"],
  },
  {
    id: "pricing-analysis",
    title: "Pricing and churn analysis",
    org: "BSI Group",
    period: "Mar 2023 – Present",
    focus: "Pricing strategy, commercial positioning",
    detail: [
      "Provided formal written pricing analysis identifying premium pricing as a key driver of account churn.",
      "Findings directly informed senior leadership's commercial positioning and packaging decisions.",
    ],
    outcomes: ["Informed leadership packaging decisions"],
  },
  {
    id: "change-programmes",
    title: "Organisational change programmes",
    org: "BSI Group",
    period: "Mar 2023 – Present",
    focus: "CRM transformation, website refresh, brand refresh",
    detail: [
      "Key stakeholder in CRM transformation — improving data accuracy and reporting speed, and reducing manual processes.",
      "AMAS & EMEA website refresh launched across both regions; full EMEA brand refresh rollout including collateral updates and team adoption.",
    ],
    outcomes: ["Launched across AMAS and EMEA", "Division-specific feedback delivered to global brand teams"],
  },
  {
    id: "chatbot-launch",
    title: "B2B launch of an AI-driven chatbot",
    org: "Agnitio",
    period: "Dec 2017 – Aug 2019",
    focus: "Product launch, value propositions, webinars & roadshows",
    detail: [
      "Developed GTM strategy, messaging, and value propositions for the B2B market launch.",
      "Ran targeted webinars and roadshows to drive adoption.",
    ],
    outcomes: ["14% YoY revenue growth", "10% increase in platform sign-ups within 3 months"],
  },
  {
    id: "sme-transformation",
    title: "Irish SME digital transformation programmes",
    org: "DigiWorld Ireland",
    period: "July 2020 – Jan 2021",
    focus: "Inbound marketing, long-term content strategy",
    detail: [
      "Implemented scalable inbound marketing and content strategies across legal, FMCG, and IT sectors.",
      "Reported KPIs and media-spend optimisation guidance to clients.",
    ],
    outcomes: ["78% increase in organic search traffic"],
  },
];

export const skillGroups = [
  {
    title: "GTM & Product Marketing",
    items: [
      "Go-to-Market Strategy",
      "Messaging & Positioning",
      "Value Proposition Development",
      "Sales Enablement",
      "Competitive Intelligence",
      "Analyst Relations (Gartner)",
      "Thought Leadership",
      "Pricing Strategy",
      "Integrated Campaign Management",
      "Content Strategy",
    ],
  },
  {
    title: "MarTech & Analytics",
    items: [
      "Marketo",
      "Pardot",
      "HubSpot",
      "Salesforce",
      "Google Analytics GA4",
      "Google Ads",
      "Google Ad Manager",
      "LinkedIn Campaign Manager",
      "SEMrush",
      "Workfront",
      "Optimizely",
      "Tag Manager",
      "MailChimp",
      "Sprout Social",
      "HootSuite",
      "GaggleAmp",
      "Power BI",
      "Canva",
      "Adobe Creative Suite (Photoshop, InDesign, Premiere)",
      "EPiServer CMS",
    ],
  },
  {
    title: "Certifications",
    items: [
      "HubSpot Email Marketing & Inbound Marketing",
      "Microsoft Bing Ads Accredited Professional",
    ],
  },
];

export const education = [
  {
    degree: "MSc Management (NFQ Level 9)",
    school: "UCD Michael Smurfit Graduate Business School, Dublin",
    period: "2019–2020",
    grade: "GPA 2:1",
    detail:
      "Core modules: Marketing, E-commerce, Global Strategic Management, Project Management, Organisational Behaviour, Corporate Finance, Economics",
  },
  {
    degree: "MA English & Psychology (NFQ Level 9)",
    school: "University of Delhi",
    period: "2015–2017",
    grade: "GPA 2:1",
    detail: "",
  },
  {
    degree: "BA (Hons) English Literature (NFQ Level 8)",
    school: "University of Delhi",
    period: "2012–2015",
    grade: "GPA 2:1",
    detail: "",
  },
];

export const additional = {
  community:
    "Fundraiser at the 100 Minds Initiative; volunteer at health campaigns organised by Aarogya Bharti Sewa & Teach India (The Times of India); representative of UCD Michael Smurfit Graduate Business School, 2019.",
  memberships:
    "Erasmus Society, Investors & Entrepreneurs Society, English & Literary Society, and Commerce & Economics Society at UCD.",
};

// Plain-text projection of the resume, used as the ONLY factual source for the
// AI resume chat. Keep this derived from the data above.
export function buildResumeContext(): string {
  const experience = roles
    .map(
      (r) =>
        `${r.role} — ${r.company} (${r.companyContext}) | ${r.period}\n` +
        r.bullets.map((b) => `- ${b}`).join("\n"),
    )
    .join("\n\n");

  const skills = skillGroups
    .map((g) => `${g.title}: ${g.items.join(", ")}`)
    .join("\n");

  const edu = education
    .map((e) => `${e.degree} — ${e.school} | ${e.period} | ${e.grade}${e.detail ? ` | ${e.detail}` : ""}`)
    .join("\n");

  return [
    `NAME: ${profile.name}`,
    `TITLE: ${profile.title}`,
    `CONTACT: ${profile.phone} | ${profile.email} | ${profile.linkedin} | ${profile.location} | ${profile.status}`,
    ``,
    `CAREER PROFILE:\n${profile.summary}`,
    ``,
    `PROFESSIONAL EXPERIENCE:\n${experience}`,
    ``,
    `SKILLS & TOOLS:\n${skills}`,
    ``,
    `EDUCATION:\n${edu}`,
    ``,
    `ADDITIONAL:\nCommunity & Volunteering: ${additional.community}\nMemberships: ${additional.memberships}`,
  ].join("\n");
}
