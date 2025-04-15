import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserIcon, KeyIcon, RadioIcon } from 'lucide-react';
export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password') {
      navigate('/admin');
    }
  };
  return <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 artistic-bg">
      <div className="max-w-md w-full space-y-8 relative">
        <div className="absolute inset-0 -z-10 paint-stroke"></div>
        <div className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <RadioIcon size={32} className="text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Benvenuto</h2>
            <p className="text-gray-600 mb-8">
              Accedi per gestire i contenuti della radio
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <div className="flex items-center border-2 border-gray-200 rounded-xl p-2 focus-within:border-blue-500 transition-colors">
                  <UserIcon size={20} className="text-gray-400 mx-2" />
                  <input id="username" name="username" type="text" required className="flex-1 p-2 focus:outline-none" placeholder="Nome utente" value={username} onChange={e => setUsername(e.target.value)} />
                </div>
              </div>
              <div>
                <div className="flex items-center border-2 border-gray-200 rounded-xl p-2 focus-within:border-blue-500 transition-colors">
                  <KeyIcon size={20} className="text-gray-400 mx-2" />
                  <input id="password" name="password" type="password" required className="flex-1 p-2 focus:outline-none" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
              </div>
            </div>
            <div>
              <button type="submit" className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                Accedi
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>;
}