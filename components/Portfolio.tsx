export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-gradient-to-r from-red-500 to-red-600">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
          Want to see more of my work?
        </h2>
        <p className="text-xl text-white/90 mb-8">
          Check out my full portfolio and other projects
        </p>
        <a
          href="#portfolio-link"
          className="inline-block px-10 py-4 bg-white text-red-600 rounded-full font-bold text-lg hover:bg-gray-100 transition transform hover:scale-105 shadow-lg"
        >
          View Full Portfolio
        </a>
      </div>
    </section>
  );
}
