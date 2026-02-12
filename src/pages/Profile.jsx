import { useState } from "react";
import { MainLayout } from "@/components/MainLayout";
import { ChevronRight, MapPin, Linkedin, Globe, Edit, CheckCircle, Clock, Brain, Flag, Download } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import profileAvatar from "@/assets/profile-avatar.jpg";
import certUiux from "@/assets/cert-uiux.jpg";
import certPython from "@/assets/cert-python.jpg";
import certCloud from "@/assets/cert-cloud.jpg";

const initialInterests = ["UI/UX Design", "Python", "Data Visualization", "React", "TypeScript", "Cloud Architecture"];

const certificates = [
  { title: "Advanced UI Design", date: "Oct 2023", image: certUiux },
  { title: "Python for Data Science", date: "Aug 2023", image: certPython },
  { title: "Cloud Solutions Arch", date: "June 2023", image: certCloud },
];

const heatMapData = [
  5, 20, 60, 10, 80, 40, 5, 10, 5, 40, 20, 90, 10, 5, 20, 60, 10, 80, 40, 5,
  5, 5, 40, 100, 20, 5, 40, 20, 90, 10, 5, 5, 5, 60, 10, 80, 40, 5, 10, 5,
  20, 60, 10, 80, 40, 5, 10, 5, 40, 20, 90, 10, 5, 20, 5, 60, 10, 80, 40, 5,
  5, 10, 5, 40, 20, 90, 10, 5, 20, 60, 10, 80, 40, 5, 10, 5, 5, 60, 10, 80,
];

const stats = [
  { icon: CheckCircle, value: "12", label: "Courses Completed" },
  { icon: Clock, value: "284", label: "Hours Learned" },
  { icon: Brain, value: "42", label: "Skills Mastered" },
];

export default function Profile() {
  const [userInterests, setUserInterests] = useState(initialInterests);
  const [newInterest, setNewInterest] = useState("");

  const handleAddInterest = () => {
    const trimmed = newInterest.trim();
    if (!trimmed) return;
    if (!userInterests.includes(trimmed)) {
      setUserInterests([...userInterests, trimmed]);
    }
    setNewInterest("");
  };

  return (
    <MainLayout>
      <div className="flex-1 flex flex-col lg:flex-row min-h-0">
        {/* Center Column */}
        <div className="flex-1 p-8 lg:p-12 overflow-y-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest mb-6">
            <span className="hover:text-primary transition-colors cursor-pointer">EduDiscover</span>
            <ChevronRight className="size-3" />
            <span className="text-foreground">Profile</span>
          </nav>

          {/* Profile Header */}
          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 mb-10">
            <div className="relative">
              <img
                src={profileAvatar}
                alt="Alex Chen"
                className="w-32 h-32 rounded-2xl object-cover border-4 border-card shadow-xl"
              />
              <span className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground p-1.5 rounded-full border-2 border-card">
                <CheckCircle className="size-3.5" />
              </span>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-3xl font-bold">Alex Chen</h1>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-muted-foreground mt-1">
                <MapPin className="size-3.5" />
                <span>San Francisco, CA</span>
                <span className="mx-1">•</span>
                <span>Full-stack Learner</span>
              </div>
              <div className="flex gap-3 mt-4 justify-center sm:justify-start">
                <a href="#" className="size-10 flex items-center justify-center rounded-lg bg-card border border-border text-primary hover:bg-primary hover:text-primary-foreground transition-all shadow-sm">
                  <Linkedin className="size-5" />
                </a>
                <a href="#" className="size-10 flex items-center justify-center rounded-lg bg-card border border-border text-primary hover:bg-primary hover:text-primary-foreground transition-all shadow-sm">
                  <Globe className="size-5" />
                </a>
                <button className="px-6 py-2.5 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all shadow-md flex items-center gap-2">
                  <Edit className="size-4" />
                  Edit Profile
                </button>
              </div>
            </div>
          </div>

          {/* About */}
          <section className="mb-10">
            <h2 className="text-lg font-semibold mb-3">About Me</h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              I'm a passionate designer and developer currently focusing on the intersection of AI and User Experience. I've spent the last two years exploring interactive design systems and backend architecture. My goal is to build tools that empower human creativity through technology.
            </p>
          </section>

          {/* Interest Tags */}
          <section className="mb-12">
            <h2 className="text-lg font-semibold mb-4">Interest Tags</h2>
            <div className="flex flex-wrap gap-2">
              {userInterests.map((tag) => (
                <span key={tag} className="px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
                  {tag}
                </span>
              ))}
              <Dialog>
                <DialogTrigger asChild>
                  <button className="px-3 py-1.5 border border-dashed border-primary/40 text-primary/60 text-sm font-medium rounded-full hover:border-primary hover:text-primary transition-all">
                    + Add Interest
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add Interest</DialogTitle>
                    <DialogDescription>
                      Add a new interest tag to personalize your learning profile.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-3">
                    <Input
                      autoFocus
                      placeholder="e.g. Machine Learning"
                      value={newInterest}
                      onChange={(event) => setNewInterest(event.target.value)}
                    />
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline" type="button">
                        Cancel
                      </Button>
                    </DialogClose>
                    <DialogClose asChild>
                      <Button type="button" onClick={handleAddInterest} disabled={!newInterest.trim()}>
                        Add Interest
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </section>

          {/* Earned Certificates */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Earned Certificates</h2>
              <a href="#" className="text-sm font-medium text-primary hover:underline">View All</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificates.map((cert) => (
                <div key={cert.title} className="group bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="relative aspect-[16/10] bg-secondary overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold mb-1">{cert.title}</h3>
                    <p className="text-xs text-muted-foreground mb-4">Completed: {cert.date}</p>
                    <button className="w-full py-2 bg-primary/5 hover:bg-primary hover:text-primary-foreground text-primary text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5">
                      <Download className="size-3.5" /> Download PDF
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Sidebar */}
        <aside className="w-full lg:w-96 p-8 bg-card border-l border-border">
          {/* Learning Activity Heat Map */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold">Learning Activity</h2>
              <span className="text-xs text-muted-foreground">Past 5 Months</span>
            </div>
            <div className="bg-primary/5 p-4 rounded-xl">
              <div className="grid grid-cols-[repeat(20,1fr)] gap-1">
                {heatMapData.map((val, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-sm"
                    style={{ backgroundColor: `hsl(var(--primary) / ${val / 100})` }}
                  />
                ))}
              </div>
              <div className="flex items-center justify-between mt-3 text-[10px] text-muted-foreground font-medium">
                <span>Less Activity</span>
                <div className="flex gap-1">
                  {[5, 30, 60, 100].map((v) => (
                    <div key={v} className="w-2 h-2 rounded-sm" style={{ backgroundColor: `hsl(var(--primary) / ${v / 100})` }} />
                  ))}
                </div>
                <span>More Activity</span>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="space-y-4 mb-8">
            <h2 className="text-lg font-bold mb-4">Quick Stats</h2>
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="bg-card border border-border p-5 rounded-xl flex items-center gap-4 shadow-sm">
                  <div className="size-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold leading-none">{stat.value}</p>
                    <p className="text-xs text-muted-foreground font-medium mt-1">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Goal Card */}
          <div className="p-6 bg-primary text-primary-foreground rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider opacity-80">Current Goal</span>
              <Flag className="size-5 opacity-80" />
            </div>
            <h3 className="font-bold text-lg mb-1">UI Master Path</h3>
            <p className="text-sm opacity-80 mb-6">3 courses left to reach your 2024 target.</p>
            <div className="w-full bg-primary-foreground/20 h-2 rounded-full mb-2 overflow-hidden">
              <div className="bg-primary-foreground h-full rounded-full" style={{ width: "65%" }} />
            </div>
            <div className="flex justify-between items-center text-xs font-bold">
              <span>65% Progress</span>
              <span>12/15</span>
            </div>
          </div>
        </aside>
      </div>
    </MainLayout>
  );
}