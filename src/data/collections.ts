import { tools, type Tool } from "./tools";

export interface CollectionPick {
  toolSlug: string;
  label: string;
  categoryLabel: string;
  miniReview: string;
  incomePotential?: string;
}

export interface Collection {
  slug: string;
  name: string;
  titleTag: string;
  metaDescription: string;
  intro: string;
  whatToLookFor: string;
  picks: CollectionPick[];
}

export const collections: Collection[] = [];

/** Helper: resolve tool slugs to Tool objects for a collection */
export function getCollectionTools(collection: Collection): (Tool | undefined)[] {
  return collection.picks.map((p) => tools.find((t) => t.slug === p.toolSlug));
}
