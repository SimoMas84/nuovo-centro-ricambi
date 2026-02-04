"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import {
  Settings,
  Gauge,
  Battery,
  Zap,
  Wind,
  Droplets,
  Circle,
  Lightbulb,
  Fan,
  Fuel,
  Thermometer,
  Radio,
} from "lucide-react";

/* ============================================
   Type Definitions
   ============================================ */
interface ProductCategory {
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  products: string[];
}

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

/* ============================================
   Data
   ============================================ */
const productCategories: ProductCategory[] = [
  {
    category: "Motore e Trasmissione",
    icon: Settings,
    products: [
      "Filtri olio e aria",
      "Cinghie di distribuzione",
      "Pompe acqua e carburante",
      "Kit frizione completi",
      "Volani e cuscinetti",
      "Alberi di trasmissione",
      "Pistoni e fasce elastiche",
      "Testate motore",
    ],
  },
  {
    category: "Freni e Sospensioni",
    icon: Circle,
    products: [
      "Dischi freno",
      "Pastiglie e ganasce",
      "Cilindri ruota e pompe freno",
      "Tubi e tubazioni frenanti",
      "Ammortizzatori",
      "Molle sospensioni",
      "Boccole e silent block",
      "Bracci oscillanti",
    ],
  },
  {
    category: "Sistema Elettrico",
    icon: Zap,
    products: [
      "Batterie",
      "Alternatori",
      "Motorini di avviamento",
      "Centraline elettroniche",
      "Sensori e attuatori",
      "Cavi e connettori",
      "Relè e fusibili",
      "Bobine di accensione",
    ],
  },
  {
    category: "Illuminazione",
    icon: Lightbulb,
    products: [
      "Fari anteriori e posteriori",
      "Lampade LED e alogene",
      "Frecce e luci di posizione",
      "Luci di ingombro",
      "Fanali fendinebbia",
      "Luci di emergenza",
      "Faretti da lavoro",
      "Plafoniere interne",
    ],
  },
  {
    category: "Climatizzazione",
    icon: Wind,
    products: [
      "Compressori aria condizionata",
      "Condensatori e evaporatori",
      "Ventole radiatori",
      "Filtri abitacolo",
      "Gas refrigerante",
      "Termostati",
      "Radiatori riscaldamento",
      "Motori ventilazione",
    ],
  },
  {
    category: "Carburante e Scarico",
    icon: Fuel,
    products: [
      "Filtri carburante",
      "Pompe iniezione",
      "Iniettori",
      "Tubi e raccordi",
      "Marmitta e silenziatori",
      "Catalizzatori",
      "Filtri antiparticolato (DPF)",
      "Valvole EGR",
    ],
  },
  {
    category: "Raffreddamento",
    icon: Thermometer,
    products: [
      "Radiatori motore",
      "Pompe acqua",
      "Termostati",
      "Ventole di raffreddamento",
      "Tubi e manicotti",
      "Liquidi refrigeranti",
      "Tappi radiatore",
      "Intercooler",
    ],
  },
  {
    category: "Cabina e Comfort",
    icon: Radio,
    products: [
      "Sedili e cinture",
      "Specchietti retrovisori",
      "Tergicristalli",
      "Motorini alzacristalli",
      "Maniglie e serrature",
      "Pannelli interni",
      "Cruscotti",
      "Sistemi infotainment",
    ],
  },
  {
    category: "Pneumatici",
    icon: Gauge,
    products: [
      "Pneumatici estivi",
      "Pneumatici invernali",
      "Pneumatici 4 stagioni",
      "Cerchi in lega e ferro",
      "Valvole e sensori TPMS",
      "Kit riparazione",
      "Equilibratura e convergenza",
      "Pneumatici ricostruiti",
    ],
  },
  {
    category: "Batterie e Avviamento",
    icon: Battery,
    products: [
      "Batterie AGM",
      "Batterie tradizionali",
      "Batterie al litio",
      "Caricabatterie",
      "Cavi di avviamento",
      "Tester batterie",
      "Morsetti e collegamenti",
      "Batterie ausiliarie",
    ],
  },
  {
    category: "Lubrificanti",
    icon: Droplets,
    products: [
      "Oli motore sintetici",
      "Oli motore minerali",
      "Oli cambio e differenziale",
      "Grassi lubrificanti",
      "Liquidi freni",
      "Additivi motore",
      "Antigelo",
      "Fluidi idraulici",
    ],
  },
  {
    category: "Ventilazione",
    icon: Fan,
    products: [
      "Ventole motore",
      "Ventole condensatore",
      "Motori ventilazione",
      "Resistenze ventola",
      "Griglie ventilazione",
      "Deflettori aria",
      "Convogliatori",
      "Turbine",
    ],
  },
];

const features: Feature[] = [
  {
    icon: Settings,
    title: "Ricambi Originali",
    description:
      "Collaboriamo con i migliori produttori per garantire qualità e compatibilità",
  },
  {
    icon: Gauge,
    title: "Certificazioni",
    description:
      "Tutti i nostri prodotti rispettano gli standard europei e internazionali",
  },
  {
    icon: Battery,
    title: "Disponibilità",
    description:
      "Magazzino sempre rifornito per consegne rapide in tutta Italia",
  },
];

/* ============================================
   Products Page Component
   ============================================ */
export default function ProductsPage() {
  return (
    <>
      {/* ============================================
          Hero Header
          ============================================ */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-surface to-background">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-primary">
              I Nostri Prodotti
            </h1>
            <p className="text-xl md:text-2xl text-text-muted">
              Migliaia di ricambi certificati per veicoli commerciali e
              industriali
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          Products Grid - Two Columns
          ============================================ */}
      <section className="py-24 bg-background">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {productCategories.map(
              (category: ProductCategory, index: number) => {
                const Icon = category.icon;
                return (
                  <FadeIn key={category.category} delay={index * 0.05}>
                    <div className="h-full bg-background border border-border rounded-lg p-8 hover:shadow-xl transition-all duration-300 hover:border-primary/50">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold tracking-tight text-primary">
                          {category.category}
                        </h2>
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {category.products.map((product: string) => (
                          <li
                            key={product}
                            className="flex items-start gap-2 text-text-muted hover:text-primary transition-colors"
                          >
                            <span className="text-primary flex-shrink-0">
                              •
                            </span>
                            <span className="text-sm leading-relaxed">
                              {product}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </FadeIn>
                );
              },
            )}
          </div>
        </div>
      </section>

      {/* ============================================
          Info Section - CTA
          ============================================ */}
      <section className="py-24 bg-surface">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
                Non hai trovato quello che cerchi?
              </h2>
              <p className="text-xl text-text-muted">
                Il nostro catalogo include migliaia di referenze aggiuntive.
                Contattaci per ricevere assistenza personalizzata nella ricerca
                del ricambio specifico per il tuo veicolo.
              </p>
              <div className="pt-4">
                <Link
                  href="/contatti"
                  className="inline-block px-8 py-4 bg-primary text-background rounded-lg font-semibold text-lg hover:scale-105 hover:bg-secondary transition-all duration-300"
                >
                  Richiedi un Preventivo
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============================================
          Features Section
          ============================================ */}
      <section className="py-24 bg-background">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature: Feature, index: number) => {
              const Icon = feature.icon;
              return (
                <FadeIn key={feature.title} delay={index * 0.1}>
                  <div className="text-center space-y-4">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary">
                      {feature.title}
                    </h3>
                    <p className="text-text-muted leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
