import React, { useState } from 'react';
import { PlayIcon, PauseIcon, SkipBackIcon, SkipForwardIcon, VolumeIcon, Volume2Icon } from 'lucide-react';
interface AudioPlayerProps {
  title: string;
  duration: string;
  autoPlay?: boolean;
  onPlayPause?: (isPlaying: boolean) => void;
  isPlaying?: boolean;
}
export function AudioPlayer({
  title,
  duration,
  autoPlay,
  onPlayPause,
  isPlaying: externalIsPlaying
}: AudioPlayerProps) {
  const [internalIsPlaying, setInternalIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const isPlaying = externalIsPlaying !== undefined ? externalIsPlaying : internalIsPlaying;
  const togglePlay = () => {
    if (onPlayPause) {
      onPlayPause(!isPlaying);
    } else {
      setInternalIsPlaying(!isPlaying);
    }
  };
  const toggleMute = () => setIsMuted(!isMuted);
  return <div className="bg-white rounded-lg shadow p-6 artistic-bg">
      <div className="flex justify-between items-center mb-4">
        <span className="font-medium text-gray-800 text-lg">{title}</span>
        <span className="text-sm text-blue-600 font-medium">{duration}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div className="bg-blue-600 h-2 rounded-full relative" style={{
        width: '45%'
      }}>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full shadow-lg"></div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <button className="text-gray-600 hover:text-blue-700 transition-colors">
            <SkipBackIcon size={24} />
          </button>
          <button className="bg-blue-600 text-white rounded-full p-4 hover:bg-blue-700 transition-colors transform hover:scale-105" onClick={togglePlay}>
            {isPlaying ? <PauseIcon size={24} /> : <PlayIcon size={24} />}
          </button>
          <button className="text-gray-600 hover:text-blue-700 transition-colors">
            <SkipForwardIcon size={24} />
          </button>
        </div>
        <button className="text-gray-600 hover:text-blue-700 transition-colors" onClick={toggleMute}>
          {isMuted ? <VolumeIcon size={24} /> : <Volume2Icon size={24} />}
        </button>
      </div>
    </div>;
}