import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/provider/theme-provider";
import { ConvexClientProvider } from "@/provider/convex-provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Potions",
  description: "The Best To Do APP Here",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo.svg",
        href: "/logo.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-dark.svg",
        href: "/logo-dark.svg",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConvexClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
