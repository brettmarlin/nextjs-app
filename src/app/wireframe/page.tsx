'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle, Sparkles, Headphones, Play, Pause, SkipBack, SkipForward } from 'lucide-react';

const WireframeApp = () => {
  const [currentScreen, setCurrentScreen] = useState(0);

  const screens = [
    {
      name: "Welcome",
      component: <WelcomeScreen />
    },
    {
      name: "Conversation",
      component: <ConversationScreen />
    },
    {
      name: "Processing",
      component: <ProcessingScreen />
    },
    {
      name: "Audio Library",
      component: <AudioLibraryScreen />
    },
    {
      name: "Audio Player",
      component: <AudioPlayerScreen />
    }
  ];

  return (
    <div className="w-full h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden" style={{ height: '740px' }}>
        {screens[currentScreen].component}
      </div>
      
      <div className="mt-6 flex items-center gap-4">
        <button
          onClick={() => setCurrentScreen(Math.max(0, currentScreen - 1))}
          disabled={currentScreen === 0}
          className="p-2 rounded-full bg-white shadow disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50"
        >
          <ChevronLeft size={24} />
        </button>
        
        <div className="text-center">
          <div className="font-medium text-gray-900">{screens[currentScreen].name}</div>
          <div className="text-sm text-gray-500">{currentScreen + 1} of {screens.length}</div>
        </div>
        
        <button
          onClick={() => setCurrentScreen(Math.min(screens.length - 1, currentScreen + 1))}
          disabled={currentScreen === screens.length - 1}
          className="p-2 rounded-full bg-white shadow disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

const WelcomeScreen = () => (
  <div className="h-full flex flex-col bg-gradient-to-b from-blue-50 to-purple-50 p-8">
    <div className="flex-1 flex flex-col items-center justify-center text-center">
      <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6">
        <Sparkles size={40} className="text-purple-600" />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Morrie</h1>
      <p className="text-lg text-gray-600 mb-8 max-w-xs">
        Just talk and I'll help you reframe your thoughts, your life, and your future.
      </p>
      <div className="w-full space-y-3">
        <div className="bg-white/50 backdrop-blur rounded-2xl p-4 text-sm text-gray-700">
          <div className="font-medium mb-1">Your guide understands</div>
          <div className="text-gray-600">Evidence-based therapeutic approaches</div>
        </div>
        <div className="bg-white/50 backdrop-blur rounded-2xl p-4 text-sm text-gray-700">
          <div className="font-medium mb-1">Personalized for you</div>
          <div className="text-gray-600">Stories and meditations created just for you</div>
        </div>
      </div>
    </div>
    
    <button className="w-full bg-purple-600 text-white rounded-2xl py-4 font-medium text-lg">
      Begin Your Journey
    </button>
  </div>
);

const ConversationScreen = () => (
  <div className="h-full flex flex-col bg-white">
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-b-3xl shadow-lg">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
          <MessageCircle size={20} />
        </div>
        <div>
          <div className="font-medium">Your Guide</div>
          <div className="text-xs text-white/80">Here to listen</div>
        </div>
      </div>
    </div>
    
    <div className="flex-1 overflow-y-auto p-6 space-y-4">
      <div className="flex gap-3">
        <div className="w-8 h-8 bg-purple-100 rounded-full flex-shrink-0" />
        <div className="bg-gray-100 rounded-2xl rounded-tl-none p-4 max-w-xs">
          <p className="text-gray-800 text-sm">Hello, I'm here to listen. What's been on your mind lately?</p>
        </div>
      </div>
      
      <div className="flex gap-3 justify-end">
        <div className="bg-purple-600 text-white rounded-2xl rounded-tr-none p-4 max-w-xs">
          <p className="text-sm">I've been feeling really overwhelmed with work and can't seem to shake this anxious feeling.</p>
        </div>
        <div className="w-8 h-8 bg-blue-100 rounded-full flex-shrink-0" />
      </div>
      
      <div className="flex gap-3">
        <div className="w-8 h-8 bg-purple-100 rounded-full flex-shrink-0" />
        <div className="bg-gray-100 rounded-2xl rounded-tl-none p-4 max-w-xs">
          <p className="text-gray-800 text-sm">That sounds really difficult. Can you tell me more about what's happening at work that's contributing to this feeling?</p>
        </div>
      </div>
      
      <div className="text-center py-2">
        <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-xs">
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
          Listening and understanding...
        </div>
      </div>
    </div>
    
    <div className="p-4 border-t border-gray-200">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Share what's on your mind..."
          className="flex-1 bg-gray-100 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <button className="bg-purple-600 text-white rounded-2xl px-6 py-3 text-sm font-medium">
          Send
        </button>
      </div>
    </div>
  </div>
);

const ProcessingScreen = () => (
  <div className="h-full flex flex-col items-center justify-center bg-gradient-to-b from-purple-50 to-blue-50 p-8">
    <div className="text-center space-y-6">
      <div className="relative">
        <div className="w-32 h-32 bg-purple-200 rounded-full absolute animate-ping opacity-20" />
        <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center relative">
          <Sparkles size={48} className="text-white animate-pulse" />
        </div>
      </div>
      
      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-gray-900">Creating Your Journey</h2>
        <p className="text-gray-600 max-w-xs mx-auto">
          I'm mapping your thought patterns and crafting personalized reframes just for you
        </p>
      </div>
      
      <div className="w-full space-y-3 pt-4">
        <div className="bg-white rounded-2xl p-4 flex items-center gap-3">
          <div className="w-2 h-2 bg-green-500 rounded-full" />
          <div className="text-sm text-gray-700">Understanding your experience</div>
        </div>
        <div className="bg-white rounded-2xl p-4 flex items-center gap-3">
          <div className="w-2 h-2 bg-green-500 rounded-full" />
          <div className="text-sm text-gray-700">Identifying thought patterns</div>
        </div>
        <div className="bg-white rounded-2xl p-4 flex items-center gap-3">
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
          <div className="text-sm text-gray-700">Generating reframes</div>
        </div>
        <div className="bg-white rounded-2xl p-4 flex items-center gap-3">
          <div className="w-2 h-2 bg-gray-300 rounded-full" />
          <div className="text-sm text-gray-400">Creating your audio stories</div>
        </div>
      </div>
    </div>
  </div>
);

const AudioLibraryScreen = () => (
  <div className="h-full flex flex-col bg-white">
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6">
      <h1 className="text-2xl font-bold mb-2">Your Audio Journey</h1>
      <p className="text-sm text-white/80">Personalized stories and meditations</p>
    </div>
    
    <div className="flex-1 overflow-y-auto p-6 space-y-4">
      <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-5">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center">
            <Sparkles size={24} className="text-white" />
          </div>
          <div className="flex-1">
            <div className="font-semibold text-gray-900">Your Future Self</div>
            <div className="text-sm text-gray-600">A story from the future</div>
          </div>
          <div className="text-xs text-gray-500">12 min</div>
        </div>
        <p className="text-sm text-gray-700 mb-3">A message from the version of you who overcame this challenge...</p>
        <button className="w-full bg-white text-purple-600 rounded-xl py-3 font-medium flex items-center justify-center gap-2">
          <Play size={16} />
          Play Story
        </button>
      </div>
      
      <div className="space-y-3">
        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Meditations</div>
        
        <div className="bg-white border border-gray-200 rounded-2xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <Headphones size={20} className="text-blue-600" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-medium text-gray-900 text-sm">Morning Reframe</div>
            <div className="text-xs text-gray-500">Guided meditation · 8 min</div>
          </div>
          <Play size={20} className="text-gray-400 flex-shrink-0" />
        </div>
        
        <div className="bg-white border border-gray-200 rounded-2xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <Headphones size={20} className="text-green-600" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-medium text-gray-900 text-sm">Anxiety Release</div>
            <div className="text-xs text-gray-500">Breathwork · 5 min</div>
          </div>
          <Play size={20} className="text-gray-400 flex-shrink-0" />
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Affirmations</div>
        
        <div className="bg-white border border-gray-200 rounded-2xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <Sparkles size={20} className="text-purple-600" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-medium text-gray-900 text-sm">I Am Capable</div>
            <div className="text-xs text-gray-500">Daily affirmation · 3 min</div>
          </div>
          <Play size={20} className="text-gray-400 flex-shrink-0" />
        </div>
      </div>
    </div>
  </div>
);

const AudioPlayerScreen = () => (
  <div className="h-full flex flex-col bg-gradient-to-b from-purple-600 to-blue-600">
    <div className="p-6">
      <button className="text-white/80 text-sm">← Back to Library</button>
    </div>
    
    <div className="flex-1 flex flex-col items-center justify-center p-8">
      <div className="w-48 h-48 bg-white/20 backdrop-blur rounded-3xl mb-8 flex items-center justify-center">
        <Sparkles size={64} className="text-white" />
      </div>
      
      <h2 className="text-2xl font-bold text-white text-center mb-2">Your Future Self</h2>
      <p className="text-white/80 text-center mb-8">A story from the future</p>
      
      <div className="w-full space-y-4">
        <div className="flex items-center gap-2 text-white text-sm">
          <span>2:34</span>
          <div className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
            <div className="h-full w-1/4 bg-white rounded-full" />
          </div>
          <span>12:00</span>
        </div>
        
        <div className="flex items-center justify-center gap-6">
          <button className="text-white/80 hover:text-white">
            <SkipBack size={32} />
          </button>
          <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-purple-600 shadow-xl">
            <Pause size={28} />
          </button>
          <button className="text-white/80 hover:text-white">
            <SkipForward size={32} />
          </button>
        </div>
      </div>
    </div>
    
    <div className="bg-white/10 backdrop-blur rounded-t-3xl p-6">
      <div className="text-sm text-white/90 leading-relaxed">
        <p className="italic">"Looking back from where you are now, you see that moment differently. The overwhelm you felt wasn't a sign of weakness, but your mind's way of asking for change..."</p>
      </div>
    </div>
  </div>
);

export default WireframeApp;
