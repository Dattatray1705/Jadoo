
import { motion } from "framer-motion";

import axon from "../assets/image 27.png";
import jetstar from "../assets/image 28.png";
import expedia from "../assets/Group 63.png";
import qantas from "../assets/image 30.png";
import alitalia from "../assets/image 31.png";

const partners = [axon, jetstar, expedia, qantas, alitalia];

export default function Partners() {
  return (
    <section className="bg-white px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-8 sm:gap-12 lg:justify-between">
        {partners.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt="Partner logo"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
            }}
            whileHover={{
              scale: 1.12,
              y: -5,
            }}
            className="h-16 w-28 cursor-pointer object-contain sm:w-32"
          />
        ))}
      </div>
    </section>
  );
}
