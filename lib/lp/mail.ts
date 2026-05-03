export function getContactEmail(): string | undefined {
  return process.env.NEXT_PUBLIC_CONTACT_EMAIL;
}

export function mailtoFor(subject: string): string | null {
  const email = getContactEmail();
  if (!email) return null;
  return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
}
