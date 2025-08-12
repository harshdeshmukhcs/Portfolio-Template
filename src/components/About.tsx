import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Database, Brain, Users, Award, TrendingUp } from "lucide-react";

const About = () => {
  const skills = {
    frontend: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
    backend: ["Node.js", "FastAPI", "PostgreSQL", "Redis", "Docker"],
    ai: ["OpenAI GPT-4", "TensorFlow", "Python", "Jupyter", "Vector DBs"],
    tools: ["Git", "AWS", "Vercel", "Supabase", "Linear"],
  };

  const highlights = [
    {
      icon: TrendingUp,
      metric: "50%",
      description: "Performance improvement on e-commerce platform",
    },
    {
      icon: Users,
      metric: "100K+",
      description: "Monthly active users across projects",
    },
    {
      icon: Award,
      metric: "3 Years",
      description: "Professional development experience",
    },
    {
      icon: Code2,
      metric: "25+",
      description: "Open source contributions",
    },
  ];

  const SkillCategory = ({ 
    title, 
    skills, 
    icon: Icon 
  }: { 
    title: string; 
    skills: string[]; 
    icon: any;
  }) => (
    <Card className="glass border-border/50">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <h3 className="font-semibold">{title}</h3>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-sm">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="about" className="section-padding bg-muted/20">
      <div className="container mx-auto container-padding space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">About Me</h2>
          <p className="text-large max-w-2xl mx-auto text-muted-foreground">
            Passionate about creating digital experiences that combine beautiful design 
            with powerful functionality.
          </p>
        </div>

        {/* Bio */}
        <div className="max-w-4xl mx-auto">
          <Card className="glass border-border/50">
            <CardContent className="p-8 space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  I'm a full-stack developer with a deep passion for building scalable web applications 
                  and intelligent systems. My journey began with curiosity about how things work, 
                  which led me to master both frontend artistry and backend architecture.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring the latest AI developments, 
                  contributing to open source projects, or sharing knowledge through technical writing. 
                  I believe the best software is built when technology meets human empathy.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Currently, I'm focused on building AI-powered applications that solve real-world problems 
                  while maintaining exceptional user experiences and robust system architectures.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Technical Expertise</h3>
            <p className="text-muted-foreground">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillCategory
              title="Frontend"
              skills={skills.frontend}
              icon={Code2}
            />
            <SkillCategory
              title="Backend"
              skills={skills.backend}
              icon={Database}
            />
            <SkillCategory
              title="AI & ML"
              skills={skills.ai}
              icon={Brain}
            />
            <SkillCategory
              title="Tools"
              skills={skills.tools}
              icon={Users}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;