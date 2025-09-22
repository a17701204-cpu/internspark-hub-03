import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, Calendar, TrendingUp, Users } from "lucide-react";

const mockNotifications = [
  {
    id: 1,
    title: "New Weekly Assignment Released",
    content: "Week 5 JavaScript fundamentals assignment is now available. Due date: Friday, Dec 25.",
    type: "assignment",
    time: "2 hours ago"
  },
  {
    id: 2,
    title: "Attendance Reminder",
    content: "Please ensure you mark your attendance before 9:30 AM daily.",
    type: "reminder",
    time: "1 day ago"
  },
  {
    id: 3,
    title: "Team Meeting Scheduled",
    content: "Project review meeting scheduled for tomorrow at 2:00 PM in Conference Room A.",
    type: "meeting",
    time: "2 days ago"
  },
];

const mockImportantDates = [
  {
    id: 1,
    title: "Mid-term Evaluation",
    date: "December 28, 2024",
    type: "exam"
  },
  {
    id: 2,
    title: "Project Submission Deadline",
    date: "January 5, 2025",
    type: "deadline"
  },
  {
    id: 3,
    title: "Winter Break Starts",
    date: "December 22, 2024",
    type: "holiday"
  },
];

const stats = [
  {
    title: "Total Interns",
    value: "70",
    icon: Users,
    color: "text-primary"
  },
  {
    title: "Attendance Rate",
    value: "94%",
    icon: TrendingUp,
    color: "text-success"
  },
  {
    title: "Active Assignments",
    value: "8",
    icon: Calendar,
    color: "text-accent"
  }
];

export default function Home() {
  // Mock user role - replace with real authentication
  const userRole: "intern" | "admin" = "admin"; // Change this value to test different roles

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent">
          Welcome to InternHub
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Your comprehensive platform for internship management and learning resources
        </p>
      </div>

      {/* Stats Cards - Admin only */}
      {userRole === "admin" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title} className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {stat.title}
                      </p>
                      <p className="text-3xl font-bold">{stat.value}</p>
                    </div>
                    <Icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Notifications */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-primary" />
              Latest Notifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockNotifications.map((notification) => (
              <div 
                key={notification.id} 
                className="p-4 rounded-lg bg-gradient-card border border-border hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-foreground">
                    {notification.title}
                  </h4>
                  <Badge 
                    variant={notification.type === 'assignment' ? 'default' : 
                            notification.type === 'reminder' ? 'secondary' : 'outline'}
                    className="ml-2"
                  >
                    {notification.type}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  {notification.content}
                </p>
                <p className="text-xs text-muted-foreground">
                  {notification.time}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Important Dates */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-accent" />
              Important Dates
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockImportantDates.map((date) => (
              <div 
                key={date.id} 
                className="p-4 rounded-lg bg-gradient-card border border-border hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {date.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {date.date}
                    </p>
                  </div>
                  <Badge 
                    variant={date.type === 'exam' ? 'destructive' : 
                            date.type === 'deadline' ? 'default' : 'secondary'}
                  >
                    {date.type}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}