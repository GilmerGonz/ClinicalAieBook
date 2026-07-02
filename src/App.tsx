import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Stethoscope,
  Heart,
  Activity,
  FileText,
  ClipboardCheck,
  Brain,
  Zap,
  Clock,
  ChevronRight,
  CheckCircle2,
  Lock,
  ShieldCheck,
  Star,
  Flame,
  Award,
  Users,
  Mail,
  TrendingUp,
  FileSpreadsheet,
  AlertTriangle,
  FileCheck2,
  ExternalLink,
  BookOpenCheck
} from "lucide-react";

import BookMockup from "./components/BookMockup";
import AnimatedCounter from "./components/AnimatedCounter";
import FAQAccordion from "./components/FAQAccordion";
import CheckoutModal from "./components/CheckoutModal";
import { PracticeProblem, MedicalModule, BonusItem, Testimonial, FAQItem } from "./types";

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [currentSpecialtyIndex, setCurrentSpecialtyIndex] = useState(0);

  // Rotating specialties in the hero sub-text to show dynamic customization
  const specialties = [
    "General Practitioners",
    "Radiologists",
    "Cardiologists",
    "Oncologists",
    "Neurologists",
    "Dermatologists"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSpecialtyIndex((prev) => (prev + 1) % specialties.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [specialties.length]);

  const ebookTitle = "Artificial Intelligence in Clinical Practice";
  const ebookSubtitle = "A Practical Guide for Physicians";
  const ebookPrice = "$37";

  // Data declarations
  const problems: PracticeProblem[] = [
    {
      icon: "Clock",
      title: "Over 3 Hours Spent Daily on Documentation",
      description: "Physicians waste substantial parts of their clinical shifts summarizing medical records, filling electronic health charts, and managing medical codes.",
      stat: "3.2 Hours/Day"
    },
    {
      icon: "Flame",
      title: "Burnout Rates at an All-Time High",
      description: "Over 52% of active clinicians report emotional fatigue and cognitive overload due to repetitive clerical admin work and complex computer interfaces.",
      stat: "52% Burned Out"
    },
    {
      icon: "Stethoscope",
      title: "AI is Transforming Medicine — But Where Do You Start?",
      description: "Technology is moving rapidly, yet medical training has left a gap. Clinicians want to use safe, secure AI tools without risking compliance.",
      stat: "Workflow Gap"
    }
  ];

  const pillars = [
    {
      title: "100% Practical",
      desc: "Zero developer jargon, math, or complex theory. Just copy-and-paste medical prompts, live clinical workflows, and direct software shortcuts you can use immediately in your clinic."
    },
    {
      title: "Specialty-Specific",
      desc: "Contains tailored clinical guides and actual diagnostic prompt recipes designed for Cardiology, Oncology, Radiology, Family Practice, Neurology, and Dermatology."
    },
    {
      title: "Medically Ethical",
      desc: "Constructed with patient privacy and safety as absolute laws. Learn how to maintain strict HIPAA compliance, prevent database leaks, and audit AI outputs safely."
    }
  ];

  const modules: MedicalModule[] = [
    {
      number: 1,
      icon: "Brain",
      title: "AI Fundamentals for Clinicians",
      description: "Demystifying Machine Learning, Deep Learning, Neural Networks, and Large Language Models using clear medical analogies. Learn how LLMs function and why they fit clinical reasoning without touching a single line of computer code."
    },
    {
      number: 2,
      icon: "Stethoscope",
      title: "AI Applications by Medical Specialty",
      description: "In-depth clinical implementation scenarios. Step-by-step guides for pre-reading ECGs in Cardiology, parsing chest radiographs in Radiology, filtering clinical trial parameters in Oncology, skin lesion review, and automatic pediatric summaries."
    },
    {
      number: 3,
      icon: "Zap",
      title: "Practice Management & Workflow Automation",
      description: "The core workbook to end clinical exhaustion. Learn to deploy voice dictation tools to automatically construct clean EHR notes, optimize ICD-10 medical billing, translate summaries into plain language, and automate prior authorizations."
    },
    {
      number: 4,
      icon: "ShieldCheck",
      title: "Ethics, Implementation & Future-Proofing",
      description: "Your safe implementation roadmap. Master clinical safety checkpoints, ethical AI auditing, HIPAA compliance guidelines, data segregation, protecting electronic medical files, and preparing for the upcoming wave of FDA-cleared clinical agents."
    }
  ];

  const bonuses: BonusItem[] = [
    {
      title: "Medical Prompts Cheat Sheet",
      value: "$20",
      description: "50+ pre-formatted, robust clinical prompting templates. Simply copy, customize, and execute for instant consult drafts, patient education handouts, and multi-diagnosis clinical charts.",
      icon: "FileSpreadsheet"
    },
    {
      title: "Workflow Audit & Implementation Checklist",
      value: "$12",
      description: "A clinical step-by-step workbook to safely audit your current practice operations and integrate secure, legal AI tools without compromising database integrity.",
      icon: "ClipboardCheck"
    },
    {
      title: "Private MD Innovation Network Access",
      value: "$15",
      description: "An exclusive physician forum invitation. Interact, network, and exchange proven medical prompt recipes and electronic workflow solutions with progressive clinicians worldwide.",
      icon: "Users"
    }
  ];

  const testimonials: Testimonial[] = [
    {
      stars: 5,
      quote: "This guide completely demystified LLMs for me. I have integrated Dr. Reyes' documentation shortcuts and now save nearly 2 hours on clinical letters every single day.",
      author: "Dr. Laura Martinez, MD",
      specialty: "Radiologist"
    },
    {
      stars: 5,
      quote: "Finally, a textbook that explains clinical AI without the hyperbole. Dr. Reyes provides highly practical, medically sound templates. Essential reading for digital-era doctors.",
      author: "Dr. Carlos Herrera, MD",
      specialty: "Cardiologist"
    },
    {
      stars: 5,
      quote: "The HIPAA checklist and prompt blueprints alone are worth ten times the price. This has transformed my practice and dramatically reduced my EHR documentation anxiety.",
      author: "Dr. Ana Sofia Torres, MD",
      specialty: "Family Physician"
    }
  ];

  const faqs: FAQItem[] = [
    {
      question: "Do I need any prior programming or technical AI knowledge?",
      answer: "None at all. This guide is written by a practicing physician, specifically for physicians, in plain clinical English. There is zero code. It focuses entirely on leveraging user-friendly software interfaces and structured prompt templates."
    },
    {
      question: "Is this book relevant for my specific medical specialty?",
      answer: "Yes. In Module 2, we deep-dive into concrete application cases and pre-formulated templates tailored for several major clinical specialties, including Cardiology, Radiology, Oncology, Neurology, Dermatology, and general Family Practice."
    },
    {
      question: "How do I instantly access the book after payment?",
      answer: "Immediately upon completing your secure checkout, you will be redirected to an instant digital download page to access the eBook in high-resolution, universal PDF format. A backup download link will also be securely emailed to you instantly."
    },
    {
      question: "Is there a real money-back satisfaction guarantee?",
      answer: "Absolutely. We provide an unconditional 7-day money-back guarantee. If you don't find that Dr. Reyes' workflows save you precious practice hours or improve clinical efficiency, simply send a brief refund request within 7 days for a full 100% reimbursement."
    },
    {
      question: "How long is the guide and what is the optimal way to read it?",
      answer: "The book is around 140 pages, highly structured and structured with scannable action guides. You can read it cover-to-cover in 2 to 3 hours, or use it as a clinical reference manual to copy prompting formulas as you consult."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f0f4f8] text-slate-900 font-sans antialiased overflow-x-hidden selection:bg-med-accent/30 selection:text-med-deep">
      
      {/* 1. TOP ANNOUNCEMENT HEADER & NAVIGATION */}
      <header className="bg-white border-b border-slate-200/60 sticky top-0 z-40 backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo area */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-med-deep text-white flex items-center justify-center">
                <Activity className="w-5 h-5 text-med-green animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-sm md:text-base tracking-tight text-med-deep">
                  CLINICAL <span className="text-med-accent">AI</span>
                </span>
                <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase font-semibold">
                  Medical Innovation
                </span>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6 text-xs font-mono font-medium tracking-wide text-slate-500">
              <a href="#problem" className="hover:text-med-trust transition-colors">THE PROBLEM</a>
              <a href="#solution" className="hover:text-med-trust transition-colors">THE BOOK</a>
              <a href="#syllabus" className="hover:text-med-trust transition-colors">SYLLABUS</a>
              <a href="#bonuses" className="hover:text-med-trust transition-colors">BONUSES</a>
              <a href="#reviews" className="hover:text-med-trust transition-colors">REVIEWS</a>
              <a href="#faq" className="hover:text-med-trust transition-colors">FAQ</a>
            </nav>

            {/* Purchase CTA Nav */}
            <div>
              <button
                id="nav-cta-btn"
                onClick={() => setIsCheckoutOpen(true)}
                className="px-4 py-2 bg-med-trust hover:bg-med-deep text-white rounded-lg text-xs md:text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-1.5 cursor-pointer ripple-btn"
              >
                <Lock className="w-3 h-3 text-med-green" />
                Get Ebook - $37
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic, self-drawing ECG trace dividing the header and the body */}
        <div className="h-[2px] bg-slate-100 overflow-hidden relative">
          <svg className="absolute inset-0 w-full h-[2px] text-med-accent" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path
              d="M0,50 L350,50 L360,30 L370,70 L380,20 L390,80 L400,45 L410,55 L420,50 L1000,50"
              fill="none"
              stroke="currentColor"
              strokeWidth="15"
              className="animate-ecg"
            />
          </svg>
        </div>
      </header>

      {/* 2. SECTION 1 - HERO MÉDICO */}
      <section className="relative py-12 md:py-20 lg:py-24 bg-gradient-to-b from-white to-[#f0f4f8] overflow-hidden">
        {/* Subtle grid patterns and organic hospital-esque decorative background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0a1628" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Organic decorative blue blob */}
        <div className="absolute top-1/4 right-[-10%] w-[40%] h-[50%] bg-[#2e86c1]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-[-5%] w-[30%] h-[40%] bg-[#1abc9c]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Text Content */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left">
              
              {/* Badge */}
              <div className="self-start">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-bold text-med-trust uppercase tracking-wider">
                  <ClipboardCheck className="w-3.5 h-3.5 text-med-accent" />
                  New Release & Certified Syllabus
                </span>
              </div>

              {/* Title Header with reveal offset animation */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="space-y-3"
              >
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-med-deep tracking-tight leading-tight">
                  {ebookTitle}
                </h1>
                <p className="text-lg md:text-2xl font-sans text-med-accent font-light tracking-wide flex items-center gap-2">
                  <span>{ebookSubtitle}</span>
                  <span className="inline-block w-2 h-2 rounded-full bg-med-green animate-pulse-dot" />
                </p>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                className="text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl"
              >
                Learn how to integrate modern AI assistants into your daily clinical practice. 
                Written directly for{" "}
                <span className="font-bold text-med-trust underline decoration-med-accent/30 decoration-2">
                  {specialties[currentSpecialtyIndex]}
                </span>
                . No technical, engineering, or coding background required. Save precious time on 
                documentation, improve diagnostic accuracy, and reduce cognitive burnout.
              </motion.p>

              {/* 4 Key Benefits with medical icons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2"
              >
                <div className="flex items-start gap-3 bg-white/60 backdrop-blur-sm border border-slate-200/50 p-3.5 rounded-xl shadow-sm">
                  <span className="p-1.5 bg-[#f0f4f8] text-med-accent rounded-lg">
                    <Clock className="w-4.5 h-4.5" />
                  </span>
                  <div>
                    <h4 className="font-sans font-semibold text-xs text-slate-800">Save 2-3 Hours Daily</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">Automate documentation and clinical notes.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/60 backdrop-blur-sm border border-slate-200/50 p-3.5 rounded-xl shadow-sm">
                  <span className="p-1.5 bg-[#f0f4f8] text-med-green rounded-lg">
                    <Activity className="w-4.5 h-4.5" />
                  </span>
                  <div>
                    <h4 className="font-sans font-semibold text-xs text-slate-800">Improve Diagnostics</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">Enhance diagnostic check accuracy.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/60 backdrop-blur-sm border border-slate-200/50 p-3.5 rounded-xl shadow-sm">
                  <span className="p-1.5 bg-[#f0f4f8] text-med-trust rounded-lg">
                    <Brain className="w-4.5 h-4.5" />
                  </span>
                  <div>
                    <h4 className="font-sans font-semibold text-xs text-slate-800">No Tech Code Needed</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">Explained with clear clinical analogies.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/60 backdrop-blur-sm border border-slate-200/50 p-3.5 rounded-xl shadow-sm">
                  <span className="p-1.5 bg-[#f0f4f8] text-med-red rounded-lg">
                    <FileText className="w-4.5 h-4.5" />
                  </span>
                  <div>
                    <h4 className="font-sans font-semibold text-xs text-slate-800">Ready Prompts Pack</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">50+ ready medical prompts included.</p>
                  </div>
                </div>
              </motion.div>

              {/* Main CTA Block */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
                className="flex flex-col sm:flex-row items-center gap-4 pt-2"
              >
                <button
                  id="hero-buy-btn"
                  onClick={() => setIsCheckoutOpen(true)}
                  className="w-full sm:w-auto px-8 py-4 bg-med-trust hover:bg-med-deep text-white text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer animate-heartbeat ripple-btn"
                >
                  <Lock className="w-5 h-5 text-med-green" />
                  Get Your Copy - {ebookPrice}
                </button>
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                  <span className="text-xs font-mono font-bold text-slate-700 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-med-green" />
                    Instant Secure Digital Access
                  </span>
                  <span className="text-[10px] text-slate-500 mt-0.5">
                    Risk-Free 7-Day Money-Back Guarantee
                  </span>
                </div>
              </motion.div>

            </div>

            {/* Right Column: Premium 3D Book Mockup with float animation */}
            <div className="lg:col-span-5 flex items-center justify-center pt-8 lg:pt-0">
              <div className="animate-float-book">
                <BookMockup />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SECTION 2 - PROBLEMA MÉDICO (EL DOLOR) */}
      <section id="problem" className="py-20 md:py-28 bg-[#0a1628] text-white relative overflow-hidden">
        
        {/* ECG pulse waveform tracing the background of problem section */}
        <div className="absolute inset-x-0 top-0 h-24 overflow-hidden opacity-5">
          <svg className="w-full h-full text-med-accent" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path
              d="M0,50 L200,50 L210,30 L220,70 L230,10 L240,90 L250,45 L260,55 L270,50 L1000,50"
              fill="none"
              stroke="currentColor"
              strokeWidth="5"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-med-accent uppercase">
              Clinical Assessment
            </span>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-white tracking-tight">
              The Reality of Modern Medical Practice
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              Before learning about the solution, we must diagnose the heavy friction in daily clinic operations. 
              The electronic health record (EHR) revolution promised workflow speed, yet brought administrative crisis.
            </p>
          </div>

          {/* 3 Cards displaying the problem stats with hover lift */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problems.map((problem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:border-med-trust hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="p-3 rounded-xl bg-slate-800 text-med-accent group-hover:text-white group-hover:bg-med-trust transition-all duration-300">
                      {problem.icon === "Clock" && <Clock className="w-6 h-6" />}
                      {problem.icon === "Flame" && <Flame className="w-6 h-6 text-med-red" />}
                      {problem.icon === "Stethoscope" && <Stethoscope className="w-6 h-6" />}
                    </span>
                    <span className="text-xs font-mono text-med-accent font-semibold bg-med-trust/10 border border-med-accent/20 px-2.5 py-0.5 rounded-full">
                      {problem.stat}
                    </span>
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-slate-100 group-hover:text-white transition-colors">
                    {problem.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
                <div className="border-t border-slate-800/80 pt-4 mt-6 text-[11px] font-mono text-slate-500">
                  DIAGNOSTIC CRITERIA • {i + 1}/3
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-xs md:text-sm text-slate-400 max-w-xl mx-auto italic">
              "We entered medicine to treat patients, not to type summaries. Artificial intelligence is 
              not a replacement for physicians—it is the ultimate clinical armor."
            </p>
          </div>

        </div>
      </section>

      {/* 4. SECTION 3 - SOLUCIÓN (EL LIBRO) */}
      <section id="solution" className="py-20 md:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Visual Mockup Detail */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative">
                {/* Visual shadow and outline for elegant styling */}
                <div className="absolute inset-0 border border-slate-100 rounded-3xl p-1 bg-slate-50 translate-x-4 translate-y-4 -z-10" />
                <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-8 max-w-md shadow-sm">
                  <h4 className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase mb-4 text-center">
                    Ebook Structure Highlights
                  </h4>
                  <ul className="space-y-4 text-xs md:text-sm text-slate-600">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-med-green mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-slate-800">140 High-Res Pages</strong>
                        <p className="text-[11px] text-slate-500">Written modularly for fast reading during active shifts.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-med-green mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-slate-800">50+ Prompts Catalog</strong>
                        <p className="text-[11px] text-slate-500">Fully vetted clinical prompts categorized by operations.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-med-green mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-slate-800">Interactive PDF format</strong>
                        <p className="text-[11px] text-slate-500">Contains links, templates, checklist references, and search functionality.</p>
                      </div>
                    </li>
                  </ul>
                  <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center justify-between text-xs font-mono text-slate-500">
                    <span>PRICE: {ebookPrice} USD</span>
                    <span className="text-med-accent">7-DAY WARRANTY</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Description of core pillars */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono font-bold tracking-widest text-med-accent uppercase">
                The Therapeutic Remedy
              </span>
              <h2 className="text-2xl md:text-4xl font-serif font-bold text-med-deep tracking-tight">
                A Practical Guide Designed for the Modern Physician
              </h2>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                This handbook acts as a bridge. It is designed to provide actionable answers to the tech overload. 
                Instead of focusing on mathematical theory, this book answers the exact clinical questions you face 
                every day: How do I save time? How do I automate admin safely?
              </p>

              {/* Pillars with step layout */}
              <div className="space-y-6 pt-4">
                {pillars.map((pillar, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <span className="w-8 h-8 rounded-full bg-med-trust/10 text-med-trust font-mono font-bold flex items-center justify-center flex-shrink-0 text-sm">
                      0{i + 1}
                    </span>
                    <div className="space-y-1">
                      <h4 className="font-sans font-bold text-slate-800 text-sm md:text-base">
                        {pillar.title}
                      </h4>
                      <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <a
                  href="#syllabus"
                  className="inline-flex items-center gap-2 font-mono text-xs font-bold text-med-trust hover:text-med-deep hover:underline transition-colors cursor-pointer"
                >
                  <BookOpenCheck className="w-4 h-4" />
                  See exactly what's inside the Syllabus →
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 5. SECTION 4 - CONTENIDO (MÓDULOS) */}
      <section id="syllabus" className="py-20 md:py-28 bg-[#f8fafc] border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-med-accent uppercase">
              Curriculum Overview
            </span>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-med-deep tracking-tight">
              Syllabus & Core Learning Modules
            </h2>
            <p className="text-slate-500 text-xs md:text-sm">
              Discover the modular breakdown of the medical eBook. Clean, highly-structured clinical lessons 
              built for the physician's mind.
            </p>
          </div>

          {/* 4 Modules grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modules.map((mod, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="bg-white border border-slate-200/60 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col justify-between hover:border-med-accent hover:shadow-md transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-med-accent uppercase tracking-wider bg-[#f0f4f8] px-3 py-1 rounded-full border border-slate-200">
                      Lesson Module 0{mod.number}
                    </span>
                    <span className="p-2.5 rounded-xl bg-slate-50 text-med-trust">
                      {mod.icon === "Brain" && <Brain className="w-6 h-6" />}
                      {mod.icon === "Stethoscope" && <Stethoscope className="w-6 h-6" />}
                      {mod.icon === "Zap" && <Zap className="w-6 h-6 text-med-green" />}
                      {mod.icon === "ShieldCheck" && <ShieldCheck className="w-6 h-6 text-med-accent" />}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-serif font-bold text-med-deep leading-snug">
                    {mod.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                    {mod.description}
                  </p>
                </div>
                <div className="border-t border-slate-100 pt-4 mt-6 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>SECURE METHODOLOGY</span>
                  <span className="text-med-green flex items-center gap-1 font-semibold">
                    <CheckCircle2 className="w-3 h-3" /> Fully Vetted
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. SECTION 5 - BONOS */}
      <section id="bonuses" className="py-20 md:py-28 bg-[#f0f4f8] relative overflow-hidden">
        {/* Subtle decorative medical cross logo */}
        <div className="absolute right-[-5%] bottom-[-5%] text-slate-200/40 opacity-20 pointer-events-none">
          <svg className="w-96 h-96" viewBox="0 0 100 100" fill="currentColor">
            <path d="M 38,10 H 62 V 38 H 90 V 62 H 62 V 90 H 38 V 62 H 10 V 38 H 38 Z" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-med-accent uppercase">
              Clinical Add-ons
            </span>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-med-deep tracking-tight">
              Clinician Bonuses Included with Your Purchase
            </h2>
            <p className="text-slate-500 text-xs md:text-sm">
              Accelerate your implementation speed with complimentary companion resources. 
              Worth $47, included completely free with the eBook today.
            </p>
          </div>

          {/* 3 Bonus cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {bonuses.map((bonus, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="bg-white border border-slate-200/40 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:border-med-accent hover:shadow-md transition-all duration-300 relative overflow-hidden"
              >
                {/* Visual tag for free bonus */}
                <div className="absolute top-0 right-0 bg-[#1abc9c] text-white font-mono font-bold text-[9px] uppercase tracking-widest px-3 py-1 rounded-bl-xl border-l border-b border-med-green/25">
                  FREE BONUS
                </div>

                <div className="space-y-4">
                  <span className="inline-block p-2.5 rounded-xl bg-slate-50 text-med-trust">
                    {bonus.icon === "FileSpreadsheet" && <FileSpreadsheet className="w-6 h-6" />}
                    {bonus.icon === "ClipboardCheck" && <ClipboardCheck className="w-6 h-6 text-med-green" />}
                    {bonus.icon === "Users" && <Users className="w-6 h-6" />}
                  </span>
                  
                  <div>
                    <h3 className="text-base md:text-lg font-serif font-bold text-slate-800">
                      {bonus.title}
                    </h3>
                    <span className="text-xs font-mono font-semibold text-slate-400 mt-0.5 block">
                      Individual Value: <span className="line-through">{bonus.value}</span>
                    </span>
                  </div>

                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                    {bonus.description}
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-4 mt-6 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>DELIVERED INSTANTLY</span>
                  <span className="text-slate-700 font-bold">PDF FORMAT</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Value sum box */}
          <div className="mt-12 max-w-xl mx-auto bg-white border border-slate-200/60 rounded-2xl p-6 text-center shadow-sm">
            <span className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-widest">
              Aggregate Consultation Value
            </span>
            <div className="text-2xl md:text-3xl font-serif font-bold text-med-deep mt-1">
              $37 Ebook + $47 Bonuses = <span className="text-med-red">$84</span> Value
            </div>
            <p className="text-xs text-slate-500 mt-2">
              Get full integrated access today for only a single secure clinical payment of{" "}
              <span className="font-bold text-med-trust">{ebookPrice} USD</span>.
            </p>
          </div>

        </div>
      </section>

      {/* 7. SECTION 6 - PRUEBA SOCIAL */}
      <section id="reviews" className="py-20 md:py-28 bg-white border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Stats section at top of Social Proof */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-slate-50 border border-slate-200/50 rounded-2xl p-8 md:p-12 mb-16">
            <div className="space-y-4 text-center md:text-left">
              <span className="text-xs font-mono font-bold tracking-widest text-med-accent uppercase">
                Practice Penetration
              </span>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-med-deep tracking-tight">
                Trusted by Physicians Worldwide
              </h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed max-w-md">
                Clinicians from community clinics, regional hospitals, and academic centers have read 
                and adopted Dr. Reyes' documentation blueprints.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 divide-x divide-slate-200">
              <div className="text-center p-2">
                {/* Rolling counter */}
                <AnimatedCounter
                  target={500}
                  prefix="+"
                  suffix=""
                  className="font-mono text-3xl md:text-5xl font-extrabold tracking-tight text-med-trust"
                />
                <span className="text-[10px] md:text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider block mt-1">
                  Active MD Readers
                </span>
              </div>
              
              <div className="text-center p-2">
                <AnimatedCounter
                  target={98}
                  prefix=""
                  suffix="%"
                  className="font-mono text-3xl md:text-5xl font-extrabold tracking-tight text-med-green"
                />
                <span className="text-[10px] md:text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider block mt-1">
                  Satisfaction Rate
                </span>
              </div>
            </div>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((test, i) => (
              <div
                key={i}
                className="bg-slate-50 border border-slate-200/40 rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:shadow-sm transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Star indicators */}
                  <div className="flex gap-1 text-amber-400">
                    {Array.from({ length: test.stars }).map((_, s) => (
                      <Star key={s} className="w-4.5 h-4.5 fill-current" />
                    ))}
                  </div>

                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed italic">
                    "{test.quote}"
                  </p>
                </div>

                <div className="border-t border-slate-200/60 pt-4 mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-med-trust text-white font-mono font-bold flex items-center justify-center text-xs flex-shrink-0 shadow-inner">
                    {test.author.charAt(4)}
                  </div>
                  <div>
                    <h5 className="font-sans font-bold text-xs text-slate-800">
                      {test.author}
                    </h5>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">
                      {test.specialty}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. SECTION 7 - FAQ (ACORDEÓN) */}
      <section id="faq" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-med-accent uppercase">
              Clinical Inquiries
            </span>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-med-deep tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 text-xs md:text-sm">
              We have compiled clinical and practical answers to common questions about our eBook.
            </p>
          </div>

          <FAQAccordion items={faqs} />

        </div>
      </section>

      {/* 9. SECTION 8 - PRECIO Y CTA FINAL */}
      <section className="py-20 md:py-24 bg-[#0a1628] text-white relative overflow-hidden">
        {/* Abstract grids and floating icons */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-cta" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#2e86c1" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-cta)" />
          </svg>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          
          <div className="space-y-3 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-med-trust/30 border border-med-accent/30 text-[10px] font-mono font-bold text-med-accent uppercase tracking-widest">
              LAUNCH OFFER — 50% OFF FOR LIMITED TIME
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
              Start Your AI Journey Today
            </h2>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
              Equip your practice with verified clinical AI frameworks. Eliminate manual documentation hours, 
              protect patient files, and reclaim valuable personal time.
            </p>
          </div>

          {/* Pricing tier displays */}
          <div className="max-w-md mx-auto bg-slate-900/60 border border-slate-800 rounded-2xl p-8 space-y-6 shadow-2xl relative">
            <div className="absolute top-[-14px] left-1/2 transform -translate-x-1/2 bg-[#1abc9c] text-white font-mono font-bold text-[9px] uppercase tracking-widest px-4 py-1 rounded-full border border-med-green/25">
              Best Diagnostic Choice
            </div>

            <div className="space-y-1">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block">SECURE PURCHASE</span>
              <div className="flex items-center justify-center gap-3">
                <span className="text-slate-500 line-through text-lg md:text-2xl font-mono">$74.00</span>
                <span className="text-4xl md:text-5xl font-mono font-extrabold text-white tracking-tight">
                  {ebookPrice} <span className="text-xs text-slate-400 font-normal">USD</span>
                </span>
              </div>
              <p className="text-[10px] text-med-green font-mono font-bold">SAVE 50% • ALL BONUSES COMPLIMENTARY</p>
            </div>

            {/* Check marks */}
            <ul className="text-left space-y-3 text-xs text-slate-300 border-t border-slate-800 pt-5">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-med-green flex-shrink-0" />
                <span>Instant High-Res Interactive PDF Ebook</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-med-green flex-shrink-0" />
                <span>50+ Vetted Prompt Templates (Bonuses)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-med-green flex-shrink-0" />
                <span>Practice Implementation Checklist workbook</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-med-green flex-shrink-0" />
                <span>Risk-free 7-day money back guarantee</span>
              </li>
            </ul>

            <div className="pt-2">
              <button
                id="cta-final-buy-btn"
                onClick={() => setIsCheckoutOpen(true)}
                className="w-full py-4 bg-med-trust hover:bg-med-accent text-white text-base font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer animate-heartbeat ripple-btn"
              >
                <Lock className="w-4.5 h-4.5 text-med-green" />
                Get Your Copy Now →
              </button>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400">
              <Lock className="w-3.5 h-3.5" />
              Secure 256-bit AES Credit Card Checkout
            </div>
          </div>

        </div>
      </section>

      {/* 10. SECTION 9 - SOBRE EL AUTOR (AL FINAL) */}
      <section className="py-20 bg-white border-b border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-slate-50 border border-slate-200/50 rounded-3xl p-6 md:p-10 shadow-sm">
            
            {/* Author avatar mockup with circle design */}
            <div className="md:col-span-4 flex justify-center">
              <div className="relative">
                {/* Double clinical halo */}
                <div className="absolute inset-0 bg-med-trust/10 rounded-full scale-110 animate-pulse" />
                <div className="absolute inset-0 border border-med-accent/30 rounded-full scale-105" />
                
                {/* SVG Medical avatar image placeholder */}
                <div className="relative w-36 h-36 rounded-full bg-white border-4 border-white shadow-md overflow-hidden flex items-center justify-center">
                  <svg className="w-full h-full text-slate-300" viewBox="0 0 100 100" fill="currentColor">
                    {/* Abstract doctor outline with stethoscope */}
                    <circle cx="50" cy="35" r="18" fill="#e2e8f0" />
                    <path d="M 50,55 C 25,55 20,80 20,100 H 80 C 80,80 75,55 50,55 Z" fill="#cbd5e1" />
                    {/* Stethoscope neck line */}
                    <path d="M 40,48 C 40,55 60,55 60,48" fill="none" stroke="#1a5276" strokeWidth="2.5" />
                    <circle cx="50" cy="56" r="3.5" fill="#1abc9c" />
                    {/* Doctor glasses highlight */}
                    <rect x="39" y="32" width="8" height="5" rx="1.5" fill="none" stroke="#1a5276" strokeWidth="1.5" />
                    <rect x="53" y="32" width="8" height="5" rx="1.5" fill="none" stroke="#1a5276" strokeWidth="1.5" />
                    <line x1="47" y1="34" x2="53" y2="34" stroke="#1a5276" strokeWidth="1.5" />
                  </svg>
                </div>
                
                {/* Verified badge */}
                <span className="absolute bottom-1 right-2 bg-med-green text-white p-1 rounded-full shadow-sm">
                  <Award className="w-4 h-4" />
                </span>
              </div>
            </div>

            {/* Author info */}
            <div className="md:col-span-8 space-y-4 text-center md:text-left">
              <span className="text-xs font-mono font-bold tracking-widest text-med-accent uppercase">
                About the Author
              </span>
              <div>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-med-deep">
                  Dr. Jonathan Reyes, MD
                </h3>
                <span className="text-xs font-mono text-slate-400 uppercase mt-0.5 block">
                  Internal Medicine Specialist & Digital Health Consultant
                </span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                Dr. Reyes is an Internal Medicine physician with over 12 years of active clinical experience in busy healthcare settings. 
                Specializing in digital health innovation, EHR automation, and clinic systems engineering, he has served as an 
                international keynote speaker explaining medical AI implementations. His clinical mission is to leverage smart technologies 
                to reduce clerical burnouts, giving physicians back the human connection to treat their patients.
              </p>
              
              {/* Fake Social handles */}
              <div className="flex justify-center md:justify-start gap-4 text-xs font-mono text-slate-400 pt-2">
                <span className="flex items-center gap-1.5 hover:text-med-trust cursor-pointer transition-colors">
                  <span className="w-2 h-2 rounded-full bg-med-trust" />
                  LinkedIn /in/dr-jonathan-reyes
                </span>
                <span className="flex items-center gap-1.5 hover:text-med-accent cursor-pointer transition-colors">
                  <span className="w-2 h-2 rounded-full bg-med-accent" />
                  Twitter @DrReyesAI
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="bg-[#0a1628] text-slate-400 py-12 text-sm border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-med-green" />
            <span className="font-serif font-bold text-white text-xs tracking-tight">
              CLINICAL AI SERIES
            </span>
          </div>

          <div className="text-center md:text-left text-xs font-mono">
            <p>© 2025 Dr. Jonathan Reyes, MD — All Rights Reserved.</p>
            <p className="text-slate-500 mt-1">Professional Medical Education Publication</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 text-xs font-mono text-slate-500">
            <div className="flex gap-4">
              <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
              <span>|</span>
              <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
              <span>|</span>
              <span className="hover:text-white cursor-pointer transition-colors">Contact Support</span>
            </div>
            <a
              href="mailto:dr.reyes@digitalhealthmd.com"
              className="text-med-accent hover:text-white hover:underline transition-colors mt-1 sm:mt-0"
            >
              dr.reyes@digitalhealthmd.com
            </a>
          </div>

        </div>
      </footer>

      {/* SECURE INTEGRATED CHECKOUT MODAL */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        price={ebookPrice}
        bookTitle={`${ebookTitle}: ${ebookSubtitle}`}
      />

    </div>
  );
}
