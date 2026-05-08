import { Code2, Video, Image, Palette, Brain, Binary, Briefcase, Megaphone, type LucideIcon } from "lucide-react";

export type Skill = {
  id: string;
  name: string;
  Icon: LucideIcon;
  color: string;
  desc: string;
  tools: string[];
  roadmap: string[];
  progress: number;
  level: "Beginner" | "Intermediate" | "Advanced" | "Pro";
};

export const skills: Skill[] = [
  { id: "web", name: "Web Development", Icon: Code2, color: "var(--neon)", desc: "HTML, CSS, JS, React, full-stack apps", tools: ["VS Code","React","Node","Tailwind"], roadmap: ["HTML & CSS","JavaScript","React","Backend & DB","Deployment"], progress: 72, level: "Advanced" },
  { id: "video", name: "Video Editing", Icon: Video, color: "var(--neon-2)", desc: "Premiere Pro, DaVinci, CapCut workflows", tools: ["Premiere Pro","DaVinci","CapCut"], roadmap: ["Cuts & Transitions","Color Grading","Audio Mixing","Motion Graphics","Storytelling"], progress: 45, level: "Intermediate" },
  { id: "photo", name: "Photo Editing", Icon: Image, color: "var(--neon-3)", desc: "Photoshop, Lightroom retouching mastery", tools: ["Photoshop","Lightroom"], roadmap: ["Basics","Retouching","Color Theory","Composites","Pro Workflow"], progress: 30, level: "Beginner" },
  { id: "design", name: "Graphic Design", Icon: Palette, color: "var(--neon-2)", desc: "Figma, branding, typography & posters", tools: ["Figma","Illustrator","Canva"], roadmap: ["Design Principles","Typography","Color","Branding","Portfolio"], progress: 58, level: "Intermediate" },
  { id: "ai", name: "AI Tools", Icon: Brain, color: "var(--neon)", desc: "Prompt engineering, ChatGPT, Midjourney", tools: ["ChatGPT","Claude","Midjourney"], roadmap: ["Prompting 101","Workflows","Automation","Agents","Build with AI"], progress: 80, level: "Advanced" },
  { id: "dsa", name: "DSA & Programming", Icon: Binary, color: "var(--neon-3)", desc: "Algorithms, problem solving, interviews", tools: ["LeetCode","C++","Python"], roadmap: ["Arrays","Strings","Trees","Graphs","DP"], progress: 40, level: "Intermediate" },
  { id: "free", name: "Freelancing", Icon: Briefcase, color: "var(--neon-2)", desc: "Upwork, Fiverr, client acquisition", tools: ["Upwork","Fiverr","LinkedIn"], roadmap: ["Pick Niche","Portfolio","Outreach","Pricing","Scale"], progress: 22, level: "Beginner" },
  { id: "content", name: "Content Creation", Icon: Megaphone, color: "var(--neon)", desc: "YouTube, Instagram, scriptwriting & SEO", tools: ["YouTube Studio","Notion","CapCut"], roadmap: ["Niche","Scripting","Hooks","Editing","Growth"], progress: 35, level: "Beginner" },
];
