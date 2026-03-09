import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import certificationsImg from "@/assets/certifications.png";

const standards = [
  { name: "ISO 13485", desc: "Medical Devices Quality Management System" },
  { name: "CE Marking", desc: "European Conformity for Medical Devices" },
  { name: "FDA Standards", desc: "Compliance with US regulatory requirements" },
  { name: "GMP Certified", desc: "Good Manufacturing Practice standards" },
];

const QualitySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="quality" className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Quality & Certifications</span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mt-3 mb-6 leading-tight">
              Trusted Quality, Global Standards
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Every Belion product undergoes rigorous quality control and testing. Our manufacturing 
              processes meet international medical standards, ensuring safety, reliability, and 
              consistent performance across all clinical applications.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {standards.map((std, i) => (
                <motion.div
                  key={std.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="p-5 rounded-xl bg-card border border-border hover:shadow-medical transition-shadow"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary mb-3" />
                  <h3 className="font-display font-semibold text-foreground mb-1">{std.name}</h3>
                  <p className="text-sm text-muted-foreground">{std.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <img src={certificationsImg} alt="Quality certifications and standards" className="w-full max-w-md opacity-80" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
