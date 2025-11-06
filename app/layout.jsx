
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Plus_Jakarta_Sans } from "next/font/google";

const font = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata = {
  title: "Ayush Chauhan — Portfolio",
  description: "Full Stack Developer — React, Next.js, Node.js, FastAPI, MongoDB"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${font.variable} antialiased bg-black text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
