import { useState } from "react";
import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

type ProjectKey = "heart" | "llm";

const projects = [
  {
    key: "heart" as const,
    category: "MEDICAL AUDIO AI, XAI & AGENTIC RAG",
    status: "RESEARCH CONCEPT",
    title: "Heart Disease Classification and Patient-Specific Risk Stratification Using RosaNet and Agentic AI",
    description:
      "A research project exploring heart-sound classification across five valvular targets using a deep-learning pipeline, with explainable AI and an experimental retrieval-augmented generation workflow.",
    classes: ["N", "AS", "AR", "MR", "MS"],
    pipeline: ["WAV Recordings", "Audio Preprocessing", "Log-Mel Spectrograms", "RosaNet", "Classification"],
    ragPipeline: ["Verified Medical Sources", "Document Chunking", "Vector Embeddings", "ChromaDB Retrieval", "LangChain Explanation"],
    technologies: ["Python", "TensorFlow", "Machine Learning", "Explainable AI", "Agentic RAG"]
  },
  {
    key: "llm" as const,
    category: "COMPUTATIONAL MATERIALS SCIENCE & NLP",
    status: "EXPLORATION",
    title: "LLM-Based Prediction of Crystalline Material Properties",
    description:
      "A project exploring crystalline material property prediction using crystallographic structure files, text representations of crystal structures, and transformer-based deep learning.",
    pipeline: ["CIF Files", "Structure Parsing", "Text Descriptions", "Transformer Encoder", "Regression Head", "Predicted Property"],
    technologies: ["Python", "Machine Learning", "Streamlit"],
    repositoryUrl: null
  }
];

const additionalProjects = [
  {
    title: "SocioSphere – Social Media Platform",
    description: "Developed a social media application using the MERN stack, bringing together a modern web interface and database-backed functionality.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"]
  },
  {
    title: "ReadMeGen – README Auto Generator",
    description: "Built a web application that analyzes public GitHub repositories and generates concise README files with a live Markdown preview.",
    technologies: ["React", "Vite", "Express", "Gemini"],
    repositoryUrl: "https://github.com/vamshi-reddy111/ReadMeGen"
  }
];

function Pipeline({ items }: { items: string[] }) {
  return (
    <div className="pipeline" aria-label="Project pipeline">
      {items.map((item, index) => (
        <div className="pipeline-step" key={item}>
          <span>{item}</span>
          {index < items.length - 1 && <b aria-hidden="true">→</b>}
        </div>
      ))}
    </div>
  );
}

function HeartVisualization() {
  const [selectedClass, setSelectedClass] = useState("N");
  const amplitudes: Record<string, string> = { N: "M0 104 C20 104 22 104 30 104 S38 103 43 104 S48 104 52 104 S57 104 61 104 S66 104 70 104 S76 104 80 104 S87 104 92 104 S99 104 104 104", AS: "M0 104 C20 104 24 104 30 104 S37 103 43 104 S48 104 52 104 S56 102 60 104 S64 104 70 104 S75 104 80 104 S86 104 92 104 S99 104 104 104", AR: "M0 104 C20 104 26 104 32 104 S39 104 45 104 L50 88 L54 118 L58 104 S66 104 72 104 S80 104 88 104 S97 104 104 104", MR: "M0 104 C18 104 25 103 31 104 L38 72 L44 128 L50 104 L56 91 L61 117 L67 104 S82 104 104 104", MS: "M0 104 C18 104 25 104 31 104 L38 92 L43 116 L49 104 L55 90 L60 118 L66 104 L72 94 L77 114 L83 104 S95 104 104 104" };
  return (
    <div className="visual heart-visual">
      <div className="visual-heading"><span>HEART-SOUND SIGNAL</span><strong>ILLUSTRATIVE</strong></div>
      <svg viewBox="0 0 104 150" role="img" aria-label={`Illustrative waveform for class ${selectedClass}`} preserveAspectRatio="none">
        <defs><linearGradient id="wave-gradient" x1="0" x2="1"><stop stopColor="#C4B5FD" /><stop offset="1" stopColor="#8B5CF6" /></linearGradient></defs>
        <path className="grid-line" d="M0 25H104M0 50H104M0 75H104M0 100H104M0 125H104" />
        <path className="waveform" d={amplitudes[selectedClass]} vectorEffect="non-scaling-stroke" />
      </svg>
      <div className="class-selector" role="group" aria-label="Select illustrative heart-sound class">
        {["N", "AS", "AR", "MR", "MS"].map((item) => (
          <button type="button" className={selectedClass === item ? "selected" : ""} onClick={() => setSelectedClass(item)} key={item} aria-pressed={selectedClass === item}>{item}</button>
        ))}
      </div>
      <p className="visual-note">Class selection changes this illustrative signal only; it is not a clinical prediction.</p>
    </div>
  );
}

function CrystalVisualization() {
  const [view, setView] = useState<"lattice" | "text">("lattice");
  return (
    <div className="visual crystal-visual">
      <div className="visual-heading"><span>STRUCTURE VIEW</span><strong>ILLUSTRATIVE</strong></div>
      {view === "lattice" ? (
        <svg className="lattice" viewBox="0 0 300 180" role="img" aria-label="Illustrative crystal lattice">
          <path d="M40 50L150 20L260 50L150 80ZM40 50V140L150 170V80ZM260 50V140L150 170" />
          {[["40", "50"], ["150", "20"], ["260", "50"], ["150", "80"], ["40", "140"], ["260", "140"], ["150", "170"], ["95", "35"], ["205", "35"], ["95", "125"], ["205", "125"]].map(([cx, cy]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="7" />)}
        </svg>
      ) : (
        <pre className="structure-text">{`_atom_site_label   _atom_site_fract_x
  C1              0.0000
  C2              0.5000
  O1              0.2500
  symmetry: cubic
  a = 4.12 Å`}</pre>
      )}
      <div className="view-selector" role="group" aria-label="Select crystal structure view">
        <button type="button" className={view === "lattice" ? "selected" : ""} onClick={() => setView("lattice")} aria-pressed={view === "lattice"}>Lattice</button>
        <button type="button" className={view === "text" ? "selected" : ""} onClick={() => setView("text")} aria-pressed={view === "text"}>Text representation</button>
      </div>
      <p className="visual-note">Structure and values shown are illustrative, not generated by the trained model.</p>
    </div>
  );
}

function FeaturedProject({ project }: { project: typeof projects[number] }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <article className="featured-project">
      <div className="project-meta"><span className="category">{project.category}</span><span className="status">{project.status}</span></div>
      <h3>{project.title}</h3>
      <p className="description">{project.description}</p>
      <div className="project-content">
        <div className="architecture">
          <h4>ARCHITECTURE</h4>
          <Pipeline items={project.pipeline} />
          {project.key === "heart" && <><h4 className="secondary-heading">AGENTIC RAG WORKFLOW</h4><Pipeline items={project.ragPipeline} /></>}
        </div>
        {project.key === "heart" ? <HeartVisualization /> : <CrystalVisualization />}
      </div>
      <div className="project-bottom">
        <div className="tags">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
        <button type="button" className="case-study-toggle" onClick={() => setExpanded(!expanded)} aria-expanded={expanded}>{expanded ? "Hide case study ↑" : "Read case study →"}</button>
      </div>
      {expanded && <div className="case-study"><h4>PROJECT NOTES</h4><p><strong>Motivation:</strong> Explore a transparent, research-oriented workflow that connects structured inputs to understandable outputs.</p><p><strong>Methodology:</strong> Separate preprocessing, representation, model, and explanation stages make the architecture easy to inspect and extend.</p><p><strong>Scope:</strong> This portfolio presentation is an architectural summary and does not claim clinical validation or production deployment.</p></div>}
    </article>
  );
}

export function Project() {
  return (
    <Container id="project">
      <div className="section-heading"><span>SELECTED WORK / 2026</span><h2>Featured Projects</h2><p>Research-driven systems at the intersection of machine learning, language, and structured data.</p></div>
      <div className="featured-projects">{projects.map((project) => <ScrollAnimation animateIn="fadeInUp" key={project.key}><FeaturedProject project={project} /></ScrollAnimation>)}</div>
      <div className="additional-heading"><span>OTHER BUILDS</span><h3>More from the lab</h3></div>
      <div className="additional-projects">{additionalProjects.map((project) => <article className="additional-project" key={project.title}><div><h4>{project.title}</h4><p>{project.description}</p><div className="tags">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></div>{project.repositoryUrl ? <a className="repo-link" href={project.repositoryUrl} target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="" /> Repository</a> : <span className="unavailable">Repository unavailable</span>}</article>)}</div>
    </Container>
  );
}
