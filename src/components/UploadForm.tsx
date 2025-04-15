import React, { useState } from 'react';
import { UploadIcon } from 'lucide-react';
export function UploadForm() {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('podcast');
  const [file, setFile] = useState<File | null>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle file upload - implement actual upload logic
    console.log('Uploading:', {
      title,
      type,
      file
    });
  };
  return <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Title
        </label>
        <input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2.5" required />
      </div>
      <div>
        <label htmlFor="type" className="block text-sm font-medium text-gray-700">
          Content Type
        </label>
        <select id="type" value={type} onChange={e => setType(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2.5">
          <option value="podcast">Podcast</option>
          <option value="music">Music</option>
          <option value="news">News</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Audio File
        </label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
          <div className="space-y-1 text-center">
            <UploadIcon size={24} className="mx-auto text-gray-400" />
            <div className="flex text-sm text-gray-600">
              <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500">
                <span>Upload a file</span>
                <input id="file-upload" name="file-upload" type="file" className="sr-only" accept="audio/*" onChange={e => setFile(e.target.files?.[0] || null)} />
              </label>
            </div>
            <p className="text-xs text-gray-500">MP3, WAV up to 50MB</p>
          </div>
        </div>
      </div>
      <button type="submit" className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Upload Content
      </button>
    </form>;
}