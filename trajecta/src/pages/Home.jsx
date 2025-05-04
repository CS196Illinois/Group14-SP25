import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import feature1 from '../assets/feature1.png';
import feature2 from '../assets/feature2.png';
import feature3 from '../assets/feature3.png';
import integration1 from '../assets/integration1.png';
import integration2 from '../assets/integration2.png';


function Home() {
  return (
    <div className="w-full font-sans">
      <Navbar />
      {/* <div className="bg-red-500 text-white p-4">If you see red, Tailwind is working!</div> */}

      <section className="text-center py-20 px-6 max-w-screen-xl mx-auto">
        <div className="w-full md:w-3/4 mx-auto">
          <h1 className="text-4xl font-bold mb-4">TRAJECTA</h1>
          <p className="text-gray-600 mb-8">Simulate, Analyze, Elevate Space Missions</p>

          <div className="relative w-full pb-[56.25%]">
            <iframe
              id="orbitViewerContainer"
              title="NASA PSG Orbits"
              className="absolute top-0 left-0 w-full h-full"
              allowFullScreen
              scrolling="no"
              src="/orbit/orbit.html"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <Card img={feature1} title="Revolutionizing Space Data Visualization" />
          <Card img={feature2} title="Advanced Analytics for Next-Gen Missions" />
          <Card img={feature3} title="Collaborative Platform for Global Space Challenges" />
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-6 max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Who Uses TRAJECTA</h2>
        <p className="mb-3">Aerospace Engineers</p>
        <p className="mb-3">Research Institutions</p>
        <p className="mb-8">Educators & Students</p>
        <div className="space-x-4">
          <button
            className="bg-black text-white px-5 py-3 rounded"
            onClick={() => {
              document.getElementById("orbitViewerContainer")?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Try it out
          </button>
          <button
            className="border px-5 py-3 rounded"
            onClick={() => window.open("https://calendar.google.com", "_blank")}
          >
            Schedule a Demo
          </button>
        </div>
      </section>

      <section className="py-24 px-6 max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12">Integrations & Ecosystem</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <Card img={integration1} title="Industry-Standard Data Formats" />
          <Card img={integration2} title="Advanced Modeling Extensions" />
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-6 max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12 text-center">Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-6 border rounded bg-white shadow text-center">
            <p className="italic mb-4">"TRAJECTA cut our mission planning time by 40%"</p>
            <p className="font-semibold text-sm text-gray-800">– Dr. Lona Kazac</p>
          </div>
          <div className="p-6 border rounded bg-white shadow text-center">
            <p className="italic mb-4">"TRAJECTA collision prediction models saved us from a near-miss event."</p>
            <p className="font-semibold text-sm text-gray-800">– Raj Patel</p>
          </div>
          <div className="p-6 border rounded bg-white shadow text-center">
            <p className="italic mb-4">"Teaching astrodynamics is now effortless for my students."</p>
            <p className="font-semibold text-sm text-gray-800">– Dr. Sofia Müller</p>
          </div>
        </div>
      </section>

      <section className="text-center py-20 px-6 max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Ready for TRAJECTA?</h2>
        <p className="text-gray-600 mb-8">Start simulating your next space mission today.</p>
        <div className="space-x-4">
          <button
            className="bg-black text-white px-6 py-3 rounded"
            onClick={() => {
              document.getElementById("orbitViewerContainer")?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Try it out
          </button>
          <button
            className="border px-6 py-3 rounded"
            onClick={() => window.open("https://calendar.google.com", "_blank")}
          >
            Book a Demo
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
