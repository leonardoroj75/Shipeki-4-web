/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ArrowRight, ArrowLeft, RefreshCw, CheckCircle, AlertTriangle, Dog, Award } from "lucide-react";
import { Question, EthologyProfile } from "../types";

const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "¿Cómo reacciona tu perro cuando suena el timbre de casa o llega alguien desconocido?",
    category: "reactivity",
    options: [
      {
        text: "Ladrido explosivo y saltos continuos",
        score: 1,
        description: "Se sobreexcita con rapidez, da vueltas o salta sobre las visitas y le cuesta más de 5 minutos recuperar la calma."
      },
      {
        text: "Curiosidad inmediata y saludo efusivo",
        score: 2,
        description: "Va de inmediato con curiosidad y saluda amigablemente con la cola relajada y movimientos fluidos."
      },
      {
        text: "Retraimiento, timidez o evasión",
        score: 3,
        description: "Se aleja, se esconde detrás de ti, bosteza o evita por completo el contacto visual manteniéndose a salvo."
      },
      {
        text: "Observación atenta y espera pasiva",
        score: 4,
        description: "Mira con atención pero espera quieto a ver cómo reaccionas tú antes de aproximarse de forma pausada."
      }
    ]
  },
  {
    id: 2,
    text: "Durante los paseos diarios, al avistar a otro perro a la distancia, tu compañero suele:",
    category: "reactivity",
    options: [
      {
        text: "Tensionar la correa, gemir o ladrar",
        score: 1,
        description: "Se tensa visiblemente, vocaliza de forma aguda o arremete queriendo llegar de forma explosiva al otro can."
      },
      {
        text: "Ignorar o buscar saludo pacífico",
        score: 2,
        description: "Mantiene la correa floja, muestra interés amistoso pero camina con tranquilidad sin perder el autocontrol."
      },
      {
        text: "Paralizarse, lamerse los labios o desviar el rumbo",
        score: 3,
        description: "Prefiere dar la vuelta, se lame el hocico con frecuencia, olfatea el suelo de forma exagerada para evitar el encuentro."
      },
      {
        text: "Buscar tu mirada y esperar instrucciones",
        score: 4,
        description: "Te mira buscando aprobación o se sienta de forma voluntaria esperando que indiques la marcha."
      }
    ]
  },
  {
    id: 3,
    text: "Al quedarse solo en el hogar por unas horas, su comportamiento habitual es:",
    category: "anxiety",
    options: [
      {
        text: "Destrucción de objetos pequeños o nerviosismo inicial",
        score: 1,
        description: "Puede morder ocasionalmente correspondencia o calzado, o dar paseos inquietos por la casa antes de calmarse."
      },
      {
        text: "Descanso profundo en su zona asignada",
        score: 2,
        description: "Duerme plácidamente en su cama o se entretiene de forma autónoma con sus mordedores sin mayor alteración."
      },
      {
        text: "Llantos continuos, arañazos en puertas o salivación",
        score: 3,
        description: "Sufre ansiedad notable: rasca los puntos de salida, vocaliza de manera persistente o deja huellas de saliva."
      },
      {
        text: "Vigilancia pasiva en puntos estratégicos",
        score: 4,
        description: "Se posiciona cerca de ventanas o zonas elevadas controlando el entorno pacientemente hasta tu retorno."
      }
    ]
  },
  {
    id: 4,
    text: "Cuando afronta un nuevo aprendizaje o un juego de estimulación mental:",
    category: "cognition",
    options: [
      {
        text: "Se frustra rápido y abandona ladrando",
        score: 1,
        description: "Si no consigue el premio al primer intento, se frustra, rasca el juguete con ira o ladra exigiendo ayuda."
      },
      {
        text: "Muestra entusiasmo pero se distrae con facilidad",
        score: 2,
        description: "Disfruta participar contigo pero cualquier sonido o estímulo ambiental le hace perder la concentración."
      },
      {
        text: "Muestra inseguridad y teme equivocarse",
        score: 3,
        description: "Se bloquea si siente presión, se tumba de lado sumiso o prefiere no interactuar si no está 100% seguro."
      },
      {
        text: "Analiza con calma, prueba opciones y persevera",
        score: 4,
        description: "Utiliza sus patas y hocico de forma metódica, mantiene el foco prolongado y muestra gran tenacidad cognitiva."
      }
    ]
  }
];

const PROFILES: Record<number, EthologyProfile> = {
  1: {
    title: "Explorador Sensible y Reactivo",
    subtitle: "Sensibilidad sensorial elevada con necesidad de autorregulación",
    description: "Tu compañero posee un sistema nervioso altamente reactivo a los estímulos del entorno. Vive las emociones con gran intensidad y le cuesta pasar de un estado de alta excitación a uno de calma de forma autónoma. No se trata de desobediencia, sino de una respuesta emocional desbordada que requiere comprensión y herramientas técnicas de etología.",
    strengths: [
      "Alta motivación por el juego y los premios.",
      "Vínculo familiar muy protector y cercano.",
      "Gran rapidez de respuesta y estado de alerta innato."
    ],
    challenges: [
      "Dificultad para gestionar la frustración en ambientes dinámicos.",
      "Reactividad por acumulación de estrés (efecto gatillo).",
      "Umbral de excitación bajo que bloquea el aprendizaje tradicional."
    ],
    recommendation: "Recomendamos enfocar su educación en la reducción de cortisol (hormona del estrés), paseos de descompresión y entrenamiento de autocontrol emocional.",
    recommendedServices: ["Adiestramiento Cognitivo-Emocional", "Evaluación Conductual Premium"]
  },
  2: {
    title: "Sociable Aventurero Emocional",
    subtitle: "Carácter equilibrado y extravertido con tendencia a la dispersión",
    description: "Tu perro goza de una excelente base social y un temperamento alegre y confiado. Disfruta enormemente de la interacción humana y canina. Sin embargo, su enorme entusiasmo puede traducirse en una falta de límites claros, tironeos en la correa por saludar y dificultades para mantener la concentración cuando el entorno es estimulante.",
    strengths: [
      "Excelente sociabilidad inter e intraespecífica.",
      "Temperamento optimista y adaptativo.",
      "Ausencia de miedos o fobias limitantes."
    ],
    challenges: [
      "Dificultad para gestionar los saludos calmados.",
      "Atención dispersa ante la presencia de otros perros.",
      "Dependencia de estímulos externos para mantener el foco."
    ],
    recommendation: "Es el perfil ideal para canalizar esa maravillosa energía a través de obediencia cooperativa, socialización regulada en entornos de lujo y juegos de foco avanzado.",
    recommendedServices: ["Estancia de Convivencia y Armonía", "Adiestramiento Cognitivo-Emocional"]
  },
  3: {
    title: "Alma Noble de Corazón Reservado",
    subtitle: "Inseguridad emocional y necesidad de seguridad y confianza",
    description: "Tu compañero procesa el mundo desde la cautela y, en ocasiones, el temor. Su sensibilidad etológica le hace percibir pequeños cambios ambientales como amenazas. Su bienestar reside en la predictibilidad de su rutina y en la presencia de su núcleo familiar, pudiendo manifestar angustia extrema ante la separación o ruidos imprevistos.",
    strengths: [
      "Extrema lealtad y dulzura con su familia de confianza.",
      "Comportamiento silencioso y respetuoso en casa cuando se siente seguro.",
      "Excelente capacidad de comunicación sutil si se aprende a leerla."
    ],
    challenges: [
      "Inseguridad ante personas o perros desconocidos.",
      "Sintomatología de apego ansioso y miedo al abandono.",
      "Bloqueo cognitivo ante castigos, gritos o correcciones físicas."
    ],
    recommendation: "Este sensible perfil requiere un enfoque puramente respetuoso de etología científica, enfocado en el fomento de su autoestima, desensibilización sistemática y fortalecimiento del vínculo familiar seguro.",
    recommendedServices: ["Terapia de Vínculo Familiar", "Evaluación Conductual Premium"]
  },
  4: {
    title: "Mente Brillante Analítica",
    subtitle: "Alta capacidad cognitiva y necesidad de retos intelectuales",
    description: "Tienes a un pensador en casa. Tu perro aprende patrones con asombrosa velocidad, resuelve problemas complejos con soltura y posee una mente inquieta. Si este tipo de inteligencia no es estimulada con retos cognitivos adecuados, él mismo 'inventará sus propios trabajos', los cuales suelen no coincidir con las reglas del hogar.",
    strengths: [
      "Capacidad de aprendizaje superior a la media.",
      "Excelente foco en tareas de resolución de problemas.",
      "Iniciativa innata y resiliencia ante desafíos intelectuales."
    ],
    challenges: [
      "Aparición rápida de aburrimiento crónico si la rutina es monótona.",
      "Posible desarrollo de conductas obsesivo-compulsivas por falta de estimulación.",
      "Gran habilidad para manipular sutilmente las dinámicas del hogar."
    ],
    recommendation: "Tu compañero necesita enriquecimiento ambiental avanzado, juegos de olfato terapéutico y un co-liderazgo familiar basado en la estimulación mental diaria.",
    recommendedServices: ["Adiestramiento Cognitivo-Emocional", "Estancia de Convivencia y Armonía"]
  }
};

interface ShipekiAssessmentProps {
  onSelectResult: (profileTitle: string, services: string[]) => void;
}

export default function ShipekiAssessment({ onSelectResult }: ShipekiAssessmentProps) {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState<boolean>(false);
  const [calculatedProfile, setCalculatedProfile] = useState<EthologyProfile | null>(null);

  const handleOptionSelect = (questionId: number, score: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: score }));
  };

  const handleNext = () => {
    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      calculateResult();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const calculateResult = () => {
    // Determine the most common score category
    const scores = Object.values(answers) as number[];
    const counts: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0 };
    scores.forEach((s) => {
      counts[s] = (counts[s] || 0) + 1;
    });

    // Find the score with the highest count (or tie breaker)
    let dominantScore = 2; // Default to sociable/balanced
    let maxCount = 0;
    for (const [score, count] of Object.entries(counts)) {
      const sNum = Number(score);
      if (count > maxCount) {
        maxCount = count;
        dominantScore = sNum;
      } else if (count === maxCount) {
        // If tied, let's favor Reactivity (1) or Anxiety (3) as they represent higher need for help
        if (sNum === 1 || sNum === 3) {
          dominantScore = sNum;
        }
      }
    }

    const profile = PROFILES[dominantScore];
    setCalculatedProfile(profile);
    setShowResult(true);
  };

  const resetTest = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResult(false);
    setCalculatedProfile(null);
  };

  const currentQuestion = QUESTIONS[currentStep];
  const isOptionSelected = answers[currentQuestion.id] !== undefined;

  return (
    <div className="bg-[#121214] rounded-3xl shadow-2xl overflow-hidden border border-white/5 max-w-3xl mx-auto" id="shipeki-assessment">
      <div className="bg-[#0A0A0C] text-white px-8 py-6 flex items-center justify-between border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-[#94E07B]/10 rounded-xl border border-[#94E07B]/20 text-[#94E07B]">
            <Dog className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold tracking-wide">Test Etológico de Shipeki</h3>
            <p className="text-xs text-gray-400 font-sans mt-0.5">Analizador conductual cognitivo-emocional</p>
          </div>
        </div>
        {!showResult && (
          <div className="text-xs bg-[#F277B0]/10 text-[#F277B0] border border-[#F277B0]/20 px-3 py-1.5 rounded-full font-mono">
            Pregunta {currentStep + 1} de {QUESTIONS.length}
          </div>
        )}
      </div>

      <div className="p-8 md:p-10">
        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Progress bar */}
              <div className="w-full bg-white/5 h-1.5 rounded-full mb-8 overflow-hidden">
                <div
                  className="bg-[#F277B0] h-full transition-all duration-300 ease-out"
                  style={{ width: `${((currentStep + 1) / QUESTIONS.length) * 100}%` }}
                />
              </div>

              <h4 className="font-display text-xl md:text-2xl text-white font-medium leading-relaxed mb-6">
                {currentQuestion.text}
              </h4>

              <div className="grid grid-cols-1 gap-4 mb-8">
                {currentQuestion.options.map((option) => {
                  const isSelected = answers[currentQuestion.id] === option.score;
                  return (
                    <button
                      key={option.score}
                      onClick={() => handleOptionSelect(currentQuestion.id, option.score)}
                      className={`text-left p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                        isSelected
                          ? "border-[#F277B0] bg-[#F277B0]/5 shadow-md shadow-[#F277B0]/5"
                          : "border-white/5 bg-[#1A1A1E] hover:border-white/15 hover:bg-[#202024]"
                      }`}
                    >
                      {isSelected && (
                        <div className="absolute top-0 right-0 w-3 h-3 bg-[#F277B0] rounded-bl-lg" />
                      )}
                      <div className="flex gap-4 items-start">
                        <div
                          className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                            isSelected
                              ? "border-[#F277B0] bg-[#F277B0] text-white"
                              : "border-white/10 group-hover:border-white/25"
                          }`}
                        >
                          {isSelected && <span className="w-2.5 h-2.5 bg-[#0A0A0C] rounded-full" />}
                        </div>
                        <div>
                          <p className={`font-sans font-medium text-sm md:text-base ${
                            isSelected ? "text-[#94E07B]" : "text-gray-200"
                          }`}>
                            {option.text}
                          </p>
                          <p className="text-xs text-gray-400 font-sans mt-1 leading-relaxed">
                            {option.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <button
                  onClick={handlePrev}
                  disabled={currentStep === 0}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium font-sans transition-all cursor-pointer ${
                    currentStep === 0
                      ? "text-gray-700 cursor-not-allowed"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" /> Anterior
                </button>

                <button
                  onClick={handleNext}
                  disabled={!isOptionSelected}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-black font-display tracking-wider uppercase transition-all cursor-pointer ${
                    isOptionSelected
                      ? "bg-[#94E07B] text-[#0A0A0C] hover:bg-[#94E07B]/95 shadow-md shadow-[#94E07B]/10"
                      : "bg-white/5 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  {currentStep === QUESTIONS.length - 1 ? (
                    <>
                      Ver Diagnóstico <Sparkles className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      Siguiente <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="text-left"
            >
              <div className="flex flex-col items-center text-center mb-8">
                <div className="w-16 h-16 bg-[#94E07B]/10 text-[#94E07B] rounded-full flex items-center justify-center border border-[#94E07B]/20 mb-4 animate-bounce">
                  <Award className="w-8 h-8" />
                </div>
                <span className="text-xs font-mono tracking-widest text-[#F277B0] uppercase font-semibold">
                  Diagnóstico Etológico Preliminar
                </span>
                <h3 className="font-display text-3xl md:text-4xl text-white font-bold mt-2">
                  {calculatedProfile?.title}
                </h3>
                <p className="text-sm text-gray-400 font-sans italic mt-1 max-w-lg">
                  "{calculatedProfile?.subtitle}"
                </p>
              </div>

              <div className="space-y-6">
                <div className="p-6 bg-[#1E1E22] rounded-2xl border border-white/5">
                  <h5 className="font-display font-semibold text-lg text-white mb-2.5">
                    Análisis Conductual
                  </h5>
                  <p className="text-sm text-gray-300 leading-relaxed font-sans">
                    {calculatedProfile?.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-emerald-950/10 rounded-2xl border border-emerald-500/20">
                    <h5 className="font-sans font-bold text-sm uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400" /> Fortalezas Clave
                    </h5>
                    <ul className="space-y-2">
                      {calculatedProfile?.strengths.map((str, idx) => (
                        <li key={idx} className="text-xs text-gray-300 font-sans flex items-start gap-2.5 leading-relaxed">
                          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full shrink-0 mt-1.5" />
                          <span>{str}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 bg-amber-950/10 rounded-2xl border border-amber-500/20">
                    <h5 className="font-sans font-bold text-sm uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-400" /> Áreas de Trabajo
                    </h5>
                    <ul className="space-y-2">
                      {calculatedProfile?.challenges.map((cha, idx) => (
                        <li key={idx} className="text-xs text-gray-300 font-sans flex items-start gap-2.5 leading-relaxed">
                          <span className="w-1.5 h-1.5 bg-amber-500 rounded-full shrink-0 mt-1.5" />
                          <span>{cha}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-r from-[#F277B0]/5 to-transparent rounded-2xl border border-white/5">
                  <h5 className="font-display font-semibold text-lg text-white mb-2">
                    Recomendación de Nuestro Experto
                  </h5>
                  <p className="text-sm text-gray-300 leading-relaxed font-sans mb-4">
                    {calculatedProfile?.recommendation}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {calculatedProfile?.recommendedServices.map((service, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium font-sans bg-[#F277B0]/10 text-[#F277B0] px-3 py-1.5 rounded-full border border-[#F277B0]/20"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 mt-10 pt-6 border-t border-white/5">
                <button
                  onClick={resetTest}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl text-sm font-medium font-sans transition-all cursor-pointer"
                >
                  <RefreshCw className="w-4 h-4" /> Repetir Test
                </button>

                <button
                  onClick={() => {
                    if (calculatedProfile) {
                      onSelectResult(calculatedProfile.title, calculatedProfile.recommendedServices);
                    }
                  }}
                  className="w-full sm:flex-1 flex items-center justify-center gap-2 px-8 py-3.5 bg-[#94E07B] text-[#0A0A0C] font-display font-black text-xs uppercase tracking-wider hover:bg-[#94E07B]/95 rounded-xl text-sm font-sans transition-all shadow-lg shadow-[#94E07B]/20 cursor-pointer"
                >
                  Vincular Perfil a Consulta Premium <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
