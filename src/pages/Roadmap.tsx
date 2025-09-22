import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle, 
  Circle, 
  Lock, 
  ExternalLink, 
  BookOpen,
  Code,
  Database,
  Globe
} from "lucide-react";

const roadmaps = [
  {
    id: 1,
    title: "JavaScript Mastery",
    description: "Complete path from basics to advanced JavaScript",
    icon: Code,
    color: "text-yellow-500",
    steps: [
      { id: 1, title: "Variables & Data Types", status: "completed", resources: ["MDN Guide", "Practice Exercises"] },
      { id: 2, title: "Functions & Scope", status: "completed", resources: ["Function Guide", "Scope Examples"] },
      { id: 3, title: "DOM Manipulation", status: "current", resources: ["DOM Tutorial", "Interactive Exercises"] },
      { id: 4, title: "Async JavaScript", status: "locked", resources: ["Promises Guide", "Async/Await Tutorial"] },
      { id: 5, title: "ES6+ Features", status: "locked", resources: ["ES6 Guide", "Modern JS Patterns"] }
    ]
  },
  {
    id: 2,
    title: "React Development",
    description: "Build modern web applications with React",
    icon: Globe,
    color: "text-blue-500",
    steps: [
      { id: 1, title: "React Basics", status: "completed", resources: ["React Docs", "First Component"] },
      { id: 2, title: "Components & Props", status: "current", resources: ["Component Guide", "Props Tutorial"] },
      { id: 3, title: "State & Events", status: "locked", resources: ["State Management", "Event Handling"] },
      { id: 4, title: "Hooks", status: "locked", resources: ["Hooks Guide", "Custom Hooks"] },
      { id: 5, title: "React Router", status: "locked", resources: ["Routing Guide", "Navigation Patterns"] }
    ]
  },
  {
    id: 3,
    title: "Database Fundamentals",
    description: "Master database design and SQL queries",
    icon: Database,
    color: "text-green-500",
    steps: [
      { id: 1, title: "Database Basics", status: "upcoming", resources: ["DB Introduction", "Relational Concepts"] },
      { id: 2, title: "SQL Queries", status: "locked", resources: ["SQL Tutorial", "Query Examples"] },
      { id: 3, title: "Database Design", status: "locked", resources: ["Design Principles", "Normalization"] },
      { id: 4, title: "Advanced SQL", status: "locked", resources: ["Complex Queries", "Optimization"] },
      { id: 5, title: "NoSQL Databases", status: "locked", resources: ["MongoDB Guide", "Document Databases"] }
    ]
  }
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "completed":
      return <CheckCircle className="h-5 w-5 text-success" />;
    case "current":
      return <Circle className="h-5 w-5 text-primary animate-pulse-glow" />;
    case "upcoming":
      return <Circle className="h-5 w-5 text-accent" />;
    default:
      return <Lock className="h-5 w-5 text-muted-foreground" />;
  }
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case "completed":
      return <Badge variant="default" className="bg-success">Completed</Badge>;
    case "current":
      return <Badge variant="default">In Progress</Badge>;
    case "upcoming":
      return <Badge variant="secondary">Coming Soon</Badge>;
    default:
      return <Badge variant="outline">Locked</Badge>;
  }
};

export default function Roadmap() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Learning Roadmaps</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Structured learning paths to guide your development journey. Follow step-by-step guides 
          with curated resources and practice exercises.
        </p>
      </div>

      {/* Roadmaps */}
      <div className="space-y-8">
        {roadmaps.map((roadmap) => {
          const Icon = roadmap.icon;
          return (
            <Card key={roadmap.id} className="shadow-card">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Icon className={`h-6 w-6 text-white`} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl">{roadmap.title}</CardTitle>
                    <p className="text-muted-foreground mt-1">{roadmap.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Progress</p>
                    <p className="text-2xl font-bold text-primary">
                      {Math.round((roadmap.steps.filter(s => s.status === "completed").length / roadmap.steps.length) * 100)}%
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {roadmap.steps.map((step, index) => (
                    <div key={step.id} className="relative">
                      {/* Connection Line */}
                      {index < roadmap.steps.length - 1 && (
                        <div className="absolute left-6 top-12 w-0.5 h-16 bg-border" />
                      )}
                      
                      <div className="flex items-start gap-4 p-4 rounded-lg bg-gradient-card border border-border hover:shadow-md transition-all duration-200">
                        <div className="mt-1">
                          {getStatusIcon(step.status)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold">{step.title}</h4>
                            {getStatusBadge(step.status)}
                          </div>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {step.resources.map((resource, resourceIndex) => (
                              <div
                                key={resourceIndex}
                                className="flex items-center gap-2 px-3 py-1 bg-muted rounded-md text-sm cursor-pointer hover:bg-muted/80 transition-colors"
                              >
                                <BookOpen className="h-3 w-3" />
                                {resource}
                                <ExternalLink className="h-3 w-3 opacity-50" />
                              </div>
                            ))}
                          </div>
                          {step.status === "current" && (
                            <Button size="sm" className="bg-gradient-primary">
                              Continue Learning
                            </Button>
                          )}
                          {step.status === "upcoming" && (
                            <Button size="sm" variant="outline">
                              Get Ready
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* CTA Section */}
      <Card className="shadow-card bg-gradient-hero text-white">
        <CardContent className="p-8 text-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Need a Custom Roadmap?</h3>
            <p className="text-white/90 max-w-lg mx-auto">
              Contact your administrator to request additional learning paths or 
              customize existing roadmaps based on your goals.
            </p>
            <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Request Custom Path
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}