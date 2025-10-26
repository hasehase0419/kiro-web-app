import { getBloodlines } from '@/lib/data-loader';

export function BloodlineList() {
  const bloodlines = getBloodlines();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
      {bloodlines.map((bloodline) => (
        <div 
          key={bloodline.id}
          className="group bg-gray-900/50 rounded-lg overflow-hidden border border-gray-700/50 hover:border-gold-700/70 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
        >
          <div className={`w-full h-2 bg-gradient-to-r from-gold-600 to-gold-800`}></div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-100 group-hover:text-gold-400 transition-colors duration-300">{bloodline.name}</h3>
            <p className="mt-3 text-gray-400 text-base h-24">{bloodline.description}</p>
            <div className="mt-6 text-right">
              <a href={`/${bloodline.id}`} className="text-gold-500 hover:text-gold-300 font-semibold text-lg tracking-wide">
                分析する →
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}