export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 py-8 text-sm text-muted text-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-6">
        <p>© {new Date().getFullYear()} Maryam Tech</p>
        
        <nav className="flex gap-6">
          <a href="/ai-policy" className="hover:text-white">AI Use Policy</a>
          <a href="/accessibility" className="hover:text-white">Accessibility</a>
          <a href="/privacy" className="hover:text-white">Privacy</a>
        </nav>
      </div>
    </footer>
  );
}
