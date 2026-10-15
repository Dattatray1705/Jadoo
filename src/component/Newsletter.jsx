
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (!email.trim()) return;

    setSubmitted(true);
  }

  return (
    <section className="bg-white px-5 py-16 md:px-12 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-tl-[70px] rounded-3xl bg-[#F5F3FF] px-6 py-14 text-center sm:px-12 md:py-20"
      >
        <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border-[25px] border-white/40" />
        <div className="pointer-events-none absolute -bottom-16 -left-12 h-48 w-48 rounded-full border-[30px] border-white/30" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <h2 className="text-lg font-semibold leading-8 text-[#5E6282] sm:text-2xl md:leading-10">
            Subscribe to get information, latest news and other
            interesting offers about Jadoo
          </h2>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-9 flex max-w-xl flex-col gap-3 sm:flex-row"
          >
            <label className="flex min-w-0 flex-1 items-center gap-3 rounded-lg bg-white px-4 py-4">
              <Mail size={18} className="shrink-0 text-[#5E6282]" />

              <input
                type="email"
                required
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setSubmitted(false);
                }}
                placeholder="Your email"
                aria-label="Your email address"
                className="w-full min-w-0 bg-transparent text-sm outline-none"
              />
            </label>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#FF946D] to-[#FF7D68] px-7 py-4 text-sm font-medium text-white transition hover:-translate-y-0.5"
            >
              <Send size={16} />
              Subscribe
            </button>
          </form>

          {submitted && (
            <p role="status" className="mt-4 text-sm text-green-700">
              Thank you! Your email has been entered successfully.
            </p>
          )}
        </div>
      </motion.div>
    </section>
  );
}
