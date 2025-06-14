import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isLocalZip } from '../utils/validators';
import { categories, crisisRegions } from '../utils/constants';

type Mode = 'office' | 'pickup';

export default function Register() {
  const [mode, setMode] = useState<Mode>('office');
  const [form, setForm] = useState({
    category: '',
    crisis: '',
    street: '',
    zip: '',
    city: '',
  });
  const [error, setError] = useState('');
  const [zipError, setZipError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // Live PLZ validation
    if (name === 'zip') {
      if (value && !isLocalZip(value)) {
        setZipError('Abhol‑PLZ liegt außerhalb 80 xxx');
      } else {
        setZipError('');
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.category || !form.crisis) {
      setError('Bitte Kleiderart und Krisengebiet auswählen.');
      return;
    }
    if (mode === 'pickup' && !isLocalZip(form.zip)) {
      setError('Abhol‑PLZ liegt außerhalb des Geschäftsstellen‑Gebiets (80xxx).');
      return;
    }
    const payload = { ...form, mode, date: new Date().toISOString() };
    localStorage.setItem('donation', JSON.stringify(payload));
    navigate('/confirm');
  };

  return (
    <section className="mx-auto max-w-lg space-y-6">
      <h2 className="text-xl font-semibold">Kleiderspende registrieren</h2>

      {/* Moduswahl */}
      <div className="flex gap-6">
        <label className="flex items-center gap-1">
          <input
            type="radio"
            name="mode"
            value="office"
            checked={mode === 'office'}
            onChange={() => setMode('office')}
          />
          Übergabe
        </label>
        <label className="flex items-center gap-1">
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

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Kleiderart */}
        <label className="block">
          <span className="block font-medium">Kleiderart</span>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            required
            className="mt-1 w-full border p-2 bg-white text-black"
          >
            <option value="" disabled>
              Bitte wählen …
            </option>
            {categories.map(c => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>

        {/* Krisengebiet */}
        <label className="block">
          <span className="block font-medium">Krisengebiet</span>
          <select
            name="crisis"
            value={form.crisis}
            onChange={handleChange}
            required
            className="mt-1 w-full border p-2 bg-white text-black"
          >
            <option value="" disabled>
              Bitte wählen …
            </option>
            {crisisRegions.map(r => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </label>

        {/* Adressfelder – nur bei Abholung */}
        {mode === 'pickup' && (
          <>
            <label className="block">
              <span className="block font-medium">Straße&nbsp;+&nbsp;Hausnr.</span>
              <input
                name="street"
                required
                value={form.street}
                onChange={handleChange}
                className="mt-1 w-full border p-2 placeholder:text-black text-black"
              />
            </label>
            <div className="flex gap-4">
              <label className="flex-1">
                <span className="block font-medium">PLZ</span>
                <input
                  name="zip"
                  value={form.zip}
                  onChange={handleChange}
                  required
                  maxLength={5}
                  className={`mt-1 w-full border p-2 placeholder:text-black text-black ${zipError ? 'border-red-500' : ''}`}
                  aria-invalid={zipError ? 'true' : 'false'}
                  aria-describedby="zip-error"
                />
                {zipError && (
                  <p id="zip-error" className="text-red-500 text-sm mt-1">
                    {zipError}
                  </p>
                )}
              </label>
              <label className="flex-1">
                <span className="block font-medium">Ort</span>
                <input
                  name="city"
                  required
                  value={form.city}
                  onChange={handleChange}
                  className="mt-1 w-full border p-2 placeholder:text-black text-black"
                />
              </label>
            </div>
          </>
        )}

        {error && <p className="text-red-600">{error}</p>}

        <button className="bg-indigo-600 text-white px-4 py-2 rounded">Absenden</button>
      </form>
    </section>
  );
}