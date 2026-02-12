import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft, Bell, Play, Pause, RotateCcw, FastForward, Settings,
  Maximize, ChevronDown, CheckCircle, PlayCircle, Circle, Lock,
  FileEdit, Download, ArrowRight
} from "lucide-react";
import courseVideoBg from "@/assets/course-video-bg.jpg";

const modules = [
  {
    title: "Module 1: Introduction",
    lessons: [
      { title: "1.1 Welcome to the Course", type: "Video", duration: "05:00", status: "completed" },
      { title: "1.2 Setting up your Environment", type: "Video", duration: "12:30", status: "playing" },
      { title: "1.3 Design Principles Overview", type: "Article", duration: "10 min", status: "locked" },
    ],
    count: 4,
    open: true,
  },
  { title: "Module 2: Design Foundations", lessons: [
      { title: "2.1 Introduction", type: "Video", duration: "05:00", status: "playing" },
      { title: "2.2 How to use", type: "Video", duration: "12:30", status: "locked" },
      { title: "2.3 Setup in your Window", type: "Article", duration: "10 min", status: "locked" },
  ], count: 8, open: true },
  { title: "Module 3: Advanced Prototyping", lessons: [], count: 10, open: false },
];

export default function LearningInterface() {
  const [openModules, setOpenModules] = useState({ 0: true });

  const toggleModule = (idx) => {
    setOpenModules((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Top Nav */}
      <header className="h-16 border-b border-border bg-card flex items-center justify-between px-6 sticky top-0 z-30">
        <div className="flex items-center gap-4">
          <Link to="/course/:id" className="flex items-center gap-2 text-primary">
            <ArrowLeft className="size-5" />
            <span className="hidden md:inline font-medium">Dashboard</span>
          </Link>
          <div className="h-6 w-px bg-border mx-2" />
          <h1 className="text-lg font-semibold truncate max-w-[300px] md:max-w-md">Mastering Modern UI/UX Design</h1>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex flex-col items-end gap-1 min-w-[150px]">
            <div className="flex justify-between w-full text-xs font-medium">
              <span>Course Progress</span>
              <span>45%</span>
            </div>
            <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
              <div className="h-full bg-primary" style={{ width: "45%" }} />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-secondary rounded-lg text-muted-foreground">
              <Bell className="size-5" />
            </button>
            <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-primary/20 flex items-center justify-center text-primary font-bold text-sm">
              AM
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex overflow-hidden">
        {/* Video Player */}
        <div className="flex-1 flex flex-col relative bg-foreground">
          {/* Progress bar */}
          <div className="absolute top-0 left-0 right-0 z-10 h-1 bg-primary-foreground/20">
            <div className="h-full bg-primary w-1/3 shadow-[0_0_8px_hsl(var(--primary)/0.8)]" />
          </div>

          {/* Video */}
          <div className="flex-1 flex items-center justify-center relative group">
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${courseVideoBg})` }}
            >
              <div className="absolute inset-0 bg-foreground/30" />
              <button className="z-20 w-20 h-20 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center shadow-2xl transform transition-transform group-hover:scale-110">
                <Play className="size-10 fill-current" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/80 to-transparent flex flex-col gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-4 text-primary-foreground">
                  <Pause className="size-5 cursor-pointer" />
                  <RotateCcw className="size-5 cursor-pointer" />
                  <FastForward className="size-5 cursor-pointer" />
                  <div className="flex-1" />
                  <span className="text-sm font-medium">12:30 / 24:45</span>
                  <Settings className="size-5 cursor-pointer" />
                  <Maximize className="size-5 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div className="bg-card border-t border-border p-4 flex items-center justify-between px-8">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-lg text-sm font-semibold transition-colors">
                <FileEdit className="size-4" /> Take Notes
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
                <Download className="size-4" /> Resources
              </button>
            </div>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground">Previous</button>
              <button className="px-6 py-2 bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-bold rounded-lg flex items-center gap-2 shadow-lg shadow-primary/20 transition-all active:scale-95">
                Next Lesson
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Course Content Sidebar */}
        <aside className="w-96 border-l border-border bg-card flex flex-col overflow-hidden hidden lg:flex">
          <div className="p-6 border-b border-border">
            <h3 className="font-bold text-lg">Course Content</h3>
            <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider font-semibold">12 of 28 lessons completed</p>
          </div>
          <div className="flex-1 overflow-y-auto hide-scrollbar">
            {modules.map((mod, idx) => (
              <details key={idx} open={openModules[idx]} className="group">
                <summary
                  onClick={(e) => { e.preventDefault(); toggleModule(idx); }}
                  className="flex items-center justify-between p-4 cursor-pointer hover:bg-secondary/50 list-none border-b border-border"
                >
                  <div className="flex items-center gap-3">
                    <ChevronDown className={`size-4 text-muted-foreground transition-transform ${openModules[idx] ? "rotate-180" : ""}`} />
                    <span className="font-semibold text-sm">{mod.title}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{mod.count} lessons</span>
                </summary>
                {openModules[idx] && mod.lessons.length > 0 && (
                  <div className="bg-secondary/30">
                    {mod.lessons.map((lesson, li) => (
                      <div
                        key={li}
                        className={`flex items-center justify-between px-6 py-4 cursor-pointer border-l-4 transition-colors ${
                          lesson.status === "playing"
                            ? "bg-accent border-l-primary"
                            : lesson.status === "completed"
                            ? "hover:bg-accent/50 border-l-transparent"
                            : "hover:bg-secondary border-l-transparent opacity-70"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          {lesson.status === "completed" ? (
                            <CheckCircle className="size-5 text-success" />
                          ) : lesson.status === "playing" ? (
                            <PlayCircle className="size-5 text-primary" />
                          ) : (
                            <Circle className="size-5 text-muted-foreground" />
                          )}
                          <div>
                            <p className={`text-sm ${lesson.status === "playing" ? "font-bold text-primary" : "font-medium"}`}>
                              {lesson.title}
                            </p>
                            <p className={`text-xs ${lesson.status === "playing" ? "text-primary/70" : "text-muted-foreground"}`}>
                              {lesson.type} • {lesson.duration}
                            </p>
                          </div>
                        </div>
                        {lesson.status === "playing" && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-primary text-primary-foreground uppercase">Playing</span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </details>
            ))}

            {/* Notes */}
            <div className="mt-4 p-6 border-t border-border bg-secondary/30">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-bold">Quick Notes</h4>
                <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Auto-saving...</span>
              </div>
              <textarea
                className="w-full h-32 p-3 text-sm rounded-lg border border-border bg-card focus:ring-1 focus:ring-primary focus:border-primary outline-none resize-none placeholder:text-muted-foreground"
                placeholder="Write a timestamped note (e.g. 05:22 - Interesting point about spacing...)"
              />
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
