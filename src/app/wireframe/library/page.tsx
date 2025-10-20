'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Sparkles, Headphones, Play } from 'lucide-react';
import WireframeNavigation from '@/components/WireframeNavigation';
import { Reframe } from '@/lib/types';

export default function LibraryPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('audio');
  const [selectedReframes, setSelectedReframes] = useState<Reframe[]>([]);

  // hydrate selected reframes from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem('jaspr.selectedReframes');
      if (raw) {
        const parsed = JSON.parse(raw) as Reframe[];
        setSelectedReframes(parsed);
      }
    } catch {
      // ignore
    }
  }, []);

  const handleOpenPlayer = () => {
    router.push('/wireframe/audio');
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-50 p-4">
      <div
        className="w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl"
        style={{ height: '740px' }}
      >
        <div className="flex h-full flex-col bg-white">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-white">
            <h1 className="mb-2 text-2xl font-bold">
              <button
                onClick={() => setActiveTab(activeTab === 'audio' ? 'reframes' : 'audio')}
                className="transition-all duration-200 hover:text-purple-200 hover:underline"
              >
                Your Reframes
              </button>
            </h1>
            <p className="text-sm text-white/80">
              100% personalized. Based on 12 conversations. Add More
            </p>

            {/* Tabs */}
            <div className="mt-4 flex gap-1 rounded-xl bg-white/20 p-1">
              <button
                onClick={() => setActiveTab('audio')}
                className={`flex-1 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  activeTab === 'audio'
                    ? 'bg-white text-purple-600 shadow-sm'
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
              >
                Audio
              </button>
              <button
                onClick={() => setActiveTab('reframes')}
                className={`flex-1 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  activeTab === 'reframes'
                    ? 'bg-white text-purple-600 shadow-sm'
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
              >
                Reframes
              </button>
            </div>
          </div>

          {/* Content based on active tab */}
          <div className="flex-1 space-y-4 overflow-y-auto p-6">
            {activeTab === 'audio' ? (
              <>
                {/* Audio Content */}
                <div className="rounded-3xl bg-gradient-to-br from-purple-100 to-blue-100 p-5">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500">
                      <Sparkles size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">2027 Interview</div>
                      <div className="text-sm text-gray-600">How it all worked out.</div>
                    </div>
                    <div className="text-xs text-gray-500">63 min</div>
                  </div>
                  <p className="mb-3 text-sm text-gray-700">
                    This in-depth interview from 2027 reveals how you made great decisions despite
                    the fear and uncertainty surrounding you. It goes into what you learned by
                    effectively reframing your current situation.
                  </p>
                  <button
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 font-medium text-purple-600"
                    onClick={handleOpenPlayer}
                  >
                    <Play size={16} />
                    Listen
                  </button>
                </div>

                <div className="space-y-3">
                  <div className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                    Listen
                  </div>

                  <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-blue-100">
                      <Headphones size={20} className="text-blue-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-medium text-gray-900">Morning Frame</div>
                      <div className="text-xs text-gray-500">
                        Listen while you get ready for the day · 8 min
                      </div>
                    </div>
                    <Play size={20} className="flex-shrink-0 text-gray-400" />
                  </div>

                  <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-green-100">
                      <Headphones size={20} className="text-green-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-medium text-gray-900">Quick Relief</div>
                      <div className="text-xs text-gray-500">Breathwork + Reframe · 5 min</div>
                    </div>
                    <Play size={20} className="flex-shrink-0 text-gray-400" />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                    Games
                  </div>

                  <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-purple-100">
                      <Sparkles size={20} className="text-purple-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-medium text-gray-900">"Affirm My Purpose"</div>
                      <div className="text-xs text-gray-500">9-day streak, keep going! · 3 min</div>
                    </div>
                    <Play size={20} className="flex-shrink-0 text-gray-400" />
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Reframes Content */}
                <div className="space-y-4">
                  <div className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                    Your Personal Reframes
                  </div>

                  {selectedReframes.length === 0 ? (
                    <div className="text-sm text-gray-600">
                      No saved reframes yet. Keep some from the review.
                    </div>
                  ) : (
                    selectedReframes.map((r) => (
                      <div key={r.id} className="rounded-2xl border border-gray-200 bg-white p-4">
                        <div className="mb-3 flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                          <span className="text-sm font-medium text-gray-900">{r.theme}</span>
                        </div>
                        <div className="mb-3 rounded-r-lg border-l-4 border-purple-500 bg-purple-50 p-3">
                          <p className="text-sm font-medium text-purple-800 italic">"{r.mantra}"</p>
                        </div>
                        <p className="text-xs text-gray-600">Mapped to: {r.mappedArea}</p>
                      </div>
                    ))
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <WireframeNavigation />
    </div>
  );
}
