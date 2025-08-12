import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageCircle, Send, Github, Linkedin, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message sent successfully!",
      description: "I'll get back to you within 24 hours.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/harshdeshmukh",
      icon: Github,
      username: "@harshdeshmukh",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/harshdeshmukh",
      icon: Linkedin,
      username: "/harshdeshmukh",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/harshdeshmukh",
      icon: Twitter,
      username: "@harshdeshmukh",
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto container-padding">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold">Let's Work Together</h2>
          <p className="text-large max-w-2xl mx-auto text-muted-foreground">
            Have a project in mind or want to discuss opportunities? 
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Form */}
          <Card className="glass border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageCircle className="h-5 w-5 text-primary" />
                <span>Send a Message</span>
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="John"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Doe"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company / Organization</Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Acme Inc."
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Project collaboration"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or opportunity..."
                    className="min-h-[120px]"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full shadow-brand"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            
            {/* Direct Contact */}
            <Card className="glass border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>Direct Contact</span>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium mb-1">Email</p>
                  <a
                    href="mailto:harsh@example.com"
                    className="text-primary hover:underline transition-smooth"
                  >
                    harsh@example.com
                  </a>
                </div>
                
                <div>
                  <p className="font-medium mb-1">Response Time</p>
                  <p className="text-muted-foreground text-sm">
                    Usually within 24 hours
                  </p>
                </div>
                
                <div>
                  <p className="font-medium mb-1">Location</p>
                  <p className="text-muted-foreground text-sm">
                    Mumbai, India (UTC +5:30)
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="glass border-border/50">
              <CardHeader>
                <CardTitle>Connect on Social</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/50 hover:bg-accent transition-smooth group"
                    >
                      <IconComponent className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      <div>
                        <p className="font-medium">{social.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {social.username}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="glass border-border/50 border-primary/20 bg-primary/5">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="font-medium">Available for new projects</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Currently accepting select client work and interesting opportunities
                </p>
              </CardContent>
            </Card>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;