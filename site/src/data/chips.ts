import type { Chip } from './types';

// All figures verified (high confidence) from the source IEEE papers — see papers/ (local only).
//  Adelia : JSSC 2026 (Sukbin Lim co-first) + VLSI 2025. Samsung 4 nm. 5.28 mm² die.
//  Hawkeye: JSSC 2025 + CICC 2024 (Sukbin Lim first author). Samsung 28 nm. 12.96 mm² die.
// Chip Gallery features the two chips Sukbin LED (1st / co-1st author). Contributed chips
// (LPU, T-PIM, JNPU) appear in the publications list.
export const chips: Chip[] = [
  {
    id: 'adelia',
    codename: 'Adelia',
    kicker: 'LLM Accelerator · lead (co-first)',
    kind: '4 nm LLM inference accelerator — streamlined dataflow + dual-mode parallelism',
    org: 'HyperAccel × KAIST',
    node: 'Samsung 4 nm',
    accent: 'blue',
    status: 'silicon-proven',
    narrative:
      'Matches external memory bandwidth to an LLM-optimized compute engine through a Streamlined Dataflow and Systolic Parameter Path, and dynamically switches between context-mode and batch-mode parallelism — reaching up to 91% memory-bandwidth utilization on end-to-end LLM inference for models up to LLaMA-30B, and beating an NVIDIA H100 GPU system in throughput and efficiency.',
    kpis: [
      { value: '2.51×', label: 'throughput vs H100', hot: true },
      { value: '1.59×', label: 'mem-BW eff vs H100', hot: true },
      { value: '25.3', label: 'TFLOPS/W peak' },
    ],
    specs: [
      { label: 'Technology', value: 'Samsung 4 nm' },
      { label: 'Die area', value: '5.28 mm²' },
      { label: 'Precision', value: 'FP16 (lossless)' },
      { label: 'Supply', value: '0.65–0.9 V' },
      { label: 'Clock', value: 'up to 1 GHz' },
      { label: 'Peak perf.', value: '8.19 TFLOPS', hot: true },
      { label: 'Energy eff.', value: '25.3 TFLOPS/W', hot: true },
      { label: 'Area eff.', value: '1.55 TFLOPS/mm²' },
      { label: 'Mem-BW util.', value: 'up to 91%' },
      { label: 'Largest model', value: 'LLaMA-30B' },
    ],
    venues: ['JSSC 2026 (co-first)', 'VLSI 2025'],
    publications: ['adelia-jssc-2026', 'adelia-vlsi-2025'],
    featured: true,
  },
  {
    id: 'hawkeye',
    codename: 'Hawkeye',
    kicker: 'Point-Cloud Processor · lead (1st author)',
    kind: '28 nm point-cloud NN processor — real-time outdoor BEV / 3-D detection',
    org: 'KAIST CASTLab',
    node: 'Samsung 28 nm',
    accent: 'coral',
    status: 'silicon-proven',
    narrative:
      'A pillar-based point-cloud neural-network processor that uses virtual pillars for dynamic feature extraction, quadtree-based ROI workload management, and sign-magnitude slice-level sparsity skipping — delivering real-time, energy-efficient large-scale outdoor BEV detection (13.8× more energy-efficient than the baseline).',
    kpis: [
      { value: '38.5', label: 'TOPS/W energy eff.', hot: true },
      { value: '44.2', label: 'FPS (KITTI, real-time)', hot: true },
      { value: '13.8×', label: 'energy eff. vs baseline' },
    ],
    specs: [
      { label: 'Technology', value: 'Samsung 28 nm' },
      { label: 'Die area', value: '12.96 mm²' },
      { label: 'Precision', value: '5–17 b slice FXP' },
      { label: 'Supply', value: '0.74–1.1 V' },
      { label: 'Clock', value: '40–320 MHz' },
      { label: 'Peak perf.', value: '1.48 TOPS', hot: true },
      { label: 'Energy eff.', value: '38.5 TOPS/W', hot: true },
      { label: 'Throughput', value: '44.2 FPS (KITTI)' },
      { label: 'Sparsity', value: '94.6% act / 34.5% wt' },
      { label: 'Workload', value: 'PointPillars · KITTI' },
    ],
    venues: ['JSSC 2025', 'CICC 2024'],
    publications: ['hawkeye-jssc-2025', 'hawkeye-cicc-2024'],
    featured: true,
  },
  // Contributed fabricated chips — datasheets surface on their project detail pages.
  {
    id: 'tpim',
    codename: 'T-PIM',
    node: '28 nm',
    accent: 'lime',
    kpis: [
      { value: '161', label: 'TOPS/W peak (inference)', hot: true },
      { value: '7.59', label: 'TOPS/W (training)' },
      { value: '2.02×', label: 'energy eff. vs SOTA' },
    ],
    specs: [
      { label: 'Technology', value: '28 nm CMOS' },
      { label: 'Die area', value: '5.04 mm²' },
      { label: 'Memory', value: '8T-SRAM PIM · 5 cores' },
      { label: 'Precision', value: '1–16 b in · 2–16 b wt' },
      { label: 'Supply', value: '0.75–1.05 V' },
      { label: 'Clock', value: '50–280 MHz' },
      { label: 'Energy eff. (inf.)', value: 'up to 161.08 TOPS/W', hot: true },
      { label: 'Energy eff. (train)', value: '0.84–7.59 TOPS/W' },
      { label: 'Demonstrated', value: 'on-chip VGG-16 training' },
    ],
  },
  {
    id: 'jnpu',
    codename: 'JNPU',
    node: 'Samsung 28 nm',
    accent: 'lime',
    kpis: [
      { value: '1.04', label: 'TFLOPS peak', hot: true },
      { value: '1.70', label: 'TFLOPS/W max eff.' },
      { value: '245.4', label: 'FPS (joint-DNN)' },
    ],
    specs: [
      { label: 'Technology', value: 'Samsung 28 nm' },
      { label: 'Die area', value: '12.96 mm² (3.6×3.6)' },
      { label: 'On-chip mem', value: '351 KB' },
      { label: 'Precision', value: 'INT8 arrays · FP16 vector' },
      { label: 'Supply', value: '0.79–1.1 V' },
      { label: 'Clock', value: '20–200 MHz' },
      { label: 'Peak perf.', value: '1.04 TFLOPS', hot: true },
      { label: 'Energy eff.', value: '1.70 TFLOPS/W' },
      { label: 'Throughput', value: '245.4 FPS (joint-DNN)' },
    ],
  },
];
