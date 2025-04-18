import { useState } from 'react';
import { isLocalZip } from '../utils/validators';

export default function Register() {
  const [mode, setMode] = useState<'office' | 'pickup'>('office');

  return (
    <section className="mx-auto max-w-lg space-y-4">
      <h2 className="text-xl font-semibold">Kleiderspende registrieren</h2>

      {/* Moduswahl */}
      <div className="flex gap-4">
        <label>
          <input
            type="radio"
            name="mode"
            value="office"
            checked={mode === 'office'}
            onChange={() => setMode('office')}
          />
          Übergabe Geschäftsstelle
        </label>
        <label>
          <input
            type="radio"
            name="mode"
            value="pickup"
            checked={mode === 'pickup'}
            onChange={() => setMode('pickup')}
          />
          Abholung
        </label>
      </div>

      {/* TODO: Formularfelder folgen */}
      <p className="text-gray-500">Formularinhalte bauen wir im nächsten Schritt.</p>
    </section>
  );
}