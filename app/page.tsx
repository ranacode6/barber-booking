import Link from 'next/link';

export default function Home() {
  const barbers = ['Barber 1', 'Barber 2', 'Barber 3'];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-8">Select a Barber</h1>
      <div className="grid grid-cols-1 gap-4">
        {barbers.map((barber, index) => (
          <Link
            key={index}
            href={`/booking/${index + 1}`}
            className="p-4 bg-blue-500 text-white rounded shadow-lg text-center hover:bg-blue-600"
          >
            {barber}
          </Link>
        ))}
      </div>
    </div>
  );
}
