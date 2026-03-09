import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Target, Shield } from "lucide-react";
import aboutImg from "@/assets/about-surgery.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img src={aboutImg} alt="Surgeon using Belion endoscope" className="w-full h-[400px] lg:h-[500px] object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl gradient-teal opacity-20 -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">About Belion Technology</span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mt-3 mb-6 leading-tight">
              Advancing Surgical Visualization Through Innovation
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              At Belion Technology, we specialize in developing advanced medical imaging 
              and endoscopic visualization solutions that support precision in minimally invasive 
              surgery. We combine optical innovation, robust engineering, and strict quality control 
              to deliver products that provide high clarity, accurate color reproduction, and 
              consistent performance in demanding clinical environments.
            </p>

            <div className="space-y-5">
              {[
                { icon: Eye, title: "Our Vision", desc: "To be a globally recognized medical technology brand setting new benchmarks in surgical visualization." },
                { icon: Target, title: "Our Mission", desc: "Design and manufacture high-quality medical imaging products combining optical excellence, durability, and clinical reliability." },
                { icon: Shield, title: "Our Commitment", desc: "Continuous innovation, adherence to global quality standards, and long-term collaboration with healthcare professionals." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
