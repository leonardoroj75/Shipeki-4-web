/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { LogOut, Home, Compass, ShieldAlert, MessagesSquare, Flame, Sparkles, ArrowRight } from "lucide-react";
// @ts-ignore
import heroImage from "../../assets/images/shipeki_hero_banner_1783696515998.jpg";
// @ts-ignore
import problemDogImage from "../../assets/images/regenerated_image_1784618900461.png";

interface PageProblemaProps {
  onNavigate: (page: string) => void;
}

export default function PageProblema({ onNavigate }: PageProblemaProps) {
  const problems = [
    {
      icon: LogOut,
      title: "Ansiedad por separación",
      desc: "Llanto, ladridos o destrucción de objetos cuando el perro se queda solo.",
      gridArea: "lg:col-start-1 lg:row-start-1"
    },
    {
      icon: Flame,
      title: "Reactividad / Agresividad",
      desc: "Ladridos, gruñidos o tirones de correa al ver a otros perros o personas durante el paseo.",
      gridArea: "lg:col-start-1 lg:row-start-2"
    },
    {
      icon: Home,
      title: "Problemas de convivencia",
      desc: "Perros que saltan sobre las visitas, roban comida o no logran relajarse en casa.",
      gridArea: "lg:col-start-1 lg:row-start-3"
    },
    {
      icon: Compass,
      title: "Paseos estresantes",
      desc: "Tirones constantes de correa y dificultad para disfrutar de una salida tranquila.",
      gridArea: "lg:col-start-3 lg:row-start-1"
    },
    {
      icon: ShieldAlert,
      title: "Miedos y fobias",
      desc: "Sensibilidad a ruidos fuertes (truenos, pólvora) o temor a salir a la calle.",
      gridArea: "lg:col-start-3 lg:row-start-2"
    },
    {
      icon: MessagesSquare,
      title: "Falta de comunicación",
      desc: "Dificultad para comprender lo que el perro intenta expresar con su lenguaje corporal.",
      gridArea: "lg:col-start-3 lg:row-start-3"
    }
  ];

  return (
    <div className="w-full bg-[#FDF8F9] py-20 px-4 min-h-screen" id="page-problema">
      
      {/* SECCIÓN 1: INTRODUCCIÓN EMOCIONAL */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <span className="text-xs font-mono text-[#F277B0] tracking-widest uppercase font-semibold block mb-2">
          Capítulo II: La Identificación
        </span>
        <h1 className="font-display text-3xl sm:text-4xl md:text-[44px] text-[#1A1A1A] font-extrabold leading-tight">
          ¿Sientes que la convivencia con tu perro se ha vuelto difícil?
        </h1>
        <p className="font-sans text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mt-6">
          Sabemos lo frustrante que puede ser sentir que has intentado de todo y nada parece funcionar. Detrás de un perro que ladra sin parar, rompe cosas o tira de la correa no hay un perro 'malo' o 'desobediente', sino un perro estresado, con miedo o que simplemente no sabe cómo gestionar sus emociones. El problema no es tu perro, el problema es que aún no han aprendido a hablar el mismo idioma.
        </p>
        <div className="w-16 h-1 bg-[#F277B0] mx-auto mt-6" />
      </div>

      {/* SECCIÓN 2: ASYMMETRIC GRID LAYOUT */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative mb-24">
        
        {/* The Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative z-10">
          
          {/* Left Column (Problems 1, 2, 3) */}
          <div className="space-y-6 lg:space-y-8 flex flex-col justify-center">
            {problems.slice(0, 3).map((prob, idx) => {
              const IconComp = prob.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white p-6 sm:p-8 rounded-[32px] border border-pink-100/30 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 group"
                >
                  <div className="w-11 h-11 rounded-2xl bg-[#F277B0]/15 text-[#F277B0] group-hover:bg-[#94E07B]/20 group-hover:text-[#94E07B] flex items-center justify-center mb-4 transition-colors">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#1A1A1A] mb-2">
                    {prob.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-sans">
                    {prob.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Central Column: Thoughtful dog image & Overlapping Post-it */}
          <div className="relative flex flex-col items-center justify-center my-8 lg:my-0">
            {/* The Central Dog Image */}
            <div className="w-full max-w-[340px] h-[340px] sm:h-[400px] rounded-full overflow-hidden border-8 border-white shadow-2xl relative">
              <img
                src={problemDogImage}
                alt="Perro pensativo pidiendo comprensión"
                className="w-full h-full object-cover object-center grayscale-[20%] scale-105 hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Overlapping Torn-paper / Post-it with "verdad revelada" */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
              className="absolute -bottom-12 z-20 w-11/12 max-w-[280px] p-6 post-it border-l-4 border-[#F277B0]"
            >
              <div className="absolute top-2 right-2 text-yellow-500/30">
                <Sparkles className="w-6 h-6 animate-pulse" />
              </div>
              <p className="font-serif italic text-sm text-gray-700 leading-relaxed">
                "El comportamiento de tu perro es solo el síntoma de cómo se siente por dentro. Castigar el comportamiento sin entender la emoción que lo causa no solo no resuelve el problema, sino que destruye la confianza que tiene en ti."
              </p>
              <span className="text-[9px] font-mono font-bold text-[#F277B0] tracking-widest uppercase block mt-3">
                Verdad Revelada · Shipeki
              </span>
            </motion.div>
          </div>

          {/* Right Column (Problems 4, 5, 6) */}
          <div className="space-y-6 lg:space-y-8 flex flex-col justify-center mt-8 lg:mt-0">
            {problems.slice(3, 6).map((prob, idx) => {
              const IconComp = prob.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white p-6 sm:p-8 rounded-[32px] border border-pink-100/30 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 group"
                >
                  <div className="w-11 h-11 rounded-2xl bg-[#94E07B]/15 text-[#94E07B] group-hover:bg-[#F277B0]/20 group-hover:text-[#F277B0] flex items-center justify-center mb-4 transition-colors">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#1A1A1A] mb-2">
                    {prob.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-sans">
                    {prob.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Ambient Blur Shadows */}
        <div className="absolute top-1/2 left-1/4 w-80 h-80 rounded-full bg-[#F277B0]/5 -z-10 blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-[#94E07B]/5 -z-10 blur-3xl pointer-events-none" />
      </div>

      {/* SECCIÓN 3: TRUTH REVEALED ACCENT BANNER */}
      <section className="bg-white border-t border-b border-pink-50/50 py-16 px-6 rounded-[40px] max-w-5xl mx-auto text-center mb-16 shadow-xs">
        <h2 className="font-serif italic text-2xl sm:text-3xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
          "Todo síntoma conductual es la punta de un iceberg emocional profundamente arraigado."
        </h2>
        <p className="font-sans text-xs text-gray-400 uppercase tracking-widest mt-4 block">
          No adiestres el síntoma · Comprende el origen
        </p>
      </section>

      {/* SECCIÓN 4: CALL TO ACTION */}
      <section className="max-w-4xl mx-auto bg-[#94E07B] p-8 sm:p-12 rounded-[40px] shadow-lg text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/10 blur-2xl pointer-events-none" />
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold mb-4">
          Comencemos a cambiar su historia hoy mismo
        </h2>
        <p className="text-sm text-white/90 font-sans max-w-2xl mx-auto mb-8">
          Toma el control con un proceso diseñado científicamente para sanar la comunicación con tu mejor amigo. Agenda una valoración premium o realiza nuestro Test Etológico para vincular el diagnóstico.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onNavigate("agenda")}
            className="w-full sm:w-auto bg-white hover:bg-[#FDF8F9] text-[#1A1A1A] hover:text-[#94E07B] font-display font-extrabold text-xs uppercase tracking-wider px-8 py-4.5 rounded-full transition-all shadow-md cursor-pointer"
          >
            Quiero agendar valoración
          </button>
          <button
            onClick={() => onNavigate("agenda")}
            className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white border border-white/60 font-display font-bold text-xs uppercase tracking-wider px-8 py-4.5 rounded-full transition-all cursor-pointer"
          >
            Tomar el Test Etológico
          </button>
        </div>
      </section>

    </div>
  );
}
