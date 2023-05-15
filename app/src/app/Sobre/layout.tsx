
export const metadata = {
    title: "StarCafe - Sobre",
    description: "A melhor loja de cafeteria da região",
  };
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  }
  