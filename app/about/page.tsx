"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Award, Users, TrendingUp, Heart } from "lucide-react";

/* ============================================
   Type Definitions
   ============================================ */
interface Value {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

/* ============================================
   Data
   ============================================ */
const values: Value[] = [
  {
    icon: Award,
    title: "Qualità Garantita",
    description:
      "Selezioniamo solo i migliori ricambi certificati per garantire affidabilità e durata",
  },
  {
    icon: Users,
    title: "Esperienza",
    description:
      "Oltre 20 anni di esperienza nel settore dei ricambi per veicoli commerciali",
  },
  {
    icon: TrendingUp,
    title: "Innovazione",
    description:
      "Costantemente aggiornati sulle ultime tecnologie e prodotti del mercato",
  },
  {
    icon: Heart,
    title: "Passione",
    description:
      "La dedizione e la cura per i nostri clienti sono al centro di tutto ciò che facciamo",
  },
];

/* ============================================
   About Page Component
   ============================================ */
export default function AboutPage() {
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
              Chi Siamo
            </h1>
            <p className="text-xl md:text-2xl text-text-muted">
              Il punto di riferimento per ricambi di veicoli commerciali e
              industriali
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          Story Section
          ============================================ */}
      <section className="py-24 bg-background">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-96 lg:h-[600px] rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/warehouse.jpg"
                alt="NCR Warehouse"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
                La Nostra Storia
              </h2>
              <div className="space-y-4 text-lg text-text-muted leading-relaxed">
                <p>
                  <strong className="text-primary">
                    NCR Nuovo Centro Ricambi
                  </strong>{" "}
                  nasce dalla passione e dall'esperienza di professionisti del
                  settore automotive, con l'obiettivo di diventare il punto di
                  riferimento per ricambi di veicoli commerciali e industriali.
                </p>
                <p>
                  Con oltre{" "}
                  <strong className="text-primary">
                    20 anni di esperienza
                  </strong>
                  , abbiamo costruito relazioni solide con i migliori fornitori
                  e produttori di ricambi, garantendo ai nostri clienti prodotti
                  di altissima qualità a prezzi competitivi.
                </p>
                <p>
                  Il nostro magazzino dispone di{" "}
                  <strong className="text-primary">
                    migliaia di referenze
                  </strong>{" "}
                  sempre disponibili, con un sistema logistico efficiente che ci
                  permette di soddisfare rapidamente ogni esigenza.
                </p>
                <p>
                  Che si tratti di furgoni, camion o veicoli industriali, il
                  nostro team di esperti è sempre pronto ad assistervi nella
                  scelta del ricambio più adatto alle vostre necessità.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          Values Section
          ============================================ */}
      <section className="py-24 bg-surface">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-primary">
                I Nostri Valori
              </h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto">
                Principi che guidano il nostro lavoro ogni giorno
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value: Value, index: number) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 text-center hover:shadow-xl transition-shadow duration-300 border border-border bg-background rounded-lg h-full"
                >
                  <div className="mb-6 flex justify-center">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 tracking-tight text-primary">
                    {value.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================
          Team Section
          ============================================ */}
      <section className="py-24 bg-background">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
                Il Nostro Team
              </h2>
              <div className="space-y-4 text-lg text-text-muted leading-relaxed">
                <p>
                  Il successo di NCR è il risultato del lavoro appassionato del
                  nostro team di professionisti qualificati.
                </p>
                <p>
                  Ogni membro del nostro staff possiede una profonda conoscenza
                  tecnica e una lunga esperienza nel settore dei veicoli
                  commerciali, permettendoci di offrire consulenze specializzate
                  e soluzioni personalizzate.
                </p>
                <p>
                  La formazione continua e l'aggiornamento sulle nuove
                  tecnologie ci permettono di rimanere sempre al passo con le
                  evoluzioni del mercato automotive.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/team.jpg"
                alt="NCR Team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          CTA Section
          ============================================ */}
      <section className="py-24 bg-primary text-background">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Vuoi saperne di più?
            </h2>
            <p className="text-xl mb-8 text-background/90 max-w-2xl mx-auto">
              Visita il nostro magazzino o contattaci per scoprire come possiamo
              aiutarti
            </p>
            <Link
              href="/contatti"
              className="inline-block px-8 py-4 bg-background text-primary rounded-lg font-semibold text-lg hover:bg-surface transition-all duration-300 hover:scale-105"
            >
              Contattaci Ora
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
