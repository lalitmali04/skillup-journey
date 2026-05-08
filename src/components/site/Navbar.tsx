import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 py-4">
        <nav className="glass-strong rounded-full px-5 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="h-8 w-8 rounded-lg grid place-items-center" style={{ background: "var(--gradient-hero)" }}>
              <Sparkles className="h-4 w-4 text-background" />
            </div>
            <span className="font-bold text-lg tracking-tight">SkillUp</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#skills" className="hover:text-foreground transition">Skills</a>
            <a href="#features" className="hover:text-foreground transition">Features</a>
            <a href="#analytics" className="hover:text-foreground transition">Analytics</a>
            <a href="#contact" className="hover:text-foreground transition">Contact</a>
          </div>
          <Link
            to="/dashboard"
            className="rounded-full px-5 py-2 text-sm font-semibold text-background transition hover:scale-105"
            style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-glow)" }}
          >
            Launch App
          </Link>
        </nav>
      </div>
    </header>
  );
}
