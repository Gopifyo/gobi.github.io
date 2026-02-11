
import { Publication, Experience, SkillCategory, Education, Project, MediaItem, GalleryItem, Patent } from './types';

// ==========================================
// FILE STRUCTURE UPDATE
// ==========================================
// The 'public' folder has been removed. 
// Images are now served directly from the 'gallery/' folder in the root.
// Profile picture: gallery/gobiprofile.jpg
// ==========================================

export const PROFILE_IMAGE = "gallery/gobiprofile.jpg";

export const SOCIAL_LINKS = {
  email: "gobinath.edu@gmail.com",
  phone: "+1 915-740-1204",
  linkedin: "linkedin.com/in/gobi-nath",
  github: "github.com/gobinath-c"
};

export const PROJECTS: Project[] = [
  {
    title: "Vibe-Engage AI",
    description: "An automated agentic AI service for social consumer products. Orchestrates multi-agent workflows to manage community vibes, personalized engagement, and automated storytelling for brands.",
    tags: ["Agentic AI", "Consumer Tech", "TypeScript", "LLM Orchestration"],
    type: "AI",
    link: "https://github.com/gobinath-c/vibe-engage"
  },
  {
    title: "Bio-Insight Agent",
    description: "A specialized agentic service that automates the extraction and synthesis of multi-modal biological data into consumer-friendly health insights. Bridging deep science and consumer UX.",
    tags: ["Agentic RAG", "Python", "FastAPI", "Bio-Data"],
    type: "AI",
    link: "https://github.com/gobinath-c/bio-insight-agent"
  },
  {
    title: "Pulse-Mobile",
    description: "A social consumer application designed for high-performance lab teams. Features real-time IoT notifications, collaborative 'vibe' tracking for experiments, and automated inventory logistics.",
    tags: ["React Native", "Social UX", "Firebase", "Real-time IoT"],
    type: "Mobile",
    link: "https://github.com/gobinath-c/pulse-mobile"
  }
];

export const PATENTS: Patent[] = [
  {
    title: "Extraction of biomaterial grade scaffolds from the marine red seaweed Devaleraea mollis (commonly known as Pacific dulse) for tissue engineering applications",
    status: "Under processing",
    description: "A novel method for extracting biocompatible, animal-free tissue scaffolds from marine sources, specifically optimizing for clinical-grade regenerative medicine applications.",
    year: "2024"
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    title: "Microstructural analysis of the human ventricular myocardium in subjects with Type-II Diabetes",
    journal: "Biochemistry and Biophysics Reports",
    year: 2026,
    doi: "10.1016/j.bbrep.2026.102459"
  },
  {
    title: "Seaweed Derived Polysaccharides as Sustainable Biomaterials for Tissue Engineering Applications",
    journal: "ACS Biomaterials Science & Engineering",
    year: 2025,
    doi: "10.1021/acsbiomaterials.5c01301"
  },
  {
    title: "Development and optimization of decellularized seaweed scaffolds for tissue engineering",
    journal: "Biointerphases",
    year: 2025,
    doi: "10.1116/6.0004685"
  },
  {
    title: "Identifying and establishing the critical elements of a human cardiac in-vitro model for studying type-II diabetes",
    journal: "Discover Applied Sciences",
    year: 2025,
    doi: "10.1007/s42452-025-07442-y"
  },
  {
    title: "Abstract 2168 Understanding the Molecular Network of the Diabetic Cardiac Extracellular Matrix",
    journal: "Journal of Biological Chemistry",
    year: 2025,
    doi: "10.1016/j.jbc.2025.109332"
  },
  {
    title: "Adoption of microfluidic MEA technology for electrophysiology of 3D neuronal networks exposed to suborbital conditions",
    journal: "npj Microgravity",
    year: 2025,
    doi: "10.1038/s41526-025-00476-x"
  },
  {
    title: "Of cells and tissues: Identifying the elements of a diabetic cardiac in vitro study model",
    journal: "Preprint (Research Square)",
    year: 2024,
    doi: "10.21203/rs.3.rs-5125697/v1"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Research Assistant",
    company: "Oregon State University",
    location: "Corvallis, OR",
    period: "Sept 2024 – Dec 2025",
    highlights: [
      "Led the establishment of a new research laboratory in under 3 months; managed a $100K+ procurement budget to install and calibrate 15+ critical instruments, achieving full operational status ahead of schedule.",
      "Developed 3 different biofunctionalized hydrogels and engineered complex 3D tissue models using 3D bioprinting; validated >97% print fidelity and >95% cell viability over 21 days.",
      "Optimized mammalian cell culture protocols for AC16 cardiomyocytes and bovine satellite cells; validated proliferation assays increasing cell yield by ~50%.",
      "Utilized Python and ImageJ for morphological assessment and high-content image analysis of cell-material interactions; processed 20+ confocal and 200+ fluorescence images."
    ]
  },
  {
    role: "Research Associate",
    company: "University of Texas El Paso",
    location: "El Paso, TX",
    period: "Jan 2024 – Aug 2024",
    highlights: [
      "Developed an in vitro diabetic cardiac aging model by exposing human iPSC-derived cardiomyocytes to AGEs, identifying dose-dependent cytotoxicity thresholds.",
      "Quantified differential expression of key cardiac markers (GJA1, Cx-43, MYH7) via immunostaining, establishing statistical links between metabolic stress and contractile dysfunction.",
      "Performed electrophysiological assessments on iPSC-derived cardiomyocytes, correlating functional alterations with metabolic stress.",
      "Executed proteomics workflows identifying 20+ dysregulated ECM proteins in diabetic human heart tissue.",
      "Conducted microCT analysis on 20+ human heart tissue samples to visualize disease-related structural remodeling.",
      "Fabricated F-gel electrospun scaffolds and evaluated long-term cell viability with C2C12."
    ]
  },
  {
    role: "Research Associate",
    company: "ISMO Biophotonics",
    location: "Chennai, India",
    period: "Jul 2022 – Nov 2023",
    highlights: [
      "Developed organoid-on-chip models for high-throughput drug screening, reducing reagent consumption by 50% via automation.",
      "Established standardized SOPs for organoid culture and imaging, enabling screening of potential cancer drug compounds.",
      "Collaborated with engineers to design embedded live imaging systems and automated media feeding systems."
    ]
  },
  {
    role: "Postgraduate Researcher",
    company: "Indian Institute of Technology Madras",
    location: "Chennai, India",
    period: "Aug 2021 – May 2022",
    highlights: [
      "Designed drug-loaded zein nanoparticles achieving a 72-hour sustained release profile with >90% antimicrobial activity.",
      "Modeled structural interactions of cell-penetrating tetra peptides using GROMACS/PyMOL to identify membrane translocation candidates."
    ]
  },
  {
    role: "Postgraduate Laboratory Trainee",
    company: "Indian Institute of Technology Madras",
    location: "Chennai, India",
    period: "Nov 2020 – Jan 2021",
    highlights: [
      "Investigated E. coli substrate utilization in batch and fed-batch bioreactors, achieving up to 90% substrate conversion under optimized conditions."
    ]
  },
  {
    role: "Undergraduate Researcher",
    company: "Anna University",
    location: "Chennai, India",
    period: "Dec 2019 – Mar 2020",
    highlights: [
      "Evaluated antibacterial and anti-biofilm activity of Alpinia galangal extracts, achieving up to 80% biofilm inhibition.",
      "Performed solvent extraction, characterization, and zone of inhibition assays on 20+ samples."
    ]
  },
  {
    role: "Graduate Intern",
    company: "Anna University",
    location: "Chennai, India",
    period: "May 2019 – Jun 2019",
    highlights: [
      "Treated textile wastewater using anaerobic-aerobic bioreactor systems, achieving 70–85% COD reduction over a 10-day operation period."
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Agentic AI & Compute",
    skills: ["Automated Agentic AI", "Python / R / MATLAB", "GraphPad Prism", "Fusion 360", "Bio-Data Pipelines", "Fullstack JS/TS"]
  },
  {
    category: "Cell & Tissue Engineering",
    skills: ["iPSC Cardiomyocytes", "AC16 & C2C12 Lines", "Bovine Satellite Cells", "Organoid-on-chip", "3D Bioprinting/Hydrogels", "Aseptic Technique", "Human Glutamatergic Neurons"]
  },
  {
    category: "Molecular & Assays",
    skills: ["Flow Cytometry / FACS", "ELISA / PCR", "Immunostaining (ICC/IHC)", "Proteomics Prep", "SDS-PAGE", "Cytotoxicity (MTT/Alamar Blue)"]
  },
  {
    category: "Imaging & Microscopy",
    skills: ["Confocal Laser Scanning", "SEM / micro-CT", "Fluorescence Imaging", "ImageJ / Imaris", "Live/Dead Imaging"]
  },
  {
    category: "Bioprocess & Spectroscopy",
    skills: ["Bioreactors (STR/Packed Bed)", "Protein Purification", "Chromatography", "Spectroscopy (UV-Vis/FTIR/Raman)", "Dialysis/Extractions"]
  },
  {
    category: "In Vivo & Operations",
    skills: ["Rodent Handling & Surgery", "Anesthesia & Sample Collection", "SOP Development", "Lab Safety Protocols", "Inventory Management", "Equipment Calibration"]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "M.S. in Joint- Bioengineering",
    institution: "Oregon State University / University of Oregon",
    period: "2024-2025",
    link: "https://oregonstate.edu"
  },
  {
    degree: "M.Tech in Bioprocess Engineering",
    institution: "IIT Madras",
    period: "2020-2022",
    link: "https://www.iitm.ac.in"
  },
  {
    degree: "B.Tech in Biotechnology",
    institution: "Anna University",
    period: "2016-2020",
    link: "https://www.annauniv.edu"
  }
];

export const MEDIA: MediaItem[] = [
  {
    title: "Seaweed makes for eco-friendly tissue scaffolds and reduces animal testing",
    source: "AIP Publishing",
    date: "2025",
    link: "https://publishing.aip.org/publications/latest-content/seaweed-makes-for-eco-friendly-tissue-scaffolds-and-reduces-animal-testing/",
    type: "Press Release",
    imageUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=600&auto=format&fit=crop",
    description: "New research highlights how red seaweed (Devaleraea mollis) can be used to create sustainable, animal-free tissue scaffolds."
  },
  {
    title: "Cost-effective, eco-friendly tissue scaffolds",
    source: "C&EN (Chemical & Engineering News)",
    date: "Oct 2025",
    link: "https://cen.acs.org/materials/biomaterials/Cost-effective-eco-friendly-tissue/103/web/2025/10",
    type: "Feature",
    imageUrl: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=600&auto=format&fit=crop",
    description: "A deep dive into the economic and environmental benefits of switching from collagen to plant-based scaffolds."
  },
  {
    title: "Vegan-friendly seaweed scaffolds reduce the need for animal testing",
    source: "EurekAlert!",
    date: "2025",
    link: "https://www.eurekalert.org/news-releases/1102468",
    type: "Press Release",
    imageUrl: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=600&auto=format&fit=crop",
    description: "Breakthrough study from Oregon State University shows how marine materials can replace animal-derived matrices in labs."
  },
  {
    title: "Animal-free scaffolds in nutrition research",
    source: "Nutrition Insight",
    date: "2025",
    link: "https://www.nutritioninsight.com/news/animal-free-scaffolds-nutrition-research.html",
    type: "Article",
    imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600&auto=format&fit=crop",
    description: "Exploring the applications of seaweed scaffolds in cellular agriculture and clean meat production."
  },
  {
    title: "Win-Win: Vegan-friendly seaweed scaffolds reduce the need for animal testing",
    source: "ScienceVega Magazine",
    date: "2025",
    link: "https://sciencevega.com",
    type: "Interview",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop",
    description: "An exclusive interview with researcher Gobinath Chithiravelu on his discovery of Devaleraea mollis scaffolds.",
    pdfPages: [
      {
        pageNumber: 1,
        layout: 'cover',
        content: `
# Win-Win: 
# Vegan-friendly seaweed
# scaffolds reduce the need
# for animal testing.

Oregon State University researcher Gobinath Chithiravelu discusses seaweed-derived tissue scaffolds that offer a sustainable, vegan-friendly approach to medical devices research that reduces the need for animal testing.
        `,
        image: "https://images.unsplash.com/photo-1559592413-7cec430aa669?q=80&w=800&auto=format&fit=crop",
        imageCaption: "Seaweed sunset. 01 Image © Jo Elphick from Long Beach NSW, Australia, CC0, via Wikimedia Commons."
      },
      {
        pageNumber: 2,
        layout: 'full-image',
        content: "",
        image: "https://images.unsplash.com/photo-1629196914168-3a958d929971?q=80&w=800&auto=format&fit=crop", 
        imageCaption: "sciencevega.com 02"
      },
      {
        pageNumber: 3,
        layout: 'text-columns',
        content: `
Animal testing is simply part of the mainstream when it comes to experimentation for things that may one day be put into humans as medical devices. Stents are one particular example whereby a lattice tube is often put into tubes within the human body, such as arteries, to make sure they remain open allowing blood to flow more freely.

But what if we could remove the need for animal testing by devising a plant-based solution to tissue scaffolds? Belonging to a collaborative team, Oregon State University researcher Gobinath Chithiravelu under the guidance of PI, Binata Joddar, Associate Professor for Bioengineering in CBEE, has found a viable solution to this ethical problem: seaweed. ScienceVega met up with him on behalf of this team to discuss both his discovery, and the implications for laboratory mice.

**Gobinath Chithiravelu**
Graduate Research Assistant
Oregon State University
        `,
        profileImage: PROFILE_IMAGE,
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=400&auto=format&fit=crop",
        imageCaption: "The seaweed sample before preparation and SEM images of the seaweed scaffolds with new cells. Image © Gobinath Chithiravelu."
      },
      {
        pageNumber: 4,
        layout: 'text-standard',
        content: `
**ScienceVega: To start, can you give us a little background on tissue scaffolds? What are they made of, and what are they used for?**

**GC:** Tissue scaffolds are three-dimensional structures designed to support cell growth and organisation in the lab. Essentially, they act as temporary templates that guide tissue formation. These scaffolds closely mimic the extracellular matrix, the natural environment in our bodies that provides structural support and biological cues for cells.

As for their composition, scaffolds can be made from a variety of materials. There are natural sources, such as collagen, gelatine, alginate, and chitosan, which are commonly used in tissue engineering and regenerative medicine. Synthetic polymers are also used, including polycaprolactone (PCL) and poly(lactide-co-glycolide) (PLGA), which are US Food and Drug Administration-approved.

The choice of material largely depends on the intended application. For instance, synthetic materials are often chosen to enhance mechanical strength or to control degradation rates, particularly for applications like orthopaedic implants where scaffolds need to remain in the body longer. In contrast, natural materials are preferred when promoting cell attachment and growth is the priority.
        `,
        image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=600&auto=format&fit=crop",
        imageCaption: "A stent can be used to keep open a passageway in the body, most often a narrowed or blocked artery."
      },
      {
        pageNumber: 5,
        layout: 'full-image',
        content: "",
        image: "https://images.unsplash.com/photo-1581093458891-7731a1bc1286?q=80&w=800&auto=format&fit=crop", 
        imageCaption: "05 Gobinath Chithiravelu in the lab. Image © Gobinath Chithiravelu."
      },
      {
        pageNumber: 6,
        layout: 'text-columns',
        content: `
**ScienceVega: So why did you decide to explore seaweed as an alternative to animal or synthetic-derived scaffolds?**

**GC:** Our interest in seaweed stemmed from sustainability. Seaweed is abundant in the oceans, so we hypothesised that it could provide a renewable source of biomaterials without harming animals or incurring the high costs associated with traditional scaffolds. Most scaffolds currently used in biomedical research are animal-derived, such as collagen and gelatine, which raises ethical concerns and can be prohibitively expensive.

For instance, collagen can cost thousands of dollars per gram. Scaling up production for larger tissues or preclinical trials becomes a significant challenge. Seaweed, on the other hand, is widely available and naturally rich in beneficial properties like antibacterial activity, antioxidant compounds, and structural porosity, making it an ideal candidate for supporting cell growth. Using seaweed allows us to develop cost-effective, ethical, and sustainable scaffolds.

**ScienceVega: What research did you conduct to support the idea that seaweed-derived scaffolds are viable?**

**GC:** In our recent study, we focused on a species called *Devaleraea mollis*, a red seaweed found in the northwestern coastal regions. This species is rich in natural polysaccharides and proteins, making it excellent for forming hydrogels that support cell growth. Additionally, it has a balanced composition that provides good mechanical properties, allowing us to process it into 3D scaffolds and fine-tune the structure as needed. 

While our research centred on this red seaweed, other species also have unique biochemical components like alginate or carrageenan, which could be optimised for different tissue applications. Exploring these options opens up new opportunities for designing functional, sustainable biomaterials.

**ScienceVega: What further research is required before seaweed-derived scaffolds can be used in preclinical or clinical settings?**

**GC:** Several key areas need attention. First, we need comprehensive biocompatibility and immunogenicity studies to ensure these materials are safe over the long term. Second, we must optimise their mechanical and biochemical properties to match the requirements of specific tissues, since each organ has unique needs.

Scaling up fabrication processes reproducibly is another major challenge, along with regulatory compliance to meet preclinical and clinical standards. Finally, *in vivo* animal studies are necessary to test how these scaffolds integrate with natural tissues and degrade over time. Once these aspects are validated, seaweed-derived scaffolds could become a truly sustainable alternative for clinical tissue engineering.

**ScienceVega: Can you give an estimate of how long it might be before these scaffolds are in use?**

**GC:** While it depends on several factors, I would estimate ten years before seaweed-derived scaffolds could see use in preclinical or clinical applications.
        `
      },
      {
        pageNumber: 7,
        layout: 'text-columns',
        content: `
**ScienceVega: How might your findings reduce the need for animal testing?**

**GC:** Our research could significantly reduce animal testing, particularly in cardiac tissue engineering. By creating seaweed-derived scaffolds that support the growth and function of cells in a three-dimensional environment, we can develop realistic *in vitro* tissue models. These models allow us to study drug responses, tissue development, and disease mechanisms without relying on live animals.

While this approach may not replace all animal studies, it offers a safer, ethical, and scalable alternative for many experiments, especially in drug testing and tissue engineering.

**ScienceVega: Was the idea of reducing animal testing or providing a vegan-friendly option a driving factor in your research?**

**GC:** Absolutely. One of our main motivations was to reduce reliance on animal-derived materials in research. We wanted to create human-specific tissue models using stem cell technology, allowing for more accurate testing without involving animal products. Seaweed provides a vegan-friendly, sustainable alternative that can mimic human tissues closely, increasing the translational potential of discoveries from bench to bedside.

**ScienceVega: And the vegan aspect – is that just a happy coincidence because seaweed is a plant?**

**GC:** It is true that it naturally aligns with vegan principles, which is an added benefit. It wasn’t just a coincidence; it’s part of the ethical framework of our work.

**ScienceVega: Is there a market for vegan-friendly scaffolds?**

**GC:** Definitely. For example, in cellular agriculture and lab-grown meat, scaffolds are critical for creating structured, marbled products. Vegan-friendly scaffolds are particularly important for this market, which is already valued at over $1bn.

**ScienceVega: So seaweed-derived scaffolds represent both a scientific and ethical breakthrough.**

**GC:** Exactly. They are sustainable, vegan-friendly, and support human-specific tissue models. They reduce reliance on animal products, lower research costs, and offer better translational outcomes. It’s a win-win for science, ethics, and the environment.

The link to the original paper can be found here.
        `
      },
      {
        pageNumber: 8,
        layout: 'full-image',
        content: "",
        image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?q=80&w=800&auto=format&fit=crop", 
        imageCaption: "08 Using seaweed to develop stents could reduce the need for laboratory mice. It also means the resulting stents are vegan. Image © Rama."
      }
    ]
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: "g1",
    title: "Profile Portrait",
    category: "Personal",
    imageUrl: PROFILE_IMAGE, 
    description: "Official profile shot."
  },
  {
    id: "g2",
    title: "Advanced Lab Setup",
    category: "Lab",
    imageUrl: "gallery/photo-1.jpg", 
    description: "Configuring the new bio-engineering research station at Oregon State."
  },
  {
    id: "g3",
    title: "Vibe Coding Station",
    category: "Tech",
    imageUrl: "gallery/photo-2.jpg",
    description: "Building the next generation of agentic AI services in the home lab."
  },
  {
    id: "g4",
    title: "Conference Speaking",
    category: "Conference",
    imageUrl: "gallery/photo-3.jpg",
    description: "Presenting findings on Seaweed Derived Polysaccharides."
  },
  {
    id: "g5",
    title: "Microscopic Analysis",
    category: "Lab",
    imageUrl: "gallery/photo-4.jpg",
    description: "High-content image analysis of cell-material interactions."
  },
  {
    id: "g6",
    title: "University Campus",
    category: "Personal",
    imageUrl: "gallery/photo-5.jpg",
    description: "Morning walk through the campus before heading to the lab."
  },
  {
    id: "g7",
    title: "Data Synthesis",
    category: "Tech",
    imageUrl: "gallery/photo-6.jpg",
    description: "Processing complex biological datasets using Python pipelines."
  }
];
