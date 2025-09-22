import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ExternalLink, 
  Code, 
  Palette, 
  Database, 
  Globe, 
  Zap,
  BookOpen,
  Terminal,
  GitBranch,
  Smartphone
} from "lucide-react";

const toolCategories = [
  {
    id: 1,
    title: "Development Tools",
    icon: Code,
    color: "text-blue-500",
    tools: [
      {
        name: "Visual Studio Code",
        description: "Free source code editor with great extensions",
        url: "https://code.visualstudio.com/",
        type: "Editor",
        featured: true
      },
      {
        name: "GitHub Desktop",
        description: "Simple collaboration from your desktop",
        url: "https://desktop.github.com/",
        type: "Version Control",
        featured: false
      },
      {
        name: "Postman",
        description: "API development and testing platform",
        url: "https://www.postman.com/",
        type: "API Testing",
        featured: true
      },
      {
        name: "Chrome DevTools",
        description: "Built-in browser developer tools",
        url: "https://developer.chrome.com/docs/devtools/",
        type: "Debugging",
        featured: false
      }
    ]
  },
  {
    id: 2,
    title: "Design & UI/UX",
    icon: Palette,
    color: "text-purple-500",
    tools: [
      {
        name: "Figma",
        description: "Collaborative interface design tool",
        url: "https://www.figma.com/",
        type: "Design",
        featured: true
      },
      {
        name: "Canva",
        description: "Simple graphic design platform",
        url: "https://www.canva.com/",
        type: "Graphics",
        featured: false
      },
      {
        name: "ColorHunt",
        description: "Color palette inspiration",
        url: "https://colorhunt.co/",
        type: "Colors",
        featured: false
      },
      {
        name: "Unsplash",
        description: "High-quality free photos",
        url: "https://unsplash.com/",
        type: "Images",
        featured: true
      }
    ]
  },
  {
    id: 3,
    title: "Learning Resources",
    icon: BookOpen,
    color: "text-green-500",
    tools: [
      {
        name: "MDN Web Docs",
        description: "Comprehensive web development documentation",
        url: "https://developer.mozilla.org/",
        type: "Documentation",
        featured: true
      },
      {
        name: "freeCodeCamp",
        description: "Free coding bootcamp with certificates",
        url: "https://www.freecodecamp.org/",
        type: "Learning",
        featured: true
      },
      {
        name: "Stack Overflow",
        description: "Programming Q&A community",
        url: "https://stackoverflow.com/",
        type: "Community",
        featured: false
      },
      {
        name: "JavaScript.info",
        description: "Modern JavaScript tutorial",
        url: "https://javascript.info/",
        type: "Tutorial",
        featured: false
      }
    ]
  },
  {
    id: 4,
    title: "Productivity",
    icon: Zap,
    color: "text-orange-500",
    tools: [
      {
        name: "Notion",
        description: "All-in-one workspace for notes and tasks",
        url: "https://www.notion.so/",
        type: "Organization",
        featured: true
      },
      {
        name: "Trello",
        description: "Visual project management boards",
        url: "https://trello.com/",
        type: "Project Management",
        featured: false
      },
      {
        name: "Pomodoro Timer",
        description: "Time management technique timer",
        url: "https://pomofocus.io/",
        type: "Time Management",
        featured: false
      },
      {
        name: "Grammarly",
        description: "Writing assistant and grammar checker",
        url: "https://www.grammarly.com/",
        type: "Writing",
        featured: true
      }
    ]
  }
];

const quickLinks = [
  { name: "GitHub Student Pack", url: "https://education.github.com/pack", description: "Free developer tools for students" },
  { name: "Google Fonts", url: "https://fonts.google.com/", description: "Free web fonts library" },
  { name: "Can I Use", url: "https://caniuse.com/", description: "Browser compatibility tables" },
  { name: "Regex101", url: "https://regex101.com/", description: "Regular expression tester" }
];

export default function Tools() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Developer Tools & Resources</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Essential tools, resources, and platforms to accelerate your development journey. 
          All carefully curated for intern-level learning and productivity.
        </p>
      </div>

      {/* Quick Links */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-orange-500" />
            Quick Access Links
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-gradient-card border border-border hover:shadow-md transition-all duration-200 cursor-pointer group"
                onClick={() => window.open(link.url, '_blank')}
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold group-hover:text-primary transition-colors">
                    {link.name}
                  </h4>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-sm text-muted-foreground">{link.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tool Categories */}
      <div className="space-y-8">
        {toolCategories.map((category) => {
          const Icon = category.icon;
          return (
            <Card key={category.id} className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.tools.map((tool, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-lg bg-gradient-card border border-border hover:shadow-md transition-all duration-200 group"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">
                            {tool.name}
                          </h4>
                          {tool.featured && (
                            <Badge variant="default" className="bg-gradient-primary">
                              Featured
                            </Badge>
                          )}
                        </div>
                        <Badge variant="outline">{tool.type}</Badge>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        {tool.description}
                      </p>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full group-hover:bg-primary group-hover:text-white transition-all"
                        onClick={() => window.open(tool.url, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Open Tool
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recommendation CTA */}
      <Card className="shadow-card bg-gradient-hero text-white">
        <CardContent className="p-8 text-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Missing a Tool?</h3>
            <p className="text-white/90 max-w-lg mx-auto">
              Have a favorite development tool or resource that's not listed? 
              Let us know and we'll consider adding it to help other interns!
            </p>
            <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Suggest a Tool
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}