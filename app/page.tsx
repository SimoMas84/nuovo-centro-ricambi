"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import { Wrench, Package, Clock, Shield, Truck, Settings } from "lucide-react";

/* ============================================
   Type Definitions
   ============================================ */
interface Category {
  title: string;
  description: string;
  image: string;
}

interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

/* ============================================
   Data
   ============================================ */
const categories: Category[] = [
  {
    title: "Motore e Trasmissione",
    description:
      "Componenti motore, filtri, cinghie di distribuzione e ricambi per trasmissione",
    image: "/images/engine-parts.jpg",
  },
  {
    title: "Freni e Sospensioni",
    description:
      "Dischi freno, pastiglie, pinze, ammortizzatori e componenti per sospensioni",
    image: "/images/brake-system.jpg",
  },
  {
    title: "Sistema Elettrico",
    description:
      "Batterie, alternatori, motorini di avviamento e componentistica elettrica",
    image: "/images/transmission.jpg",
  },
];

const services: Service[] = [
  {
    icon: Package,
    title: "Vasto Assortimento",
    description:
      "Migliaia di ricambi originali e compatibili per tutte le marche di veicoli commerciali",
  },
  {
    icon: Clock,
    title: "Consegna Rapida",
    description:
      "Spedizioni veloci in tutta Italia con possibilità di ritiro in sede",
  },
  {
    icon: Shield,
    title: "Garanzia Qualità",
    description:
      "Tutti i nostri ricambi sono certificati e garantiti secondo gli standard europei",
  },
  {
    icon: Wrench,
    title: "Assistenza Tecnica",
    description:
      "Supporto specializzato per aiutarti a trovare il ricambio giusto",
  },
  {
    icon: Truck,
    title: "Veicoli Commerciali",
    description:
      "Specializzati in furgoni e camion di tutte le marche e modelli",
  },
  {
    icon: Settings,
    title: "Ricambi Certificati",
    description:
      "Collaboriamo con i migliori produttori di ricambi aftermarket",
  },
];

/* ============================================
   Homepage Component
   ============================================ */
export default function HomePage() {
  const ctaRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <>
      {/* ============================================
          Hero Section
          ============================================ */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-truck.jpg"
            alt="Commercial vehicles"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        </div>

        <div className="w-full max-w-7xl relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl text-background mb-6 tracking-tight"
          >
            Nuovo Centro Ricambi
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-xl md:text-2xl text-background/90 mb-8 max-w-3xl mx-auto"
          >
            Il vostro partner di fiducia per ricambi di qualità per veicoli
            commerciali ed industriali
          </motion.p>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/prodotti"
              className="px-8 py-4 bg-background/50 border-2 border-background/30 text-text font-semibold rounded-lg transition-all duration-300 text-lg hover:scale-105"
            >
              Scopri i Prodotti
            </Link>
            <Link
              href="/contatti"
              className="px-8 py-4 bg-background/50 border-2 border-background/30 text-text font-semibold rounded-lg transition-all duration-300 text-lg hover:scale-105"
            >
              Contattaci
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-black"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          Categories Section
          ============================================ */}
      <section className="py-24 bg-background">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-primary">
                Le Nostre Categorie
              </h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto">
                Ricambi di qualità per ogni esigenza del vostro veicolo
                commerciale
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {categories.map((category: Category, index: number) => (
              <FadeIn key={category.title} delay={index * 0.2}>
                <div className="group relative overflow-hidden h-96 rounded-lg shadow-lg cursor-pointer">
                  <div className="absolute inset-0">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-colors duration-500" />
                  </div>
                  <div className="relative h-full flex flex-col justify-end p-8 text-background">
                    <h3 className="text-2xl font-bold mb-3 tracking-tight">
                      {category.title}
                    </h3>
                    <p className="text-background/90 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      {category.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          Services Section
          ============================================ */}
      <section className="py-24 bg-surface">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-primary">
                I Nostri Servizi
              </h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto">
                Qualità, affidabilità e professionalità al vostro servizio
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service: Service, index: number) => {
              const Icon = service.icon;
              return (
                <FadeIn key={service.title} delay={index * 0.1}>
                  <div className="p-8 rounded-lg hover:shadow-xl transition-shadow duration-300 border border-border bg-background">
                    <div className="mb-6">
                      <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 tracking-tight text-primary">
                      {service.title}
                    </h3>
                    <p className="text-text-muted leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================
          CTA Section
          ============================================ */}
      <section
        ref={ctaRef}
        className="py-24 bg-primary text-background relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/warehouse.jpg"
            alt="Warehouse"
            fill
            className="object-cover"
          />
        </div>
        <motion.div
          style={{ y }}
          className="w-full max-w-7xl relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Hai bisogno di un ricambio?
            </h2>
            <p className="text-xl mb-8 text-background/90 max-w-2xl mx-auto">
              Contattaci oggi stesso per ricevere assistenza personalizzata e
              trovare il ricambio perfetto per il tuo veicolo commerciale
            </p>
            <Link
              href="/contatti"
              className="inline-block px-8 py-4 bg-background text-primary font-semibold rounded-lg hover:bg-surface transition-all duration-300 text-lg hover:scale-105"
            >
              Richiedi Informazioni
            </Link>
          </FadeIn>
        </motion.div>
      </section>
    </>
  );
}
