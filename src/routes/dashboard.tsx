import { createFileRoute, Link } from "@tanstack/react-router";
import { Flame, Trophy, Clock, Target, ArrowLeft, Award, Play, BookmarkPlus, Bot } from "lucide-react";
import { ParticleBackground } from "@/components/site/ParticleBackground";
import { skills } from "@/lib/skills-data";
import {
  PieChart, Pie, Cell, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid,
  AreaChart, Area,
} from "recharts";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — SkillUp" }, { name: "description", content: "Your personalized learning dashboard." }] }),
  component: Dashboard,
});

const weekly = [
  { d: "Mon", h: 1.2 }, { d: "Tue", h: 2.1 }, { d: "Wed", h: 1.6 },
  { d: "Thu", h: 3.0 }, { d: "Fri", h: 2.4 }, { d: "Sat", h: 4.1 }, { d: "Sun", h: 3.2 },
];
const monthly = Array.from({ length: 12 }, (_, i) => ({ m: ["J","F","M","A","M","J","J","A","S","O","N","D"][i], v: Math.round(20 + Math.random() * 80) }));

function Dashboard() {
  const totalProgress = Math.round(skills.reduce((a, s) => a + s.progress, 0) / skills.length);
  const pieData = skills.map(s => ({ name: s.name, value: s.progress, color: s.color }));

  return (
    <div className="relative min-h-screen pb-20">
      <ParticleBackground />
      <div className="absolute inset-0 -z-10 bg-grid opacity-20" />

      <div className="mx-auto max-w-7xl px-4 pt-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> Back home
          </Link>
          <div className="glass rounded-full px-4 py-2 text-xs flex items-center gap-2">
            <span className="h-2 w-2 rounded-full" style={{ background: "var(--neon-3)" }} /> Online · Level 7
          </div>
        </div>

        {/* HERO */}
        <div className="mt-8 grid lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 glass-strong rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full opacity-30 blur-3xl" style={{ background: "var(--gradient-hero)" }} />
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Welcome back</div>
            <h1 className="mt-2 text-4xl md:text-5xl font-black tracking-tight">
              Hey <span className="text-gradient">Student</span> 👋
            </h1>
            <p className="mt-3 text-muted-foreground max-w-md">You're {totalProgress}% through your skill stack. Keep the streak alive.</p>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <Kpi Icon={Flame} label="Streak" value="24d" color="var(--neon-2)" />
              <Kpi Icon={Trophy} label="Level" value="7" color="var(--neon-3)" />
              <Kpi Icon={Clock} label="This week" value="17.6h" color="var(--neon)" />
              <Kpi Icon={Target} label="Avg Progress" value={`${totalProgress}%`} color="var(--neon-2)" />
            </div>
          </div>

          {/* Streak calendar */}
          <div className="glass-strong rounded-3xl p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-bold">Consistency</h3>
              <span className="text-xs text-muted-foreground">Last 35 days</span>
            </div>
            <div className="mt-5 grid grid-cols-7 gap-1.5">
              {Array.from({ length: 35 }).map((_, i) => {
                const intensity = Math.random();
                const bg = intensity > 0.7 ? "var(--neon)" : intensity > 0.45 ? "var(--neon-3)" : intensity > 0.2 ? "oklch(0.4 0.05 280)" : "oklch(0.25 0.03 280)";
                return <div key={i} className="aspect-square rounded-md" style={{ background: bg, opacity: intensity > 0.2 ? 1 : 0.5 }} />;
              })}
            </div>
            <div className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-wider text-muted-foreground">
              <span>Less</span>
              <div className="flex gap-1">
                <span className="h-3 w-3 rounded-sm" style={{ background: "oklch(0.25 0.03 280)" }} />
                <span className="h-3 w-3 rounded-sm" style={{ background: "oklch(0.4 0.05 280)" }} />
                <span className="h-3 w-3 rounded-sm" style={{ background: "var(--neon-3)" }} />
                <span className="h-3 w-3 rounded-sm" style={{ background: "var(--neon)" }} />
              </div>
              <span>More</span>
            </div>
          </div>
        </div>

        {/* CHARTS */}
        <div className="mt-5 grid lg:grid-cols-3 gap-5">
          <div className="glass rounded-3xl p-6">
            <h3 className="font-bold">Skill Distribution</h3>
            <div className="h-64 mt-2">
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={pieData} dataKey="value" innerRadius={50} outerRadius={85} stroke="none">
                    {pieData.map((d, i) => <Cell key={i} fill={d.color} />)}
                  </Pie>
                  <Tooltip contentStyle={{ background: "oklch(0.18 0.04 270)", border: "1px solid oklch(1 0 0 / 0.1)", borderRadius: 12 }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="glass rounded-3xl p-6 lg:col-span-2">
            <h3 className="font-bold">Weekly Learning Hours</h3>
            <div className="h-64 mt-2">
              <ResponsiveContainer>
                <BarChart data={weekly}>
                  <defs>
                    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="oklch(0.78 0.18 200)" />
                      <stop offset="100%" stopColor="oklch(0.7 0.22 320)" />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="oklch(1 0 0 / 0.06)" vertical={false} />
                  <XAxis dataKey="d" stroke="oklch(0.7 0.03 270)" fontSize={12} />
                  <YAxis stroke="oklch(0.7 0.03 270)" fontSize={12} />
                  <Tooltip contentStyle={{ background: "oklch(0.18 0.04 270)", border: "1px solid oklch(1 0 0 / 0.1)", borderRadius: 12 }} />
                  <Bar dataKey="h" fill="url(#bg)" radius={[8,8,0,0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* GROWTH AREA */}
        <div className="mt-5 glass rounded-3xl p-6">
          <h3 className="font-bold">Monthly Growth</h3>
          <div className="h-56 mt-2">
            <ResponsiveContainer>
              <AreaChart data={monthly}>
                <defs>
                  <linearGradient id="ag" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.7 0.22 320)" stopOpacity={0.6} />
                    <stop offset="100%" stopColor="oklch(0.7 0.22 320)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="oklch(1 0 0 / 0.06)" vertical={false} />
                <XAxis dataKey="m" stroke="oklch(0.7 0.03 270)" fontSize={12} />
                <YAxis stroke="oklch(0.7 0.03 270)" fontSize={12} />
                <Tooltip contentStyle={{ background: "oklch(0.18 0.04 270)", border: "1px solid oklch(1 0 0 / 0.1)", borderRadius: 12 }} />
                <Area type="monotone" dataKey="v" stroke="oklch(0.78 0.18 200)" strokeWidth={2} fill="url(#ag)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* SKILLS PROGRESS */}
        <div className="mt-10 flex items-end justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Your tracks</div>
            <h2 className="mt-1 text-3xl font-black">Skill Progression</h2>
          </div>
          <button className="hidden md:inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs">
            <Bot className="h-4 w-4" style={{ color: "var(--neon)" }} /> AI Recommendations
          </button>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {skills.map(s => (
            <div key={s.id} className="glass rounded-2xl p-5 hover:-translate-y-1 transition">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl grid place-items-center"
                  style={{ background: `${s.color}20`, border: `1px solid ${s.color}` }}>
                  <s.Icon className="h-6 w-6" style={{ color: s.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-bold truncate">{s.name}</h3>
                    <span className="text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider"
                      style={{ background: `${s.color}20`, color: s.color, border: `1px solid ${s.color}` }}>
                      {s.level}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{s.desc}</p>
                  <div className="mt-3 h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${s.progress}%`, background: `linear-gradient(90deg, ${s.color}, var(--neon-2))` }} />
                  </div>
                  <div className="mt-2 flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">{s.progress}% complete</span>
                    <button className="inline-flex items-center gap-1 font-medium hover:text-foreground" style={{ color: s.color }}>
                      <Play className="h-3 w-3" /> Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ACHIEVEMENTS + COHORT */}
        <div className="mt-10 grid lg:grid-cols-3 gap-5">
          <div className="glass-strong rounded-3xl p-6 lg:col-span-2">
            <h3 className="font-bold flex items-center gap-2"><Award className="h-4 w-4" style={{ color: "var(--neon-3)" }} /> Achievements</h3>
            <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { t: "First Lesson", c: "var(--neon)" },
                { t: "7 Day Streak", c: "var(--neon-2)" },
                { t: "Level 5", c: "var(--neon-3)" },
                { t: "100 XP", c: "var(--neon)" },
                { t: "Cohort Joined", c: "var(--neon-2)" },
                { t: "Top 10", c: "var(--neon-3)" },
                { t: "30 Day Streak", c: "var(--neon)" },
                { t: "Skill Mastered", c: "var(--neon-2)" },
              ].map((b, i) => (
                <div key={i} className="rounded-xl p-3 text-center glass hover:scale-105 transition">
                  <div className="mx-auto h-10 w-10 rounded-full grid place-items-center mb-2"
                    style={{ background: `${b.c}20`, border: `1px solid ${b.c}` }}>
                    <Trophy className="h-4 w-4" style={{ color: b.c }} />
                  </div>
                  <div className="text-[11px] font-medium">{b.t}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-strong rounded-3xl p-6">
            <h3 className="font-bold">Cohort Leaderboard</h3>
            <p className="text-xs text-muted-foreground mt-1">Batch · Frontend Sprint #12</p>
            <div className="mt-5 space-y-3">
              {[
                { n: "Aanya", x: 4820 },
                { n: "You", x: 4210 },
                { n: "Rohan", x: 3980 },
                { n: "Mei", x: 3120 },
                { n: "Karim", x: 2890 },
              ].map((u, i) => (
                <div key={u.n} className={`flex items-center justify-between rounded-xl p-3 ${u.n === "You" ? "border" : ""}`}
                  style={u.n === "You" ? { borderColor: "var(--neon)", background: "oklch(0.78 0.18 200 / 0.08)" } : undefined}>
                  <div className="flex items-center gap-3">
                    <span className="text-xs w-6 text-muted-foreground">#{i+1}</span>
                    <span className="font-medium text-sm">{u.n}</span>
                  </div>
                  <span className="text-xs font-mono text-gradient">{u.x.toLocaleString()} XP</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* QUICK ACTIONS */}
        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          <Quick Icon={BookmarkPlus} title="Bookmarked Videos" sub="12 saved · pick up where you left" />
          <Quick Icon={Target} title="Daily Challenge" sub="Build a landing page in 60 min" />
          <Quick Icon={Bot} title="AI Mentor" sub="Ask anything about your roadmap" />
        </div>
      </div>
    </div>
  );
}

function Kpi({ Icon, label, value, color }: { Icon: any; label: string; value: string; color: string }) {
  return (
    <div className="glass rounded-2xl p-4">
      <Icon className="h-4 w-4" style={{ color }} />
      <div className="mt-2 text-2xl font-black">{value}</div>
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}

function Quick({ Icon, title, sub }: { Icon: any; title: string; sub: string }) {
  return (
    <button className="glass rounded-2xl p-5 text-left hover:-translate-y-1 transition flex items-center gap-4">
      <div className="h-11 w-11 rounded-xl grid place-items-center" style={{ background: "var(--gradient-hero)" }}>
        <Icon className="h-5 w-5 text-background" />
      </div>
      <div>
        <div className="font-bold text-sm">{title}</div>
        <div className="text-xs text-muted-foreground">{sub}</div>
      </div>
    </button>
  );
}
