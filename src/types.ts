/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FAQItem {
  question: string;
  answer: string;
}

export interface MedicalModule {
  number: number;
  icon: string;
  title: string;
  description: string;
}

export interface BonusItem {
  title: string;
  value: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  stars: number;
  quote: string;
  author: string;
  specialty: string;
}

export interface PracticeProblem {
  icon: string;
  title: string;
  description: string;
  stat?: string;
}
