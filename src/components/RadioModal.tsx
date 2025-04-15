import React, { useEffect, useState } from 'react';
import { XIcon } from 'lucide-react';
interface RadioModalProps {
  onAccept: () => void;
  onClose: () => void;
}
export function RadioModal({
  onAccept,
  onClose
}: RadioModalProps) {
  const [countdown, setCountdown] = useState(10);
  const [isActive, setIsActive] = useState(true);
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (countdown > 0 && isActive) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else if (countdown === 0 && isActive) {
      onAccept();
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [countdown, isActive, onAccept]);
  if (!isActive) return null;
  return <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">
            Radio inizierà tra {countdown} secondi:
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <XIcon size={24} />
          </button>
        </div>
        <div className="text-center mb-6">
          <div className="text-4xl font-bold text-indigo-600 mb-4">
            {countdown}
          </div>
        </div>
        <div className="flex justify-center space-x-4">
          <button onClick={onAccept} className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors">
            Accetta
          </button>
          <button onClick={onClose} className="border border-gray-300 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors">
            Chiudi
          </button>
        </div>
      </div>
    </div>;
}