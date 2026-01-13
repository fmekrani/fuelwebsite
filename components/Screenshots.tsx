"use client";

import { useState } from "react";

export default function Screenshots() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  const screenshots = [
    { id: 1, title: "Daily Summary", alt: "Home screen" },
    { id: 2, title: "Friends Feed", alt: "Social feed" },
    { id: 3, title: "Leaderboards", alt: "Leaderboards" },
    { id: 4, title: "Calories & Macros", alt: "Nutrition" },
    { id: 5, title: "Analytics Dashboard", alt: "Analytics" },
    { id: 6, title: "Run Tracking", alt: "GPS tracking" },
    { id: 7, title: "Workout Plans", alt: "Workout plans" },
  ];

  return (
    <section id="screenshots" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Take a look inside
          </h2>
          <p className="text-xl text-gray-600">See what makes Fuel different</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {screenshots.map((shot) => (
            <div
              key={shot.id}
              onClick={() => setLightbox(`/images/screenshot-${shot.id}.jpg`)}
              className="cursor-pointer group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition transform hover:scale-105"
            >
              <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <p className="text-gray-600 text-center p-4">{shot.title}</p>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition">
                  <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                  </svg>
                </div>
              </div>
              <p className="absolute bottom-4 left-4 right-4 text-white font-semibold text-sm">{shot.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition"
            aria-label="Close"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="bg-gray-400 p-4 rounded-lg max-w-2xl w-full aspect-square flex items-center justify-center">
            <p className="text-gray-600">Screenshot placeholder</p>
          </div>
        </div>
      )}
    </section>
  );
}
