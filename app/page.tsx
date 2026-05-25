"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Star,
  Phone,
  Mail,
  Check,
  User,
  MessageSquare,
  Car,
} from "lucide-react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, to, {
      duration: 2.2,
      onUpdate: (latest) => setValue(Math.round(latest)),
    });

    return () => controls.stop();
  }, [isInView, to]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

export default function Home() {
  const [sent, setSent] = useState(false);

  const services = [
    "Powłoki ceramiczne",
    "Korekta lakieru",
    "Detailing wnętrza",
    "Detailing premium",
    "Zabezpieczenie folią PPF",
    "Przygotowanie auta do sprzedaży",
  ];

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <main className="bg-[#111111] text-[#F5F1E8] overflow-hidden">
      <section className="relative min-h-screen flex items-center px-5 sm:px-8 md:px-16 py-24">
        <motion.div
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
            className="w-full h-full object-cover opacity-30"
            alt="Samochód premium"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/95 to-[#111111]/60" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-full max-w-4xl"
        >
          <div className="inline-flex max-w-full items-center gap-2 border border-[#C6A972]/30 px-3 sm:px-4 py-2 uppercase tracking-[0.18em] sm:tracking-[0.25em] text-[11px] sm:text-sm text-[#C6A972] mb-8">
            <Sparkles size={15} />
            NOVA DETAILING STUDIO
          </div>

          <h1 className="text-[42px] sm:text-[58px] md:text-[90px] font-black leading-[0.9]">
            Perfekcja
            <br />
            zaczyna się
            <br />
            od detali.
          </h1>

          <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-[#F5F1E8]/70 max-w-2xl leading-relaxed">
            Premium detailing samochodowy dla osób, które oczekują perfekcyjnego
            wyglądu auta. Powłoki ceramiczne, korekta lakieru i pełna
            pielęgnacja wnętrza.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="#kontakt"
              className="w-full sm:w-auto bg-[#C6A972] text-black px-7 sm:px-8 py-4 font-bold flex items-center justify-center gap-3 hover:bg-[#e2c48f] transition"
            >
              Umów wizytę
              <ArrowRight size={18} />
            </a>

            <a
              href="#uslugi"
              className="w-full sm:w-auto border border-[#F5F1E8]/20 px-7 sm:px-8 py-4 font-bold hover:bg-white hover:text-black transition text-center"
            >
              Zobacz usługi
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "70%" }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="hidden md:block absolute right-12 top-24 w-[2px] bg-[#C6A972]"
        />
      </section>

      <section className="border-y border-white/10 bg-[#151515]">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {[
            [250, "+", "zadowolonych klientów"],
            [5, "★", "średnia ocen"],
            [24, "h", "maksymalny czas kontaktu"],
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="p-7 sm:p-10 border-b md:border-b-0 md:border-r border-white/10"
            >
              <div className="text-5xl sm:text-6xl font-black text-[#C6A972]">
                <Counter to={Number(item[0])} suffix={String(item[1])} />
              </div>
              <p className="mt-4 uppercase tracking-[0.16em] sm:tracking-[0.2em] text-xs sm:text-sm text-white/50">
                {item[2]}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-5 sm:px-8 md:px-16 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[0.22em] sm:tracking-[0.3em] text-[#C6A972] text-xs sm:text-sm mb-5">
            O studio
          </p>

          <h2 className="text-[34px] sm:text-[48px] md:text-6xl font-black leading-tight">
            Każde auto traktujemy jak projekt premium.
          </h2>

          <p className="mt-6 sm:mt-8 text-base sm:text-lg text-white/65 leading-relaxed">
            NOVA Detailing Studio specjalizuje się w kompleksowym detailingu
            premium. Naszym celem jest przywrócenie perfekcyjnego wyglądu
            samochodu oraz zabezpieczenie go na lata.
          </p>

          <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Indywidualne podejście",
              "Najwyższej jakości chemia",
              "Doświadczony zespół",
              "Perfekcyjne wykończenie",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 border border-white/10 p-4 hover:bg-white hover:text-black transition"
              >
                <Check className="text-[#C6A972] shrink-0" size={18} />
                <span className="text-sm sm:text-base">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="hidden sm:block absolute -inset-4 border border-[#C6A972]/40 translate-x-4 translate-y-4" />
          <img
            src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1600&auto=format&fit=crop"
            className="relative h-[320px] sm:h-[500px] md:h-[650px] w-full object-cover"
            alt="Detailing auta"
          />
        </motion.div>
      </section>

      <section
        id="uslugi"
        className="bg-[#F5F1E8] text-black px-5 sm:px-8 md:px-16 py-20 md:py-28"
      >
        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.22em] sm:tracking-[0.3em] text-[#8b6a38] text-xs sm:text-sm mb-5">
            Usługi premium
          </p>

          <h2 className="text-[34px] sm:text-[48px] md:text-6xl font-black leading-tight">
            Kompleksowy detailing dla wymagających.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 md:mt-16">
          {services.map((service, index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.01 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="border border-black/10 p-6 sm:p-8 hover:bg-black hover:text-white transition"
            >
              <div className="flex justify-between items-center">
                <ShieldCheck className="text-[#C6A972]" size={30} />
                <span className="text-xs sm:text-sm uppercase tracking-[0.2em] opacity-50">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black mt-8 sm:mt-10">
                {service}
              </h3>

              <p className="mt-4 opacity-70 leading-relaxed text-sm sm:text-base">
                Profesjonalna usługa wykonywana z najwyższą dokładnością i
                wykorzystaniem produktów klasy premium.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-5 sm:px-8 md:px-16 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 text-[#C6A972] mb-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} fill="#C6A972" size={20} />
            ))}
          </div>

          <h2 className="text-[34px] sm:text-[48px] md:text-6xl font-black max-w-4xl leading-tight">
            „Auto wyglądało lepiej niż po odbiorze z salonu. Pełen
            profesjonalizm.”
          </h2>

          <p className="mt-8 text-white/50 uppercase tracking-[0.2em] sm:tracking-[0.25em] text-xs sm:text-base">
            — Michał Krawczyk
          </p>
        </motion.div>
      </section>

      <section
        id="kontakt"
        className="bg-[#1A1A1A] px-5 sm:px-8 md:px-16 py-20 md:py-28"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[0.22em] sm:tracking-[0.3em] text-[#C6A972] text-xs sm:text-sm mb-5">
              Kontakt
            </p>

            <h2 className="text-[34px] sm:text-[48px] md:text-7xl font-black leading-[0.95]">
              Zadbaj o swoje auto już dziś.
            </h2>

            <p className="mt-6 sm:mt-8 text-white/60 text-base sm:text-lg max-w-xl">
              Wypełnij formularz, a studio skontaktuje się z Tobą w celu
              ustalenia terminu.
            </p>

            <div className="mt-8 sm:mt-10 space-y-4">
              <div className="flex items-center gap-4 text-sm sm:text-base">
                <Phone className="text-[#C6A972] shrink-0" />
                <span>+48 500 000 000</span>
              </div>

              <div className="flex items-center gap-4 text-sm sm:text-base">
                <Mail className="text-[#C6A972] shrink-0" />
                <span className="break-all">kontakt@novadetailing.pl</span>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-white/10 p-5 sm:p-8 md:p-10 bg-black/25 backdrop-blur-sm space-y-5 w-full"
          >
            <div>
              <label className="text-xs sm:text-sm uppercase tracking-[0.18em] sm:tracking-[0.2em] text-white/50">
                Imię i nazwisko
              </label>
              <div className="mt-2 flex items-center gap-3 border border-white/10 px-4 py-4">
                <User className="text-[#C6A972] shrink-0" size={18} />
                <input
                  required
                  name="name"
                  placeholder="Jan Kowalski"
                  className="w-full min-w-0 bg-transparent outline-none text-white placeholder:text-white/30 text-sm sm:text-base"
                />
              </div>
            </div>

            <div>
              <label className="text-xs sm:text-sm uppercase tracking-[0.18em] sm:tracking-[0.2em] text-white/50">
                Telefon
              </label>
              <div className="mt-2 flex items-center gap-3 border border-white/10 px-4 py-4">
                <Phone className="text-[#C6A972] shrink-0" size={18} />
                <input
                  required
                  name="phone"
                  placeholder="+48 500 000 000"
                  className="w-full min-w-0 bg-transparent outline-none text-white placeholder:text-white/30 text-sm sm:text-base"
                />
              </div>
            </div>

            <div>
              <label className="text-xs sm:text-sm uppercase tracking-[0.18em] sm:tracking-[0.2em] text-white/50">
                Samochód
              </label>
              <div className="mt-2 flex items-center gap-3 border border-white/10 px-4 py-4">
                <Car className="text-[#C6A972] shrink-0" size={18} />
                <input
                  name="car"
                  placeholder="BMW M4 / Audi A6 / Mercedes"
                  className="w-full min-w-0 bg-transparent outline-none text-white placeholder:text-white/30 text-sm sm:text-base"
                />
              </div>
            </div>

            <div>
              <label className="text-xs sm:text-sm uppercase tracking-[0.18em] sm:tracking-[0.2em] text-white/50">
                Wiadomość
              </label>
              <div className="mt-2 flex items-start gap-3 border border-white/10 px-4 py-4">
                <MessageSquare className="text-[#C6A972] mt-1 shrink-0" size={18} />
                <textarea
                  required
                  name="message"
                  placeholder="Napisz, jaką usługą jesteś zainteresowany..."
                  rows={5}
                  className="w-full min-w-0 bg-transparent outline-none text-white placeholder:text-white/30 resize-none text-sm sm:text-base"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#C6A972] text-black py-4 sm:py-5 font-black text-base sm:text-lg hover:bg-[#e0c189] transition flex items-center justify-center gap-3"
            >
              WYŚLIJ ZAPYTANIE
              <ArrowRight size={19} />
            </button>

            {sent && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[#C6A972] text-center font-bold text-sm sm:text-base"
              >
                Wiadomość została wysłana. Dziękujemy za kontakt!
              </motion.p>
            )}
          </motion.form>
        </div>
      </section>
    </main>
  );
}