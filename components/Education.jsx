
"use client";
import Section from "./Section";
import Card from "./Card";
import data from "../data/resume";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
        {data.education.map((e, i) => (
          <Card key={i}>
            <div className="text-lg font-medium">{e.degree}</div>
            <div className="text-white/80">{e.school}</div>
            <div className="text-sm text-white/60 mt-1">{e.period}</div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
