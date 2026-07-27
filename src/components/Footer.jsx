export default function Footer({ config }) {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} {config.name}. All rights reserved.</p>
    </footer>
  );
}
