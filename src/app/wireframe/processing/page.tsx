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
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-50 p-4">
      <div
        className="w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl"
        style={{ height: '740px' }}
      >
        <div className="flex h-full flex-col items-center justify-center bg-gradient-to-b from-purple-50 to-blue-50 p-8">
          <div className="space-y-6 text-center">
            <div className="relative">
              <div className="absolute h-32 w-32 animate-ping rounded-full bg-purple-200 opacity-20" />
              <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-blue-400">
                <Sparkles size={48} className="animate-pulse text-white" />
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">Progress</h2>
              <p className="mx-auto max-w-xs text-gray-600">
                I've mapped your thought patterns and created personalized reframes just for you
              </p>
            </div>

            <div className="w-full space-y-3 pt-4">
              <div className="flex items-center gap-3 rounded-2xl bg-white p-4">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <div className="text-sm text-gray-700">Understanding your context and goals</div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-white p-4">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <div className="text-sm text-gray-700">Mapping your thought patterns - 87%</div>
              </div>
              <div className="relative flex items-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-purple-50 to-blue-50 p-4">
                <div className="h-2 w-2 animate-pulse rounded-full bg-purple-400" />
                <div className="text-sm font-medium text-gray-700">Review Reframes - 3 New</div>
                <div className="animate-shimmer absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              </div>
              <div className="relative flex items-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100 p-4">
                <div className="h-2 w-2 animate-pulse rounded-full bg-gray-300" />
                <div className="text-sm text-gray-500">Creating your audio stories - 2 New</div>
                <div className="animate-shimmer absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </div>
            </div>

            <button
              onClick={handleReview}
              className="mt-6 w-full rounded-2xl bg-purple-600 py-4 text-lg font-medium text-white transition-colors hover:bg-purple-700"
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
