import { motion } from "framer-motion";
import heroImage from "../assets/Hero (1).png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-white"
    >
      <motion.img
        src={heroImage}
        alt="Jadoo travel landing page hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="block h-auto w-full object-contain"
      />
    </section>
  );
}
