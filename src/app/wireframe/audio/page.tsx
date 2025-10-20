'use client';

import { Pause, SkipBack, SkipForward, Sparkles } from 'lucide-react';
import WireframeNavigation from '@/components/WireframeNavigation';

export default function AudioPage() {
  return (
    <div className="w-full h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden" style={{ height: '740px' }}>
        <div className="h-full flex flex-col bg-gradient-to-b from-purple-600 to-blue-600">
          <div className="p-6">
            <a href="/wireframe/library" className="text-white/80 text-sm">← Back to Library</a>
          </div>
          
          <div className="flex-1 flex flex-col items-center justify-center p-8">
            <div className="w-48 h-48 bg-white/20 backdrop-blur rounded-3xl mb-8 flex items-center justify-center">
              <Sparkles size={64} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white text-center mb-2">2027 Interview</h2>
            <p className="text-white/80 text-center mb-8">A look back at an inspiring journey</p>
            
            <div className="w-full space-y-4">
              <div className="flex items-center gap-2 text-white text-sm">
                <span>12:51</span>
                <div className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                  <div className="h-full w-1/4 bg-white rounded-full" />
                </div>
                <span>62:57</span>
              </div>
              <div className="flex items-center justify-center gap-6">
                <button className="text-white/80 hover:text-white"><SkipBack size={32} /></button>
                <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-purple-600 shadow-xl"><Pause size={28} /></button>
                <button className="text-white/80 hover:text-white"><SkipForward size={32} /></button>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-t-3xl p-6">
            <div className="text-sm text-white/90 leading-relaxed">
              <p className="italic">"This interview captures the remarkable story of how you re-framed your perspective on multiple life events in order to make a series of critical decisions grounded in faith in yourslef and your higher power."</p>
            </div>
          </div>
        </div>
      </div>
      
      <WireframeNavigation />
    </div>
  );
}


