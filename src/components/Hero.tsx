import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import heroPortrait from "@/assets/hero-portrait.jpg";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { PointerHighlight } from "@/components/ui/pointer-highlight";



const Hero = () => {
  const techStack = [
    "React", "TypeScript", "Next.js", "Tailwind CSS", "shadcn/ui",
    "Node.js", "FastAPI", "PostgreSQL", "Supabase", "Docker"
  ];

  const teamMembers = [
    {
      id: 1,
      name: "React",
      designation: "Frontend Framework",
      image: "https://brandslogos.com/wp-content/uploads/images/large/react-logo-1.png",
    },
    {
      id: 2,
      name: "TypeScript",
      designation: "Type Safety",
      image: "https://images.unsplash.com/photo-1607706189992-eae578626c86?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Node.js",
      designation: "Backend Runtime",
      image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "PostgreSQL",
      designation: "Database",
      image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 5,
      name: "Docker",
      designation: "Containerization",
      image: "https://images.unsplash.com/photo-1606314737304-645c6b5b9951?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 6,
      name: "AWS",
      designation: "Cloud Platform",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=100&h=100&fit=crop&crop=face",
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center hero-gradient">
      <div className="container mx-auto container-padding">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          
          {/* Left Column - Content */}
          <motion.div 
            className="space-y-8 lg:space-y-10"
            variants={fadeInUp}
          >
            
            {/* Main Heading */}
            <div className="space-y-4 mt-20">
              
              <h1 className="text-hero">
                <span className="block">Harsh</span>
                <span className="block">Deshmukh</span>
              </h1>
              
              <div className="space-y-2">
                <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground">
                  Full‑Stack & AI Engineer
                </h2>
                <p className="text-large max-w-lg">
                  Building scalable web applications and intelligent systems that{" "}
                  <PointerHighlight containerClassName="inline-block whitespace-nowrap">
                    <span>solve real problems</span>
                  </PointerHighlight>
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                className="group shadow-brand"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/harshdeshmukh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-accent transition-smooth"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/harshdeshmukh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-accent transition-smooth"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <Button variant="ghost" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </div>

          </motion.div>

          {/* Right Column - Visual */}
          <motion.div 
            className="relative lg:h-[600px] flex items-center justify-center"
            variants={fadeInUp}
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              
              {/* Main Image */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl card-gradient shadow-brand overflow-hidden">
                <img
                  src={heroPortrait}
                  alt="Harsh Deshmukh - Full-Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 p-4 glass rounded-xl">
                <div className="text-xs font-mono text-muted-foreground">
                  console.log("Hello World!")
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 p-4 glass rounded-xl">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-xs font-mono">Building...</span>
                </div>
              </div>

            </motion.div>
          </motion.div>
        </motion.div>

        {/* Tech Stack with Animated Tooltips */}
        <div className="text-center space-y-8 pb-10 pt-10 sm:pt-0">
          <h3 className="text-2xl font-bold">Core Technologies</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hover over the tech stack icons to see the technologies I work with daily
          </p>
          <div className="flex flex-row items-center justify-center w-full">
            <AnimatedTooltip items={teamMembers} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;