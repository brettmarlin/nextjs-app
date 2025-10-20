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
    <div className="w-full h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden" style={{ height: '740px' }}>
        <div className="h-full flex flex-col bg-white">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6">
            <h1 className="text-2xl font-bold mb-2">
              <button 
                onClick={() => setActiveTab(activeTab === 'audio' ? 'reframes' : 'audio')}
                className="hover:underline transition-all duration-200 hover:text-purple-200"
              >
                Your Reframes
              </button>
            </h1>
            <p className="text-sm text-white/80">100% personalized. Based on 12 conversations. Add More</p>
            
            {/* Tabs */}
            <div className="flex gap-1 mt-4 bg-white/20 rounded-xl p-1">
              <button
                onClick={() => setActiveTab('audio')}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                  activeTab === 'audio' 
                    ? 'bg-white text-purple-600 shadow-sm' 
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                Audio
              </button>
              <button
                onClick={() => setActiveTab('reframes')}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                  activeTab === 'reframes' 
                    ? 'bg-white text-purple-600 shadow-sm' 
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                Reframes
              </button>
            </div>
          </div>
          
          {/* Content based on active tab */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {activeTab === 'audio' ? (
              <>
                {/* Audio Content */}
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center">
                      <Sparkles size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">2027 Interview</div>
                      <div className="text-sm text-gray-600">How it all worked out.</div>
                    </div>
                    <div className="text-xs text-gray-500">63 min</div>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">This in-depth interview from 2027 reveals how you made great decisions despite the fear and uncertainty surrounding you. It goes into what you learned by effectively reframing your current situation.</p>
                  <button
                    className="w-full bg-white text-purple-600 rounded-xl py-3 font-medium flex items-center justify-center gap-2"
                    onClick={handleOpenPlayer}
                  >
                    <Play size={16} />
                    Listen
                  </button>
                </div>
                
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Listen</div>
                  
                  <div className="bg-white border border-gray-200 rounded-2xl p-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Headphones size={20} className="text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-gray-900 text-sm">Morning Frame</div>
                      <div className="text-xs text-gray-500">Listen while you get ready for the day · 8 min</div>
                    </div>
                    <Play size={20} className="text-gray-400 flex-shrink-0" />
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-2xl p-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Headphones size={20} className="text-green-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-gray-900 text-sm">Quick Relief</div>
                      <div className="text-xs text-gray-500">Breathwork + Reframe · 5 min</div>
                    </div>
                    <Play size={20} className="text-gray-400 flex-shrink-0" />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Games</div>
                  
                  <div className="bg-white border border-gray-200 rounded-2xl p-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Sparkles size={20} className="text-purple-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-gray-900 text-sm">"Affirm My Purpose"</div>
                      <div className="text-xs text-gray-500">9-day streak, keep going! · 3 min</div>
                    </div>
                    <Play size={20} className="text-gray-400 flex-shrink-0" />
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Reframes Content */}
                <div className="space-y-4">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Your Personal Reframes</div>
                  
                  {selectedReframes.length === 0 ? (
                    <div className="text-sm text-gray-600">No saved reframes yet. Keep some from the review.</div>
                  ) : (
                    selectedReframes.map((r) => (
                      <div key={r.id} className="bg-white border border-gray-200 rounded-2xl p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-sm font-medium text-gray-900">{r.theme}</span>
                        </div>
                        <div className="bg-purple-50 border-l-4 border-purple-500 p-3 rounded-r-lg mb-3">
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
