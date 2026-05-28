import { motion } from "framer-motion";
import { Instagram, Send, Mail } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative overflow-hidden py-32">
      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink/40 blur-[120px]" />
      <div className="pointer-events-none absolute right-10 top-10 -z-10 h-72 w-72 rounded-full bg-butter/50 blur-3xl" />

      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="font-display text-6xl font-medium leading-[1] tracking-tight sm:text-7xl lg:text-[7rem]"
        >
          Let's create <em className="not-italic text-gradient">together</em>.
        </motion.h2>

        <p className="mx-auto mt-6 max-w-xl text-base text-foreground/65">
          Have a campaign in mind? Tell me a little about it — I usually reply within 24 hours.
        </p>

        <form
          action="https://formspree.io/f/mpqnyneo"
          method="POST"
          onSubmit={() => setSent(true)}
          className="glass mx-auto mt-12 max-w-2xl rounded-3xl p-8 text-left shadow-[var(--shadow-soft)]"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field
              label="Name"
              name="name"
              placeholder="Your name"
            />

            <Field
              label="Email"
              name="email"
              type="email"
              placeholder="you@brand.com"
            />
          </div>

          <div className="mt-4">
            <Field
              label="Brand"
              name="brand"
              placeholder="Brand or company"
            />
          </div>

          <div className="mt-4">
            <label className="text-[10px] uppercase tracking-[0.25em] text-foreground/55">
              Project
            </label>

            <textarea
              required
              rows={4}
              name="message"
              placeholder="Tell me about your campaign..."
              className="mt-2 w-full resize-none rounded-2xl border border-foreground/10 bg-white/60 px-4 py-3 text-sm outline-none transition focus:border-foreground/30"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="group mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition hover:shadow-[var(--shadow-soft)]"
          >
            {sent ? "Sent — talk soon ♡" : "Send message"}

            <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </motion.button>
        </form>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
          <SocialBtn
            href="#"
            icon={<Instagram size={16} />}
            label="Instagram"
          />

          <SocialBtn
            href="mailto:awesome007sharanya@gmail.com"
            icon={<Mail size={16} />}
            label="awesome007sharanya@gmail.com"
          />
        </div>
      </div>

      <footer className="mt-24 border-t border-foreground/10 pt-8 text-center text-xs text-foreground/50">
        © {new Date().getFullYear()} Shona — Crafted with care.
      </footer>
    </section>
  );
}

function Field({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
}) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/55">
        {label}
      </span>

      <input
        required
        {...props}
        className="mt-2 w-full rounded-2xl border border-foreground/10 bg-white/60 px-4 py-3 text-sm outline-none transition focus:border-foreground/30"
      />
    </label>
  );
}

function SocialBtn({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-white/60 px-5 py-2.5 text-xs backdrop-blur transition hover:bg-white"
    >
      {icon} {label}
    </a>
  );
}