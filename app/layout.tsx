import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, DM_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { site } from "@/data/site";

/* Dos pesos en lugar de tres: Barlow Condensed no tiene versión variable en
   Google Fonts (verificado en font-data.json: solo pesos estáticos 100-900),
   así que cada peso es un archivo aparte. El 600 se mapea a 700 en el CSS y la
   diferencia visual entre ambos en condensed es imperceptible. */
const displayFont = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const bodyFont = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  alternates: { canonical: "/" },
  title: `${site.name} | ${site.role}`,
  description: site.description,
  keywords: [
    "portfolio",
    "desarrollador full stack",
    "ingeniería en sistemas",
    "React",
    "Next.js",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: site.url,
    title: `${site.name} | ${site.role}`,
    description: site.description,
    siteName: `${site.name} — Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.role}`,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f8fa" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0d10" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      className={`${displayFont.variable} ${bodyFont.variable}`}
      data-scroll-behavior="smooth"
      lang="es"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('js');" +
              "(window.matchMedia('(prefers-reduced-motion: reduce)').matches" +
              "||document.documentElement.classList.add('no-motion'))",
          }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}