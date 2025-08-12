import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { ExternalLink, Github, Rocket, Database, Zap } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI-Powered Task Manager",
      description: "Intelligent task management app with natural language processing and smart prioritization using OpenAI GPT-4.",
      image: "/placeholder.svg",
      tags: ["React", "TypeScript", "FastAPI", "PostgreSQL", "OpenAI"],
      type: "Full-Stack",
      status: "Live",
      github: "https://github.com/harshdeshmukh/ai-task-manager",
      demo: "https://tasks.harshdeshmukh.dev",
      icon: Zap,
    },
    {
      id: 2,
      title: "Real-time Analytics Dashboard",
      description: "High-performance dashboard processing 100K+ events per second with live data visualization and custom alerting.",
      image: "/placeholder.svg",
      tags: ["Next.js", "D3.js", "Node.js", "Redis", "WebSocket"],
      type: "Backend & Systems",
      status: "In Development",
      github: "https://github.com/harshdeshmukh/analytics-dashboard",
      demo: "https://analytics.harshdeshmukh.dev",
      icon: Database,
    },
    {
      id: 3,
      title: "E-Commerce Microservices",
      description: "Scalable microservices architecture handling payments, inventory, and user management with Docker orchestration.",
      image: "/placeholder.svg",
      tags: ["Node.js", "Docker", "Kubernetes", "PostgreSQL", "Stripe"],
      type: "Backend & Systems",
      status: "Live",
      github: "https://github.com/harshdeshmukh/ecommerce-microservices",
      demo: "https://shop.harshdeshmukh.dev",
      icon: Rocket,
    },
    {
      id: 4,
      title: "Interactive Component Library",
      description: "Reusable React components with drag-and-drop functionality, charts, and animations for rapid prototyping.",
      image: "/placeholder.svg",
      tags: ["React", "TypeScript", "Storybook", "Framer Motion"],
      type: "Frontend",
      status: "Live",
      github: "https://github.com/harshdeshmukh/ui-playground",
      demo: "https://playground.harshdeshmukh.dev",
      icon: Zap,
    },
  ];

  const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
    const IconComponent = project.icon;
    
    return (
      <CardContainer className="inter-var">
        <CardBody className="bg-card/50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-primary/[0.1] dark:bg-card/50 border-border/50 w-auto sm:w-[30rem] h-auto rounded-xl p-6 border backdrop-blur-sm">
          <CardItem translateZ="100" className="w-full mb-4">
            <div className="aspect-video rounded-lg overflow-hidden bg-muted">
              <img
                src={project.image}
                alt={project.title}
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl transition-all duration-300"
              />
            </div>
          </CardItem>
          
          <CardItem translateZ="50" className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <IconComponent className="h-5 w-5 text-primary" />
              <Badge variant="secondary" className="text-xs">
                {project.type}
              </Badge>
            </div>
            
            <Badge
              variant={project.status === "Live" ? "default" : "secondary"}
              className="text-xs"
            >
              {project.status}
            </Badge>
          </CardItem>
          
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-foreground mb-2"
          >
            {project.title}
          </CardItem>
          
          <CardItem
            as="p"
            translateZ="60"
            className="text-muted-foreground text-sm leading-relaxed mb-4"
          >
            {project.description}
          </CardItem>
          
          <CardItem translateZ="40" className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span key={tag} className="tech-badge text-xs">
                {tag}
              </span>
            ))}
          </CardItem>
          
          <div className="flex gap-2">
            <CardItem translateZ={20} className="flex-1">
              <Button variant="outline" size="sm" className="w-full" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-3 w-3" />
                  Code
                </a>
              </Button>
            </CardItem>
            
            <CardItem translateZ={20} className="flex-1">
              <Button size="sm" className="w-full" asChild>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-3 w-3" />
                  Demo
                </a>
              </Button>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    );
  };

  return (
    <section id="projects" className="section-padding overflow-x-clip scroll-mt-20">
      <div className="container mx-auto container-padding space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Featured Projects</h2>
          <p className="text-large max-w-2xl mx-auto text-muted-foreground">
            A collection of full-stack applications, backend systems, and interactive components 
            that demonstrate scalable architecture and modern development practices.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="px-2 py-3 md:px-0 md:py-0 md:-m-4 lg:-m-6" // normal spacing on mobile, negative only ≥ md
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;