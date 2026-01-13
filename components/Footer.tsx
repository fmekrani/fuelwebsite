export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-red-500">Fuel</h3>
            <p className="text-gray-400">Launching 2026</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#features" className="hover:text-white transition">Features</a></li>
              <li><a href="#screenshots" className="hover:text-white transition">Screenshots</a></li>
              <li><a href="#waitlist" className="hover:text-white transition">Join Waitlist</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white transition">About Me</a></li>
              <li><a href="#portfolio" className="hover:text-white transition">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#linkedin" className="hover:text-white transition">LinkedIn</a></li>
              <li><a href="#github" className="hover:text-white transition">GitHub</a></li>
              <li><a href="mailto:faheem@example.com" className="hover:text-white transition">Email</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-center mb-2">&copy; 2026 Fuel by Faheem Mekrani. All rights reserved.</p>
          <p className="text-gray-500 text-center text-sm italic">Built with passion. Launching soon.</p>
        </div>
      </div>
    </footer>
  );
}
