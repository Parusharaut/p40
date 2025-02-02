import React, { useState } from 'react';

export default function Walkdogs() {
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center text-red-800 mb-8">Schedule a Dog Walk</h1>
      
    </div>
  );
}