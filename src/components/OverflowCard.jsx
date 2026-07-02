const OverflowCard = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="relative w-80 rounded-3xl bg-white shadow-xl pt-20 px-6 pb-6">
          {/* Overflow Image */}
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500"
            alt="Profile"
            className="absolute -top-14 left-1/2 h-28 w-28 -translate-x-1/2 rounded-full border-4 border-white object-cover shadow-lg"
          />
  
          {/* Card Content */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800">John Doe</h2>
            <p className="mt-2 text-gray-500">
              Frontend Developer passionate about creating beautiful user
              interfaces with React and Tailwind CSS.
            </p>
  
            <button className="mt-6 rounded-full bg-blue-600 px-6 py-2 font-medium text-white transition hover:bg-blue-700">
              View Profile
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default OverflowCard;