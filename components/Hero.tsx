"use client";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen pt-20 px-6 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
        <div className="space-y-8">
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-black tracking-tight text-gray-900">
              LAUNCHING IN<br />
              <span className="text-red-500">2026</span>
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Your all-in-one fitness + wellness companion.
            </h2>
            <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
              Track your workouts, compete with friends, and transform your health journey. Built for those who take their goals seriously.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#waitlist" className="px-8 py-4 bg-red-500 text-white rounded-full font-semibold hover:bg-red-600 transition transform hover:-translate-y-1 shadow-lg">
              Join the Waitlist
            </a>
            <a href="#screenshots" className="px-8 py-4 border-2 border-gray-400 text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition">
              See Preview
            </a>
          </div>
        </div>

        <div className="hidden lg:flex justify-center">
          <div className="relative w-80 h-96 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl shadow-2xl flex items-center justify-center animate-float">
            <div className="absolute inset-4 bg-white rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-400 text-sm">iPhone Mock-up</p>
                <p className="text-gray-300">Replace with screenshot</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
