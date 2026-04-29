const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white py-4 shadow-md">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Resume Builder</h1>
        <div className="space-x-6">
          <button className="hover:underline">Home</button>
          <button className="hover:underline">Templates</button>
          <button className="hover:underline">My Resumes</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;