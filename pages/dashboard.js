import React from 'react';
import Head from 'next/head';

const Dashboard = () => {
  // Replace this with your actual data
  const userData = {
    name: 'Triston Ramos',
    email: 'tksomar@gmail.com',
    role: 'Admin',
    // Add more user-related data here
  };

  return (
    <div>
        <div className="bg-gray-200 min-h-screen flex items-center justify-center">
            <div className="bg-white shadow-lg p-8 rounded-lg w-80">
                <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
                <div>
                    <h2 className="text-lg font-semibold">Welcome, {userData.name}!</h2>
                    <p className="text-gray-600">Email: {userData.email}</p>
                    <p className="text-gray-600">Role: {userData.role}</p>
                    {/* You can add more dashboard content here */}
                </div>
            </div>
        </div>
    </div>
  );
};

export default Dashboard;
