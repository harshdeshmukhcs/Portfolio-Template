import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import AboutEnhanced from "@/components/AboutEnhanced";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <About />
        <AboutEnhanced />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border/50 bg-muted/20">
        <div className="container mx-auto container-padding py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-md brand-gradient flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="font-medium">Harsh Deshmukh</span>
            </div>
            
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Harsh Deshmukh. Crafted with passion.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
