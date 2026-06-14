import type { Experience, Education, Patent, Award } from './types';

// Career / education / patents / awards / service — transcribed from the prior CV (_config.yml),
// kept verbatim per the owner's instruction. Patents cross-link to projects.ts by id.

// Industry experience — expected to grow; each role can carry `highlights` bullets.
export const experience: Experience[] = [
  {
    org: 'HyperAccel',
    role: 'Hardware Engineer',
    period: '2023 – Present',
    highlights: [
      'Designed Adelia, a 4 nm LLM inference accelerator (co-first author, IEEE JSSC 2026) that outperforms an NVIDIA H100 system in throughput and memory-bandwidth efficiency.',
      'Built a Streamlined Dataflow with a Systolic Parameter Path and Dual-Mode Parallelism for end-to-end LLM serving on models up to LLaMA-30B.',
    ],
  },
];

export const education: Education[] = [
  {
    org: 'KAIST',
    degree: 'Ph.D., Electrical Engineering',
    period: 'Sep 2023 – Sep 2027 (expected)',
    focus: 'AI accelerators for efficient LLM serving',
    lab: 'CAST Hardware Acceleration Lab',
    advisor: 'Prof. Joo-Young Kim',
  },
  {
    org: 'KAIST',
    degree: 'M.S., Electrical Engineering',
    period: 'Sep 2021 – Aug 2023',
    thesis: 'Large-scale point-cloud DNN accelerator with virtual pillar and ROI-based skipping',
    lab: 'CAST Hardware Acceleration Lab',
    advisor: 'Prof. Joo-Young Kim',
  },
  {
    org: 'KAIST',
    degree: 'B.S., Electrical Engineering',
    period: 'Mar 2017 – Aug 2021',
  },
];

export const patents: Patent[] = [
  {
    id: 'KR102710971B1',
    title: 'Joint-DNN Training Processor with Speculative Quantization and Triple Heterogeneity',
    project: 'jnpu',
  },
  {
    id: 'KR102689248B1',
    title: 'Large-Scale Sparse Point-Cloud Neural Network Accelerator with Virtual Voxel and ROI-based Skipping',
    project: 'hawkeye',
  },
  {
    id: 'KR102616119B9',
    title: 'Hardware Architecture for Accelerating Torus Fully Homomorphic Encryption (TFHE) with Streaming Core and Folded Fully-Pipelined FFT',
  },
  {
    id: 'KR102576762B1',
    title: 'A Processing-In-Memory Accelerator for End-to-End On-Device Training',
    project: 'tpim',
  },
];

export const awards: Award[] = [
  { title: 'Best Paper Award, IEEE Micro', year: 2024, for: 'LPU' },
  { title: 'Gold Prize in Circuit Design, 29th Samsung HumanTech Paper Award', for: 'JNPU' },
];

export const service: string[] = [
  'Poster, IDEC Congress CDC, 2024',
  'Journal Reviewer, IEEE Transactions on Circuits and Systems I (TCAS-I), 2023',
];
