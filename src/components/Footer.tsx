export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="mx-auto max-w-7xl px-4 py-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted">
        <p>© {new Date().getFullYear()} Maryam Tech</p>
        <div className="mt-3 md:mt-0 flex gap-5">
          <a href="/ai-use" className="hover:text-fg transition">AI Use Policy</a>
          <a href="/accessibility" className="hover:text-fg transition">Accessibility</a>
          <a href="/privacy" className="hover:text-fg transition">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
