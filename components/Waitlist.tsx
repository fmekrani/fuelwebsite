"use client";

import { useState } from "react";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({
    type: null,
    message: "",
  });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus({ type: "success", message: data.message });
        setEmail("");
      } else {
        setStatus({ type: "error", message: data.message });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }

    setTimeout(() => setStatus({ type: null, message: "" }), 5000);
  }

  return (
    <section id="waitlist" className="py-24 bg-gray-50">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
          Be the first to know
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          Join the waitlist and get early access when we launch in 2026
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 border-2 border-gray-300 rounded-full focus:outline-none focus:border-red-500 transition"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-4 bg-red-500 text-white rounded-full font-semibold hover:bg-red-600 transition disabled:opacity-50"
            >
              {loading ? "Joining..." : "Join Waitlist"}
            </button>
          </div>

          {status.type && (
            <div
              className={`p-4 rounded-lg ${
                status.type === "success"
                  ? "bg-green-100 text-green-800 border border-green-300"
                  : "bg-red-100 text-red-800 border border-red-300"
              }`}
            >
              {status.message}
            </div>
          )}
        </form>

        <p className="text-gray-500 text-sm mt-6">
          No spam. Just updates on our launch.
        </p>
      </div>
    </section>
  );
}
