import React from 'react';
import { CalendarIcon, ClockIcon } from 'lucide-react';
import { AudioPlayer } from './AudioPlayer';
interface EpisodeCardProps {
  title: string;
  description: string;
  date: string;
  duration: string;
  image: string;
}
export function EpisodeCard({
  title,
  description,
  date,
  duration,
  image
}: EpisodeCardProps) {
  return <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <div className="flex items-center mr-4">
            <CalendarIcon size={16} className="mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <ClockIcon size={16} className="mr-1" />
            <span>{duration}</span>
          </div>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <AudioPlayer title={title} duration={duration} />
      </div>
    </div>;
}