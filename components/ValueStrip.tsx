export default function ValueStrip() {
  const values = [
    { title: "Track", description: "Workouts, calories, hydration" },
    { title: "Compete", description: "Leaderboards & challenges" },
    { title: "Improve", description: "AI coaching & insights" },
    { title: "Repeat", description: "Build lasting habits" },
  ];

  return (
    <section className="py-20 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {values.map((item, idx) => (
            <div key={idx} className="text-center">
              <h3 className="text-4xl font-bold text-red-500 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
