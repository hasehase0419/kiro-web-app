import { BloodlineList } from '@/components/features/BloodlineList';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <header className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-gold-300 to-gold-500 text-transparent bg-clip-text">
          血統深掘り
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
          競馬の血統を、新たな視点から。
        </p>
      </header>

      <BloodlineList />
    </div>
  );
}