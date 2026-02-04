"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

/* ============================================
   Type Definitions
   ============================================ */
interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  content: string[];
}

/* ============================================
   Data
   ============================================ */
const contactInfo: ContactInfo[] = [
  {
    icon: MapPin,
    title: "Indirizzo",
    content: ["Via Terni 123", "05100 Terni, Italia"],
  },
  {
    icon: Phone,
    title: "Telefono",
    content: ["+39 0744 1234 5678", "+39 0744 8765 4321"],
  },
  {
    icon: Mail,
    title: "Email",
    content: ["info@ncrterni.it", "vendite@ncrterni.it"],
  },
  {
    icon: Clock,
    title: "Orari di Apertura",
    content: ["Lun - Ven: 8:30 - 18:00", "Sabato: 8:30 - 12:00"],
  },
];

/* ============================================
   Contact Page Component
   ============================================ */
export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  /* ============================================
     Handle form submission
     ============================================ */
  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);
    alert("Messaggio inviato con successo! Ti risponderemo al più presto.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  /* ============================================
     Handle input changes
     ============================================ */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
              Contattaci
            </h1>
            <p className="text-xl md:text-2xl text-text-muted">
              Siamo a tua disposizione per ogni informazione o richiesta
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          Contact Info & Form Section
          ============================================ */}
      <section className="py-24 bg-background">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* ============================================
                Contact Information
                ============================================ */}
            <div className="lg:col-span-1 space-y-8">
              <FadeIn direction="right">
                <div>
                  <div className="space-y-6">
                    {contactInfo.map((info: ContactInfo, index: number) => {
                      const Icon = info.icon;
                      return (
                        <div
                          key={info.title}
                          className="p-6 border border-border bg-background rounded-lg hover:shadow-lg transition-shadow"
                        >
                          <div className="flex items-start gap-4">
                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Icon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold mb-2 text-primary">
                                {info.title}
                              </h3>
                              <div className="text-text-muted text-sm space-y-1">
                                {info.content.map((line: string) => (
                                  <p key={line}>{line}</p>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* ============================================
                Contact Form
                ============================================ */}
            <div className="lg:col-span-2">
              <FadeIn direction="left" delay={0.2}>
                <div className="p-8 border border-border bg-background rounded-lg">
                  <h2 className="text-3xl font-bold mb-6 tracking-tight text-primary">
                    Invia un Messaggio
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium text-primary"
                        >
                          Nome e Cognome *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Mario Rossi"
                          className="w-full h-12 px-4 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-text"
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium text-primary"
                        >
                          Email *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="mario.rossi@example.com"
                          className="w-full h-12 px-4 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-text"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="phone"
                          className="text-sm font-medium text-primary"
                        >
                          Telefono
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+39 123 456 7890"
                          className="w-full h-12 px-4 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-text"
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="subject"
                          className="text-sm font-medium text-primary"
                        >
                          Oggetto *
                        </label>
                        <input
                          id="subject"
                          name="subject"
                          type="text"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          placeholder="Richiesta informazioni"
                          className="w-full h-12 px-4 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-text"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-primary"
                      >
                        Messaggio *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Scrivi qui il tuo messaggio..."
                        rows={5}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none bg-background text-text"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-secondary transition-all duration-300 hover:scale-105 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Invio in corso..." : "Invia Messaggio"}
                    </button>
                  </form>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          Map Section
          ============================================ */}
      <section className="py-24 bg-surface">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-primary">
                Dove Siamo
              </h2>
              <p className="text-xl text-text-muted">
                Vieni a trovarci nel nostro magazzino
              </p>
            </div>

            <div className="overflow-hidden border border-border bg-background rounded-lg">
              <div className="aspect-video w-full bg-surface flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="h-16 w-16 text-text-muted mx-auto mb-4" />
                  <p className="text-lg text-text-muted">
                    Mappa interattiva disponibile
                  </p>
                  <p className="text-sm text-text-muted mt-2">
                    Via Terni 123, 05100 Terni, Italia
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
