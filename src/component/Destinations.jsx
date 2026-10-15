
import { motion } from "framer-motion";

import romeImage from "../assets/Destination (1).png";
import londonImage from "../assets/Destination.png";
import europeImage from "../assets/Destination (2).png";
import decoreImage from "../assets/Decore.png";

const destinations = [
  { image: romeImage, alt: "Rome, Italy destination card" },
  { image: londonImage, alt: "London, UK destination card" },
  {
    image: europeImage,
    alt: "Full Europe destination card",
    isEurope: true,
  },
];

export default function Destinations() {
  return (
    <section
      id="destinations"
      className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center sm:mb-12"
        >
          <p className="mb-3 text-xs font-semibold text-[#5E6282]">
            Top Selling
          </p>

          <h2 className="font-serif text-3xl font-bold text-[#181E4B] sm:text-4xl">
            Top Destinations
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 justify-items-center gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {destinations.map((destination, index) => (

<motion.div
  key={destination.alt}
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{
    duration: 0.45,
    delay: index * 0.1,
  }}
  whileHover={{
    y: -10,
    scale: 1.04,
  }}
  className="flex w-full min-w-0 cursor-pointer justify-center rounded-2xl transition-shadow duration-300 hover:shadow-xl"
>
  {destination.isEurope ? (
    <div className="relative w-full max-w-[315px]">
      <img
        src={destination.image}
        alt={destination.alt}
        loading="lazy"
        className="relative z-10 block h-auto w-full"
      />

      <img
        src={decoreImage}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-3 top-1/2 z-0 h-auto w-[42px] -translate-y-1/2 object-contain sm:-right-4 sm:w-[52px] md:-right-5 md:w-[65px] lg:-right-6 lg:w-[80px]"
      />
    </div>
  ) : (
    <img
      src={destination.image}
      alt={destination.alt}
      loading="lazy"
      className="block h-auto w-full max-w-[315px] object-contain"
    />
  )}
</motion.div>

          ))}
        </div>
      </div>
    </section>
  );
}
