import "./globals.css";

import Topo from "@/components/Topo";

export const metadata = {
  title: "M.",
  description: "Agência de Branding e design digital",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
        </body>
    </html>
  );
}
