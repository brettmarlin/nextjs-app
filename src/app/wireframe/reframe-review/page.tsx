'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { MoreVertical, Check, RefreshCcw } from 'lucide-react';
import WireframeNavigation from '@/components/WireframeNavigation';
import { Reframe } from '@/lib/types';

export default function ReframeReviewPage() {
  const router = useRouter();
  const [selectedReframes, setSelectedReframes] = useState<Reframe[]>([]);
  const [reframes, setReframes] = useState<Reframe[]>([
    {
      id: 1,
      theme: "Career Change",
      mappedArea: "Solution Orientation",
      content: "Instead of seeing this job loss as a prison sentence, what if it's actually your liberation from a path that wasn't serving your authentic self? This could be your opportunity to align your work with your true values and passions.",
      mantra: "I'm finally gaining my liberation",
      status: "pending"
    },
    {
      id: 2,
      theme: "Identity as a Father",
      mappedArea: "Responsibility",
      content: "Your desire to shield your children from your stress shows deep love and responsibility. But consider this: showing them how you navigate challenges with courage and resilience might be the greatest gift you can give them.",
      mantra: "My children crave examples of reacting to change with grace.",
      status: "pending"
    },
    {
      id: 3,
      theme: "Identity as a Husband",
      mappedArea: "Grounding",
      content: "Your instinct to protect your wife from stress comes from love, but true partnership means sharing both joys and struggles. She chose you for who you are, including your capacity to face challenges together.",
      mantra: "My wife admires how I remian composed during this time",
      status: "pending"
    },
    {
      id: 4,
      theme: "Mission in Life",
      mappedArea: "Belief",
      content: "The feeling of being 'locked into limited options' might be a limiting belief. What if you're actually standing at the threshold of discovering a path that aligns with your deepest values and allows you to make a meaningful impact?",
      mantra: "I am standing at the threshold of my true calling.",
      status: "pending"
    }
  ]);

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

  useEffect(() => {
    try {
      localStorage.setItem('jaspr.selectedReframes', JSON.stringify(selectedReframes));
    } catch {
      // ignore
    }
  }, [selectedReframes]);

  const handleKeep = (reframe: Reframe) => {
    setSelectedReframes(prev => {
      if (prev.find(p => p.id === reframe.id)) return prev;
      return [...prev, { ...reframe, status: 'kept' }];
    });
  };

  const handleContinue = () => {
    router.push('/wireframe/library');
  };

  return (
    <div className="w-full h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden" style={{ height: '740px' }}>
        <div className="h-full flex flex-col bg-white">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6">
            <h1 className="text-xl font-bold mb-2">Review Your Reframes</h1>
            <p className="text-sm text-white/80">Personalized insights based on your conversation</p>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {reframes.map((reframe) => (
              <div key={reframe.id} className="bg-gray-50 rounded-2xl p-4 border border-gray-200">
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-900">{reframe.theme}</span>
                  </div>
                  <button className="p-1 rounded-full hover:bg-gray-200">
                    <MoreVertical size={16} className="text-gray-600" />
                  </button>
                </div>
                
                {/* Mapped Area */}
                <div className="mb-3">
                  <span className="text-xs text-gray-500">Mapped to: </span>
                  <span className="text-xs font-medium text-purple-600">{reframe.mappedArea}</span>
                </div>
                
                {/* Mantra */}
                <div className="mb-3">
                  <div className="bg-purple-100 border-l-4 border-purple-500 p-3 rounded-r-lg">
                    <p className="text-sm font-medium text-purple-800 italic">"{reframe.mantra}"</p>
                  </div>
                </div>
                
                {/* Reframe Content */}
                <div className="mb-4">
                  <p className="text-sm text-gray-700 leading-relaxed">{reframe.content}</p>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setReframes(prev => prev.map(r => r.id === reframe.id ? {
                        ...r,
                        content: `${r.content.split('. ')[0]}. Here is an alternative angle to consider that emphasizes agency and possibility.`,
                      } : r));
                    }}
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-700 rounded-xl py-2 px-4 text-sm font-medium hover:bg-gray-200 transition-colors"
                  >
                    <RefreshCcw size={16} />
                    Regenerate
                  </button>
                  <button
                    onClick={() => handleKeep(reframe)}
                    className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white rounded-xl py-2 px-4 text-sm font-medium hover:bg-green-600 transition-colors"
                  >
                    <Check size={16} />
                    Keep
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom Actions */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex gap-2">
              <button className="flex-1 bg-gray-100 text-gray-700 rounded-xl py-3 text-sm font-medium hover:bg-gray-200 transition-colors">
                Review All Later
              </button>
              <button 
                onClick={handleContinue}
                className="flex-1 bg-purple-600 text-white rounded-xl py-3 text-sm font-medium hover:bg-purple-700 transition-colors"
              >
                Continue to Frames
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <WireframeNavigation />
    </div>
  );
}
