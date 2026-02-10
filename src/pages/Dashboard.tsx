import { Link } from "react-router-dom";
import { MainLayout } from "@/components/MainLayout";
import {
  PlayCircle, Bookmark, Sparkles, Flame, Clock, Play, ChevronLeft, ChevronRight,
  Star, Heart, Trophy, BadgeCheck, Lock, Calendar
} from "lucide-react";
import courseReact from "@/assets/course-react.jpg";
import courseUiux from "@/assets/course-uiux.jpg";
import courseMarketing from "@/assets/course-marketing.jpg";
import courseBusiness from "@/assets/course-business.jpg";
import courseDatascience from "@/assets/course-datascience.jpg";

const enrolledCourses = [
  { title: "UI/UX Design Systems", author: "Sarah Jenkins", progress: 45, image: courseUiux },
  { title: "Data Structures & Algos", author: "Dr. Emily Chen", progress: 12, image: courseReact },
  { title: "Digital Marketing Essentials", author: "Mark Spencer", progress: 88, image: courseMarketing },
];

const recommended = [
  { title: "Full-Stack React & Next.js", hours: 18, lessons: 45, price: "$89.99", rating: 4.8, image: courseBusiness },
  { title: "Intro to Cloud Architecture", hours: 12, lessons: 30, price: "$124.00", rating: 4.2, image: courseDatascience },
];

export default function Dashboard() {
  return (
    <MainLayout>
      <main className="flex-1 p-6 md:p-10">
        <div className="max-w-[1200px] mx-auto">
          {/* Welcome */}
          <section className="mb-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Welcome back, Alex! 👋</h1>
                <p className="mt-2 text-muted-foreground text-lg">You've completed 4 lessons this week. Keep the momentum going!</p>
              </div>
              <div className="bg-card p-4 rounded-xl shadow-sm border border-border w-fit">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent rounded-lg">
                    <Flame className="size-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Day Streak</p>
                    <p className="text-xl font-bold">12 Days</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-10">
              {/* Continue Learning */}
              <section>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold flex items-center gap-2">
                    <PlayCircle className="size-5 text-primary" />
                    Continue Learning
                  </h2>
                  <span className="text-primary text-sm font-semibold hover:underline cursor-pointer">View Schedule</span>
                </div>
                <Link to="/learn" className="group relative overflow-hidden bg-card rounded-2xl shadow-md border border-border transition-all hover:shadow-xl block">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 aspect-video md:aspect-auto h-auto relative overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url(${courseReact})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent flex items-end p-4">
                        <span className="px-2 py-1 bg-primary-foreground/20 backdrop-blur-md rounded text-primary-foreground text-[10px] font-bold uppercase tracking-widest">In Progress</span>
                      </div>
                    </div>
                    <div className="p-6 md:w-2/3 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">Advanced Web Development: Mastery</h3>
                          <span className="text-xs font-medium bg-secondary px-2.5 py-1 rounded-full">Unit 4 of 12</span>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">Next up: Mastering CSS Grid & Flexbox Layouts</p>
                        <div className="space-y-2 mb-6">
                          <div className="flex justify-between text-sm">
                            <span className="font-medium">Course Progress</span>
                            <span className="text-primary font-bold">68%</span>
                          </div>
                          <div className="h-2.5 w-full bg-secondary rounded-full overflow-hidden">
                            <div className="h-full bg-primary rounded-full" style={{ width: "68%" }} />
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Clock className="size-3" /> Last viewed 2 hours ago
                        </div>
                        <span className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-bold shadow-lg shadow-primary/20">
                          <Play className="size-4 fill-current" /> Resume Lesson
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </section>

              {/* Enrolled Courses */}
              <section>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold flex items-center gap-2">
                    <Bookmark className="size-5 text-primary" /> Enrolled Courses
                  </h2>
                  <div className="flex gap-2">
                    <button className="p-1.5 rounded-full border border-border hover:bg-card transition-colors">
                      <ChevronLeft className="size-4" />
                    </button>
                    <button className="p-1.5 rounded-full border border-border hover:bg-card transition-colors">
                      <ChevronRight className="size-4" />
                    </button>
                  </div>
                </div>
                <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 -mx-1 px-1">
                  {enrolledCourses.map((c) => (
                    <div key={c.title} className="min-w-[280px] bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all">
                      <div className="h-32 bg-cover bg-center" style={{ backgroundImage: `url(${c.image})` }} />
                      <div className="p-4">
                        <h4 className="font-bold text-sm mb-1 line-clamp-1">{c.title}</h4>
                        <p className="text-xs text-muted-foreground mb-3">by {c.author}</p>
                        <div className="space-y-1">
                          <div className="flex justify-between text-[10px] font-bold">
                            <span>Progress</span>
                            <span>{c.progress}%</span>
                          </div>
                          <div className="h-1.5 w-full bg-secondary rounded-full">
                            <div className="h-full bg-primary rounded-full" style={{ width: `${c.progress}%` }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Recommended */}
              <section>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold flex items-center gap-2">
                    <Sparkles className="size-5 text-primary" /> Recommended for You
                  </h2>
                  <p className="text-xs text-muted-foreground italic">Based on your interest in Web Development</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {recommended.map((c) => (
                    <div key={c.title} className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all cursor-pointer">
                      <div className="relative h-44 bg-cover bg-center" style={{ backgroundImage: `url(${c.image})` }}>
                        <div className="absolute top-3 left-3">
                          <span className="flex items-center gap-1 px-2 py-1 bg-primary/90 text-primary-foreground text-[10px] font-bold rounded-md shadow-sm">
                            <Sparkles className="size-3" /> AI PICK
                          </span>
                        </div>
                        <div className="absolute top-3 right-3">
                          <button className="size-8 rounded-full bg-foreground/20 backdrop-blur-md text-primary-foreground hover:bg-card hover:text-destructive transition-all flex items-center justify-center">
                            <Heart className="size-4" />
                          </button>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex text-warning">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`size-3 ${i < Math.floor(c.rating) ? "fill-current" : ""}`} />
                            ))}
                          </div>
                          <span className="text-xs font-medium text-muted-foreground">({c.rating}/5)</span>
                        </div>
                        <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{c.title}</h4>
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex flex-col">
                            <span className="text-xs text-muted-foreground">{c.hours} hours • {c.lessons} Lessons</span>
                            <span className="font-bold text-primary">{c.price}</span>
                          </div>
                          <button className="bg-secondary hover:bg-primary hover:text-primary-foreground px-4 py-2 rounded-lg text-sm font-bold transition-all">
                            Quick Enroll
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Upcoming */}
              <div className="bg-card p-6 rounded-2xl shadow-sm border border-border">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold">Upcoming</h3>
                  <button className="text-primary text-xs font-bold uppercase tracking-wider">Settings</button>
                </div>
                <div className="space-y-5">
                  {[
                    { month: "Oct", day: "24", title: "Live Q&A Session", desc: "Web Dev Mastery • 2:00 PM" },
                    { month: "Oct", day: "26", title: "Project Deadline", desc: "UI/UX Basics • Midnight" },
                  ].map((e) => (
                    <div key={e.day} className="flex gap-4">
                      <div className="flex flex-col items-center justify-center size-12 bg-secondary rounded-lg">
                        <span className="text-[10px] uppercase font-bold text-muted-foreground">{e.month}</span>
                        <span className="text-lg font-bold">{e.day}</span>
                      </div>
                      <div>
                        <p className="text-sm font-bold">{e.title}</p>
                        <p className="text-xs text-muted-foreground">{e.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-6 py-3 border-2 border-dashed border-border rounded-xl text-xs font-bold text-muted-foreground hover:border-primary hover:text-primary transition-all">
                  + Add Custom Task
                </button>
              </div>

              {/* Achievements */}
              <div className="bg-card p-6 rounded-2xl shadow-sm border border-border">
                <h3 className="font-bold mb-4">Your Achievements</h3>
                <div className="grid grid-cols-3 gap-3">
                  <div className="flex flex-col items-center gap-1 group">
                    <div className="size-14 bg-warning/20 rounded-full flex items-center justify-center text-warning group-hover:scale-110 transition-transform">
                      <Trophy className="size-6" />
                    </div>
                    <span className="text-[10px] text-center font-medium">Fast Learner</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 group">
                    <div className="size-14 bg-accent rounded-full flex items-center justify-center text-accent-foreground group-hover:scale-110 transition-transform">
                      <BadgeCheck className="size-6" />
                    </div>
                    <span className="text-[10px] text-center font-medium">Certified</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 group">
                    <div className="size-14 bg-secondary rounded-full flex items-center justify-center text-muted-foreground">
                      <Lock className="size-6" />
                    </div>
                    <span className="text-[10px] text-center font-medium text-muted-foreground">Locked</span>
                  </div>
                </div>
              </div>

              {/* Study Groups */}
              <div className="bg-card p-6 rounded-2xl shadow-sm border border-border">
                <h3 className="font-bold mb-4">Study Groups</h3>
                <div className="space-y-4">
                  {[
                    { name: "#ReactMasters", online: 12, color: "bg-success text-success-foreground" },
                    { name: "#UXDesignDaily", online: 5, color: "bg-secondary text-muted-foreground" },
                  ].map((g) => (
                    <div key={g.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex -space-x-2">
                          <div className="size-6 rounded-full border-2 border-card bg-primary/30" />
                          <div className="size-6 rounded-full border-2 border-card bg-accent" />
                        </div>
                        <span className="text-xs font-medium">{g.name}</span>
                      </div>
                      <span className={`text-[10px] ${g.color} px-2 py-0.5 rounded-full font-bold`}>{g.online} Online</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </MainLayout>
  );
}
