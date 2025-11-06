
"use client";
import Section from "./Section";
import Card from "./Card";
import data from "../data/resume";

export default function Certs() {
  return (
    <Section id="certifications" title="Certifications">
      <div className="grid gap-4 md:gap-6">
        {data.certifications.map((c, i) => (
          <Card key={i}>
            <div className="flex items-center justify-between">
              <div className="font-medium">{c.name} — <span className="text-white/80">{c.org}</span></div>
              <div className="text-sm text-white/60">{c.year}</div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
