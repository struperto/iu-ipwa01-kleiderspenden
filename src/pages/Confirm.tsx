export default function Confirm() {
  const data = JSON.parse(localStorage.getItem('donation') ?? '{}');

  if (!data.mode) return <p>Keine Spende gefunden.</p>;

  return (
    <section className="mx-auto max-w-lg space-y-4">
      <h2 className="text-xl font-semibold">Vielen Dank für deine Spende!</h2>
      <ul className="list-disc list-inside">
        <li>Art: {data.category}</li>
        <li>Krisengebiet: {data.crisis}</li>
        <li>Datum: {new Date(data.date).toLocaleDateString('de-DE')}</li>
        <li>Uhrzeit: {new Date(data.date).toLocaleTimeString('de-DE')}</li>
        {data.mode === 'pickup' ? (
          <li>
            Abholung bei: {data.street}, {data.zip} {data.city}
          </li>
        ) : (
          <li>Übergabe an der Geschäftsstelle</li>
        )}
      </ul>
    </section>
  );
}