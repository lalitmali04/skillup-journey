import { Code2, Video, Image, Palette, Brain, Binary, Briefcase, Megaphone } from "lucide-react";

const skills = [
  { Icon: Code2, label: "Web Dev", c: "var(--neon)" },
  { Icon: Video, label: "Video", c: "var(--neon-2)" },
  { Icon: Image, label: "Photo", c: "var(--neon-3)" },
  { Icon: Palette, label: "Design", c: "var(--neon-2)" },
  { Icon: Brain, label: "AI Tools", c: "var(--neon)" },
  { Icon: Binary, label: "DSA", c: "var(--neon-3)" },
  { Icon: Briefcase, label: "Freelance", c: "var(--neon-2)" },
  { Icon: Megaphone, label: "Content", c: "var(--neon)" },
];

export function SkillsOrbit() {
  return (
    <div className="relative mx-auto h-[420px] w-[420px] max-w-full">
      <div className="absolute inset-0 rounded-full border border-white/10 animate-spin-slow" />
      <div className="absolute inset-8 rounded-full border border-white/10 animate-spin-slow [animation-direction:reverse]" />
      <div className="absolute inset-16 rounded-full border border-white/10 animate-spin-slow" />
      <div className="absolute inset-0 grid place-items-center">
        <div className="glass-strong h-32 w-32 rounded-full grid place-items-center animate-glow-pulse">
          <div className="text-center">
            <div className="text-2xl font-black text-gradient">SkillUp</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">core</div>
          </div>
        </div>
      </div>
      {skills.map((s, idx) => {
        const angle = (idx / skills.length) * Math.PI * 2;
        const r = 180;
        const x = Math.cos(angle) * r;
        const y = Math.sin(angle) * r;
        return (
          <div
            key={s.label}
            className="absolute left-1/2 top-1/2 animate-float"
            style={{ transform: `translate(${x}px, ${y}px) translate(-50%,-50%)`, animationDelay: `${idx * 0.3}s` }}
          >
            <div className="glass rounded-2xl p-3 flex flex-col items-center gap-1 w-20 hover:scale-110 transition-transform cursor-pointer">
              <s.Icon className="h-6 w-6" style={{ color: s.c }} />
              <span className="text-[10px] font-medium">{s.label}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
