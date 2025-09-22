import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Download, ExternalLink, Plus } from "lucide-react";

const mockSyllabus = [
  {
    id: 1,
    week: "Week 1-2",
    title: "JavaScript Fundamentals",
    description: "Variables, functions, control structures, and basic DOM manipulation",
    status: "completed",
    resources: [
      { name: "JavaScript Basics PDF", type: "pdf", url: "#" },
      { name: "MDN JavaScript Guide", type: "external", url: "#" },
      { name: "Practice Exercises", type: "assignment", url: "#" }
    ]
  },
  {
    id: 2,
    week: "Week 3-4",
    title: "React Fundamentals",
    description: "Components, props, state, and event handling in React",
    status: "current",
    resources: [
      { name: "React Getting Started", type: "pdf", url: "#" },
      { name: "React Official Tutorial", type: "external", url: "#" },
      { name: "Component Building Exercise", type: "assignment", url: "#" }
    ]
  },
  {
    id: 3,
    week: "Week 5-6",
    title: "Advanced React & State Management",
    description: "Hooks, context API, and state management patterns",
    status: "upcoming",
    resources: [
      { name: "Advanced React Concepts", type: "pdf", url: "#" },
      { name: "State Management Guide", type: "external", url: "#" }
    ]
  }
];

export default function Syllabus() {
  // Mock user role - replace with real authentication
  const userRole: "intern" | "admin" = "admin"; // Change this value to test different roles

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "default";
      case "current":
        return "default";
      case "upcoming":
        return "secondary";
      default:
        return "outline";
    }
  };

  const getResourceIcon = (type: string) => {
    switch (type) {
      case "pdf":
        return <Download className="h-4 w-4" />;
      case "external":
        return <ExternalLink className="h-4 w-4" />;
      case "assignment":
        return <BookOpen className="h-4 w-4" />;
      default:
        return <BookOpen className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Course Syllabus</h1>
          <p className="text-muted-foreground mt-2">
            Weekly curriculum and learning resources for your internship program
          </p>
        </div>
        {userRole === "admin" && (
          <Button className="bg-gradient-primary shadow-elegant">
            <Plus className="h-4 w-4 mr-2" />
            Add Content
          </Button>
        )}
      </div>

      {/* Syllabus Content */}
      <div className="space-y-6">
        {mockSyllabus.map((item) => (
          <Card key={item.id} className="shadow-card hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="text-sm">
                    {item.week}
                  </Badge>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </div>
                <Badge variant={getStatusColor(item.status)}>
                  {item.status}
                </Badge>
              </div>
              <p className="text-muted-foreground">{item.description}</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <h4 className="font-semibold flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-primary" />
                  Learning Resources
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {item.resources.map((resource, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg bg-gradient-card border border-border hover:shadow-md transition-all duration-200 cursor-pointer"
                    >
                      {getResourceIcon(resource.type)}
                      <span className="text-sm font-medium">{resource.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Upload Section - Admin only */}
      {userRole === "admin" && (
        <Card className="shadow-card border-dashed border-2 border-muted">
          <CardContent className="p-8 text-center">
            <div className="space-y-4">
              <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Plus className="h-6 w-6 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Add New Syllabus Content</h3>
                <p className="text-muted-foreground">
                  Upload weekly assignments, resources, and practice materials for interns
                </p>
              </div>
              <Button className="bg-gradient-primary shadow-elegant">
                Upload Content
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}