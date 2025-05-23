

import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="space-y-8 max-w-prose mx-auto py-12 px-4">
      <h2 className="text-3xl font-semibold text-center">
        Willkommen beim Kleiderspenden‑Portal
      </h2>

      <p>
        Unser Verein sammelt gut erhaltene Kleidung und versendet sie in aktuelle
        Krisenregionen. Über dieses Portal können Sie Ihre Spende vorab online
        registrieren und so den Ablauf deutlich beschleunigen.
      </p>

      <h3 className="text-xl font-semibold">So funktioniert&nbsp;es</h3>
      <ol className="list-decimal list-inside space-y-2">
        <li>
          Klicken Sie auf&nbsp;
          <strong>„Spende&nbsp;registrieren“</strong> und füllen Sie das
          Formular aus.
        </li>
        <li>
          Entscheiden Sie sich für&nbsp;
          <em>Übergabe an der Geschäftsstelle</em> oder&nbsp;
          <em>Abholung</em> durch unser Sammelfahrzeug.
        </li>
        <li>
          Wählen Sie die Art der Kleidung und das gewünschte Krisengebiet aus.
          Bei Abholung geben Sie zusätzlich Ihre Adresse an.
        </li>
        <li>
          Nach dem Absenden erhalten Sie eine Bestätigung mit allen Details.
        </li>
      </ol>

      <p>
        Vielen Dank&nbsp;– jede Spende hilft Menschen in Not!&nbsp;
      </p>

      <div className="text-center">
        <Link to="/spende" className="btn-primary inline-block">
          Spende&nbsp;registrieren
        </Link>
      </div>
    </section>
  );
}