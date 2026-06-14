import { publications } from './publications';
import type { Publication } from './types';

const pubById: Record<string, Publication> = Object.fromEntries(publications.map((p) => [p.id, p]));

// Resolve project.pubIds → full publication objects (in given order).
export const pubsByIds = (ids: string[]): Publication[] => ids.map((id) => pubById[id]).filter(Boolean);

// Compact venue tags for a project tile/flagship, e.g. ["JSSC '26", "VLSI '25"].
export const venueTags = (ids: string[]): string[] =>
  pubsByIds(ids).map((p) => `${p.venue.abbr} '${String(p.year).slice(2)}`);
