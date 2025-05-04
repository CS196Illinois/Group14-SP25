import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import profile from '../assets/francisco.png'; // your team member's photo
import heroBg from '../assets/about-hero.jpg'; // the background image at the top

function About() {
  return (
    <div className="w-full font-sans">
      <Navbar />

      {/* Hero Section */}
      <div
        className="w-full h-[500px] bg-cover bg-center flex flex-col justify-center items-center text-white"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <h1 className="text-5xl font-bold mb-4">About us</h1>
        <p className="text-center text-lg max-w-xl px-4">
          Empowering the next generation of space missions through cutting-edge analytics and collaborative simulation
        </p>
      </div>

      {/* Team Section */}
      <section className="py-16 px-8 flex flex-col md:flex-row justify-between items-center gap-10 max-w-6xl mx-auto">
        <div className="text-left">
          <h2 className="text-2xl font-bold mb-2">Francisco</h2>
          <p className="text-gray-500">Aerospace Engineering</p>
        </div>
        <div>
          <img src={profile} alt="Francisco" className="rounded shadow-lg w-[300px] object-cover" />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;