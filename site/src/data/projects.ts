import type { Project, Theme, ThemeId } from './types';

// Research themes — the section grouping for the Projects page. Order = display order.
export const themes: Theme[] = [
  { id: 'llm', title: 'LLM Acceleration', blurb: 'Silicon for efficient large-language-model inference.' },
  { id: 'vision', title: '3D Perception & Vision', blurb: 'Point-cloud / BEV detection and embedded vision processors.' },
  { id: 'training', title: 'On-Device Training', blurb: 'Energy-efficient on-device DNN training accelerators.' },
];

// Each project bundles its chip (datasheet), papers and patents, and carries one or more
// implementation tags: ASIC (fabricated silicon), FPGA, ARCH (architecture / arch venue).
// Adelia & Hawkeye are the flagships Sukbin LED (1st / co-first author).
export const projects: Project[] = [
  {
    id: 'adelia',
    codename: 'Adelia',
    theme: 'llm',
    tags: ['ASIC'],
    flagship: true,
    role: 'Lead · co-first author',
    lead: true,
    node: 'Samsung 4 nm',
    kind: '4 nm LLM inference accelerator',
    org: 'HyperAccel × KAIST',
    year: 2026,
    accent: 'blue',
    heroMetric: '2.51× H100',
    metrics: [
      { value: '2.51×', label: 'throughput vs H100', hot: true },
      { value: '1.59×', label: 'mem-BW eff vs H100', hot: true },
      { value: '25.3', label: 'TFLOPS/W peak' },
    ],
    narrative:
      'A specialized LLM processing unit that resolves the bimodal bottleneck between compute-bound prefill and memory-bound decode. A Streamlined Dataflow with a Systolic Parameter Path aligns compute throughput with memory bandwidth, while Dual-Mode Parallelism dynamically switches between context and batch execution — reaching up to 91% memory-bandwidth utilization on models up to LLaMA-30B and beating an NVIDIA H100 system.',
    chipId: 'adelia',
    pubIds: ['adelia-jssc-2026', 'adelia-vlsi-2025'],
  },
  {
    id: 'lpu',
    codename: 'LPU',
    theme: 'llm',
    tags: ['FPGA', 'ARCH'],
    role: 'Contributor',
    node: 'Xilinx Alveo U55C',
    kind: 'Latency-optimized LLM processor (FPGA · 4 nm synth.)',
    org: 'HyperAccel',
    year: 2024,
    accent: 'blue',
    heroMetric: '2.09× H100',
    narrative:
      "HyperAccel's Latency Processing Unit — a latency-optimized LLM processor with a streamlined dataflow and an expandable synchronization link that scales across devices. Implemented on Xilinx Alveo U55C FPGAs and productized as the Orion server, with the architecture also synthesized in Samsung 4 nm — reaching 2.09× lower latency and 1.33× higher energy efficiency than an NVIDIA H100.",
    pubIds: ['lpu-ieeemicro-2024'],
  },
  {
    id: 'hawkeye',
    codename: 'Hawkeye',
    theme: 'vision',
    tags: ['ASIC'],
    flagship: true,
    role: 'Lead · first author',
    lead: true,
    node: 'Samsung 28 nm',
    kind: '28 nm point-cloud NN processor (BEV)',
    org: 'KAIST CASTLab',
    year: 2025,
    accent: 'coral',
    heroMetric: '38.5 TOPS/W',
    metrics: [
      { value: '38.5', label: 'TOPS/W energy eff.', hot: true },
      { value: '44.2', label: 'FPS (KITTI, real-time)', hot: true },
      { value: '13.8×', label: 'energy eff. vs baseline' },
    ],
    narrative:
      'A 3D point-cloud processor that overcomes the irregularity and sparsity of LiDAR data for autonomous driving. A Virtual Pillar mechanism enables continuous feature encoding with minimal on-chip memory, while Quadtree-based ROI management and Sign-Magnitude Slice-Level Skipping skip redundant computation in the backbone — delivering real-time outdoor BEV detection at 44.2 FPS and 38.5 TOPS/W, a 13.8× efficiency gain over the baseline.',
    chipId: 'hawkeye',
    pubIds: ['hawkeye-jssc-2025', 'hawkeye-cicc-2024'],
    patentIds: ['KR102689248B1'],
  },
  {
    id: 'acane',
    codename: 'ACane',
    theme: 'vision',
    tags: ['FPGA'],
    role: 'Contributor',
    node: 'FPGA',
    kind: 'Embedded vision platform for mobile robots',
    org: 'KAIST CASTLab',
    year: 2024,
    accent: 'coral',
    heroMetric: '361.8 GOPS/W',
    narrative:
      'A compact FPGA-based embedded vision platform for autonomous mobile robots, introducing Accumulation-as-Convolution DSP-packing with optimized data mapping — achieving the highest DSP efficiency (1.465 GOPS/DSP) and energy efficiency (361.8 GOPS/W) among FPGA vision works.',
    pubIds: ['acane-aspdac-2024'],
  },
  {
    id: 'tpim',
    codename: 'T-PIM',
    theme: 'training',
    tags: ['ASIC'],
    role: 'Contributor',
    node: '28 nm',
    kind: 'PIM accelerator for on-device training',
    org: 'KAIST CASTLab',
    year: 2023,
    accent: 'lime',
    heroMetric: '161 TOPS/W',
    narrative:
      'The first 8T-SRAM processing-in-memory accelerator to run the complete on-device DNN training loop (plus high-speed inference) on a single fabricated chip, using bit-serial computation with configurable precision and dual sparsity handling — reaching 161.08 TOPS/W, 2.02× the energy efficiency of prior PIM.',
    chipId: 'tpim',
    pubIds: ['tpim-jssc-2023', 'tpim-jetcas-2022', 'tpim-cicc-2022'],
    patentIds: ['KR102576762B1'],
  },
  {
    id: 'jnpu',
    codename: 'JNPU',
    theme: 'training',
    tags: ['ASIC'],
    role: 'Contributor',
    node: 'Samsung 28 nm',
    kind: 'Joint-DNN training processor',
    org: 'KAIST CASTLab',
    year: 2023,
    accent: 'lime',
    heroMetric: '1.04 TFLOPS',
    narrative:
      'A 28 nm joint-DNN training processor that uses speculative cyclic quantization for integer-dominant operation and triple heterogeneity across microarchitecture, precision and dataflow — delivering 1.04 TFLOPS for multi-DNN edge workloads.',
    chipId: 'jnpu',
    pubIds: ['jnpu-esscirc-2023'],
    patentIds: ['KR102710971B1'],
  },
];

export const projectsByTheme = (id: ThemeId) => projects.filter((p) => p.theme === id);

// Fabricated chips = projects tagged ASIC (real tapeouts: Adelia, Hawkeye, T-PIM, JNPU).
// LPU's 4 nm ASIC is synthesized-only (FPGA-implemented), so it is NOT counted here.
export const fabricatedChipCount = projects.filter((p) => p.tags.includes('ASIC')).length;
