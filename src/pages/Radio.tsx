import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { RadioModal } from '../components/RadioModal';
import { AudioPlayer } from '../components/AudioPlayer';
export function Radio() {
  const [showModal, setShowModal] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const navigate = useNavigate();
  const handleAccept = () => {
    setShowModal(false);
    setIsPlaying(true);
    if (videoRef.current && audioRef.current) {
      videoRef.current.play();
      audioRef.current.play();
    }
  };
  const handleClose = () => {
    navigate('/');
  };
  const togglePlayback = () => {
    if (videoRef.current && audioRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        audioRef.current.pause();
      } else {
        videoRef.current.play();
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  return <div className="container mx-auto px-4 py-8">
      {showModal && <RadioModal onAccept={handleAccept} onClose={handleClose} />}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 wavy-line">Radio Live</h1>
        {isPlaying && <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <video ref={videoRef} className="w-full h-full object-cover" loop muted>
                  <source src="https://example.com/stream.m3u8" type="application/x-mpegURL" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">Studio Live Stream</h2>
                <p className="text-gray-600">
                  Guarda cosa succede dietro le quinte mentre trasmettiamo in
                  diretta!
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <audio ref={audioRef} className="hidden" src="https://example.com/audio-stream.m3u8" />
              <AudioPlayer title="Radio Stream" duration="Live" autoPlay={true} onPlayPause={togglePlayback} isPlaying={isPlaying} />
            </div>
            <div className="bg-blue-50 rounded-lg p-6 paint-stroke">
              <h3 className="text-xl font-bold mb-4">Programma Attuale</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">
                    Morning Show con Alessandro
                  </span>
                  <span className="text-blue-600">08:00 - 10:00</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">
                    Prossimo: Musica & Cultura
                  </span>
                  <span className="text-blue-600">10:00 - 12:00</span>
                </div>
              </div>
            </div>
          </div>}
      </div>
    </div>;
}