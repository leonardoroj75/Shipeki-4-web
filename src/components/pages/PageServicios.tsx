/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, CheckCircle, Calendar, X, Heart, ShieldCheck, Sparkles, Brain } from "lucide-react";

interface PageServiciosProps {
  onNavigate: (page: string) => void;
}

export default function PageServicios({ onNavigate }: PageServiciosProps) {
  const [selectedService, setSelectedService] = useState<any | null>(null);

  const services = [
    {
      id: "valo",
      badge: "Indispensable Primero",
      title: "Valoración Inicial Premium",
      image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=600",
      desc: "Toda gran transformación requiere un diagnóstico científico. Mapeamos las 5 dimensiones de tu perro, su biología del estrés y el modelo de apego familiar.",
      longDesc: "Toda gran transformación comienza con un diagnóstico científico riguroso de 90 minutos. Shirley analizará exhaustivamente la personalidad, miedos, motivaciones de tu perro, su lenguaje etológico y vuestro modelo de vinculación afectiva familiar. Sin esto, cualquier terapia sería una receta ciega.",
      microcopy: "→ Entender su mundo",
      details: [
        "Sesión presencial exhaustiva de 90 min en nuestra sede o domicilio.",
        "Pruebas etológicas de temperamento y umbral de estrés.",
        "Entrega de diagnóstico escrito en PDF oficial.",
        "Ruta educativa totalmente personalizada."
      ]
    },
    {
      id: "univ",
      badge: "Programa Insignia",
      title: "Universidad Canina",
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=600",
      desc: "Nivel superior de estimulación cognitiva, desarrollo social activo e inteligencia emocional para formar perros estables, felices y equilibrados.",
      longDesc: "Nuestra prestigiosa Universidad Canina es el programa de formación más completo. No adiestramos conductas vacías; equilibramos vuestra convivencia. Tu perro asistirá a sesiones de estimulación mental focalizada, juego etológico controlado y paseos de descompresión enriquecidos.",
      microcopy: "→ Quiero esto para mi perro",
      details: [
        "Duración de 4 a 12 semanas según el diagnóstico.",
        "Socialización activa guiada por nuestros perros tutores.",
        "Enfoque en autocontrol, foco de atención y señales de calma.",
        "Transferencia semanal obligatoria a los tutores caninos."
      ]
    },
    {
      id: "cach",
      badge: "Súper Preventivo",
      title: "Cachorros Súper-Élite",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=600",
      desc: "Evita problemas futuros de agresividad o miedos. Socialización temprana, propiocepción y bases cooperativas para el cachorro de hoy.",
      longDesc: "Diseñado científicamente para mentes en desarrollo (de 3 a 7 meses). Construimos una resiliencia psicológica inquebrantable, enseñamos señales de calma, habituación a entornos urbanos complejos, propiocepción y bases de obediencia cooperativa amigable.",
      microcopy: "→ Empezar con buen pie",
      details: [
        "Sesiones adaptadas a su ventana de socialización natural.",
        "Habituación segura ante estímulos visuales y sonoros complejos.",
        "Manual exclusivo de prevención de ansiedad por separación.",
        "Bases sólidas para evitar reactividad o agresividad futura."
      ]
    },
    {
      id: "inte",
      badge: "Terapia Intensiva",
      title: "Internado Terapéutico",
      image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&q=80&w=600",
      desc: "Estancia etológica intensiva de modificación conductual profunda en nuestras pacíficas y confortables instalaciones campestres.",
      longDesc: "Recomendado exclusivamente para casos críticos de agresividad, fobias paralizantes o ansiedad destructiva donde el entorno actual imposibilita el avance de la terapia. Tu perro residirá en suites VIP climatizadas y recibirá terapia directa diaria por Shirley y su equipo clínico.",
      microcopy: "→ Sanar su conducta",
      details: [
        "Alojamiento premium en suites caninas climatizadas.",
        "Terapia clínica y de desensibilización diaria intensiva.",
        "Sesiones presenciales de traspaso técnico a los tutores.",
        "Monitoreo etológico las 24 horas del día."
      ]
    },
    {
      id: "guar",
      badge: "Recreación Inteligente",
      title: "Guardería Educativa Premium",
      image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&q=80&w=600",
      desc: "Cuidado diurno enfocado en la descompresión mental, el olfato terapéutico y el descanso reparador en lugar de juego desmedido.",
      longDesc: "Evitamos la hiperactividad y el estrés de la sobreestimulación. Nuestra guardería no es un canil de descontrol; es un centro educativo diurno donde tu perro realiza caminatas de olfato, actividades de propiocepción y descanso pautado con musicoterapia.",
      microcopy: "→ Bienestar diurno",
      details: [
        "Zonas de descanso campestres aclimatadas e higienizadas.",
        "Juegos interactivos de olfato y estimulación cognitiva diaria.",
        "Socialización controlada con un número limitado de perros.",
        "Soporte preferencial para traslados puerta a puerta."
      ]
    },
    {
      id: "virt",
      badge: "Sin Fronteras",
      title: "Consultoría Etológica Virtual",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=600",
      desc: "Clases y diagnósticos interactivos online con soporte en alta definición para familias de cualquier parte del mundo de habla hispana.",
      longDesc: "La distancia ya no es un impedimento para brindarle bienestar a tu perro. A través de videollamadas estructuradas en HD, analizamos las grabaciones caseras de su comportamiento, decodificamos su lenguaje corporal y te guiamos paso a paso en la ejecución de las terapias en casa.",
      microcopy: "→ Entender su mundo online",
      details: [
        "Sesión interactiva en vivo de 60-90 minutos.",
        "Entrega de planes de acción etológica en PDF interactivo.",
        "Revisión ilimitada de videos caseros por WhatsApp.",
        "Seguimiento estrecho durante 30 días continuos."
      ]
    }
  ];

  return (
    <div className="w-full bg-[#0A0A0C] text-white min-h-screen py-20 px-4" id="page-servicios">
      
      {/* SECCIÓN 1: INTRO */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <span className="text-xs font-mono text-[#F277B0] tracking-widest uppercase font-semibold block mb-2">
          Capítulo IV: La Conversión
        </span>
        <h1 className="font-display text-3xl sm:text-4xl md:text-[44px] text-white font-extrabold leading-tight">
          Nuestros Programas de Bienestar Canino
        </h1>
        <p className="font-sans text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mt-4 leading-relaxed">
          Diseñados minuciosamente para aportar tranquilidad, restaurar la paz mental de tu hogar y dotarte de herramientas de liderazgo empático.
        </p>
        <div className="w-16 h-1 bg-[#94E07B] mx-auto mt-6" />
      </div>

      {/* SECCIÓN 2: GRID DE TARJETAS ELEVADAS */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {services.map((srv, idx) => (
          <motion.div
            key={srv.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="bg-[#121214] rounded-[40px] overflow-hidden shadow-2xl border border-white/5 hover:border-white/10 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1.5"
          >
            <div>
              {/* Image with asymmetric organic curves represent nature */}
              <div className="relative h-[240px] overflow-hidden rounded-t-[40px] rounded-bl-[12px] rounded-br-[12px]">
                <img
                  src={srv.image}
                  alt={srv.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                
                {srv.badge && (
                  <span className="absolute top-4 left-4 bg-[#0A0A0C]/90 backdrop-blur-md text-[#F277B0] text-[10px] font-mono font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-white/5 shadow-md flex items-center gap-1.5">
                    <Star className="w-3 h-3 fill-[#F277B0] text-[#F277B0]" /> {srv.badge}
                  </span>
                )}
              </div>

              {/* Text Padding */}
              <div className="p-8">
                <span className="text-xs font-mono text-[#F277B0] font-bold uppercase tracking-widest block mb-2">
                  SHIPEKI · {srv.id.toUpperCase()}
                </span>
                <h3 className="font-display font-extrabold text-xl text-white mb-3 group-hover:text-[#94E07B] transition-colors leading-tight">
                  {srv.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed font-sans font-medium">
                  {srv.desc}
                </p>
              </div>
            </div>

            {/* CTA with requested custom microcopy microinteractions */}
            <div className="p-8 pt-0">
              <button
                onClick={() => setSelectedService(srv)}
                className="w-full text-center bg-[#94E07B] hover:bg-[#94E07B]/95 text-[#0A0A0C] font-display font-black text-xs tracking-wider uppercase py-4 rounded-full transition-all cursor-pointer shadow-lg shadow-[#94E07B]/20 hover:scale-105 active:scale-95 flex items-center justify-center gap-1"
              >
                <span>{srv.microcopy}</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* DETALLED MODAL DE LUJO */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="relative w-full max-w-2xl bg-[#121214] rounded-[40px] overflow-hidden shadow-2xl z-10 max-h-[92vh] flex flex-col border border-white/5 text-white"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-[#0A0A0C]/90 hover:bg-[#1A1A1E] text-white flex items-center justify-center shadow-md border border-white/10 transition-colors cursor-pointer hover:scale-105 active:scale-95"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="overflow-y-auto custom-scrollbar">
                {/* Hero Photo */}
                <div className="relative h-[280px]">
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-[#121214]/50 to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 right-6 z-10">
                    {selectedService.badge && (
                      <span className="bg-[#F277B0] text-white text-[9px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-2 inline-flex items-center gap-1">
                        <Star className="w-3 h-3 fill-white text-white" /> {selectedService.badge}
                      </span>
                    )}
                    <h2 className="font-display text-2xl sm:text-3xl text-white font-extrabold leading-tight">
                      {selectedService.title}
                    </h2>
                  </div>
                </div>

                <div className="p-8 sm:p-10">
                  <p className="text-base text-gray-300 leading-relaxed font-sans font-medium mb-8">
                    {selectedService.longDesc}
                  </p>

                  <h4 className="font-mono font-bold text-xs uppercase tracking-widest text-[#F277B0] mb-4">
                    ¿Qué incluye este programa de bienestar?
                  </h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {selectedService.details.map((item: string, i: number) => (
                      <div key={i} className="flex gap-3 items-start bg-[#1A1A1E] p-4 rounded-3xl border border-white/5">
                        <CheckCircle className="w-5 h-5 text-[#94E07B] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-gray-300 font-sans leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-white/5">
                    <button
                      onClick={() => {
                        setSelectedService(null);
                        onNavigate("agenda");
                      }}
                      className="flex-1 bg-[#94E07B] hover:bg-[#94E07B]/95 text-[#0A0A0C] font-display font-black text-xs tracking-wider uppercase py-4.5 rounded-full transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#94E07B]/20 hover:scale-103 active:scale-97 cursor-pointer"
                    >
                      <Calendar className="w-4 h-4" /> Agendar ahora
                    </button>
                    <button
                      onClick={() => setSelectedService(null)}
                      className="border-2 border-white/5 hover:border-white/10 text-gray-300 hover:text-white font-sans font-semibold text-xs tracking-wider uppercase py-4.5 px-6 rounded-full transition-all cursor-pointer"
                    >
                      Regresar
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
