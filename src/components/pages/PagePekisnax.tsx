/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingBag, Star, Plus, Minus, X, Check, ShoppingCart, Sparkles, Heart } from "lucide-react";

interface PagePekisnaxProps {
  onNavigate: (page: string) => void;
}

export default function PagePekisnax({ onNavigate }: PagePekisnaxProps) {
  // Cart state
  const [cart, setCart] = useState<{ [key: string]: number }>({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showCheckoutSuccess, setShowCheckoutSuccess] = useState(false);

  const formatPrice = (val: number) => {
    return `$${val.toLocaleString("es-CO")}`;
  };

  const benefits = [
    {
      title: "100% Monoproteicos",
      desc: "Único ingrediente de res o cerdo deshidratado, ideal para evitar alergias alimentarias y digestiones pesadas."
    },
    {
      title: "Salud Articular Real",
      desc: "Excelente fuente natural de colágeno, glucosamina y condroitina que protegen sus articulaciones de por vida."
    },
    {
      title: "Premio de Calma",
      desc: "Incentivan la masticación prolongada, liberando endorfinas y serotonina que actúan como descompresores del estrés."
    },
    {
      title: "Altísima Palatabilidad",
      desc: "Aroma y sabor intensos deshidratados a baja temperatura. El motivador supremo para vuestro adiestramiento."
    }
  ];

  const products = [
    {
      id: "orejas_res",
      name: "Orejas de res deshidratadas",
      desc: "Premio masticable natural de larga duración, ideal para calmar la ansiedad por mordida destructiva.",
      price: 29900,
      image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=600",
      tag: "Más vendido"
    },
    {
      id: "orejas_cerdo",
      name: "Orejas de cerdo deshidratadas",
      desc: "Sabor intensamente crujiente, sumamente ricas en proteínas de altísima absorción biológica.",
      price: 27900,
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=600",
      tag: "Favorito del Mes"
    },
    {
      id: "traqueas_res",
      name: "Tráqueas de res deshidratadas",
      desc: "Snack cartilaginoso crujiente, repleto de condoprotectores orgánicos para la salud de sus caderas.",
      price: 32900,
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&q=80&w=600",
      tag: "Salud Articular"
    },
    {
      id: "viril_toro",
      name: "Viril de toro premium",
      desc: "Masticable duradero e hipoalergénico que mantiene ocupados y relajados a los mordedores más potentes.",
      price: 39900,
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=600",
      tag: "Máxima Duración"
    },
    {
      id: "bofe_desh",
      name: "Bofe de res crujiente",
      desc: "Snack ligero, de textura aireada. Se corta fácilmente en daditos para tus sesiones de adiestramiento.",
      price: 21900,
      image: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?auto=format&fit=crop&q=80&w=600",
      tag: "Ideal Adiestrar"
    }
  ];

  const addToCart = (id: string) => {
    setCart(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => {
      const nextQty = (prev[id] || 0) + delta;
      if (nextQty <= 0) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: nextQty };
    });
  };

  const cartItemsCount = Object.keys(cart).reduce((acc, key) => acc + (cart[key] || 0), 0);
  const cartTotal = Object.keys(cart).reduce((total, id) => {
    const qty = cart[id] || 0;
    const prod = products.find(p => p.id === id);
    return total + (prod ? prod.price * qty : 0);
  }, 0);

  const handleCheckout = () => {
    setIsCartOpen(false);
    setShowCheckoutSuccess(true);
    setCart({});
  };

  return (
    <div className="w-full bg-[#0A0A0C] min-h-screen relative py-12 px-4" id="page-pekisnax">
      
      {/* SECCIÓN 1: HERO (RUSTIC COZY STYLE) */}
      <section className="max-w-6xl mx-auto bg-gradient-to-br from-[#060D07] via-[#0E1F0F] to-[#060D07] border border-[#94E07B]/10 rounded-[40px] py-16 px-6 text-center text-white relative overflow-hidden mb-16 shadow-2xl">
        {/* Organic overlay decoration */}
        <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-[#94E07B]/5 blur-xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-[#F277B0]/5 blur-2xl pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center">
          <span className="text-xs font-mono text-[#94E07B] tracking-widest uppercase font-bold mb-3 block">
            Nuestra Línea Masticable Artesanal
          </span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-white font-extrabold leading-tight mb-4">
            Pekisnax: Nutrición deshidratada natural
          </h1>
          <p className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl">
            Premios de un único ingrediente deshidratados artesanalmente a baja temperatura para preservar nutrientes, potenciar el aroma y promover un estado natural de calma y descompresión.
          </p>
        </div>
      </section>

      {/* SECCIÓN 2: BENEFICIOS (Natural Linen background aesthetic) */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-[#F277B0] tracking-widest uppercase font-semibold block mb-1">
            Los Beneficios de la Masticación
          </span>
          <h2 className="font-display text-2xl sm:text-3xl text-white font-extrabold">
            ¿Por qué elegir Pekisnax?
          </h2>
          <div className="w-12 h-1 bg-[#94E07B] mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {benefits.map((b, idx) => (
            <div
              key={idx}
              className="organic-card p-8 rounded-[36px]"
            >
              <div className="w-10 h-10 rounded-xl bg-[#94E07B]/10 text-[#94E07B] flex items-center justify-center mb-6">
                <Check className="w-5 h-5 stroke-[2.5]" />
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2">
                {b.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN 3: EL MARKETPLACE NATURAL (Arpillera virtual / warm canvas) */}
      <section className="max-w-7xl mx-auto bg-[#121214] border border-white/5 p-8 sm:p-12 rounded-[40px] mb-20 relative">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <div>
            <span className="text-xs font-mono text-[#94E07B] uppercase tracking-widest block font-bold">Artesanía de Origen</span>
            <h2 className="font-display text-2xl sm:text-3xl text-white font-extrabold">
              Nuestro Granero Natural
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 font-sans mt-1">
              Snacks selectos empacados al vacío para máxima frescura aromática.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((p) => (
            <div
              key={p.id}
              className="organic-card rounded-[40px] overflow-hidden flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1.5"
            >
              <div>
                <div className="relative h-[220px] bg-[#121214] flex items-center justify-center overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-[#94E07B] text-[9px] font-mono tracking-widest font-bold uppercase px-3.5 py-1.5 rounded-full shadow-xs">
                    {p.tag}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-[#94E07B] transition-colors leading-snug">
                    {p.name}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-sans font-medium">
                    {p.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between">
                <span className="font-display text-lg font-black text-[#94E07B]">
                  {formatPrice(p.price)}
                </span>
                <button
                  onClick={() => addToCart(p.id)}
                  className="bg-[#94E07B] hover:bg-[#94E07B]/95 text-[#0A0A0C] font-display font-black text-[10px] tracking-wider uppercase px-4 py-3 rounded-full transition-all hover:scale-103 cursor-pointer flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" /> Añadir al nido
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FLOATING PERSISTENT BOTTOM-RIGHT CTA: "LLEVA BIENESTAR A CASA" */}
      <div className="fixed bottom-6 right-6 z-40">
        <motion.button
          onClick={() => setIsCartOpen(true)}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="bg-[#94E07B] hover:bg-[#94E07B]/95 text-[#0A0A0C] font-display font-black text-xs tracking-wider uppercase px-6 py-4.5 rounded-full shadow-2xl flex items-center gap-2.5 transition-all hover:scale-103 cursor-pointer border-2 border-[#94E07B]/50"
        >
          <ShoppingCart className="w-4 h-4 fill-current text-[#0A0A0C]" />
          <span>Lleva bienestar a casa {cartItemsCount > 0 ? `(${cartItemsCount})` : ""}</span>
        </motion.button>
      </div>

      {/* SHOPPING CART DRAWER */}
      <AnimatePresence>
        {isCartOpen && (
          <div className="fixed inset-0 z-50 flex justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="absolute inset-0 bg-[#1A1A1A]/60 backdrop-blur-xs"
            />

            {/* Cart Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="relative w-full max-w-md bg-[#121214] h-full shadow-2xl z-10 flex flex-col border-l border-white/5"
            >
              {/* Header */}
              <div className="p-6 border-b border-white/5 flex justify-between items-center bg-[#0A0A0C]">
                <h3 className="font-display font-extrabold text-lg text-white flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-[#94E07B]" /> Tu Canasta Pekisnax
                </h3>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-9 h-9 rounded-full hover:bg-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-all cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cartItemsCount === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-gray-500 mb-4">
                      <ShoppingBag className="w-8 h-8" />
                    </div>
                    <p className="font-sans text-sm text-gray-400">Tu canasta está vacía por ahora.</p>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="mt-4 text-xs font-display font-bold uppercase tracking-wider text-[#94E07B] underline cursor-pointer"
                    >
                      Explorar snacks naturales
                    </button>
                  </div>
                ) : (
                  Object.entries(cart).map(([id, qty]) => {
                    const prod = products.find(p => p.id === id);
                    if (!prod) return null;
                    return (
                      <div key={id} className="flex gap-4 items-center justify-between border-b border-white/5 pb-4">
                        <div className="flex gap-3 items-center">
                          <div className="w-14 h-14 rounded-2xl overflow-hidden shrink-0 border border-white/5">
                            <img src={prod.image} alt={prod.name} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <h4 className="font-display font-bold text-xs text-white line-clamp-1">{prod.name}</h4>
                            <p className="font-display text-xs text-[#94E07B] font-semibold mt-0.5">{formatPrice(prod.price)}</p>
                          </div>
                        </div>

                        {/* Controls */}
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(id, -1)}
                            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-300 transition-colors cursor-pointer"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="font-mono text-xs font-bold text-white w-4 text-center">{qty}</span>
                          <button
                            onClick={() => updateQuantity(id, 1)}
                            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-300 transition-colors cursor-pointer"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Checkout Block */}
              {cartItemsCount > 0 && (
                <div className="p-6 border-t border-white/5 bg-[#0C120D] space-y-4">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-sans text-gray-400 font-medium">Subtotal</span>
                    <span className="font-mono font-bold text-gray-300">{formatPrice(cartTotal)}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-sans text-gray-400 font-medium">Envío Express</span>
                    <span className="font-mono font-bold text-[#94E07B] uppercase text-[10px]">Gratis</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-t border-white/5 pt-4">
                    <span className="font-display font-extrabold text-white">Total</span>
                    <span className="font-mono font-black text-lg text-[#94E07B]">{formatPrice(cartTotal)}</span>
                  </div>

                  <button
                    onClick={handleCheckout}
                    className="w-full bg-[#94E07B] hover:bg-[#94E07B]/95 text-[#0A0A0C] font-display font-black text-xs tracking-wider uppercase py-4 rounded-full transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#94E07B]/20 cursor-pointer"
                  >
                    Lleva bienestar a casa ahora
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* CHECKOUT SUCCESS MODAL */}
      <AnimatePresence>
        {showCheckoutSuccess && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#1A1A1A]/60 backdrop-blur-sm"
              onClick={() => setShowCheckoutSuccess(false)}
            />

            {/* Success Modal Panel */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#121214] rounded-[40px] p-8 max-w-md w-full relative z-10 text-center shadow-2xl border border-white/10"
            >
              <div className="w-16 h-16 rounded-full bg-[#94E07B]/10 text-[#94E07B] flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>

              <h3 className="font-display font-extrabold text-2xl text-white mb-2">
                ¡Pedido Confirmado!
              </h3>
              <p className="font-sans text-sm text-gray-400 leading-relaxed mb-6">
                Hemos recibido tu solicitud simulada. Un asesor de Shipeki te contactará a la brevedad por WhatsApp para coordinar los datos de entrega de tu Pekisnax.
              </p>

              <button
                onClick={() => setShowCheckoutSuccess(false)}
                className="bg-[#94E07B] hover:bg-[#94E07B]/90 text-[#0A0A0C] px-8 py-4 rounded-full font-display font-black text-xs uppercase tracking-wider w-full cursor-pointer"
              >
                Volver a la tienda
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
