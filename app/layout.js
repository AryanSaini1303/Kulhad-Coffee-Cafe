import "./globals.css";

export const metadata = {
  title: "Kulhad Coffee Cafe",
  description: "Grab a snack, visit Kulhad Coffee Cafe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
