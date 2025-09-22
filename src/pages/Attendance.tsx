import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Calendar, 
  CheckCircle, 
  XCircle, 
  Search, 
  Filter,
  UserPlus,
  Download
} from "lucide-react";
import { useState } from "react";

// Mock data for demonstration
const mockInterns = [
  { id: 1, name: "Alice Johnson", email: "alice@email.com", attendanceRate: 95, status: "active" },
  { id: 2, name: "Bob Smith", email: "bob@email.com", attendanceRate: 88, status: "active" },
  { id: 3, name: "Carol Davis", email: "carol@email.com", attendanceRate: 92, status: "active" },
  { id: 4, name: "David Wilson", email: "david@email.com", attendanceRate: 78, status: "warning" },
  { id: 5, name: "Eva Brown", email: "eva@email.com", attendanceRate: 100, status: "active" }
];

const mockAttendanceData = [
  { date: "2024-12-20", present: 65, absent: 5, total: 70 },
  { date: "2024-12-19", present: 68, absent: 2, total: 70 },
  { date: "2024-12-18", present: 67, absent: 3, total: 70 },
  { date: "2024-12-17", present: 64, absent: 6, total: 70 },
];

const mockUserAttendance = [
  { date: "2024-12-20", status: "present", time: "09:15 AM" },
  { date: "2024-12-19", status: "present", time: "09:25 AM" },
  { date: "2024-12-18", status: "absent", time: "-" },
  { date: "2024-12-17", status: "present", time: "09:10 AM" },
  { date: "2024-12-16", status: "present", time: "09:20 AM" },
];

export default function Attendance() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  
  // Mock user role - replace with real authentication
  const userRole: "intern" | "admin" = "admin"; // Change this value to test different roles

  const filteredInterns = mockInterns.filter(intern => {
    const matchesSearch = intern.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         intern.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === "all" || intern.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getAttendanceColor = (rate: number) => {
    if (rate >= 90) return "text-success";
    if (rate >= 75) return "text-accent";
    return "text-destructive";
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge variant="default">Active</Badge>;
      case "warning":
        return <Badge variant="destructive">Warning</Badge>;
      default:
        return <Badge variant="secondary">Inactive</Badge>;
    }
  };

  if (userRole === "intern") {
    return (
      <div className="space-y-8 animate-fade-in">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">My Attendance</h1>
          <p className="text-muted-foreground mt-2">
            Track your daily attendance and punctuality
          </p>
        </div>

        {/* Attendance Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Days</p>
                  <p className="text-3xl font-bold">20</p>
                </div>
                <Calendar className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Present</p>
                  <p className="text-3xl font-bold text-success">18</p>
                </div>
                <CheckCircle className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Attendance Rate</p>
                  <p className="text-3xl font-bold text-success">90%</p>
                </div>
                <CheckCircle className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Attendance */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Recent Attendance Record</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockUserAttendance.map((record, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-gradient-card border border-border">
                  <div className="flex items-center gap-4">
                    {record.status === "present" ? (
                      <CheckCircle className="h-5 w-5 text-success" />
                    ) : (
                      <XCircle className="h-5 w-5 text-destructive" />
                    )}
                    <div>
                      <p className="font-medium">{record.date}</p>
                      <p className="text-sm text-muted-foreground">
                        {record.status === "present" ? `Marked at ${record.time}` : "Absent"}
                      </p>
                    </div>
                  </div>
                  <Badge variant={record.status === "present" ? "default" : "destructive"}>
                    {record.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Attendance Management</h1>
          <p className="text-muted-foreground mt-2">
            Manage daily attendance for all 70 interns
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button className="bg-gradient-primary shadow-elegant">
            <UserPlus className="h-4 w-4 mr-2" />
            Add Intern
          </Button>
        </div>
      </div>

      {/* Daily Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {mockAttendanceData.slice(0, 1).map((day) => (
          <Card key={day.date} className="shadow-card">
            <CardContent className="p-6">
              <div className="text-center space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Today</p>
                <p className="text-2xl font-bold text-success">{day.present}</p>
                <p className="text-sm text-muted-foreground">Present</p>
              </div>
            </CardContent>
          </Card>
        ))}
        
        {mockAttendanceData.slice(0, 1).map((day) => (
          <Card key={`absent-${day.date}`} className="shadow-card">
            <CardContent className="p-6">
              <div className="text-center space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Today</p>
                <p className="text-2xl font-bold text-destructive">{day.absent}</p>
                <p className="text-sm text-muted-foreground">Absent</p>
              </div>
            </CardContent>
          </Card>
        ))}

        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="text-center space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Total Interns</p>
              <p className="text-2xl font-bold">70</p>
              <p className="text-sm text-muted-foreground">Active</p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="text-center space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Attendance Rate</p>
              <p className="text-2xl font-bold text-success">93%</p>
              <p className="text-sm text-muted-foreground">This Week</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search interns..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            variant={filterStatus === "all" ? "default" : "outline"}
            onClick={() => setFilterStatus("all")}
          >
            All
          </Button>
          <Button
            variant={filterStatus === "active" ? "default" : "outline"}
            onClick={() => setFilterStatus("active")}
          >
            Active
          </Button>
          <Button
            variant={filterStatus === "warning" ? "default" : "outline"}
            onClick={() => setFilterStatus("warning")}
          >
            Warning
          </Button>
        </div>
      </div>

      {/* Interns List */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Intern Attendance Records</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredInterns.map((intern) => (
              <div key={intern.id} className="flex items-center justify-between p-4 rounded-lg bg-gradient-card border border-border hover:shadow-md transition-all duration-200">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold">
                    {intern.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium">{intern.name}</p>
                    <p className="text-sm text-muted-foreground">{intern.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className={`font-semibold ${getAttendanceColor(intern.attendanceRate)}`}>
                      {intern.attendanceRate}%
                    </p>
                    <p className="text-sm text-muted-foreground">Attendance</p>
                  </div>
                  {getStatusBadge(intern.status)}
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}