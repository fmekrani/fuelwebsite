export default function Features() {
  const features = [
    {
      icon: "🏋️",
      title: "All-in-One Fitness Hub",
      desc: "Everything you need in one place. Track workouts, nutrition, hydration, and recovery without juggling multiple apps.",
    },
    {
      icon: "👥",
      title: "Connect with Friends",
      desc: "Add your workout crew and keep each other accountable. See what they're up to and celebrate wins together.",
    },
    {
      icon: "📊",
      title: "Live Activity Feed",
      desc: "Stay motivated with real-time updates from your fitness circle. See workouts, PRs, and milestones as they happen.",
    },
    {
      icon: "🏆",
      title: "Competitive Leaderboards",
      desc: "Turn fitness into a game. Compete with friends on weekly challenges, workout streaks, and custom goals.",
    },
    {
      icon: "🍎",
      title: "Smart Calorie Tracking",
      desc: "Log meals, scan barcodes, and hit your macro targets. Precision nutrition tracking that actually works.",
    },
    {
      icon: "💧",
      title: "Hydration Tracking",
      desc: "Never forget to hydrate. Set daily water goals and get gentle reminders throughout the day.",
    },
    {
      icon: "🤖",
      title: "24/7 AI Coach",
      desc: "Get instant answers, workout suggestions, and personalized guidance whenever you need it.",
    },
    {
      icon: "✨",
      title: "Effortlessly Simple",
      desc: "Beautiful, intuitive design that gets out of your way. Log workouts in seconds, not minutes.",
    },
    {
      icon: "📱",
      title: "Share Your Journey",
      desc: "Post workouts to your feed with photos, notes, and stats. Inspire others and build your fitness story.",
    },
    {
      icon: "🔥",
      title: "Smart Streaks",
      desc: "Build momentum with intelligent streak tracking. Get timely reminders to keep your winning streak alive.",
    },
    {
      icon: "📈",
      title: "Weekly Insights",
      desc: "Beautiful dashboards showing your progress, trends, and achievements. Know exactly where you stand.",
    },
    {
      icon: "📉",
      title: "Macro Trends & Analytics",
      desc: "Dive deep into your nutrition patterns. Visualize protein, carbs, and fats over time with stunning graphs.",
    },
    {
      icon: "🎯",
      title: "Personalized Goals",
      desc: "Set custom targets that match your lifestyle. Weight loss, muscle gain, or performance—we've got you covered.",
    },
    {
      icon: "❤️",
      title: "Clean Social Feed",
      desc: "React to posts, leave comments, and cheer on your friends. Social fitness without the noise.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Everything you need to succeed
          </h2>
          <p className="text-xl text-gray-600">
            A complete fitness ecosystem designed for real results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
