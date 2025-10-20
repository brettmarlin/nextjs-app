'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { MessageCircle } from 'lucide-react';
import WireframeNavigation from '@/components/WireframeNavigation';
import { ChatMessage } from '@/lib/types';

export default function ConversationPage() {
  const router = useRouter();
  const [chatInput, setChatInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([{
    id: 'm1',
    role: 'assistant',
    text: "Hi Brett, just start talking. You can talk as long as you'd like. The more detail you provide me, the better. If there's anything I need to know more about, I'll ask.",
  }]);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputFocus = () => {
    if (!isThinking) {
      // First add the user's message
      const userMessage = "Well, where do I start? I feel like I've been struggling with everything from motivation to get out of bed to having any interest in things that I used to enjoy lately. I am really struggling with the fact that I just lost my job at age 50 and I neither believe that I can get another job at my age given where my resume is nor am I interested in continuing on that career path. I just don't have the energy or enthusiasm to do it anymore, and I don't know how I'm going to make money. I'm worried that my wife will start to see me in a different light and my kids will be ashamed of me. Honestly, I don't have a lot of male friends that I can talk to about this, and I don't want to talk to my wife about it because I want her to know that she can see me as resilient, strong, and capable. So now I'm just left with this increasingly dark burden that has turned into something that keeps me up at night and makes me want to sleep during the day. I find myself constantly ruminating on things that are negative, dark, and heavy, and I can't seem to break out of the cycle. I feel like I've lost my purpose and my energy to pursue any purpose. I started drinking during the day just to get to sleep that night and to get the bare minimum done during the day.";
      
      setMessages(prev => ([...prev, { 
        id: crypto.randomUUID(), 
        role: 'user', 
        text: userMessage 
      }]));
      
      // Scroll to show the new message
      setTimeout(() => {
        scrollToBottom();
      }, 100);
      
      // Then show thinking animation
      setTimeout(() => {
        setIsThinking(true);
        // Scroll to show the thinking animation
        setTimeout(() => {
          scrollToBottom();
        }, 100);
        
        // Add thinking response after animation
        setTimeout(() => {
          setMessages(prev => ([...prev, {
            id: crypto.randomUUID(),
            role: 'assistant',
            text: "Keep going. I'm listening carefully to what you're sharing. Take your time - I want to understand the full picture of what you're experiencing.",
          }]));
          setIsThinking(false);
          // Scroll to show the final response
          setTimeout(() => {
            scrollToBottom();
          }, 100);
        }, 2000);
      }, 500);
    }
  };

  const handleSend = () => {
    const trimmed = chatInput.trim();
    if (!trimmed) return;
    setMessages(prev => ([...prev, { id: crypto.randomUUID(), role: 'user', text: trimmed }]));
    setChatInput('');
    // simulate assistant follow-up briefly
    setTimeout(() => {
      setMessages(prev => ([...prev, {
        id: crypto.randomUUID(),
        role: 'assistant',
        text: "I'm starting to see some themes emerge. I'll track them below. Can you tell me more about your relationship with your wife?",
      }]));
    }, 400);
  };

  const handleContinue = () => {
    router.push('/wireframe/processing');
  };

  return (
    <div className="w-full h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden" style={{ height: '740px' }}>
        <div className="h-full flex flex-col bg-white">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-b-3xl shadow-lg">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle size={20} />
              </div>
              <div>
                <div className="font-medium">Jaspr</div>
                <div className="text-xs text-white/80">Mapping what you tell me. <a>85%</a></div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map(m => (
              <div key={m.id} className={`flex gap-3 ${m.role === 'user' ? 'justify-end' : ''}`}>
                {m.role === 'assistant' && <div className="w-8 h-8 bg-purple-100 rounded-full flex-shrink-0" />}
                <div className={`${m.role === 'user' ? 'bg-purple-600 text-white rounded-2xl rounded-tr-none' : 'bg-gray-100 rounded-2xl rounded-tl-none'} p-4 max-w-xs`}>
                  <p className="text-sm">{m.text}</p>
                </div>
                {m.role === 'user' && <div className="w-8 h-8 bg-blue-100 rounded-full flex-shrink-0" />}
              </div>
            ))}
            
            {isThinking && (
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex-shrink-0" />
                <div className="bg-gray-100 rounded-2xl rounded-tl-none p-4 max-w-xs">
                  <div className="flex items-center gap-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                    <span className="text-sm text-gray-600">Thinking...</span>
                  </div>
                </div>
              </div>
            )}
            
            <div className="text-center py-2">
              <button
                onClick={() => router.push('/wireframe/processing')}
                className="inline-flex flex-col items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-xs transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 cursor-pointer border-2 border-transparent hover:border-purple-300"
                style={{ minWidth: 200 }}
                type="button"
              >
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                  Listening and Understanding
                </span>
                <div className="w-full mt-1 bg-purple-100 rounded h-1 relative overflow-hidden" style={{ width: 140 }}>
                  <div
                    className="bg-purple-500 h-1 rounded transition-all"
                    style={{ width: "85%" }}
                  />
                </div>
                <span className="text-[10px] text-purple-500 mt-1">Tap to view results</span>
              </button>
            </div>
            
            {/* Scroll anchor */}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') handleSend(); }}
                onFocus={handleInputFocus}
                type="text"
                placeholder="Share what's on your mind..."
                className="flex-1 bg-gray-100 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <button onClick={handleSend} className="bg-purple-600 text-white rounded-2xl px-6 py-3 text-sm font-medium">
                Send
              </button>
              <button onClick={handleContinue} className="bg-gray-100 text-gray-700 rounded-2xl px-4 py-3 text-sm font-medium">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <WireframeNavigation />
    </div>
  );
}
