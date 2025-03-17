
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#f8f9fa] border-t border-border">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Institute Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">VSITR</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Vidyavardhini's Shree Indubhai Parekh Institute of Technology and Research, providing quality education since 2009.
            </p>
            <div className="flex space-x-3">
              <a href="https://facebook.com" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={18} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://youtube.com" aria-label="YouTube" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About VSITR</Link>
              </li>
              <li>
                <Link to="/academics/programs" className="text-muted-foreground hover:text-primary transition-colors">Academic Programs</Link>
              </li>
              <li>
                <Link to="/admissions/process" className="text-muted-foreground hover:text-primary transition-colors">Admission Process</Link>
              </li>
              <li>
                <Link to="/campus-life" className="text-muted-foreground hover:text-primary transition-colors">Campus Life</Link>
              </li>
              <li>
                <Link to="/placements" className="text-muted-foreground hover:text-primary transition-colors">Placements</Link>
              </li>
              <li>
                <Link to="/research" className="text-muted-foreground hover:text-primary transition-colors">Research & Development</Link>
              </li>
            </ul>
          </div>

          {/* For Students */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">For Students</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/student-login" className="text-muted-foreground hover:text-primary transition-colors">Student Portal</Link>
              </li>
              <li>
                <Link to="/academics/examination" className="text-muted-foreground hover:text-primary transition-colors">Examination</Link>
              </li>
              <li>
                <Link to="/library" className="text-muted-foreground hover:text-primary transition-colors">Library</Link>
              </li>
              <li>
                <Link to="/student-activities" className="text-muted-foreground hover:text-primary transition-colors">Student Activities</Link>
              </li>
              <li>
                <Link to="/scholarships" className="text-muted-foreground hover:text-primary transition-colors">Scholarships</Link>
              </li>
              <li>
                <Link to="/career-development" className="text-muted-foreground hover:text-primary transition-colors">Career Development</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">K.T. College Road, Vasai (W), Maharashtra - 401202</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary shrink-0" />
                <a href="tel:+919XXXXXXXX" className="text-muted-foreground hover:text-primary transition-colors">+91 250 233 8234</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:info@vsitr.ac.in" className="text-muted-foreground hover:text-primary transition-colors">info@vsitr.ac.in</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} VSITR. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm">
              <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-use" className="text-muted-foreground hover:text-primary transition-colors">Terms of Use</Link>
              <Link to="/sitemap" className="text-muted-foreground hover:text-primary transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
