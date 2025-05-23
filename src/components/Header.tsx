export default function Header() {
  return (
    <header className="bg-indigo-600 w-full shadow-md">
      <div className="max-w-screen-lg mx-auto flex items-center gap-4 px-6 py-3 justify-between">
        {/* Logo */}
        <div className="bg-white rounded-full p-1">
          <img src="/logo.png" alt="Logo" className="h-14 w-auto" />
        </div>

        {/* Titel */}
        <h1 className="text-white text-2xl font-semibold tracking-wide">
          Kleiderspenden-Portal
        </h1>

        {/* Navigation */}
        <nav className="ml-auto flex items-center gap-6 text-indigo-100 text-sm">
          <a href="/" className="hover:text-white underline-offset-4 hover:underline">
            Home
          </a>
          <a href="/spende" className="hover:text-white underline-offset-4 hover:underline">
            Spende&nbsp;registrieren
          </a>
        </nav>
      </div>
    </header>
  );
}