'use client';

import { Pause, SkipBack, SkipForward, Sparkles } from 'lucide-react';
import WireframeNavigation from '@/components/WireframeNavigation';

export default function AudioPage() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-50 p-4">
      <div
        className="w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl"
        style={{ height: '740px' }}
      >
        <div className="flex h-full flex-col bg-gradient-to-b from-purple-600 to-blue-600">
          <div className="p-6">
            <a href="/wireframe/library" className="text-sm text-white/80">
              ← Back to Library
            </a>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center p-8">
            <div className="mb-8 flex h-48 w-48 items-center justify-center rounded-3xl bg-white/20 backdrop-blur">
              <Sparkles size={64} className="text-white" />
            </div>
            <h2 className="mb-2 text-center text-2xl font-bold text-white">2027 Interview</h2>
            <p className="mb-8 text-center text-white/80">A look back at an inspiring journey</p>

            <div className="w-full space-y-4">
              <div className="flex items-center gap-2 text-sm text-white">
                <span>12:51</span>
                <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/30">
                  <div className="h-full w-1/4 rounded-full bg-white" />
                </div>
                <span>62:57</span>
              </div>
              <div className="flex items-center justify-center gap-6">
                <button className="text-white/80 hover:text-white">
                  <SkipBack size={32} />
                </button>
                <button className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-purple-600 shadow-xl">
                  <Pause size={28} />
                </button>
                <button className="text-white/80 hover:text-white">
                  <SkipForward size={32} />
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-t-3xl bg-white/10 p-6 backdrop-blur">
            <div className="text-sm leading-relaxed text-white/90">
              <p className="italic">
                "This interview captures the remarkable story of how you re-framed your perspective
                on multiple life events in order to make a series of critical decisions grounded in
                faith in yourslef and your higher power."
              </p>
            </div>
          </div>
        </div>
      </div>

      <WireframeNavigation />
    </div>
  );
}
