import React from 'react';
import { UploadForm } from '../components/UploadForm';
export function Admin() {
  return <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Upload Content</h2>
          <UploadForm />
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Manage Content</h2>
          {/* Add content management interface here */}
        </div>
      </div>
    </div>;
}