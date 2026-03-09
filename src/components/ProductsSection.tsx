import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import laparoscopeImg from "@/assets/laparoscope-product.jpg";
import productLineup from "@/assets/product-lineup.png";

const products = [
  {
    name: "HD/4K/ICG Laparoscope",
    subtitle: "AVE 27E Series",
    desc: "Superior MTF performance with exceptional distortion control and high optical transmission. Autoclavable, anti-fogging, with laser sealing assembly.",
    features: ["4K Ultra HD", "0° & 30° Options", "German Design", "Low Distortion"],
    image: laparoscopeImg,
  },
  {
    name: "Rigid Endoscopes",
    subtitle: "Full Product Range",
    desc: "Wide range including laparoscopes, rhinoscopes, arthroscopes, cystoscopes, hysteroscopes, and otoscopes. Available in HD, 4K, NIR/ICG and 3D configurations.",
    features: ["Multiple Diameters", "Full Autoclavable", "NIR/ICG Compatible", "134°C/273°F Rated"],
    image: productLineup,
  },
];

const ProductsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="py-24 lg:py-32 gradient-section" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Our Products</span>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mt-3 mb-4">
            Clarity That Elevates Precision
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Endoscopic imaging solutions optimized for outstanding resolution, contrast, and true-to-life surgical imaging.
          </p>
        </motion.div>

        <div className="space-y-20">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="bg-card rounded-2xl p-8 shadow-medical">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[300px] object-contain"
                  />
                </div>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <span className="text-primary text-sm font-semibold">{product.subtitle}</span>
                <h3 className="text-2xl lg:text-3xl font-display font-bold text-foreground mt-2 mb-4">{product.name}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{product.desc}</p>
                <div className="flex flex-wrap gap-3">
                  {product.features.map((f) => (
                    <span key={f} className="px-4 py-2 rounded-lg bg-accent text-accent-foreground text-sm font-medium">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
