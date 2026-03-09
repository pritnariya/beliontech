const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <img
                src="/logo.pdf"
                alt="BELION TECHNOLOGY"
                className="h-9 w-auto object-contain brightness-0 invert opacity-80"
              />
            </div>
            <p className="text-secondary-foreground/50 text-sm leading-relaxed max-w-xs">
              Advanced medical imaging and endoscopic visualization solutions for minimally invasive surgery.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm">Products</h4>
            <ul className="space-y-2.5 text-sm text-secondary-foreground/50">
              <li><a href="#products" className="hover:text-teal-light transition-colors">4K Laparoscopes</a></li>
              <li><a href="#products" className="hover:text-teal-light transition-colors">Rigid Endoscopes</a></li>
              <li><a href="#products" className="hover:text-teal-light transition-colors">NIR/ICG Systems</a></li>
              <li><a href="#products" className="hover:text-teal-light transition-colors">Accessories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-sm">Company</h4>
            <ul className="space-y-2.5 text-sm text-secondary-foreground/50">
              <li><a href="#about" className="hover:text-teal-light transition-colors">About Us</a></li>
              <li><a href="#technology" className="hover:text-teal-light transition-colors">Technology</a></li>
              <li><a href="#quality" className="hover:text-teal-light transition-colors">Quality</a></li>
              <li><a href="#contact" className="hover:text-teal-light transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-sm">Support</h4>
            <ul className="space-y-2.5 text-sm text-secondary-foreground/50">
              <li><a href="#contact" className="hover:text-teal-light transition-colors">Technical Support</a></li>
              <li><a href="#contact" className="hover:text-teal-light transition-colors">Sales Inquiry</a></li>
              <li><a href="#contact" className="hover:text-teal-light transition-colors">Distributors</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary-foreground/40">
            © {new Date().getFullYear()} Belion Technology. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-secondary-foreground/40">
            <a href="#" className="hover:text-teal-light transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-teal-light transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
