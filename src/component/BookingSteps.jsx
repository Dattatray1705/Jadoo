
import { motion } from "framer-motion";
import heroImage from "../assets/Image (1).png";

import {
  MapPin,
  CreditCard,
  CarFront,
} from "lucide-react";

const steps = [
  {
    title: "Choose Destination",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    icon: MapPin,
    color: "bg-[#F1A501]",
  },
  {
    title: "Make Payment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    icon: CreditCard,
    color: "bg-[#DF6951]",
  },
  {
    title: "Reach Airport on Selected Date",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    icon: CarFront,
    color: "bg-[#006380]",
  },
];

export default function BookingSteps() {
  return (
    <section
      id="bookings"
      className="bg-white px-6 py-16 sm:py-20 md:px-12 lg:px-20"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

        {/* Left: Steps */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-1 min-w-0"
        >
          <p className="mb-3 text-xs font-semibold text-[#5E6282]">
            Easy and Fast
          </p>

          <h2 className="max-w-md font-serif text-3xl font-bold leading-tight text-[#181E4B] sm:text-4xl">
            Book Your Next Trip
            <br />
            In 3 Easy Steps
          </h2>

          <div className="mt-9 space-y-7">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="flex items-start gap-4"
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white ${step.color}`}
                  >
                    <Icon size={22} />
                  </div>

                  <div className="min-w-0">
                    <h3 className="mb-1 text-sm font-bold text-[#5E6282]">
                      {step.title}
                    </h3>

                    <p className="max-w-sm text-xs leading-5 text-[#5E6282]">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Right: Trip Image */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="order-2 flex w-full min-w-0 justify-center lg:justify-end"
        >
          <img
            src={heroImage}
            alt="Trip to Greece"
            className="block h-auto w-full max-w-[420px] object-contain"
          />
        </motion.div>

      </div>
    </section>
  );
}