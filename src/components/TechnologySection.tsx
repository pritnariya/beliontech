import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Droplets, ThermometerSun, Aperture, Microscope, Sparkles } from "lucide-react";

const features = [
  { icon: Aperture, title: "4K Ultra HD Optics", desc: "True colour 4K lens system for definition and clarity of finest structures in the entire endoscopic field." },
  { icon: ThermometerSun, title: "Full Autoclavable", desc: "134°C/273°F rated, minimum 200 cycles. Avoid cross-contamination while greatly improving durability." },
  { icon: Droplets, title: "Anti-Fogging", desc: "Advanced laser-sealed optical assembly prevents internal fogging during procedures." },
  { icon: Zap, title: "Laser Sealing", desc: "Precision laser-sealed optics ensure maximum durability and consistent optical performance." },
  { icon: Microscope, title: "High MTF Performance", desc: "Superior Modulation Transfer Function for enhanced contrast, sharper detail, and greater image accuracy." },
  { icon: Sparkles, title: "NIR/ICG Fluorescence", desc: "Near-infrared imaging capability for fluorescence-guided surgery and enhanced tissue visualization." },
];

const TechnologySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="technology" className="py-24 lg:py-32 bg-secondary text-secondary-foreground" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-teal-light text-sm font-semibold tracking-wider uppercase">Technology</span>
          <h2 className="text-3xl lg:text-4xl font-display font-bold mt-3 mb-4">
            Engineering Excellence at Every Level
          </h2>
          <p className="text-secondary-foreground/60 leading-relaxed">
            Our endoscopes combine German design philosophy with cutting-edge optical engineering to deliver unmatched surgical imaging.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 rounded-2xl bg-secondary-foreground/5 border border-secondary-foreground/10 hover:border-teal/30 hover:bg-secondary-foreground/10 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl gradient-teal flex items-center justify-center mb-5 group-hover:animate-pulse-glow transition-shadow">
                <feat.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-display font-semibold mb-3">{feat.title}</h3>
              <p className="text-secondary-foreground/60 text-sm leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
