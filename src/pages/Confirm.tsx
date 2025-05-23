import { Link } from 'react-router-dom';

export default function Confirm() {
  const data = JSON.parse(localStorage.getItem('donation') ?? '{}');

  const place =
    data.mode === 'office'
      ? 'Geschäftsstelle'
      : `${data.street}, ${data.zip} ${data.city}`;

  if (!data.mode) return <p>Keine Spende gefunden.</p>;

  return (
    <section className="mx-auto max-w-lg space-y-4">
      <h2 className="text-xl font-semibold">Vielen Dank für deine Spende!</h2>
      <ul className="list-disc list-inside">
        <li>Art: {data.category}</li>
        <li>Krisengebiet: {data.crisis}</li>
        <li>Datum: {new Date(data.date).toLocaleDateString('de-DE')}</li>
        <li>Uhrzeit: {new Date(data.date).toLocaleTimeString('de-DE')}</li>
        <li>Ort: {place}</li>
      </ul>
      <Link to="/" className="btn-primary inline-block mt-6">
        Neue Spende registrieren
      </Link>
    </section>
  );
}