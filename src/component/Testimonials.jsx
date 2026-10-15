
import { motion } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";
import testimonialImage from "../assets/Group 64.png";
export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-white px-6 py-20 md:px-12 lg:px-20"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* Left heading */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-xs font-semibold uppercase text-[#5E6282]">
            Testimonials
          </p>

          <h2 className="max-w-md font-serif text-3xl font-bold leading-tight text-[#181E4B] sm:text-4xl">
            What People Say
            <br />
            About Us.
          </h2>

          <div className="mt-8 flex gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#181E4B]" />
            <span className="h-2.5 w-2.5 rounded-full bg-gray-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-gray-200" />
          </div>
        </motion.div>

        {/* Review card */}
{/* Review card */}
<motion.img
  src={testimonialImage}
  alt="Customer testimonial"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="block h-auto w-full max-w-[650px] object-contain"
/>      </div>
    </section>
  );
}
