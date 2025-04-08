import React from "react";


const App = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-950 px-4">
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-10 max-w-2xl w-full text-center shadow-2xl">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 bg-clip-text text-transparent mb-4">
          Opeyemi Gabriel Famosipe
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-300 font-medium mb-6">
          Software Engineer • Designer • CTO @ GamePride
        </h2>
        <p className="text-gray-400 leading-relaxed mb-8">
          I build beautiful, useful, and world-class products, blending design thinking 
          With clean, scalable code to shape digital experiences that matter.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#"
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-xl transition"
          >
            View Portfolio
          </a>
          <a
            href="#"
            className="px-6 py-3 border border-gray-600 text-gray-300 hover:bg-gray-800 rounded-xl transition"
          >
            Download Resume
          </a>
        </div>
        <p className="text-sm text-gray-500 mt-10">
          Editing <code className="bg-gray-800 px-1 py-0.5 rounded">App.tsx</code>? Save to test HMR updates.
        </p>
      </div>
    </main>
  );
};

export default App;
