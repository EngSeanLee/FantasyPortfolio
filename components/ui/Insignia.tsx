const glyphs: Record<string, React.ReactNode> = {
  compass: (
    <>
      <circle cx="12" cy="12" r="7" />
      <path d="M12 8 L14 12 12 16 10 12 Z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 4 L18 6.5 L18 12 C18 16 15.5 18.5 12 20 C8.5 18.5 6 16 6 12 L6 6.5 Z" />
      <path d="M9.5 12 L11 13.5 14.5 10" />
    </>
  ),
  scroll: (
    <>
      <path d="M7 5 h9 a2 2 0 0 1 2 2 v10 a2 2 0 0 1 -2 2 H9" />
      <path d="M7 5 a2 2 0 0 0 -2 2 v10 a2 2 0 0 0 2 2" />
      <line x1="9" y1="9" x2="15" y2="9" />
      <line x1="9" y1="12.5" x2="15" y2="12.5" />
      <line x1="9" y1="16" x2="13" y2="16" />
    </>
  ),
  beacon: (
    <>
      <path d="M9 4 h6 l-1 6 h-4 Z" />
      <path d="M8 20 L10 10 h4 l2 10 Z" />
      <line x1="6" y1="20" x2="18" y2="20" />
    </>
  ),
  quill: (
    <>
      <path d="M18 4 C10 6 7 12 6 20 C11 18 15 15 18 4 Z" />
      <line x1="6" y1="20" x2="10" y2="16" />
    </>
  ),
  scale: (
    <>
      <line x1="12" y1="4" x2="12" y2="19" />
      <line x1="6" y1="7" x2="18" y2="7" />
      <path d="M4 12 L6 7 8 12 a2 3 0 0 1 -4 0 Z" />
      <path d="M16 12 L18 7 20 12 a2 3 0 0 1 -4 0 Z" />
      <line x1="9" y1="20" x2="15" y2="20" />
    </>
  ),
  ledger: (
    <>
      <rect x="6" y="4" width="12" height="16" rx="1" />
      <line x1="9" y1="8" x2="15" y2="8" />
      <line x1="9" y1="11.5" x2="15" y2="11.5" />
      <line x1="9" y1="15" x2="13" y2="15" />
    </>
  ),
};

export function Insignia({ id, className }: { id: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {glyphs[id] ?? glyphs.compass}
    </svg>
  );
}
