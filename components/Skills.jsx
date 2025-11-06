
"use client";
import Section from "./Section";
import data from "../data/resume";
import Card from "./Card";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <Card>
        <div className="flex flex-wrap gap-2">
          {data.skills.map((s, i) => (<span key={i} className="px-3 py-1 rounded-lg bg-white/10 text-sm">{s}</span>))}
        </div>
      </Card>
    </Section>
  );
}
