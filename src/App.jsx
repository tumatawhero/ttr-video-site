
import React from 'react';
import { motion } from 'framer-motion';

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen px-4 py-16 flex flex-col items-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-6"
      >
        TTR Video & Livestreams
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-xl max-w-2xl mb-10"
      >
        Professional livestreaming and video production across Central West NSW. Weddings, sporting events, corporate stories, and more — captured with cinematic quality and broadcast precision.
      </motion.p>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 max-w-4xl w-full mb-16">
        <motion.div whileHover={{ scale: 1.05 }} className="bg-white/10 p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-2">🎥 Livestreaming</h2>
          <p>Multi-camera coverage, overlays, and wireless audio — perfect for sports, school events, and online audiences.</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="bg-white/10 p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-2">💍 Wedding Videos</h2>
          <p>Beautifully filmed weddings at an affordable rate while building my professional portfolio. Summer weekends available!</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="bg-white/10 p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-2">🏉 Sports Highlights</h2>
          <p>Rugby, gymnastics, ninja — coverage tailored for teams, coaches, and fans. Watch live or catch the replay!</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="bg-white/10 p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-2">🏢 Corporate Videos</h2>
          <p>Tell your brand’s story. Testimonial videos, interviews, and creative campaigns — shot in 4K with professional gear.</p>
        </motion.div>
      </div>

      <div className="bg-white/5 rounded-xl p-6 my-12 max-w-5xl w-full">
        <h2 className="text-3xl font-bold mb-6">🎒 My Equipment</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { src: '/gear/ag-cx10.jpg', label: 'Panasonic AG-CX10' },
            { src: '/gear/bmpcc4k.jpg', label: 'Blackmagic Pocket 4K' },
            { src: '/gear/rodecaster.jpg', label: 'Rodecaster Pro' },
            { src: '/gear/liveu.jpg', label: 'LiveU Streaming Unit' }
          ].map((item, i) => (
            <motion.div whileHover={{ scale: 1.05 }} key={i} className="bg-white/10 rounded shadow p-2">
              <img src={item.src} alt={item.label} className="w-full rounded" />
              <p className="mt-2 text-sm">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-white/5 rounded-xl p-6 my-12 max-w-5xl w-full">
        <h2 className="text-3xl font-bold mb-6">📺 Featured Videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            'https://www.youtube.com/embed/videoseries?list=PLfWXbW6ssmRMKj8RD_-Atw4CXo9iWlYll',
            'https://www.youtube.com/embed/videoseries?list=PLfWXbW6ssmRP4CM2SUkYtXSajJ32y7QVM',
            'https://www.youtube.com/embed/videoseries?list=PLfWXbW6ssmRPnJYKi8ICQ_ayZZOFBkO5X'
          ].map((src, i) => (
            <div key={i} className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full rounded"
                src={src}
                title={`Playlist ${i + 1}`}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>

      <a
        href="https://www.youtube.com/@ttrvideo"
        target="_blank"
        className="bg-red-600 hover:bg-red-700 transition px-6 py-3 text-white text-lg rounded-full font-semibold"
      >
        Watch More on YouTube
      </a>
    </div>
  );
}
