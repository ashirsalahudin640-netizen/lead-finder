import "./globals.css";

export const metadata = {
  title: "Lead Finder",
  description: "Discover businesses and identify high-value online presence opportunities."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
