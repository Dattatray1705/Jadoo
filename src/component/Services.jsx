
import { motion } from "framer-motion";

import weatherImage from "../assets/Category (3).png";
import flightsImage from "../assets/Category Active.png";
import eventsImage from "../assets/Category (1).png";
import customizationImage from "../assets/Category1.png";

const services = [
  {
    image: weatherImage,
    alt: "Calculated Weather",
    active: false,
  },
  {
    image: flightsImage,
    alt: "Best Flights",
    active: true,
  },
  {
    image: eventsImage,
    alt: "Local Events",
    active: false,
  },
  {
    image: customizationImage,
    alt: "Customization",
    active: false,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white px-6 py-20 md:px-12 lg:px-20"
    >
      {/* Decorative dots */}
      <div className="pointer-events-none absolute right-10 top-10 grid grid-cols-5 gap-3 opacity-40">
        {Array.from({ length: 25 }).map((_, index) => (
          <span
            key={index}
            className="h-1 w-1 rounded-full bg-[#A9A5F5]"
          />
        ))}
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#5E6282]">
            CATEGORY
          </p>

          <h2 className="font-serif text-3xl font-bold text-[#181E4B] sm:text-4xl md:text-5xl">
            We Offer Best Services
          </h2>
        </motion.div>

        {/* Service Cards */}
{/* Service Cards */}

{/* Service Cards */}
<div className="grid grid-cols-2 items-center justify-items-center gap-x-6 gap-y-8 sm:grid-cols-3 sm:gap-x-8 lg:grid-cols-4 lg:gap-x-20">
  {services.map((service, index) => (
    <motion.div
      key={service.alt}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.12,
      }}
      whileHover={{
        y: -10,
        scale: service.active ? 1.05 : 1.08,
      }}
      className="flex w-full min-w-0 cursor-pointer items-center justify-center rounded-2xl transition-shadow duration-300 hover:shadow-xl"
    >
      <img
        src={service.image}
        alt={service.alt}
        className={`h-auto w-full object-contain ${
          service.active ? "max-w-[400px]" : "max-w-[150px]"
        }`}
      />
    </motion.div>
  ))}
</div>

      </div>
    </section>
  );
}
