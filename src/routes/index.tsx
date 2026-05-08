import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Flame, Trophy, Zap, Sparkles, BookmarkPlus, Bot, CalendarCheck, Users, BarChart3 } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { Navbar } from "@/components/site/Navbar";
import { ParticleBackground } from "@/components/site/ParticleBackground";
import { Typewriter } from "@/components/site/Typewriter";
import { SkillsOrbit } from "@/components/site/SkillsOrbit";
import { skills } from "@/lib/skills-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SkillUp — Learn high-income skills as a student" },
      { name: "description", content: "A futuristic learning platform for college students. Roadmaps, streaks, cohorts and analytics for web dev, design, AI, DSA and more." },
      { property: "og:title", content: "SkillUp Student Platform" },
      { property: "og:description", content: "Learn from scratch, stay consistent, level up." },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <ParticleBackground />
      <Navbar />

      {/* HERO */}
      <section className="relative pt-40 pb-24 px-4">
        <img src={heroBg} alt="" width={1920} height={1088} className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 -z-10 bg-grid opacity-30" />
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-glow)" }} />

        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs">
              <Sparkles className="h-3 w-3" style={{ color: "var(--neon)" }} />
              <span className="text-muted-foreground">Built for college students who want more</span>
            </div>
            <h1 className="mt-6 text-5xl md:text-7xl font-black leading-[0.95] tracking-tight">
              Level up into a<br/>
              <span className="text-gradient neon-text">
                <Typewriter words={["Web Developer.", "Video Editor.", "AI Engineer.", "Designer.", "Freelancer."]} />
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              SkillUp is a futuristic learning OS for students. Curated YouTube roadmaps,
              daily streaks, cohorts and beautiful analytics — everything you need to grow.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/dashboard"
                className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold text-background transition hover:scale-105"
                style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-neon)" }}
              >
                Open Dashboard <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
              </Link>
              <a href="#skills" className="inline-flex items-center gap-2 glass rounded-full px-7 py-3.5 font-semibold hover:bg-white/5">
                Explore Skills
              </a>
            </div>
            <div className="mt-10 flex gap-8 text-sm">
              <Stat n="8" label="Skill tracks" />
              <Stat n="120+" label="Curated playlists" />
              <Stat n="42k" label="Students leveling up" />
            </div>
          </div>
          <div className="hidden lg:block">
            <SkillsOrbit />
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="relative px-4 py-24">
        <Header eyebrow="Skill Tracks" title="Eight roadmaps to your next level" />
        <div className="mx-auto mt-14 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s, i) => (
            <div
              key={s.id}
              className="group glass rounded-2xl p-6 hover:-translate-y-2 transition animate-fade-up"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="h-12 w-12 rounded-xl grid place-items-center mb-4 group-hover:animate-glow-pulse"
                style={{ background: `linear-gradient(135deg, ${s.color}, transparent)`, border: `1px solid ${s.color}` }}>
                <s.Icon className="h-6 w-6" style={{ color: s.color }} />
              </div>
              <h3 className="font-bold text-lg">{s.name}</h3>
              <p className="text-sm text-muted-foreground mt-1.5">{s.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {s.tools.slice(0,3).map(t => (
                  <span key={t} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-white/5 border border-white/10">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="relative px-4 py-24">
        <Header eyebrow="Why SkillUp" title="A learning OS that keeps you consistent" />
        <div className="mx-auto mt-14 grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          <Feature Icon={Flame} title="Daily Streaks" desc="Build a habit. Don't break the chain. Earn XP for showing up." color="var(--neon-2)" />
          <Feature Icon={Trophy} title="Levels & Badges" desc="Beginner → Pro. Unlock achievements as you complete milestones." color="var(--neon-3)" />
          <Feature Icon={Users} title="Cohorts & Leaderboard" desc="Join batches, compete with friends, learn together." color="var(--neon)" />
          <Feature Icon={BarChart3} title="Beautiful Analytics" desc="Pie charts, growth bars, hours tracked, productivity insights." color="var(--neon-2)" />
          <Feature Icon={Bot} title="AI Recommendations" desc="Smart next-step suggestions based on what you're learning." color="var(--neon-3)" />
          <Feature Icon={CalendarCheck} title="Curated YouTube" desc="The best creators, organized into beginner→advanced playlists." color="var(--neon)" />
          <Feature Icon={BookmarkPlus} title="Bookmark & Notes" desc="Save videos, write notes, build your second brain." color="var(--neon-2)" />
          <Feature Icon={Zap} title="Daily Challenges" desc="Bite-sized tasks that compound into real, shippable skill." color="var(--neon-3)" />
          <Feature Icon={Sparkles} title="Dark Glow UI" desc="A futuristic interface that makes learning feel like a game." color="var(--neon)" />
        </div>
      </section>

      {/* ANALYTICS PREVIEW */}
      <section id="analytics" className="relative px-4 py-24">
        <Header eyebrow="Your growth, visualized" title="Analytics that make progress feel real" />
        <div className="mx-auto mt-14 max-w-5xl">
          <div className="glass-strong rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full opacity-30 blur-3xl" style={{ background: "var(--gradient-hero)" }} />
            <div className="grid md:grid-cols-3 gap-6 relative">
              <Tile big="73%" label="Course completion" />
              <Tile big="48h" label="Hours this month" />
              <Tile big="🔥 24" label="Day streak" />
            </div>
            <div className="mt-8 h-2 w-full rounded-full bg-white/5 overflow-hidden">
              <div className="h-full rounded-full" style={{ width: "73%", background: "var(--gradient-hero)" }} />
            </div>
            <div className="mt-8 text-center">
              <Link to="/dashboard" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold glass hover:bg-white/5">
                See full dashboard <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative px-4 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">
            Your future self is <span className="text-gradient">already proud.</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">Start today. Compound forever.</p>
          <Link to="/dashboard" className="mt-8 inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-background"
            style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-neon)" }}>
            Start Learning Free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <footer className="mt-24 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} SkillUp Student Platform. Built to help students rise.
        </footer>
      </section>
    </div>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="text-2xl font-bold text-gradient">{n}</div>
      <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}

function Header({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{eyebrow}</div>
      <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tight">{title}</h2>
    </div>
  );
}

function Feature({ Icon, title, desc, color }: { Icon: any; title: string; desc: string; color: string }) {
  return (
    <div className="glass rounded-2xl p-6 hover:bg-white/5 transition group">
      <div className="h-11 w-11 rounded-xl grid place-items-center mb-4 transition group-hover:scale-110"
        style={{ background: `${color}20`, border: `1px solid ${color}` }}>
        <Icon className="h-5 w-5" style={{ color }} />
      </div>
      <h3 className="font-bold">{title}</h3>
      <p className="text-sm text-muted-foreground mt-1.5">{desc}</p>
    </div>
  );
}

function Tile({ big, label }: { big: string; label: string }) {
  return (
    <div className="glass rounded-2xl p-6 text-center">
      <div className="text-4xl font-black text-gradient">{big}</div>
      <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}
