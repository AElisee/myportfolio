import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ange-Elisée Kouassi",
  description: "Développeur fullstack MERN | React.js | Next.js | MongoDB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} w-screen h-screen bg-gradient-to-b from-blue-50 to-orange-50 px-4`}
      >
        {children}
      </body>
    </html>
  );
}
