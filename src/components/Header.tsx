// src/components/Header.tsx
export default function Header() {
  return (
    <header className="bg-indigo-600 w-full">
      <div className="flex items-center gap-3 p-3">
        <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
        <h1 className="text-white text-lg font-semibold">
          Kleiderspenden‑Portal
        </h1>
      </div>
    </header>
  );
}