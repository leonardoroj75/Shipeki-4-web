/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, BookOpen, Send, X, ArrowRight } from "lucide-react";

interface PageBlogProps {
  onNavigate: (page: string) => void;
}

export default function PageBlog({ onNavigate }: PageBlogProps) {
  const [selectedArticle, setSelectedArticle] = useState<any | null>(null);
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const categories = [
    { title: "Psicología Canina", image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=400" },
    { title: "Cachorros", image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=400" },
    { title: "Bienestar Emocional", image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&q=80&w=400" },
    { title: "Socialización", image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=400" },
    { title: "Reactividad y Miedos", image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&q=80&w=400" },
    { title: "Aprendizaje y Educación", image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=400" },
    { title: "Enriquecimiento Ambiental", image: "https://images.unsplash.com/photo-1444212477490-ca407925329e?auto=format&fit=crop&q=80&w=400" },
    { title: "Comunicación Canina", image: "https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?auto=format&fit=crop&q=80&w=400" },
    { title: "Convivencia Familiar", image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=400" }
  ];

  const articles = [
    {
      id: "art1",
      title: "La neurobiología del miedo: ¿por qué castigar la reactividad empeora la agresión?",
      excerpt: "Cuando un perro reacciona con ladridos explosivos ante otro perro, su amígdala está inundada de cortisol y adrenalina. Castigar esta conducta no reduce el miedo...",
      image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&q=80&w=400",
      content: "La agresión y la reactividad son casi siempre manifestaciones de un estado subyacente de miedo o dolor agudo. Cuando castigamos a un perro reactivo, eliminamos temporalmente el síntoma (el ladrido) mediante la inhibición por dolor o susto. Sin embargo, la emoción negativa interna (el pánico hacia el estímulo) se multiplica por diez. Con el tiempo, esto resulta en un perro que muerde 'sin previo aviso' debido a que le hemos enseñado que dar señales de advertencia corporal conduce al castigo físico. En Shipeki proponemos la reasociación positiva y el contracondicionamiento sistemático."
    },
    {
      id: "art2",
      title: "Cómo superar la Ansiedad por Separación paso a paso sin traumas",
      excerpt: "Aprende a desensibilizar las señales de salida cotidiana (tomar las llaves, ponerte los zapatos) para que tu perro no anticipe el pánico de quedarse solo...",
      image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&q=80&w=400",
      content: "La ansiedad por separación es un trastorno de apego disfuncional donde el animal percibe tu ausencia como un riesgo inminente para su supervivencia. El tratamiento ideal consiste en romper la cadena de anticipación de tus salidas: toma las llaves y vuelve a sentarte en el sofá; ponte los zapatos y dirígete a la cocina. Haz que estas señales pierdan su carga estresante. Posteriormente, realiza micro-salidas de 5 segundos, aumentando el tiempo progresivamente solo cuando tu perro permanezca en calma absoluta."
    },
    {
      id: "art3",
      title: "El juego olfativo como descompresor natural del sistema nervioso canino",
      excerpt: "Solo 10 minutos de olfateo consciente equivalen a 1 hora de caminata física intensa, reduciendo drásticamente las hormonas de la hiperactividad...",
      image: "https://images.unsplash.com/photo-1444212477490-ca407925329e?auto=format&fit=crop&q=80&w=400",
      content: "El sentido del olfato canino está conectado directamente con el sistema límbico, el centro de control de sus emociones básicas. Estimular la actividad olfativa estructurada (mediante alfombras de olfato, juegos de búsqueda de snacks en pasto o botellas interactivas) activa su sistema nervioso parasimpático. Esto disminuye la frecuencia cardíaca, reduce el cortisol y estimula la liberación de endorfinas y dopamina, proporcionando un estado mental de cansancio constructivo y serenidad profunda."
    }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput("");
    }
  };

  return (
    <div className="w-full bg-white animate-fade-in" id="page-blog">
      {/* SECCIÓN 1: INTRO */}
      <section className="py-20 px-4 max-w-5xl mx-auto text-center">
        <span className="text-xs font-mono text-[#F277B0] tracking-widest uppercase font-semibold block mb-2">
          Biblioteca de Conocimiento
        </span>
        <h1 className="font-eczar text-3xl sm:text-4xl md:text-[42px] text-[#1A1A1A] font-semibold leading-tight">
          Aprender para comprender. Comprender para transformar.
        </h1>
        <p className="font-eczar text-base sm:text-lg text-gray-500 leading-relaxed max-w-3xl mx-auto mt-4 font-light">
          Creemos que la educación de los tutores es la mitad del éxito etológico. Explora nuestros artículos científicos explicados de forma sencilla y respetuosa.
        </p>
        <div className="w-16 h-1 bg-[#F277B0] mx-auto mt-6" />
      </section>

      {/* SECCIÓN 2: CATEGORÍAS */}
      <section className="bg-[#F3A0BE] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 text-white">
            <h2 className="font-eczar text-3xl font-semibold">Categorías de Aprendizaje</h2>
            <p className="font-eczar text-sm text-white/90 font-light mt-2">Profundiza en la especialidad de tu interés.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-sm flex items-center gap-4 p-4 border border-pink-100 hover:shadow-md transition-shadow group cursor-pointer"
              >
                <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
                  <img src={cat.image} alt={cat.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="font-eczar font-semibold text-base sm:text-lg text-[#1A1A1A] group-hover:text-[#F277B0] transition-colors">
                  {cat.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: ARTÍCULOS DESTACADOS */}
      <section className="py-24 px-4 max-w-5xl mx-auto">
        <div className="mb-12 flex justify-between items-center">
          <h2 className="font-eczar text-2xl sm:text-3xl text-[#1A1A1A] font-semibold">Artículos Recomendados</h2>
          <span className="text-xs font-mono font-bold text-[#F277B0] uppercase flex items-center gap-1.5"><BookOpen className="w-4 h-4" /> Lecturas de 5 min</span>
        </div>

        <div className="space-y-8">
          {articles.map((art) => (
            <div
              key={art.id}
              onClick={() => setSelectedArticle(art)}
              className="bg-[#FCFAF6] hover:bg-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start sm:items-center border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="w-full sm:w-[150px] h-[150px] rounded-2xl overflow-hidden shrink-0 bg-gray-100">
                <img src={art.image} alt={art.title} className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300" />
              </div>
              <div className="flex-1">
                <h3 className="font-eczar font-semibold text-xl text-[#1A1A1A] group-hover:text-[#F277B0] transition-colors mb-3 leading-snug">
                  {art.title}
                </h3>
                <p className="font-eczar text-sm text-gray-500 leading-relaxed font-light mb-4 line-clamp-2">
                  {art.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-sans font-bold uppercase tracking-wider text-[#F277B0]">
                  Leer artículo completo <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN 4: SUSCRIPCIÓN */}
      <section className="bg-[#94E07B] py-16 px-4 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest font-semibold text-white/80 block mb-2">Únete al Boletín Científico</span>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-6">Aprende educación respetuosa gratis cada semana</h2>

          <AnimatePresence mode="wait">
            {!subscribed ? (
              <motion.form
                key="form"
                onSubmit={handleSubscribe}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col sm:flex-row gap-4 items-stretch max-w-md mx-auto"
              >
                <input
                  type="email"
                  required
                  placeholder="Tu correo electrónico"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="flex-1 bg-white border border-transparent rounded-[50px] px-6 py-4 text-[#1A1A1A] text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F277B0]"
                />
                <button
                  type="submit"
                  className="bg-[#F277B0] hover:bg-[#F277B0]/95 text-white font-sans font-bold text-xs tracking-wider uppercase px-8 py-4 rounded-[50px] transition-all flex items-center justify-center gap-2 shrink-0 shadow-md"
                >
                  <Send className="w-4 h-4" /> Quiero aprender con Shipeki
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 text-white max-w-md mx-auto"
              >
                <p className="font-eczar font-semibold text-lg">¡Te has registrado con éxito!</p>
                <p className="font-eczar text-xs text-white/80 mt-1">Pronto recibirás nuestras guías etológicas avanzadas.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ARTICLE READER MODAL */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="absolute inset-0 bg-shipeki-dark/65 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[85vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/85 hover:bg-white text-[#1A1A1A] flex items-center justify-center shadow-md border border-gray-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="overflow-y-auto">
                <div className="relative h-[250px] bg-gray-100">
                  <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-[10px] font-mono tracking-wider font-bold text-[#F277B0] uppercase bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 mb-2 inline-block">Educación Canina</span>
                    <h2 className="font-eczar text-xl sm:text-2xl md:text-3xl text-white font-semibold leading-tight">{selectedArticle.title}</h2>
                  </div>
                </div>

                <div className="p-8">
                  <p className="font-eczar text-base sm:text-lg text-gray-700 leading-relaxed font-light whitespace-pre-line mb-8">
                    {selectedArticle.content}
                  </p>

                  <div className="bg-shipeki-cream p-6 rounded-2xl border border-gray-100 flex flex-col sm:flex-row items-center gap-4 justify-between">
                    <div>
                      <h4 className="font-eczar font-semibold text-shipeki-dark">¿Sientes dificultades con la conducta de tu perro?</h4>
                      <p className="text-xs text-gray-500 font-sans mt-0.5">Permítenos ayudarte a sanar la relación desde la ciencia respetuosa.</p>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedArticle(null);
                        onNavigate("agenda");
                      }}
                      className="bg-[#F277B0] hover:bg-[#F277B0]/90 text-white font-sans font-bold text-xs tracking-wider uppercase px-6 py-3 rounded-full transition-all shrink-0"
                    >
                      Reservar Valoración
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
