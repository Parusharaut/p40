import React from 'react';

function DogCard({ dog }) {
  return (
    <div className="bg-white rounded-2xl shadow-2xl hover:scale-105 transform transition-all cursor-pointer w-80 h-auto"> {/* Increased width and shadow */}
      <img src={dog.imageURL} alt={dog.name} className="w-full h-64 object-cover rounded-t-2xl" /> {/* Increased image height */}
      <div className="p-6 text-center"> {/* Increased padding */}
        <h2 className="text-2xl font-bold text-gray-800">{dog.name}</h2> {/* Larger font size */}
        <p className="text-gray-600 mt-3 text-lg"><strong>Breed:</strong> {dog.breed}</p> {/* Larger text */}
        <p className="text-gray-600 text-lg"><strong>Age:</strong> {dog.age} years</p>
        <p className="text-gray-600 text-lg"><strong>Color:</strong> {dog.color}</p>
        <p className="text-gray-600 text-lg"><strong>Owner:</strong> {dog.owner}</p>
        <p className="text-gray-600 text-lg"><strong>Adopted:</strong> {dog.adopted ? 'Yes' : 'No'}</p>
        {dog.adopted && <p className="text-gray-600 text-lg"><strong>Adopted Date:</strong> {dog.adoptedDate}</p>}
      </div>
    </div>
  );
}

export default DogCard;