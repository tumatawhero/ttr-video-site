import React from 'react';

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen px-4 py-16 flex flex-col items-center text-center">
      <h1 className="text-5xl font-bold mb-6">TTR Video & Livestreams</h1>
      <p className="text-xl max-w-2xl mb-10">
        Professional livestreaming and video production across Central West NSW.
        Weddings, sporting events, corporate stories, and more — captured with cinematic quality and broadcast precision.
      </p>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 max-w-4xl w-full mb-16">
        <div className="bg-white/10 p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-2">🎥 Livestreaming</h2>
          <p>Multi-camera coverage, overlays, and wireless audio — perfect for sports, school events, and online audiences.</p>
        </div>
        <div className="bg-white/10 p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-2">💍 Wedding Videos</h2>
          <p>Beautifully filmed weddings at an affordable rate while building my professional portfolio. Summer weekends available!</p>
        </div>
        <div className="bg-white/10 p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-2">🏉 Sports Highlights</h2>
          <p>Rugby, gymnastics, ninja — coverage tailored for teams, coaches, and fans. Watch live or catch the replay!</p>
        </div>
        <div className="bg-white/10 p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-2">🏢 Corporate Videos</h2>
          <p>Tell your brand’s story. Testimonial videos, interviews, and creative campaigns — shot in 4K with professional gear.</p>
        </div>
      </div>

      <a
        href="https://www.youtube.com/@ttrvideo"
        target="_blank"
        className="bg-red-600 hover:bg-red-700 transition px-6 py-3 text-white text-lg rounded-full font-semibold"
      >
        Watch on YouTube
      </a>
    </div>
  );
}
