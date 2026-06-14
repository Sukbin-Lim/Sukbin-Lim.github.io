import type { Profile } from './types';

export const profile: Profile = {
  name: 'Sukbin Lim',
  brand: 'Sukbin Lim ✦',
  tagline: 'AI Accelerator / NPU Chip Designer',
  h1Html: 'Silicon<br>for <em>efficient</em> AI.',
  intro: 'I design and tape out the chips behind efficient AI.',
  affiliations: [
    { label: 'KAIST · CASTLab', fill: true },
    { label: 'HyperAccel' },
  ],
  statement: {
    kicker: 'Inference · Perception · Training',
    lead: 'From architecture to silicon.',
    body:
      'I build accelerators for LLM inference, 3D perception, and on-device training — from architecture down to working silicon.',
  },
  credibility: [
    { b: '4', text: 'fabricated chips · Samsung 4 / 28 nm' },
    { b: '2', text: 'led — first / co-first author' },
    { b: '10', text: 'papers (3× IEEE JSSC) · 4 patents' },
    { b: '★', text: 'IEEE Micro Best Paper · HumanTech Gold' },
  ],
  nav: [
    { label: 'Projects', href: '/projects' },
    { label: 'Publications', href: '/publications' },
    { label: 'CV', href: '/cv', cta: true },
  ],
  email: 'sukbin.lim.4502@gmail.com', // confirmed canonical (2026-06)
  scholar: 'https://scholar.google.com/citations?user=S1YP0lwAAAAJ',
  linkedin: 'https://www.linkedin.com/in/sukbin-lim',
};
