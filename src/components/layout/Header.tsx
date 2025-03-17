
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface NavItem {
  title: string;
  href: string;
  subItems?: { title: string; href: string }[];
}

const navItems: NavItem[] = [
  { 
    title: 'About', 
    href: '/about',
    subItems: [
      { title: 'Overview', href: '/about' },
      { title: 'Vision & Mission', href: '/about/vision-mission' },
      { title: 'Administration', href: '/about/administration' },
      { title: 'Infrastructure', href: '/about/infrastructure' },
    ]
  },
  { 
    title: 'Academics', 
    href: '/academics',
    subItems: [
      { title: 'Programs', href: '/academics/programs' },
      { title: 'Departments', href: '/academics/departments' },
      { title: 'Faculty', href: '/academics/faculty' },
      { title: 'Research', href: '/academics/research' },
    ]
  },
  { 
    title: 'Admissions', 
    href: '/admissions',
    subItems: [
      { title: 'Process', href: '/admissions/process' },
      { title: 'Eligibility', href: '/admissions/eligibility' },
      { title: 'Fees', href: '/admissions/fees' },
      { title: 'Scholarships', href: '/admissions/scholarships' },
    ]
  },
  { 
    title: 'Campus Life', 
    href: '/campus-life',
    subItems: [
      { title: 'Events', href: '/campus-life/events' },
      { title: 'Clubs', href: '/campus-life/clubs' },
      { title: 'Facilities', href: '/campus-life/facilities' },
    ]
  },
  { 
    title: 'Placements', 
    href: '/placements' 
  },
  { 
    title: 'Contact', 
    href: '/contact' 
  },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out',
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-subtle py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="container px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 transition-opacity duration-200 hover:opacity-80">
          <span className="font-bold text-xl md:text-2xl">VSITR</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <div key={item.title} className="relative group">
              <button
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-all duration-200",
                  "hover:bg-secondary flex items-center gap-1",
                  activeDropdown === item.title ? "bg-secondary" : ""
                )}
                onClick={() => item.subItems && toggleDropdown(item.title)}
              >
                {item.title}
                {item.subItems && (
                  <ChevronDown
                    size={16}
                    className={cn(
                      "transition-transform duration-200",
                      activeDropdown === item.title ? "rotate-180" : ""
                    )}
                  />
                )}
              </button>
              
              {item.subItems && (
                <div 
                  className={cn(
                    "absolute left-0 mt-1 w-48 py-1 bg-white rounded-md shadow-card border border-border",
                    "opacity-0 translate-y-2 pointer-events-none transition-all duration-200",
                    activeDropdown === item.title ? "opacity-100 translate-y-0 pointer-events-auto" : ""
                  )}
                >
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.title}
                      to={subItem.href}
                      className="block px-4 py-2 text-sm hover:bg-secondary"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Call to Action */}
        <div className="hidden lg:flex items-center space-x-4">
          <Button asChild variant="outline" className="text-sm">
            <Link to="/student-login">Student Login</Link>
          </Button>
          <Button asChild className="text-sm">
            <Link to="/admissions/apply">Apply Now</Link>
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <button 
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 z-40 bg-white pt-16 transition-transform duration-300 ease-in-out lg:hidden",
          mobileMenuOpen ? "translate-y-0" : "translate-y-full"
        )}
      >
        <nav className="container px-4 py-6 flex flex-col space-y-6">
          {navItems.map((item) => (
            <div key={item.title} className="space-y-2">
              <button
                className="w-full flex justify-between items-center text-lg font-medium py-2"
                onClick={() => item.subItems && toggleDropdown(item.title)}
              >
                <span>{item.title}</span>
                {item.subItems && (
                  <ChevronDown 
                    size={20} 
                    className={cn(
                      "transition-transform duration-200",
                      activeDropdown === item.title ? "rotate-180" : ""
                    )}
                  />
                )}
              </button>
              
              {item.subItems && activeDropdown === item.title && (
                <div className="pl-4 space-y-2 border-l-2 border-muted animate-fade-in">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.title}
                      to={subItem.href}
                      className="block py-2 text-muted-foreground"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          <div className="pt-6 flex flex-col space-y-3">
            <Button asChild variant="outline" className="w-full">
              <Link to="/student-login" onClick={() => setMobileMenuOpen(false)}>Student Login</Link>
            </Button>
            <Button asChild className="w-full">
              <Link to="/admissions/apply" onClick={() => setMobileMenuOpen(false)}>Apply Now</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
