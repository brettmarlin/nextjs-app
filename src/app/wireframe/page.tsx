'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Sparkles } from 'lucide-react';
import WireframeNavigation from '@/components/WireframeNavigation';

const WireframeApp = () => {
  const router = useRouter();

  const handleBegin = () => {
    router.push('/wireframe/conversation');
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-50 p-4">
      <div
        className="w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl"
        style={{ height: '740px' }}
      >
        <div className="flex h-full flex-col bg-gradient-to-b from-blue-50 to-purple-50 p-8">
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-purple-100">
              <Sparkles size={40} className="text-purple-600" />
            </div>
            <h1 className="mb-4 text-3xl font-bold text-gray-900">Jasper.ai</h1>
            <p className="mb-8 max-w-xs text-lg text-gray-600">
              Just talk and I'll help you reframe your thoughts, your life, and your future.
            </p>
            <div className="w-full space-y-3">
              <div className="rounded-2xl bg-white/50 p-4 text-sm text-gray-700 backdrop-blur">
                <div className="mb-1 font-medium">I Listen</div>
                <div className="text-gray-600">For context, patterns, and goals</div>
              </div>
              <div className="rounded-2xl bg-white/50 p-4 text-sm text-gray-700 backdrop-blur">
                <div className="mb-1 font-medium">I Reframe</div>
                <div className="text-gray-600">
                  Paradigm-shifting insights that instantly change your situation
                </div>
              </div>
              <div className="rounded-2xl bg-white/50 p-4 text-sm text-gray-700 backdrop-blur">
                <div className="mb-1 font-medium">I Automate</div>
                <div className="text-gray-600">
                  Audio for you to consume, stories from your future meditations, affirmations, and
                  more
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={handleBegin}
            className="w-full rounded-2xl bg-purple-600 py-4 text-lg font-medium text-white"
          >
            Begin
          </button>
        </div>
      </div>

      <WireframeNavigation />
    </div>
  );
};

export default WireframeApp;
