export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Track Everything",
      description: "Log workouts, meals, water intake, and more. Build a complete picture of your fitness journey.",
    },
    {
      number: "2",
      title: "Connect & Share",
      description: "Add friends, post your progress, and follow the people who inspire you. Fitness is better together.",
    },
    {
      number: "3",
      title: "Compete & Grow",
      description: "Join leaderboards, maintain streaks, and get AI-powered coaching. Level up every single day.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">How it works</h2>
          <p className="text-xl text-gray-600">Getting started is simple</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="text-center">
              <div className="w-20 h-20 bg-red-500 text-white rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-6 shadow-lg">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
