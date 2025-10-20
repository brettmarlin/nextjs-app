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
    <div className="w-full h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden" style={{ height: '740px' }}>
        <div className="h-full flex flex-col bg-gradient-to-b from-blue-50 to-purple-50 p-8">
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6">
              <Sparkles size={40} className="text-purple-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Jasper.ai</h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xs">
              Just talk and I'll help you reframe your thoughts, your life, and your future.
            </p>
            <div className="w-full space-y-3">
              <div className="bg-white/50 backdrop-blur rounded-2xl p-4 text-sm text-gray-700">
                <div className="font-medium mb-1">I Listen</div>
                <div className="text-gray-600">For context, patterns, and goals</div>
              </div>
              <div className="bg-white/50 backdrop-blur rounded-2xl p-4 text-sm text-gray-700">
                <div className="font-medium mb-1">I Reframe</div>
                <div className="text-gray-600">Paradigm-shifting insights that instantly change your situation</div>
              </div>
              <div className="bg-white/50 backdrop-blur rounded-2xl p-4 text-sm text-gray-700">
                <div className="font-medium mb-1">I Automate</div>
                <div className="text-gray-600">Audio for you to consume, stories from your future meditations, affirmations, and more</div>
              </div>
            </div>
          </div>
          
          <button onClick={handleBegin} className="w-full bg-purple-600 text-white rounded-2xl py-4 font-medium text-lg">
            Begin
          </button>
        </div>
      </div>
      
      <WireframeNavigation />
    </div>
  );
};

export default WireframeApp;