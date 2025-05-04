import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import voyagerImage from '../assets/voyager.png'; // Update path as needed

function Details() {
  return (
    <div className="w-full font-sans">
      <Navbar />

      <section className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-2">Details</h1>
        <p className="text-gray-600 mb-10">How TRAJECTA works</p>

        <div className="rounded overflow-hidden mb-10">
          <img src={voyagerImage} alt="Voyager mission path" className="w-full rounded" />
        </div>

        <p className="text-gray-700 text-lg leading-relaxed">
          We took inspiration off the Voyager missions. The first probes sent beyond the solar system,
          they flew by most of the planets in our solar system in one calculated go. <strong>Trajecta</strong> shall replicate
          the same simulations and physics calculations that made missions like these possible.
        </p>
      </section>

      <Footer />
    </div>
  );
}

export default Details;