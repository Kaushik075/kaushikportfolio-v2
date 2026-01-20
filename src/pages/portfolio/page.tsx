import { useState, useEffect, useRef } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { ProjectModal } from './components/ProjectModal';

export default function Portfolio() {
  const [showSplash, setShowSplash] = useState(() => {
    // Only show splash if user hasn't visited before in this session
    return !sessionStorage.getItem('portfolioVisited');
  });
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  
  // Refs for scroll sections
  const heroRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showSplash) {
      const timer = setTimeout(() => {
        setShowSplash(false);
        sessionStorage.setItem('portfolioVisited', 'true');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showSplash]);

  // Enhanced smooth scroll function
  const scrollToSection = (sectionId: string) => {
    if (isScrolling) return; // Prevent multiple scroll calls
    
    setIsScrolling(true);
    const refs = {
      home: heroRef,
      projects: projectsRef,
      about: aboutRef,
      experience: experienceRef,
      contact: contactRef
    };

    const targetRef = refs[sectionId as keyof typeof refs];
    if (targetRef?.current) {
      // Calculate offset for fixed navigation
      const navHeight = 80;
      const elementPosition = targetRef.current.offsetTop - navHeight;
      
      // Smooth scroll with custom easing
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });

      // Update active section immediately
      setActiveSection(sectionId);
      
      // Reset scrolling flag after animation completes
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
  };

  // Throttle function for better performance
  const throttle = <T extends (...args: any[]) => void>(func: T, limit: number): ((...args: Parameters<T>) => void) => {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  };

  // Handle scroll to detect active section (only when not programmatically scrolling)
  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return; // Don't update during programmatic scrolling
      
      const sections = [
        { id: 'home', ref: heroRef },
        { id: 'projects', ref: projectsRef },
        { id: 'about', ref: aboutRef },
        { id: 'experience', ref: experienceRef },
        { id: 'contact', ref: contactRef }
      ];

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.ref.current) {
          const { offsetTop, offsetHeight } = section.ref.current;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            if (activeSection !== section.id) {
              setActiveSection(section.id);
            }
            break;
          }
        }
      }
    };

    const throttledHandleScroll = throttle(handleScroll, 100);
    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [activeSection, isScrolling]);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 pb-20 lg:pb-0">
      <Navigation 
        activeSection={activeSection} 
        setActiveSection={scrollToSection}
      />
      
      <main className="relative">
        <div ref={heroRef} id="home">
          <Hero setActiveSection={scrollToSection} />
        </div>
        <div ref={projectsRef} id="projects">
          <Projects onProjectClick={setSelectedProject} />
        </div>
        <div ref={aboutRef} id="about">
          <About />
        </div>
        <div ref={experienceRef} id="experience">
          <Experience />
        </div>
        <div ref={contactRef} id="contact">
          <Contact />
        </div>
      </main>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
}
