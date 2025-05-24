import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../app-components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-commerce Admin Dashboard",
  description: "Admin dashboard for managing your e-commerce platform",
  generator: "v0.dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
