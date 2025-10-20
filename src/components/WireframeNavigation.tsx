'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

const screens = [
  { name: 'Welcome', path: '/wireframe' },
  { name: 'Conversation', path: '/wireframe/conversation' },
  { name: 'Processing', path: '/wireframe/processing' },
  { name: 'Reframe Review', path: '/wireframe/reframe-review' },
  { name: 'Frame Library', path: '/wireframe/library' },
  { name: 'Audio Player', path: '/wireframe/audio' },
];

export default function WireframeNavigation() {
  const router = useRouter();
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
  const currentIndex = screens.findIndex((screen) => screen.path === currentPath);

  const goToPrevious = () => {
    if (currentIndex > 0) {
      router.push(screens[currentIndex - 1].path);
    }
  };

  const goToNext = () => {
    if (currentIndex < screens.length - 1) {
      router.push(screens[currentIndex + 1].path);
    }
  };

  return (
    <div className="mt-6 flex items-center gap-4">
      <button
        onClick={goToPrevious}
        disabled={currentIndex <= 0}
        className="rounded-full bg-white p-2 shadow hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30"
      >
        <ChevronLeft size={24} />
      </button>

      <div className="text-center">
        <div className="font-medium text-gray-900">{screens[currentIndex]?.name || 'Welcome'}</div>
        <div className="text-sm text-gray-500">
          {currentIndex + 1} of {screens.length}
        </div>
      </div>

      <button
        onClick={goToNext}
        disabled={currentIndex >= screens.length - 1}
        className="rounded-full bg-white p-2 shadow hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
