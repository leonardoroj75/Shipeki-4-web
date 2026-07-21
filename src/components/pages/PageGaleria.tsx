/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Eye, X, ArrowRight, Grid, Camera } from "lucide-react";

interface PageGaleriaProps {
  onNavigate: (page: string) => void;
}

export default function PageGaleria({ onNavigate }: PageGaleriaProps) {
  const [activeGallery, setActiveGallery] = useState<any | null>(null);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  const categories = [
    {
      id: "sede",
      title: "Nuestra Sede",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=600",
      images: [
        "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800"
      ]
    },
    {
      id: "univ",
      title: "Universidad Canina",
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=600",
      images: [
        "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?auto=format&fit=crop&q=80&w=800"
      ]
    },
    {
      id: "prof",
      title: "Nuestros Profeludos",
      image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=600",
      images: [
        "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&q=80&w=800"
      ]
    },
    {
      id: "event",
      title: "Eventos y Comunidad",
      image: "https://images.unsplash.com/photo-1444212477490-ca407925329e?auto=format&fit=crop&q=80&w=600",
      images: [
        "https://images.unsplash.com/photo-1444212477490-ca407925329e?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800"
      ]
    },
    {
      id: "ident",
      title: "Nuestra Identidad",
      image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=600",
      images: [
        "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1608454367599-c133fcabfb65?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&q=80&w=800"
      ]
    },
    {
      id: "act",
      title: "Actividades Educativas",
      image: "https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?auto=format&fit=crop&q=80&w=600",
      images: [
        "https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&q=80&w=800"
      ]
    }
  ];

  return (
    <div className="w-full bg-shipeki-cream min-h-screen py-16 px-4 animate-fade-in" id="page-galeria">
      {/* SECCIÓN 1: INTRO */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <span className="text-xs font-mono text-[#F277B0] tracking-widest uppercase font-semibold block mb-2">
          Galería de Experiencias
        </span>
        <h1 className="font-eczar text-3xl sm:text-4xl md:text-[42px] text-shipeki-dark font-semibold leading-tight">
          Nuestra Manada en Acción.
        </h1>
        <p className="font-eczar text-base sm:text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto mt-4 font-light">
          Explora los momentos mágicos de diversión, aprendizaje y respeto mutuo que compartimos a diario en nuestras instalaciones de lujo.
        </p>
        <div className="w-16 h-1 bg-[#F277B0] mx-auto mt-6" />
      </div>

      {/* SECCIÓN 2: CATEGORÍAS CON BOTONES */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {categories.map((cat, idx) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col justify-between group"
          >
            <div className="relative h-[220px] overflow-hidden bg-gray-100">
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all" />
              <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md p-2 rounded-full shadow-sm text-[#F277B0]">
                <Camera className="w-4 h-4" />
              </div>
            </div>

            <div className="p-8 flex items-center justify-between">
              <h3 className="font-eczar font-semibold text-lg sm:text-xl text-shipeki-dark">
                {cat.title}
              </h3>
              <button
                onClick={() => setActiveGallery(cat)}
                className="border border-[#F277B0] hover:bg-[#F277B0] text-[#F277B0] hover:text-white font-sans font-bold text-xs tracking-wider uppercase px-5 py-2.5 rounded-full transition-all flex items-center gap-1"
              >
                Ver Galería <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* SECCIÓN 3: VIDEO DESTACADO */}
      <section className="bg-[#F3A0BE] rounded-3xl max-w-5xl mx-auto py-16 px-6 sm:px-12 md:px-16 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[#F3A0BE]/80 z-10" />

        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=1200"
            alt="Sede Shipeki"
            className="w-full h-full object-cover filter blur-xs"
          />
        </div>

        <div className="relative z-20 flex flex-col items-center">
          <span className="text-xs font-mono uppercase tracking-widest font-semibold text-white bg-white/20 px-3 py-1 rounded-full border border-white/10 mb-3">Reel Institucional</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 max-w-2xl leading-tight">
            Así se vive un día en Shipeki
          </h2>

          {/* Interactive Play Video Mockup */}
          <div className="relative w-full max-w-3xl aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black group border border-white/10">
            {!isPlayingVideo ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer" onClick={() => setIsPlayingVideo(true)}>
                <img
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=800"
                  alt="Video Thumbnail"
                  className="absolute inset-0 w-full h-full object-cover brightness-[0.5] group-hover:scale-101 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#F277B0]/20 mix-blend-overlay" />
                <div className="w-20 h-20 rounded-full bg-white text-[#F277B0] flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 active:scale-95 relative z-10">
                  <Play className="w-8 h-8 fill-current translate-x-0.5" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider font-bold text-white mt-4 relative z-10 drop-shadow-md">Ver video de 90 segundos</span>
              </div>
            ) : (
              <div className="absolute inset-0 bg-black flex flex-col justify-between p-6">
                {/* Simulated High-End Video Player Overlay */}
                <div className="flex justify-between items-center text-white/90 z-10">
                  <span className="font-mono text-xs">0:01 / 1:30</span>
                  <button
                    onClick={() => setIsPlayingVideo(false)}
                    className="bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full text-xs font-sans font-semibold transition-all"
                  >
                    Detener video
                  </button>
                </div>

                <div className="flex flex-col items-center justify-center flex-1">
                  <span className="text-sm font-eczar italic text-white/80 max-w-md">Simulando reproducción del tour etológico en alta definición...</span>
                  <div className="w-12 h-12 border-4 border-shipeki-pink border-t-transparent rounded-full animate-spin mt-4" />
                </div>

                <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#F277B0] h-full w-[10%] animate-[pulse_3s_infinite]" />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* LIGHTBOX GALLERY MODAL */}
      <AnimatePresence>
        {activeGallery && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveGallery(null)}
              className="absolute inset-0 bg-shipeki-dark/90 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl bg-transparent z-10 flex flex-col"
            >
              {/* Top Controls */}
              <div className="flex justify-between items-center text-white p-4 pb-6 z-20">
                <h3 className="font-eczar font-semibold text-xl flex items-center gap-2">
                  <Grid className="w-5 h-5 text-shipeki-pink" /> {activeGallery.title}
                </h3>
                <button
                  onClick={() => setActiveGallery(null)}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Grid of high-res photos */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 max-h-[70vh] overflow-y-auto">
                {activeGallery.images.map((imgUrl: string, idx: number) => (
                  <div key={idx} className="relative rounded-2xl overflow-hidden aspect-square shadow-lg border border-white/10 bg-shipeki-dark">
                    <img
                      src={imgUrl}
                      alt={`${activeGallery.title} ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-102 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
