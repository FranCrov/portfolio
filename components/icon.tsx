export function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      focusable="false"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
    >
      {paths[name]}
    </svg>
  );
}

const paths = {
  arrowUpRight: <path d="M7 17 17 7M7 7h10v10" />,
  arrowUp: <path d="M12 20V4m-6 6 6-6 6 6" />,
  arrowDown: <path d="M12 4v16m6-6-6 6-6-6" />,
  copy: (
    <>
      <path d="M9 9h11v11H9zM15 5V2H2v13h3" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  envelope: (
    <>
      <path d="M4 5h16v14H4z" />
      <path d="m4 6 8 7 8-7" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 10 6-10 6L2 9l10-6Z" />
      <path d="m2 14 10 6 10-6" />
    </>
  ),
  server: (
    <>
      <rect height="7" rx="1.5" width="16" x="4" y="3" />
      <rect height="7" rx="1.5" width="16" x="4" y="14" />
      <path d="M8 7h.01M8 18h.01" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5.5" rx="7.5" ry="2.8" />
      <path d="M4.5 5.5v13c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8v-13" />
      <path d="M4.5 12c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8" />
    </>
  ),
  download: (
    <>
      <path d="M12 3v11m0 0 4-4m-4 4-4-4" />
      <path d="M4 17v1.5A2.5 2.5 0 0 0 6.5 21h11a2.5 2.5 0 0 0 2.5-2.5V17" />
    </>
  ),
  wrench: (
    <path d="M14.7 6.3a4.5 4.5 0 0 0-6 5.6L3 17.6V21h3.4l5.7-5.7a4.5 4.5 0 0 0 5.6-6L14.5 12l-2.5-2.5 2.7-3.2Z" />
  ),
  github: (
    <path d="M9 19c-4 1-4-2-6-2m12 5v-4a3.5 3.5 0 0 0-1-3c3-.3 6-1.5 6-6a4.7 4.7 0 0 0-1.3-3.3A4.3 4.3 0 0 0 18.6 2S17.5 1.7 15 3a13.5 13.5 0 0 0-6 0C6.5 1.7 5.4 2 5.4 2a4.3 4.3 0 0 0-.1 3.7A4.7 4.7 0 0 0 4 9c0 4.5 3 5.7 6 6a3.5 3.5 0 0 0-1 3v4" />
  ),
  linkedin: (
    <>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
      <rect height="4" width="4" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </>
  ),
  sparkles: (
    <>
      <path d="m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3Z" />
      <path d="m19 16 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z" />
    </>
  ),
  mapPin: (
    <>
      <path d="M12 21s7-5.3 7-11a7 7 0 1 0-14 0c0 5.7 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
} as const;

export type IconName = keyof typeof paths;