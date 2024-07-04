import { Space_Grotesk } from "next/font/google";
import "../styles/globals.css";
const space_Grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Ange-Elisee Kouassi",
  description: "Développeur fullstack MERN | React.js | Next.js | MongoDB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${space_Grotesk.className} w-full bg-gradient-to-b from-blue-50 to-orange-50`}
      >
        {children}
      </body>
    </html>
  );
}
