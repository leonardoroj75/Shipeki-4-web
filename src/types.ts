/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Question {
  id: number;
  text: string;
  category: "reactivity" | "anxiety" | "sociability" | "cognition";
  options: {
    text: string;
    score: number;
    description: string;
  }[];
}

export interface EthologyProfile {
  title: string;
  subtitle: string;
  description: string;
  strengths: string[];
  challenges: string[];
  recommendation: string;
  recommendedServices: string[];
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  benefits: string[];
  duration: string;
  intensity: "Suave" | "Moderado" | "Intenso";
  bgGradient: string;
  iconName: string;
}

export interface Testimonial {
  id: number;
  family: string;
  dogName: string;
  dogBreed: string;
  text: string;
  rating: number;
  avatar: string;
}
