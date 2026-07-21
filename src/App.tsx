/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar,
  Instagram,
  Facebook,
  Youtube,
  Clock,
  ArrowRight
} from "lucide-react";

// Import modular pages
import PageHome from "./components/pages/PageHome";
import PageProblema from "./components/pages/PageProblema";
import PageQueEsShipeki from "./components/pages/PageQueEsShipeki";
import PageMetodologia from "./components/pages/PageMetodologia";
import PageServicios from "./components/pages/PageServicios";
import PageProfeludos from "./components/pages/PageProfeludos";
import PageQuienEsShirley from "./components/pages/PageQuienEsShirley";
import PageCasosExito from "./components/pages/PageCasosExito";
import PagePekisnax from "./components/pages/PagePekisnax";
import PageBlog from "./components/pages/PageBlog";
import PageGaleria from "./components/pages/PageGaleria";
import PageFaqs from "./components/pages/PageFaqs";
import PageAgendaValoracion from "./components/pages/PageAgendaValoracion";
import PageUiKit from "./components/pages/PageUiKit";
import shipekiLogo from "./assets/images/shipeki_logo_1784614122822.jpg";

export default function App() {
  const [activePage, setActivePage] = useState<string>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Navigation dropdown states (desktop)
  const [nosotrosDropdownOpen, setNosotrosDropdownOpen] = useState(false);
  const [recursosDropdownOpen, setRecursosDropdownOpen] = useState(false);

  // Global linking states (assessment to booking form)
  const [linkedProfile, setLinkedProfile] = useState<string | null>(null);
  const [linkedServices, setLinkedServices] = useState<string[]>([]);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false);
    setNosotrosDropdownOpen(false);
    setRecursosDropdownOpen(false);
  }, [activePage]);

  const handleSelectAssessmentResult = (title: string, recommendedServices: string[]) => {
    setLinkedProfile(title);
    setLinkedServices(recommendedServices);
    setActivePage("agenda");
  };

  const handleClearLink = () => {
    setLinkedProfile(null);
    setLinkedServices([]);
  };

  const pagesMap: Record<string, string> = {
    home: "Inicio",
    problema: "El Problema",
    shipeki: "¿Qué es Shipeki?",
    metodologia: "Metodología",
    servicios: "Servicios",
    profeludos: "Profeludos",
    shirley: "¿Quién es Shirley?",
    casos: "Casos de Éxito",
    pekisnax: "Tienda Pekisnax",
    blog: "Blog",
    galeria: "Galería",
    faqs: "Preguntas Frecuentes",
    agenda: "Agenda tu Valoración",
    uikit: "✨ UI Kit & Figma Mockup"
  };

  const renderActivePage = () => {
    switch (activePage) {
      case "home":
        return <PageHome onNavigate={setActivePage} />;
      case "problema":
        return <PageProblema onNavigate={setActivePage} />;
      case "shipeki":
        return <PageQueEsShipeki onNavigate={setActivePage} />;
      case "metodologia":
        return <PageMetodologia onNavigate={setActivePage} />;
      case "servicios":
        return <PageServicios onNavigate={setActivePage} />;
      case "profeludos":
        return <PageProfeludos onNavigate={setActivePage} />;
      case "shirley":
        return <PageQuienEsShirley onNavigate={setActivePage} />;
      case "casos":
        return <PageCasosExito onNavigate={setActivePage} />;
      case "pekisnax":
        return <PagePekisnax onNavigate={setActivePage} />;
      case "blog":
        return <PageBlog onNavigate={setActivePage} />;
      case "galeria":
        return <PageGaleria onNavigate={setActivePage} />;
      case "faqs":
        return <PageFaqs onNavigate={setActivePage} />;
      case "uikit":
        return <PageUiKit />;
      case "agenda":
        return (
          <PageAgendaValoracion
            linkedProfile={linkedProfile}
            linkedServices={linkedServices}
            onSelectResult={handleSelectAssessmentResult}
            onClearLink={handleClearLink}
          />
        );
      default:
        return <PageHome onNavigate={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0C] flex flex-col justify-between selection:bg-[#94E07B]/30 selection:text-white">
      {/* LUXURY TOP BAR / HEADER */}
      <header className="sticky top-0 z-40 bg-[#0A0A0C]/70 backdrop-blur-md border-b border-white/5 shadow-md">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          
          {/* Brand Logo */}
          <button 
            onClick={() => setActivePage("home")} 
            className="flex items-center gap-3 group focus:outline-none cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 p-0.5 bg-white shadow-md shadow-[#94E07B]/20 group-hover:scale-105 transition-transform">
              <img
                src={shipekiLogo}
                alt="Shipeki Logo"
                className="w-full h-full object-contain rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-left">
              <span className="font-display text-2xl font-black tracking-tight text-white group-hover:text-[#94E07B] transition-colors block leading-none">
                Shipeki
              </span>
              <span className="text-[9px] font-mono font-bold tracking-widest text-[#94E07B] uppercase block mt-1">
                Centro de Desarrollo Canino
              </span>
            </div>
          </button>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => setActivePage("home")}
              className={`font-display text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                activePage === "home" ? "text-[#94E07B]" : "text-gray-400 hover:text-white"
              }`}
            >
              Inicio
            </button>

            {/* Nosotros Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setNosotrosDropdownOpen(!nosotrosDropdownOpen);
                  setRecursosDropdownOpen(false);
                }}
                className={`font-display text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer ${
                  ["shipeki", "shirley", "profeludos"].includes(activePage) ? "text-[#94E07B]" : "text-gray-400 hover:text-white"
                }`}
              >
                Nosotros <ChevronDown className="w-3.5 h-3.5" />
              </button>

              <AnimatePresence>
                {nosotrosDropdownOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setNosotrosDropdownOpen(false)} />
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 mt-3.5 w-52 bg-[#121214] rounded-2xl shadow-2xl border border-white/10 p-2.5 z-50 flex flex-col gap-1"
                    >
                      <button
                        onClick={() => {
                          setActivePage("shipeki");
                          setNosotrosDropdownOpen(false);
                        }}
                        className="w-full text-left p-3 text-xs font-display font-bold uppercase tracking-wider text-gray-300 hover:text-[#94E07B] hover:bg-white/5 rounded-xl transition-all cursor-pointer"
                      >
                        ¿Qué es Shipeki?
                      </button>
                      <button
                        onClick={() => {
                          setActivePage("shirley");
                          setNosotrosDropdownOpen(false);
                        }}
                        className="w-full text-left p-3 text-xs font-display font-bold uppercase tracking-wider text-gray-300 hover:text-[#94E07B] hover:bg-white/5 rounded-xl transition-all cursor-pointer"
                      >
                        ¿Quién es Shirley?
                      </button>
                      <button
                        onClick={() => {
                          setActivePage("profeludos");
                          setNosotrosDropdownOpen(false);
                        }}
                        className="w-full text-left p-3 text-xs font-display font-bold uppercase tracking-wider text-gray-300 hover:text-[#94E07B] hover:bg-white/5 rounded-xl transition-all cursor-pointer"
                      >
                        Profeludos
                      </button>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => setActivePage("metodologia")}
              className={`font-display text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                activePage === "metodologia" ? "text-[#94E07B]" : "text-gray-400 hover:text-white"
              }`}
            >
              Metodología
            </button>

            <button
              onClick={() => setActivePage("servicios")}
              className={`font-display text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                activePage === "servicios" ? "text-[#94E07B]" : "text-gray-400 hover:text-white"
              }`}
            >
              Servicios
            </button>

            <button
              onClick={() => setActivePage("casos")}
              className={`font-display text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                activePage === "casos" ? "text-[#94E07B]" : "text-gray-400 hover:text-white"
              }`}
            >
              Historias
            </button>

            <button
              onClick={() => setActivePage("pekisnax")}
              className={`font-display text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                activePage === "pekisnax" ? "text-[#94E07B]" : "text-gray-400 hover:text-white"
              }`}
            >
              Pekisnax
            </button>

            {/* Recursos Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setRecursosDropdownOpen(!recursosDropdownOpen);
                  setNosotrosDropdownOpen(false);
                }}
                className={`font-display text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer ${
                  ["blog", "galeria", "faqs", "problema", "uikit"].includes(activePage) ? "text-[#94E07B]" : "text-gray-400 hover:text-white"
                }`}
              >
                Recursos <ChevronDown className="w-3.5 h-3.5" />
              </button>

              <AnimatePresence>
                {recursosDropdownOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setRecursosDropdownOpen(false)} />
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 mt-3.5 w-52 bg-[#121214] rounded-2xl shadow-2xl border border-white/10 p-2.5 z-50 flex flex-col gap-1"
                    >
                      <button
                        onClick={() => {
                          setActivePage("blog");
                          setRecursosDropdownOpen(false);
                        }}
                        className="w-full text-left p-3 text-xs font-display font-bold uppercase tracking-wider text-gray-300 hover:text-[#94E07B] hover:bg-white/5 rounded-xl transition-all cursor-pointer"
                      >
                        Blog
                      </button>
                      <button
                        onClick={() => {
                          setActivePage("galeria");
                          setRecursosDropdownOpen(false);
                        }}
                        className="w-full text-left p-3 text-xs font-display font-bold uppercase tracking-wider text-gray-300 hover:text-[#94E07B] hover:bg-white/5 rounded-xl transition-all cursor-pointer"
                      >
                        Galería
                      </button>
                      <button
                        onClick={() => {
                          setActivePage("faqs");
                          setRecursosDropdownOpen(false);
                        }}
                        className="w-full text-left p-3 text-xs font-display font-bold uppercase tracking-wider text-gray-300 hover:text-[#94E07B] hover:bg-white/5 rounded-xl transition-all cursor-pointer"
                      >
                        FAQs
                      </button>
                      <button
                        onClick={() => {
                          setActivePage("problema");
                          setRecursosDropdownOpen(false);
                        }}
                        className="w-full text-left p-3 text-xs font-display font-bold uppercase tracking-wider text-gray-300 hover:text-[#94E07B] hover:bg-white/5 rounded-xl transition-all cursor-pointer"
                      >
                        El Problema
                      </button>
                      <button
                        onClick={() => {
                          setActivePage("uikit");
                          setRecursosDropdownOpen(false);
                        }}
                        className="w-full text-left p-3 text-xs font-display font-bold uppercase tracking-wider text-gray-300 hover:text-[#94E07B] hover:bg-white/5 rounded-xl transition-all cursor-pointer flex items-center gap-1"
                      >
                        <span>✨ Figma UI Kit</span>
                      </button>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => setActivePage("agenda")}
              className="bg-[#94E07B] hover:bg-[#94E07B]/95 text-[#0A0A0C] font-display font-black text-[11px] tracking-widest uppercase px-6 py-3.5 rounded-full shadow-md shadow-[#94E07B]/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              Agenda Cita
            </button>
          </nav>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-full hover:bg-white/5 text-gray-300 hover:text-white cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* MOBILE DRAWER MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-35 lg:hidden">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-[#000000]/80 backdrop-blur-xs" onClick={() => setMobileMenuOpen(false)} />
            
            {/* Drawer */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              className="absolute right-0 w-72 h-full bg-[#121214] border-l border-white/5 shadow-2xl p-6 pt-24 z-10 flex flex-col gap-4 overflow-y-auto"
            >
              {Object.entries(pagesMap).map(([key, label]) => {
                const isActive = activePage === key;
                return (
                  <button
                    key={key}
                    onClick={() => {
                      setActivePage(key);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full text-left p-3 text-sm font-display font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-between cursor-pointer ${
                      isActive
                        ? "bg-[#94E07B] text-[#0A0A0C]"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{label}</span>
                    <ArrowRight className="w-4 h-4 opacity-50" />
                  </button>
                );
              })}
            </motion.nav>
          </div>
        )}
      </AnimatePresence>

      {/* MAIN VIEW CONTENT */}
      <main className="flex-1 w-full flex flex-col items-stretch">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full flex-1 flex flex-col items-stretch"
          >
            {renderActivePage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* LUXURY FOOTER */}
      <footer className="bg-[#060607] text-white pt-20 pb-8 border-t border-white/5 relative z-30 rounded-t-[40px] md:rounded-t-[80px]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Contact info */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-lg text-white mb-6 border-l-2 border-[#F277B0] pl-3">
              Contacto
            </h4>
            <div className="space-y-3.5 font-sans text-xs text-gray-400">
              <div className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-[#F277B0] shrink-0" />
                <span>Cali, Valle del Cauca, Colombia · Sede Campestre De Lujo</span>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-[#94E07B] shrink-0" />
                <span>+57 (315) 000-0000 / +34 600 000 000</span>
              </div>
              <div className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-[#F277B0] shrink-0" />
                <span>hola@shipeki.com · info@shipeki.com</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-lg text-white mb-6 border-l-2 border-[#94E07B] pl-3">
              Mapeo de Sede
            </h4>
            <div className="grid grid-cols-2 gap-2 font-display text-xs font-bold uppercase tracking-wider">
              <button onClick={() => setActivePage("home")} className="text-left text-gray-400 hover:text-[#94E07B] transition-colors cursor-pointer">Inicio</button>
              <button onClick={() => setActivePage("shipeki")} className="text-left text-gray-400 hover:text-[#94E07B] transition-colors cursor-pointer">¿Qué es Shipeki?</button>
              <button onClick={() => setActivePage("metodologia")} className="text-left text-gray-400 hover:text-[#94E07B] transition-colors cursor-pointer">Metodología</button>
              <button onClick={() => setActivePage("servicios")} className="text-left text-gray-400 hover:text-[#94E07B] transition-colors cursor-pointer">Servicios</button>
              <button onClick={() => setActivePage("profeludos")} className="text-left text-gray-400 hover:text-[#94E07B] transition-colors cursor-pointer">Profeludos</button>
              <button onClick={() => setActivePage("casos")} className="text-left text-gray-400 hover:text-[#94E07B] transition-colors cursor-pointer">Historias</button>
              <button onClick={() => setActivePage("pekisnax")} className="text-left text-gray-400 hover:text-[#94E07B] transition-colors cursor-pointer">Pekisnax</button>
              <button onClick={() => setActivePage("blog")} className="text-left text-gray-400 hover:text-[#94E07B] transition-colors cursor-pointer">Blog</button>
              <button onClick={() => setActivePage("uikit")} className="text-left text-gray-400 hover:text-[#94E07B] transition-colors cursor-pointer flex items-center gap-1">✨ UI Kit</button>
              <button onClick={() => setActivePage("faqs")} className="text-left text-gray-400 hover:text-[#94E07B] transition-colors cursor-pointer">FAQs</button>
            </div>
          </div>

          {/* Column 3: Social Media */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-lg text-white mb-6 border-l-2 border-[#F277B0] pl-3">
              Redes Sociales
            </h4>
            <p className="text-xs text-gray-400 font-sans leading-relaxed mb-4">
              Síguenos en nuestras plataformas digitales para aprender con contenido etológico de alto nivel y transmisiones en directo de nuestra manada.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-white hover:text-[#F277B0] hover:border-[#F277B0] transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-white hover:text-[#F277B0] hover:border-[#F277B0] transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-white hover:text-[#F277B0] hover:border-[#F277B0] transition-all">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 4: Schedules & Policies */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-lg text-white mb-6 border-l-2 border-[#94E07B] pl-3">
              Horarios & Políticas
            </h4>
            <div className="space-y-3 font-sans text-xs text-gray-400">
              <div className="flex gap-2.5 items-center">
                <Clock className="w-4 h-4 text-[#94E07B]" />
                <span>Lunes a Sábado: 8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex gap-2.5 items-center">
                <Clock className="w-4 h-4 text-[#F277B0]" />
                <span>Domingos: Cerrado (Terapia interna)</span>
              </div>
              <div className="pt-2 border-t border-gray-900 text-[10px] text-gray-500">
                <span>© 2026 Shipeki Inc. Todos los derechos reservados. <br />Política de Privacidad · Términos de Servicio</span>
              </div>
            </div>
          </div>

        </div>

        {/* Closing Phrase */}
        <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-gray-900 text-center">
          <p className="font-serif text-base text-gray-400 italic max-w-xl mx-auto leading-relaxed">
            “Shipeki no es un lugar donde enseñamos órdenes. Es un lugar donde ayudamos a las familias a comprender a sus perros.”
          </p>
        </div>
      </footer>
    </div>
  );
}
