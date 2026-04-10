import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Database, Linkedin, Github, Mail, Binary, Download, Activity, Code2, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import MatrixBackground from './MatrixBackground';
import InteractiveTerminal from './InteractiveTerminal';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-300 font-mono p-4 md:p-8 selection:bg-hacker/20 selection:text-hacker relative z-0">
      
      <MatrixBackground />
      
      {/* --- HEADER --- */}
      <header className="max-w-6xl mx-auto mt-8 md:mt-16 mb-12 md:mb-20 border-l-2 border-hacker pl-6 py-2 bg-slate-950/40 rounded-r-md backdrop-blur-sm border border-slate-900/50">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex items-center gap-3 text-hacker/80 text-xs mb-3">
            <Terminal size={14} />
            <span>sys.log | portfolio_gustavo_v2026.exe</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tighter mb-3 drop-shadow-md">
            {">"} USER: <span className="text-hacker">GUSTAVO_VIEIRA</span>
          </h1>
          <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
            Formado em Análise e Desenvolvimento de Sistemas. Profissional proativo, determinado e organizado, com foco em resolução ágil de problemas. Atuando com infraestrutura, desenvolvimento e automações inteligentes.
          </p>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 mt-8">
            <DownloadButton />
            <div className="flex gap-5 text-slate-500">
              <SocialIcon icon={<Linkedin size={22}/>} url="https://www.linkedin.com/in/gustavo-vieira-42a16b387/" />
              <SocialIcon icon={<Github size={22}/>} url="https://github.com/ggdevs77-macroboy" />
              <SocialIcon icon={<Mail size={22}/>} url="mailto:ggdevs77@gmail.com" />
            </div>
          </div>
        </motion.div>
      </header>

      {/* --- TERMINAL --- */}
      <InteractiveTerminal />

      {/* --- PROJETOS --- */}
      <main className="max-w-6xl mx-auto mt-12">
        <div className="flex items-center gap-4 mb-10 border-b border-slate-800/80 pb-4">
          <Binary className="text-hacker" size={28} />
          <h2 className="text-2xl font-bold text-white tracking-tight drop-shadow-md">./PROJETO_PRINCIPAL</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard 
            title="Forum_Interno.py" 
            desc="Solução de troubleshooting desenvolvida para a equipe de suporte da MaxData otimizar a resolução de chamados técnicos, com dados centralizados em banco SQLite." 
            icon={<Database size={22}/>}
            tech={["Python", "SQLite", "Flask"]}
            images={[
              "/forum1.png", 
              "/forum2.png", 
              "/forum3.png"
            ]} 
          />
        </div>
      </main>

      {/* --- RADAR DE SKILLS --- */}
      <section className="max-w-6xl mx-auto mt-20">
        <div className="flex items-center gap-4 mb-10 border-b border-slate-800/80 pb-4">
          <Code2 className="text-hacker" size={28} />
          <h2 className="text-2xl font-bold text-white tracking-tight drop-shadow-md">./TECH_RADAR (Habilidades)</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SkillCategory title="Dados & Backend" skills={["Python", "Java", "SQL", "SQLite", "Flask"]} />
          <SkillCategory title="Infra & Automação" skills={["Hardware/Software", "Nagios", "Power BI", "PyAutoGUI", "Excel Avançado"]} />
          <SkillCategory title="Metodologias & UI" skills={["Suporte N1/N2", "Diagrama de Ishikawa", "React", "Tailwind CSS"]} />
        </div>
      </section>

      {/* --- LINHA DO TEMPO --- */}
      <section className="max-w-6xl mx-auto mt-20">
        <div className="flex items-center gap-4 mb-10 border-b border-slate-800/80 pb-4">
          <Activity className="text-hacker" size={28} />
          <h2 className="text-2xl font-bold text-white tracking-tight drop-shadow-md">./SYSTEM_LOGS (Experiência & Educação)</h2>
        </div>

        <div className="relative border-l-2 border-slate-800/60 ml-4 md:ml-6">
          <TimelineItem 
            year="Jun 2025 - ATUAL" title="Analista de Suporte" subtitle="@ MaxData Sistemas | Imperatriz - MA"
            desc="Responsável por instalações internas e externas. Atuação com suporte níveis N1 e N2, treinando e auxiliando clientes. Aplicação de metodologias ágeis (Diagrama de Ishikawa) para melhorar a eficiência dos atendimentos."
          />
          <TimelineItem 
            year="Fev 2024 - Out 2024" title="Operador de Impressora" subtitle="@ Ricoh Ltda | São Paulo - SP"
            desc="Monitoramento operacional e de insumos de impressoras com planilhas automatizadas em Excel. Implementação de novo sistema de chamados e monitoramento pelo Nagios, além de auditorias internas periódicas."
          />
          <TimelineItem 
            year="2022 - 2024" title="Análise e Desenvolvimento de Sistemas" subtitle="@ Faculdade de Tecnologia Porto das Monções (FAMO)"
            desc="Formação superior concluída. Cursos complementares em Programação Básica com Java (IFMG) e Banco de Dados com Java (Unieducar)."
          />
          <TimelineItem 
            year="Fev 2021 - Jan 2022" title="Técnico de Informática" subtitle="@ SOS Celulares e Informática | Porto Franco - MA"
            desc="Montagem e desmontagem de computadores e celulares. Atendimento direto ao cliente, solucionando problemas e auxiliando na gestão de operações administrativas."
          />
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="max-w-6xl mx-auto mt-24 md:mt-32 border-t border-slate-900/80 pt-8 text-center text-xs text-slate-600 tracking-widest backdrop-blur-sm">
        [SYSTEM STATUS: <span className="text-hacker/80 animate-pulse">OPERATIONAL</span>] - {new Date().getFullYear()} - GUSTAVO VIEIRA
      </footer>
    </div>
  );
}

{/* --- COMPONENTES AUXILIARES --- */}
function SkillCategory({ title, skills }) {
  return (
    <div className="bg-slate-950/60 border border-slate-800/80 p-6 rounded-lg backdrop-blur-sm hover:border-hacker/30 transition-colors">
      <h3 className="text-white font-bold mb-4 flex items-center gap-2">
        <span className="text-hacker">{">"}</span> {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map(skill => (
          <span key={skill} className="text-xs font-mono bg-hacker/5 text-hacker/90 border border-hacker/20 px-3 py-1.5 rounded hover:bg-hacker/20 hover:border-hacker/50 transition-all cursor-default">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function TimelineItem({ year, title, subtitle, desc }) {
  return (
    <div className="mb-10 ml-8 relative group">
      <span className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full bg-[#0a0a0a] border-2 border-slate-700 group-hover:border-hacker group-hover:bg-hacker/20 transition-all duration-300 shadow-[0_0_10px_rgba(16,185,129,0)] group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)]"></span>
      <div className="text-hacker/80 text-[10px] font-bold tracking-widest mb-1 font-sans">{year}</div>
      <h3 className="text-white text-lg font-bold">{title}</h3>
      <div className="text-slate-500 text-sm mb-3 font-sans italic">{subtitle}</div>
      <p className="text-slate-400 text-sm leading-relaxed max-w-3xl">{desc}</p>
    </div>
  );
}

function DownloadButton() {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <a href="/curriculo_2026.pdf" download="Curriculo_Gustavo_Vieira.pdf" className="flex items-center justify-center gap-3 px-6 py-3 bg-hacker/10 border border-hacker text-hacker font-bold rounded hover:bg-hacker hover:text-[#0a0a0a] transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.15)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)]">
        <Download size={18} />
        <span className="tracking-widest">{"[ DOWNLOAD_CV.pdf ]"}</span>
      </a>
    </motion.div>
  );
}

function SocialIcon({ icon, url }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="hover:text-hacker hover:scale-110 transition-all duration-200">{icon}</a>
  );
}

{/* --- COMPONENTE: CARTÃO DE PROJETO COM GALERIA DE IMAGENS --- */}
function ProjectCard({ title, desc, icon, tech, images }) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  
  const hasImages = images && images.length > 0;

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <>
      <motion.div 
        whileHover={{ scale: 1.03, backgroundColor: "rgba(16, 185, 129, 0.05)", borderColor: "rgba(16, 185, 129, 0.4)" }}
        className="p-6 border border-slate-800/80 rounded-lg bg-slate-950/60 backdrop-blur-sm group transition-all duration-300 flex flex-col h-full relative overflow-hidden"
      >
        {/* Área da Imagem de Capa */}
        {hasImages && (
          <div 
            onClick={() => setIsGalleryOpen(true)}
            className="w-full h-48 mb-5 overflow-hidden rounded border border-slate-800/50 relative cursor-pointer group/img"
          >
            {/* Overlay com botão Expandir */}
            <div className="absolute inset-0 bg-hacker/20 group-hover/img:bg-black/50 transition-colors duration-500 z-10 flex items-center justify-center">
              <div className="opacity-0 group-hover/img:opacity-100 bg-[#0a0a0a]/80 text-hacker px-4 py-2 rounded flex items-center gap-2 border border-hacker/50 transition-all duration-300 transform scale-95 group-hover/img:scale-100">
                <Maximize2 size={16} />
                <span className="font-bold tracking-widest text-sm">EXPANDIR</span>
              </div>
            </div>
            
            <img 
              src={images[0]} 
              alt={`Print do projeto ${title}`} 
              className="w-full h-full object-cover grayscale opacity-80 group-hover/img:grayscale-0 group-hover/img:opacity-100 transition-all duration-500"
            />
            
            {/* Indicador de quantidade de imagens */}
            {images.length > 1 && (
              <div className="absolute bottom-2 right-2 bg-[#0a0a0a]/90 text-hacker text-xs px-2 py-1 rounded border border-hacker/30 z-20 font-bold">
                1 / {images.length}
              </div>
            )}
          </div>
        )}

        <div className="flex items-center gap-4 mb-4 text-hacker group-hover:text-hacker/90 transition-colors">
          <div className="p-2 bg-hacker/10 rounded-md border border-hacker/20">{icon}</div>
          <h3 className="text-lg text-white font-bold tracking-tight z-10">{title}</h3>
        </div>
        <p className="text-sm text-slate-400 mb-6 flex-grow leading-relaxed z-10">{desc}</p>
        
        <div className="flex items-center gap-2.5 text-[11px] text-hacker/70 font-bold uppercase mt-auto pt-4 border-t border-slate-800/50 z-10">
          <span className="text-slate-600">[</span>
          {tech.map((item, index) => (
            <span key={item} className="flex items-center gap-2">
              {item}
              {index < tech.length - 1 && <span className="text-slate-700">|</span>}
            </span>
          ))}
          <span className="text-slate-600">]</span>
        </div>
      </motion.div>

      {/* GALERIA MODAL (TELA CHEIA) */}
      <AnimatePresence>
        {isGalleryOpen && hasImages && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-[#0a0a0a]/95 backdrop-blur-md"
          >
            {/* Fundo clicável para fechar */}
            <div className="absolute inset-0 cursor-pointer" onClick={() => setIsGalleryOpen(false)}></div>
            
            {/* Janela Principal da Galeria */}
            <motion.div 
              initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }}
              className="relative w-full max-w-5xl bg-slate-950 border border-hacker/40 rounded-lg shadow-[0_0_40px_rgba(16,185,129,0.15)] flex flex-col overflow-hidden z-10"
            >
              {/* Header estilo janela do Windows/Linux */}
              <div className="bg-[#0a0a0a] border-b border-hacker/30 px-4 py-3 flex justify-between items-center">
                <div className="flex items-center gap-2 text-hacker/80 text-xs font-mono">
                  <Terminal size={14} />
                  <span>image_viewer.exe - {title} [{currentImage + 1}/{images.length}]</span>
                </div>
                <button onClick={() => setIsGalleryOpen(false)} className="text-slate-500 hover:text-red-500 transition-colors cursor-pointer">
                  <X size={20} />
                </button>
              </div>

              {/* Área da Imagem Expandida com bg-[#0a0a0a] para melhor nitidez */}
              <div className="relative h-[60vh] md:h-[75vh] w-full flex items-center justify-center bg-[#050505] p-2">
                {images.length > 1 && (
                  <>
                    <button onClick={prevImage} className="absolute left-4 p-3 bg-black/60 text-hacker hover:bg-hacker hover:text-black rounded-full border border-hacker/30 backdrop-blur-sm transition-all z-20 shadow-lg">
                      <ChevronLeft size={24} />
                    </button>
                    <button onClick={nextImage} className="absolute right-4 p-3 bg-black/60 text-hacker hover:bg-hacker hover:text-black rounded-full border border-hacker/30 backdrop-blur-sm transition-all z-20 shadow-lg">
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
                <img 
                  src={images[currentImage]} 
                  alt={`Tela ${currentImage + 1} do projeto`} 
                  className="max-w-full max-h-full object-contain rounded border border-slate-800/50 shadow-2xl bg-[#0a0a0a]"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}