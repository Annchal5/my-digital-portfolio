"use client";
import dynamic from "next/dynamic";
const SkillsHighlightSection = dynamic(() => import("./SkillsHighlightSection"), { ssr: false });
export default function SkillsHighlightSectionClientWrapper() {
  return <SkillsHighlightSection />;
}