import { mailtoFor } from "@/lib/lp/mail";

export type ResolveMailHref = (subject: string, fallback: string) => string;

export function createResolveMailHref(): ResolveMailHref {
  return (subject, fallback) => mailtoFor(subject) ?? fallback;
}
