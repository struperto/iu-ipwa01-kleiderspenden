export default function Header() {
  return (
    <header className="bg-indigo-600 w-full shadow-md">
      <div className="max-w-screen-lg mx-auto flex items-center gap-4 px-6 py-3 justify-between">
  
  
  {/* Logo-Badge */}
  <img
    src="/logo.png"
    alt="Kleiderspenden-Logo"
    className="
      h-10 w-10                 /* Basisgröße 40 px × 40 px  */
      sm:h-12 sm:w-12           /* ab 640 px etwas größer    */
      rounded-full              /* kreisförmig               */
      bg-white p-1              /* weißer Hintergrund + Innenabstand   */
      shadow-md ring-1 ring-white/30
    "
  />

  {/* Titel */}
  <h1
    className="
      text-white font-semibold tracking-wide
      text-xl sm:text-2xl lg:text-[1.65rem]
      whitespace-nowrap
    "
  >
  Kleiderspenden-Portal
</h1>
        {/* Navigation */}
        <nav className="ml-auto flex items-center gap-5">
          <a href="/" className="text-indigo-100 hover:text-white text-xs sm:text-sm md:text-base font-medium leading-none underline-offset-4 hover:underline">
            Home
          </a>
          <a href="/spende" className="text-indigo-100 hover:text-white text-xs sm:text-sm md:text-base font-medium leading-none underline-offset-4 hover:underline">
            Spende&nbsp;registrieren
          </a>
        </nav>
      </div>
    </header>
  );
}