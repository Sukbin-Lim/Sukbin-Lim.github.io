import type { Publication } from './types';

// Author order + co-first markers are transcribed verbatim from each IEEE paper and
// adversarially re-verified (high confidence). See papers/ (local only) and arch.md §7-1.
//  • Equal-contribution footnote exists ONLY on Adelia JSSC 2026 (Sukbin Lim* / Jung-Hoon Kim*).
//  • Every entry links to its DOI / IEEE Xplore page — the published PDFs are NOT hosted (IEEE copyright).
const doi = (d: string) => `https://doi.org/${d}`;

export const publications: Publication[] = [
  {
    id: 'adelia-jssc-2026',
    type: 'journal',
    title:
      'Adelia: A 4-nm LLM Processing Unit with Streamlined Dataflow and Dual-Mode Parallelism for Maximizing Hardware Efficiency',
    authors: [
      { name: 'Sukbin Lim', self: true, equal: true },
      { name: 'Jung-Hoon Kim', equal: true },
      { name: 'Seungjae Moon' },
      { name: 'Junseo Cha' },
      { name: 'Dongjin Seo' },
      { name: 'Jongho Kim' },
      { name: 'Hunjong Lee' },
      { name: 'Jinwon Lee' },
      { name: 'Joo-Young Kim' },
    ],
    equalNote: true,
    venue: { abbr: 'JSSC', full: 'IEEE Journal of Solid-State Circuits' },
    year: 2026,
    links: { doi: doi('10.1109/JSSC.2026.3663603') },
    metric: '2.79× H100', // JSSC compute-unit efficiency (up to 2.79×); 2.51× throughput is the VLSI figure
    project: 'adelia',
    featured: true,
  },
  {
    id: 'hawkeye-jssc-2025',
    type: 'journal',
    title:
      'Hawkeye: A Point Cloud Neural Network Processor with Virtual Pillar and Quadtree-Based Workload Management for Real-Time Outdoor BEV Detection',
    authors: [
      { name: 'Sukbin Lim', self: true },
      { name: 'Jaehoon Heo' },
      { name: 'Jinho Yang' },
      { name: 'Joo-Young Kim' },
    ],
    venue: { abbr: 'JSSC', full: 'IEEE Journal of Solid-State Circuits' },
    year: 2025,
    links: { doi: doi('10.1109/JSSC.2024.3508873') },
    metric: '38.5 TOPS/W',
    project: 'hawkeye',
    featured: true,
  },
  {
    id: 'adelia-vlsi-2025',
    type: 'conference',
    title:
      'Adelia: A 4nm LLM Accelerator with Streamlined Dataflow and Dual-Mode Parallelization for Efficient Generative AI Inference',
    authors: [
      { name: 'Jung-Hoon Kim' },
      { name: 'Sukbin Lim', self: true },
      { name: 'Junseo Cha' },
      { name: 'Seungjae Moon' },
      { name: 'Dongjin Seo' },
      { name: 'Hunjong Lee' },
      { name: 'Jongho Kim' },
      { name: 'Jinwon Lee' },
      { name: 'Joo-Young Kim' },
    ],
    venue: { abbr: 'VLSI', full: 'Symposium on VLSI Technology and Circuits' },
    year: 2025,
    links: { ieee: 'https://ieeexplore.ieee.org/document/11075108' },
    metric: '1.59× mem-BW',
    project: 'adelia',
    featured: true,
  },
  {
    id: 'hawkeye-cicc-2024',
    type: 'conference',
    title:
      'A 38.5 TOPS/W Point Cloud Neural Network Processor with Virtual Pillar and Quadtree-Based Workload Management for Real-Time Outdoor BEV Detection',
    authors: [
      { name: 'Sukbin Lim', self: true },
      { name: 'Jaehoon Heo' },
      { name: 'Jinho Yang' },
      { name: 'Joo-Young Kim' },
    ],
    venue: { abbr: 'CICC', full: 'IEEE Custom Integrated Circuits Conference' },
    year: 2024,
    links: { doi: doi('10.1109/CICC60959.2024.10529067') },
    metric: '44.2 FPS',
    project: 'hawkeye',
  },
  {
    id: 'lpu-ieeemicro-2024',
    type: 'journal',
    title:
      'A Latency Processing Unit: A Latency-Optimized and Highly Scalable Processor for Large Language Model Inference',
    authors: [
      { name: 'Seungjae Moon' },
      { name: 'Jung-Hoon Kim' },
      { name: 'Junsoo Kim' },
      { name: 'Seongmin Hong' },
      { name: 'Junseo Cha' },
      { name: 'Minsu Kim' },
      { name: 'Sukbin Lim', self: true },
      { name: 'Gyubin Choi' },
      { name: 'Dongjin Seo' },
      { name: 'Jongho Kim' },
      { name: 'Hunjong Lee' },
      { name: 'Hyunjun Park' },
      { name: 'Ryeowook Ko' },
      { name: 'Soongyu Choi' },
      { name: 'Jongse Park' },
      { name: 'Jinwon Lee' },
      { name: 'Joo-Young Kim' },
    ],
    venue: { abbr: 'IEEE Micro', full: 'IEEE Micro' },
    year: 2024,
    links: { doi: doi('10.1109/MM.2024.3420728') },
    metric: '2.09× H100',
    bestPaper: true, // 2024 IEEE Micro Best Paper Award
    project: 'lpu',
  },
  {
    id: 'acane-aspdac-2024',
    type: 'conference',
    title:
      'ACane: An Efficient FPGA-based Embedded Vision Platform with Accumulation-as-Convolution Packing for Autonomous Mobile Robots',
    authors: [
      { name: 'Jinho Yang' },
      { name: 'Sungwoong Yune' },
      { name: 'Sukbin Lim', self: true },
      { name: 'Donghyuk Kim' },
      { name: 'Joo-Young Kim' },
    ],
    venue: { abbr: 'ASP-DAC', full: 'Asia and South Pacific Design Automation Conference' },
    year: 2024,
    links: { doi: doi('10.1109/ASP-DAC58780.2024.10473872') },
    metric: '361.8 GOPS/W',
    project: 'acane',
  },
  {
    id: 'jnpu-esscirc-2023',
    type: 'conference',
    title:
      'JNPU: A 1.04 TFLOPS Joint-DNN Training Processor with Speculative Cyclic Quantization and Triple Heterogeneity on Microarchitecture / Precision / Dataflow',
    authors: [
      { name: 'Je Yang' },
      { name: 'Sukbin Lim', self: true },
      { name: 'Sukjin Lee' },
      { name: 'Jae-Young Kim' },
      { name: 'Joo-Young Kim' },
    ],
    venue: { abbr: 'ESSCIRC', full: 'IEEE European Solid-State Circuits Conference' },
    year: 2023,
    links: { doi: doi('10.1109/ESSCIRC59616.2023.10268810') },
    metric: '1.04 TFLOPS',
    project: 'jnpu',
  },
  {
    id: 'tpim-jssc-2023',
    type: 'journal',
    title:
      'T-PIM: An Energy-Efficient Processing-in-Memory Accelerator for End-to-End On-Device Training',
    authors: [
      { name: 'Jaehoon Heo' },
      { name: 'Junsoo Kim' },
      { name: 'Sukbin Lim', self: true },
      { name: 'Wontak Han' },
      { name: 'Joo-Young Kim' },
    ],
    venue: { abbr: 'JSSC', full: 'IEEE Journal of Solid-State Circuits' },
    year: 2023,
    links: { doi: doi('10.1109/JSSC.2022.3220195') },
    metric: '161 TOPS/W',
    project: 'tpim',
  },
  {
    id: 'tpim-jetcas-2022',
    type: 'journal',
    title:
      'Design of Processing-in-Memory with Triple Computational Path and Sparsity Handling for Energy-Efficient DNN Training',
    authors: [
      { name: 'Wontak Han' },
      { name: 'Jaehoon Heo' },
      { name: 'Junsoo Kim' },
      { name: 'Sukbin Lim', self: true },
      { name: 'Joo-Young Kim' },
    ],
    venue: { abbr: 'JETCAS', full: 'IEEE Journal on Emerging and Selected Topics in Circuits and Systems' },
    year: 2022,
    links: { doi: doi('10.1109/JETCAS.2022.3168852') },
    metric: '2.02× SOTA',
    project: 'tpim',
  },
  {
    id: 'tpim-cicc-2022',
    type: 'conference',
    title:
      'T-PIM: A 2.21-to-161.08 TOPS/W Processing-In-Memory Accelerator for End-to-End On-Device Training',
    authors: [
      { name: 'Jaehoon Heo' },
      { name: 'Junsoo Kim' },
      { name: 'Wontak Han' },
      { name: 'Sukbin Lim', self: true },
      { name: 'Joo-Young Kim' },
    ],
    venue: { abbr: 'CICC', full: 'IEEE Custom Integrated Circuits Conference' },
    year: 2022,
    links: { doi: doi('10.1109/CICC53496.2022.9772808') },
    metric: '2.21–161 TOPS/W',
    project: 'tpim',
  },
];
