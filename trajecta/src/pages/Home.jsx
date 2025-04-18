import React from 'react';

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <iframe
        id="orbitViewerContainer"
        title="NASA PSG Orbits"
        style={{ width: '900px', height: '600px', border: '0px' }}
        allowFullScreen
        scrolling="no"
        src="/orbit/orbit.html"
      ></iframe>
    </div>
  );
}

export default Home;