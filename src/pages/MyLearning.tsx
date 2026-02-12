import { useState } from "react";
import { Link } from "react-router-dom";
import { MainLayout } from "@/components/MainLayout";
import { ChevronRight, Search, Play, BarChart3, Sparkles, BookOpen, HelpCircle, Video, Star } from "lucide-react";
import courseSecurity from "@/assets/course-security.jpg";
import courseReact from "@/assets/course-react.jpg";
import courseDatascience from "@/assets/course-datascience.jpg";

const tabs = ["In Progress", "Completed", "Wishlist"];

const enrolledCourses = [
  {
    title: "Advanced UI/UX Principles for Modern Apps",
    category: "UX Design",
    instructor: "Prof. Sarah Jenkins",
    progress: 65,
    lastAccessed: "2 hours ago",
    image: courseSecurity,
  },
  {
    title: "Full-Stack Web Development with React & Node",
    category: "Development",
    instructor: "Marc Andreessen",
    progress: 12,
    lastAccessed: "Yesterday",
    image: courseReact,
  },
  {
    title: "Introduction to Data Science & Analytics",
    category: "Data Science",
    instructor: "Dr. Helen Wu",
    progress: 48,
    lastAccessed: "3 days ago",
    image: courseDatascience,
  },
];

const upNextItems = [
  { label: "MODULE 4", title: "Typography & Visual Hierarchy", time: "15 mins • Reading", icon: BookOpen },
  { label: "ASSESSMENT", title: "API Integration Basics", time: "10 mins • Quiz", icon: HelpCircle },
  { label: "MODULE 2", title: "Data Cleaning with Python", time: "45 mins • Video", icon: Video },
];

export default function MyLearning() {
  const [activeTab, setActiveTab] = useState("In Progress");
  const [search, setSearch] = useState("");

  return (
    <MainLayout>
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="p-8 bg-card border-b border-border">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold">My Learning</h1>
              <p className="text-muted-foreground mt-1">Pick up where you left off or explore something new.</p>
            </div>
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search my courses..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-secondary focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              />
            </div>
          </div>
          <div className="flex items-center gap-8 mt-8 border-b border-border">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 px-2 text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? "text-primary border-b-2 border-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </header>

        {/* Content */}
        <div className="p-8 flex flex-col xl:flex-row gap-8">
          {/* Course List */}
          <div className="flex-1 space-y-6">
            {enrolledCourses
              .filter((c) => c.title.toLowerCase().includes(search.toLowerCase()))
              .map((course) => (
                <div
                  key={course.title}
                  className="bg-card rounded-xl p-4 shadow-sm border border-border flex flex-col md:flex-row gap-6 items-center group hover:shadow-md transition-shadow"
                >
                  <div className="relative w-full md:w-48 h-32 rounded-lg overflow-hidden shrink-0">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-foreground/20 group-hover:bg-transparent transition-all" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1 gap-2">
                      <h3 className="font-bold text-lg truncate">{course.title}</h3>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded shrink-0">
                        {course.category}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">Instructor: {course.instructor}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-semibold">
                        <span className="text-muted-foreground">{course.progress}% Complete</span>
                        <span className="text-muted-foreground/60 italic">Last accessed: {course.lastAccessed}</span>
                      </div>
                      <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                        <div className="bg-primary h-full rounded-full transition-all" style={{ width: `${course.progress}%` }} />
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0 w-full md:w-auto">
                    <Link
                      to="/learn"
                      className="w-full md:w-auto px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                    >
                      <Play className="size-4" />
                      Continue
                    </Link>
                  </div>
                </div>
              ))}
          </div>

          {/* Right Sidebar */}
          <aside className="w-full xl:w-80 space-y-8">
            {/* Weekly Goal */}
            <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
                <BarChart3 className="size-5 text-primary" />
                Weekly Goal
              </h4>
              <div className="relative flex flex-col items-center">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="stroke-secondary fill-none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      strokeWidth="3"
                    />
                    <path
                      className="stroke-primary fill-none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      strokeDasharray="80, 100"
                      strokeLinecap="round"
                      strokeWidth="3"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold">4.2</span>
                    <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-widest">Hours</span>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-sm font-medium text-muted-foreground">80% of your weekly goal met!</p>
                  <p className="text-xs text-muted-foreground/60 mt-1">Goal: 5 hours • 0.8h remaining</p>
                </div>
                {/* <div className="w-full mt-6 grid grid-cols-5 gap-1">
                  {[10, 8, 12, 6, 2].map((h, i) => (
                    <div
                      key={i}
                      className="rounded-sm bg-primary"
                      style={{ height: `${h * 4}px`, opacity: h < 4 ? 0.15 : h < 8 ? 0.5 : 1 }}
                    />
                  ))}
                </div> */}
              </div>
            </div>

            {/* Up Next */}
            {/* <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Sparkles className="size-5 text-primary" />
                Up Next
              </h4>
              <div className="space-y-4">
                {upNextItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="p-3 rounded-lg border border-border hover:bg-secondary/50 cursor-pointer transition-colors group">
                      <div className="flex gap-3">
                        <div className="size-10 rounded bg-primary/10 text-primary flex items-center justify-center shrink-0">
                          <Icon className="size-5" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-primary mb-1">{item.label}</p>
                          <p className="text-sm font-semibold leading-tight group-hover:text-primary transition-colors">{item.title}</p>
                          <p className="text-[10px] text-muted-foreground mt-1">{item.time}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <button className="w-full mt-4 py-2 text-xs font-bold text-primary hover:underline">View Learning Path</button>
            </div> */}

            {/* Promo */}
            {/* <div className="rounded-xl p-6 bg-gradient-to-br from-primary to-primary/70 text-primary-foreground relative overflow-hidden">
              <div className="relative z-10">
                <h5 className="font-bold text-lg leading-tight">Upgrade to Premium</h5>
                <p className="text-primary-foreground/80 text-xs mt-2">Get access to professional certifications and 5,000+ expert courses.</p>
                <button className="mt-4 px-4 py-2 bg-card text-primary rounded-lg font-bold text-xs hover:bg-secondary transition-colors">
                  Explore Plans
                </button>
              </div>
              <Star className="absolute -bottom-4 -right-4 size-20 text-primary-foreground/10 rotate-12" />
            </div> */}
          </aside>
        </div>
      </div>
    </MainLayout>
  );
}