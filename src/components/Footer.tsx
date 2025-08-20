export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-muted">
        <p>© {new Date().getFullYear()} Mariam Tech</p>
        <div className="mt-3 flex gap-5">
          <a href="/ai-use">AI Use Policy</a>
          <a href="/accessibility">Accessibility</a>
          <a href="/privacy">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
