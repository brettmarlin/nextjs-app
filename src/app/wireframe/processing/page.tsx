'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Sparkles } from 'lucide-react';
import WireframeNavigation from '@/components/WireframeNavigation';

export default function ProcessingPage() {
  const router = useRouter();

  const handleReview = () => {
    router.push('/wireframe/reframe-review');
  };

  return (
    <div className="w-full h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden" style={{ height: '740px' }}>
        <div className="h-full flex flex-col items-center justify-center bg-gradient-to-b from-purple-50 to-blue-50 p-8">
          <div className="text-center space-y-6">
            <div className="relative">
              <div className="w-32 h-32 bg-purple-200 rounded-full absolute animate-ping opacity-20" />
              <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center relative">
                <Sparkles size={48} className="text-white animate-pulse" />
              </div>
            </div>
            
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">Progress</h2>
              <p className="text-gray-600 max-w-xs mx-auto">
                I've mapped your thought patterns and created personalized reframes just for you
              </p>
            </div>
            
            <div className="w-full space-y-3 pt-4">
              <div className="bg-white rounded-2xl p-4 flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <div className="text-sm text-gray-700">Understanding your context and goals</div>
              </div>
              <div className="bg-white rounded-2xl p-4 flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <div className="text-sm text-gray-700">Mapping your thought patterns - 87%</div>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-4 flex items-center gap-3 relative overflow-hidden">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                <div className="text-sm text-gray-700 font-medium">Review Reframes - 3 New</div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer"></div>
              </div>
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-4 flex items-center gap-3 relative overflow-hidden">
                <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse" />
                <div className="text-sm text-gray-500">Creating your audio stories - 2 New</div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer"></div>
              </div>
            </div>
            
            <button 
              onClick={handleReview}
              className="w-full bg-purple-600 text-white rounded-2xl py-4 font-medium text-lg hover:bg-purple-700 transition-colors mt-6"
            >
              Review Reframes
            </button>
          </div>
        </div>
      </div>
      
      <WireframeNavigation />
    </div>
  );
}
