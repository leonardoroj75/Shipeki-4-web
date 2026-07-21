/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, User, Mail, Phone, Heart, ClipboardCheck, Sparkles, AlertCircle, FileText, CheckCircle2 } from "lucide-react";

interface ShipekiBookingProps {
  linkedProfile: string | null;
  linkedServices: string[];
  onClearLink: () => void;
}

export default function ShipekiBooking({ linkedProfile, linkedServices, onClearLink }: ShipekiBookingProps) {
  const [formData, setFormData] = useState({
    ownerName: "",
    email: "",
    phone: "",
    dogName: "",
    dogBreed: "",
    dogAge: "",
    preferredService: "",
    preferredDate: "",
    preferredTime: "morning",
    notes: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (linkedServices && linkedServices.length > 0) {
      setFormData((prev) => ({
        ...prev,
        preferredService: linkedServices[0]
      }));
    }
  }, [linkedServices]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.ownerName || !formData.email || !formData.phone || !formData.dogName) {
      setError("Por favor, completa todos los campos obligatorios para agendar tu consulta de lujo.");
      return;
    }
    setError(null);
    setIsSubmitting(true);

    // Simulate luxury etiological scheduling API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1800);
  };

  return (
    <div className="bg-shipeki-dark text-white rounded-3xl shadow-2xl overflow-hidden border border-shipeki-pink/20 max-w-4xl mx-auto" id="shipeki-booking">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Info Column */}
        <div className="lg:col-span-5 bg-gradient-to-br from-shipeki-charcoal to-shipeki-dark p-8 md:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-gray-800">
          <div>
            <span className="text-xs font-mono text-shipeki-pink tracking-widest uppercase font-semibold">
              Servicio Concierge
            </span>
            <h3 className="font-display text-3xl md:text-4xl text-white font-bold mt-2 mb-6">
              Inicia la Transformación
            </h3>
            <p className="text-gray-400 font-sans text-sm leading-relaxed mb-6">
              Agenda una sesión privada de diagnóstico etológico. Un especialista de Shipeki analizará el lenguaje, emociones y conducta de tu perro para diseñar un plan a su medida.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-shipeki-pink/10 text-shipeki-pink flex items-center justify-center shrink-0 mt-0.5 font-mono text-xs font-bold">1</div>
                <div>
                  <h5 className="font-sans font-semibold text-sm text-gray-200">Duración Completa</h5>
                  <p className="text-xs text-gray-400 font-sans">90 minutos de diagnóstico práctico y teórico.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-shipeki-pink/10 text-shipeki-pink flex items-center justify-center shrink-0 mt-0.5 font-mono text-xs font-bold">2</div>
                <div>
                  <h5 className="font-sans font-semibold text-sm text-gray-200">Especialistas de Élite</h5>
                  <p className="text-xs text-gray-400 font-sans font-light">Bajo la supervisión de la Dra. Sofía Alarcón.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-shipeki-pink/10 text-shipeki-pink flex items-center justify-center shrink-0 mt-0.5 font-mono text-xs font-bold">3</div>
                <div>
                  <h5 className="font-sans font-semibold text-sm text-gray-200">Informe Digital Shipeki</h5>
                  <p className="text-xs text-gray-400 font-sans">Recibe un dossier completo con el perfil de tu perro.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-800 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-shipeki-pink/20 bg-shipeki-pink/5 flex items-center justify-center text-shipeki-pink">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-sans leading-tight">Compromiso Shipeki:</p>
              <p className="text-xs text-gray-200 font-sans font-semibold leading-normal">Bienestar canino 100% respetuoso y científico.</p>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-7 p-8 md:p-10 bg-shipeki-dark">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {linkedProfile && (
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="mb-6 p-4 bg-shipeki-pink/10 border border-shipeki-pink/30 rounded-2xl flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-shipeki-pink/20 flex items-center justify-center text-shipeki-pink">
                        <ClipboardCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-mono font-semibold text-shipeki-pink uppercase tracking-wider">Perfil Vinculado</p>
                        <p className="text-sm font-semibold text-white">{linkedProfile}</p>
                      </div>
                    </div>
                    <button
                      onClick={onClearLink}
                      type="button"
                      className="text-xs text-gray-400 hover:text-white underline font-sans transition-colors"
                    >
                      Remover
                    </button>
                  </motion.div>
                )}

                {error && (
                  <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-start gap-3 text-red-200 text-sm font-sans">
                    <AlertCircle className="w-5 h-5 shrink-0 text-red-400 mt-0.5" />
                    <span>{error}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 font-sans">
                        Nombre del Propietario *
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-500 pointer-events-none">
                          <User className="w-4.5 h-4.5" />
                        </span>
                        <input
                          type="text"
                          name="ownerName"
                          value={formData.ownerName}
                          onChange={handleChange}
                          placeholder="Tu nombre completo"
                          className="w-full bg-shipeki-charcoal border border-gray-800 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-shipeki-pink focus:ring-1 focus:ring-shipeki-pink transition-all font-sans"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 font-sans">
                        Teléfono Móvil *
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-500 pointer-events-none">
                          <Phone className="w-4.5 h-4.5" />
                        </span>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+34 600 000 000"
                          className="w-full bg-shipeki-charcoal border border-gray-800 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-shipeki-pink focus:ring-1 focus:ring-shipeki-pink transition-all font-sans"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 font-sans">
                      Correo Electrónico *
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-500 pointer-events-none">
                        <Mail className="w-4.5 h-4.5" />
                      </span>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ejemplo@correo.com"
                        className="w-full bg-shipeki-charcoal border border-gray-800 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-shipeki-pink focus:ring-1 focus:ring-shipeki-pink transition-all font-sans"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 font-sans">
                        Nombre del Perro *
                      </label>
                      <input
                        type="text"
                        name="dogName"
                        value={formData.dogName}
                        onChange={handleChange}
                        placeholder="Ej. Bruno"
                        className="w-full bg-shipeki-charcoal border border-gray-800 rounded-xl py-3 px-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-shipeki-pink focus:ring-1 focus:ring-shipeki-pink transition-all font-sans"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 font-sans">
                        Raza Canina
                      </label>
                      <input
                        type="text"
                        name="dogBreed"
                        value={formData.dogBreed}
                        onChange={handleChange}
                        placeholder="Ej. Golden Retriever"
                        className="w-full bg-shipeki-charcoal border border-gray-800 rounded-xl py-3 px-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-shipeki-pink focus:ring-1 focus:ring-shipeki-pink transition-all font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 font-sans">
                        Edad Canina
                      </label>
                      <input
                        type="text"
                        name="dogAge"
                        value={formData.dogAge}
                        onChange={handleChange}
                        placeholder="Ej. 2 años"
                        className="w-full bg-shipeki-charcoal border border-gray-800 rounded-xl py-3 px-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-shipeki-pink focus:ring-1 focus:ring-shipeki-pink transition-all font-sans"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 font-sans">
                        Servicio Preferido
                      </label>
                      <select
                        name="preferredService"
                        value={formData.preferredService}
                        onChange={handleChange}
                        className="w-full bg-shipeki-charcoal border border-gray-800 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-shipeki-pink focus:ring-1 focus:ring-shipeki-pink transition-all font-sans"
                      >
                        <option value="">Selecciona un programa premium</option>
                        <option value="Evaluación Conductual Premium">Evaluación Conductual Premium</option>
                        <option value="Adiestramiento Cognitivo-Emocional">Adiestramiento Cognitivo-Emocional</option>
                        <option value="Estancia de Convivencia y Armonía">Estancia de Convivencia y Armonía</option>
                        <option value="Terapia de Vínculo Familiar">Terapia de Vínculo Familiar</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 font-sans">
                        Fecha Sugerida
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-500 pointer-events-none">
                          <Calendar className="w-4.5 h-4.5" />
                        </span>
                        <input
                          type="date"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          className="w-full bg-shipeki-charcoal border border-gray-800 rounded-xl py-3 pl-11 pr-4 text-sm text-white focus:outline-none focus:border-shipeki-pink focus:ring-1 focus:ring-shipeki-pink transition-all font-sans"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 font-sans">
                      Horario de Preferencia
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {["morning", "afternoon", "weekend"].map((timeSlot) => {
                        const labels: Record<string, string> = {
                          morning: "Mañanas",
                          afternoon: "Tardes",
                          weekend: "Sábados"
                        };
                        const isSelected = formData.preferredTime === timeSlot;
                        return (
                          <button
                            key={timeSlot}
                            type="button"
                            onClick={() => setFormData((prev) => ({ ...prev, preferredTime: timeSlot }))}
                            className={`py-2.5 px-4 rounded-xl text-xs font-medium font-sans border transition-all ${
                              isSelected
                                ? "bg-shipeki-pink border-shipeki-pink text-white shadow-md shadow-shipeki-pink/15"
                                : "bg-shipeki-charcoal border-gray-800 text-gray-400 hover:border-gray-700"
                            }`}
                          >
                            {labels[timeSlot]}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 font-sans">
                      Motivo de consulta / Observaciones
                    </label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Descríbenos brevemente el comportamiento de tu compañero o tus metas conductuales..."
                      className="w-full bg-shipeki-charcoal border border-gray-800 rounded-xl py-3 px-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-shipeki-pink focus:ring-1 focus:ring-shipeki-pink transition-all font-sans resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 bg-gradient-to-r from-shipeki-pink to-shipeki-pink/90 text-white hover:opacity-95 py-4 rounded-xl font-sans font-bold text-sm tracking-widest uppercase transition-all shadow-lg shadow-shipeki-pink/20 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Validando Agenda de Lujo...
                      </>
                    ) : (
                      <>
                        Solicitar Cita de Diagnóstico <Sparkles className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 px-4"
              >
                <div className="w-16 h-16 bg-shipeki-green/10 text-shipeki-green rounded-full flex items-center justify-center border border-shipeki-green/30 mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-display text-2xl md:text-3xl text-white font-bold mb-3">
                  Petición Recibida con Éxito
                </h4>
                <p className="text-gray-400 font-sans text-sm max-w-md mx-auto mb-8">
                  Hemos bloqueado un espacio preferente para <strong className="text-white">{formData.dogName}</strong> en nuestra agenda. Un asistente de bienestar concierge te contactará vía telefónica en las próximas horas para formalizar tu cita.
                </p>

                {/* Etiological Receipt */}
                <div className="max-w-md mx-auto bg-shipeki-charcoal rounded-2xl border border-gray-800 p-6 text-left relative overflow-hidden font-mono">
                  <div className="absolute top-0 right-0 bg-shipeki-pink text-white text-[10px] uppercase font-bold tracking-widest py-1 px-3 rounded-bl-xl">
                    Premium
                  </div>
                  <h5 className="text-xs font-semibold text-shipeki-pink uppercase tracking-widest mb-4 flex items-center gap-1.5 border-b border-gray-800 pb-3">
                    <FileText className="w-4 h-4" /> Pase de Diagnóstico
                  </h5>
                  <div className="space-y-2.5 text-xs text-gray-300">
                    <div className="flex justify-between">
                      <span className="text-gray-500">PROPIETARIO:</span>
                      <span className="text-white text-right">{formData.ownerName.toUpperCase()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">COMPAÑERO CANINO:</span>
                      <span className="text-white text-right">
                        {formData.dogName.toUpperCase()} ({formData.dogBreed || "MIXED BREED"})
                      </span>
                    </div>
                    {linkedProfile && (
                      <div className="flex justify-between">
                        <span className="text-gray-500">PERFIL ETOLÓGICO:</span>
                        <span className="text-shipeki-pink text-right font-sans font-bold text-[11px]">{linkedProfile}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-gray-500">DIAGNÓSTICO SOLICITADO:</span>
                      <span className="text-white text-right">{formData.preferredService || "Evaluación General"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">FECHA PROPUESTA:</span>
                      <span className="text-white text-right">
                        {formData.preferredDate ? new Date(formData.preferredDate).toLocaleDateString("es-ES", { weekday: "long", year: "numeric", month: "long", day: "numeric" }) : "Por confirmar"}
                      </span>
                    </div>
                    <div className="flex justify-between border-t border-gray-800 pt-3 mt-3">
                      <span className="text-gray-500">ESPECIALISTA ASIGNADO:</span>
                      <span className="text-shipeki-green text-right">Dra. Sofía Alarcón</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-xs font-sans text-gray-400 hover:text-white underline transition-colors"
                >
                  Registrar otra consulta
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
