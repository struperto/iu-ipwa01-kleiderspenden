export default function Header() {
  return (
    <header className="bg-indigo-600 w-full shadow-md">
      <div className="max-w-screen-lg mx-auto flex items-center gap-4 px-6 py-3">
        {/* Logo */}
        <div className="bg-white rounded-full p-1">
          <img src="/logo.png" alt="Logo" className="h-14 w-auto" />
        </div>

        {/* Titel */}
        <h1 className="text-white text-2xl font-semibold tracking-wide">
          Kleiderspenden-Portal
        </h1>
      </div>
    </header>
  );
}