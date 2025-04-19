# Kleiderspenden‑Portal 🌍👕  

Webanwendung zur digitalen Registrierung von Kleiderspenden für einen gemeinnützigen Verein.  
Entwickelt im Rahmen der Fallstudie **IPWA01‑01 (Programmierung von Webanwendungsoberflächen)** an der IU.

---

## 🎯 Funktionsumfang & Abdeckung der Anforderungen 📋

| Nr. | Anforderung (Aufgabenstellung 1.3 b) | Umsetzung |
|-----|--------------------------------------|-----------|
| a | Titel + Logo | `<title>` in `index.html`, Logo im Header |
| b | Header, Content‑Bereich, Footer | React‑Komponenten `Header` / `Footer`, zentraler `<main>` |
| c | Responsive Design | Tailwind CSS (Uitility‑Klassen, Mobile‑First) |
| d | Registrierungs‑Formular | `pages/Register.tsx` |
| e | Übergabe **oder** Abholung | Radio‑Buttons `mode` |
| f | Tablet an Geschäftsstelle (Übergabe) | Adresse ausgeblendet, nur Kleiderart & Krisengebiet |
| g | Abholung per Sammelfahrzeug | Adresse Pflichtfeld |
| h | PLZ‑Prüfung (erste 2 Ziffern = 80) | `utils/validators.ts :: isLocalZip()` |
| i | Bestätigungsseite mit allen Daten | `pages/Confirm.tsx` (localStorage → ReadOnly) |

---

## 🖼️ Screenshots

| Szene | Datei |
|-------|-------|
| Titel + Logo (Desktop) | `docs/abb01_titel_logo_desktop.png` |
| Formular – Übergabe | `docs/abb05_form_uebergabe.png` |
| Formular – Abholung (PLZ OK) | `docs/abb07_form_abholung_ok.png` |
| Formular – Abholung (PLZ Fehler) | `docs/abb08_form_abholung_error.png` |
| Bestätigung – Übergabe | `docs/abb09_confirm_uebergabe.png` |
| Bestätigung – Abholung | `docs/abb10_confirm_abholung.png` |

> **Hinweis:** Screenshots im Ordner `docs/` ablegen; in der schriftlichen Fallstudie referenziert (vgl. Abb. X).

---

## 🚀 Lokale Installation

```bash
git clone https://github.com/struperto/iu-ipwa01-kleiderspenden.git
cd iu-ipwa01-kleiderspenden
npm install
npm run dev     # Entwicklungsserver: http://localhost:5173
