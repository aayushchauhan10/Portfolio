
"use client";
import Section from "./Section";
import Card from "./Card";
import data from "../data/resume";

export default function About() {
  return (
    <Section id="about" title="About">
      <Card><p className="text-white/80">{data.summary}</p></Card>
    </Section>
  );
}
