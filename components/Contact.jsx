
"use client";
import Section from "./Section";
import Card from "./Card";
import data from "../data/resume";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <Card>
        <div className="flex flex-wrap gap-3 items-center">
          <a href={`mailto:${data.contact.email}`} className="px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-600">Email</a>
          <a href={data.contact.linkedin} className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20">LinkedIn</a>
          <a href={data.contact.github} className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20">GitHub</a>
        </div>
      </Card>
    </Section>
  );
}
