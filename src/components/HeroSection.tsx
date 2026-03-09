import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Medical technology operating room" className="w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-hero opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-teal/40 bg-teal/10 text-teal-light text-xs font-semibold tracking-wider uppercase mb-6">
              Advanced Medical Imaging
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.1] text-primary-foreground mb-6"
          >
            Precision Optics for{" "}
            <span className="text-gradient">Surgical Excellence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-lg sm:text-xl text-primary-foreground/70 font-body leading-relaxed mb-10 max-w-2xl"
          >
            Belion Technology designs and manufactures high-quality HD, 4K, and ICG
            endoscopic visualization solutions — empowering surgeons with clarity,
            confidence, and clinical precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#products"
              className="gradient-teal text-primary-foreground px-8 py-4 rounded-lg font-semibold text-base hover:opacity-90 transition-opacity shadow-lg"
            >
              Explore Products
            </a>
            <a
              href="#about"
              className="border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-base hover:bg-primary-foreground/10 transition-colors"
            >
              Learn More
            </a>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-12"
        >
          {[
            { value: "4K/UHD", label: "Image Resolution" },
            { value: "200+", label: "Autoclave Cycles" },
            { value: "ISO 13485", label: "Certified Quality" },
            { value: "Global", label: "Distribution" },
          ].map((stat) => (
            <div key={stat.label} className="text-center lg:text-left">
              <div className="text-2xl lg:text-3xl font-display font-bold text-teal-light">{stat.value}</div>
              <div className="text-sm text-primary-foreground/50 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors"
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  );
};

export default HeroSection;
