import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="flex justify-between items-center px-30 py-4 border-b w-full">
      <div className="text-xl font-bold">TRAJECTA</div>
      <nav className="space-x-6">
        <Link to="/" className="text-gray-700 hover:underline">Home</Link>
        <Link to="/details" className="text-gray-700 hover:underline">Details</Link>
        <Link to="/about" className="text-gray-700 hover:underline">About us</Link>
        {/* <button className="bg-black text-white px-4 py-2 rounded">Buy</button> */}
      </nav>
    </header>
  );
}

export default Navbar;