export default function About() {
  const skills = [
    "C/C++", "Python", "Java", "SQL", "Swift", "TypeScript",
    "Node.js", "GitHub", "Xcode", "Linux"
  ];

  const projects = [
    "Fuel Fitness App - iOS social fitness platform with AI coaching and competitive features",
    "Stock Prediction Model - Machine learning system for market analysis",
    "Student Performance Predictor - ML model for educational outcomes",
  ];

  const experience = [
    "Teaching Assistant - ECE 264, Purdue University (Dec 2025 – May 2026)",
    "Software Development Intern - DIWO.ai",
    "IT Intern - Technical infrastructure and support",
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-2">About the Builder</h2>
              <h3 className="text-3xl font-bold text-red-500 mb-6">Faheem Mekrani</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                Computer Engineering student at Purdue University with a passion for building products that make a real impact.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-gray-900 mb-3">🎓 Education</h4>
              <p className="text-gray-700 font-semibold">Purdue University - B.S. Computer Engineering</p>
              <p className="text-gray-600">AI/ML Concentration • Dean's List • GPA 3.73</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-gray-900 mb-3">💻 Technical Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 bg-white border border-red-300 text-red-600 rounded-lg text-sm font-semibold hover:bg-red-50 transition">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-gray-900 mb-3">🚀 Featured Projects</h4>
              <ul className="space-y-2">
                {projects.map((project, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-red-500 font-bold">→</span>
                    <span className="text-gray-700">{project}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-gray-900 mb-3">💼 Experience</h4>
              <ul className="space-y-2">
                {experience.map((exp, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-red-500 font-bold">→</span>
                    <span className="text-gray-700">{exp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#portfolio" className="px-6 py-3 bg-gray-100 text-gray-900 rounded-full font-semibold hover:bg-gray-200 transition">
                View Portfolio
              </a>
              <a href="#linkedin" className="px-6 py-3 bg-gray-100 text-gray-900 rounded-full font-semibold hover:bg-gray-200 transition">
                LinkedIn
              </a>
              <a href="mailto:faheem@example.com" className="px-6 py-3 bg-gray-100 text-gray-900 rounded-full font-semibold hover:bg-gray-200 transition">
                Email Me
              </a>
            </div>
          </div>

          {/* Right Column - Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 rounded-2xl sticky top-32">
              <div className="bg-gradient-to-br from-red-500 to-red-600 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                <span className="text-5xl font-black text-white">FM</span>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-3xl font-black text-red-500">3.73</div>
                  <div className="text-gray-600 text-sm font-semibold">GPA</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-3xl font-black text-red-500">10+</div>
                  <div className="text-gray-600 text-sm font-semibold">Projects</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-3xl font-black text-red-500">5+</div>
                  <div className="text-gray-600 text-sm font-semibold">Languages</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
