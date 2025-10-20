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
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm1',
      role: 'assistant',
      text: "Hi Brett, just start talking. You can talk as long as you'd like. The more detail you provide me, the better. If there's anything I need to know more about, I'll ask.",
    },
  ]);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputFocus = () => {
    if (!isThinking) {
      // First add the user's message
      const userMessage =
        "Well, where do I start? I feel like I've been struggling with everything from motivation to get out of bed to having any interest in things that I used to enjoy lately. I am really struggling with the fact that I just lost my job at age 50 and I neither believe that I can get another job at my age given where my resume is nor am I interested in continuing on that career path. I just don't have the energy or enthusiasm to do it anymore, and I don't know how I'm going to make money. I'm worried that my wife will start to see me in a different light and my kids will be ashamed of me. Honestly, I don't have a lot of male friends that I can talk to about this, and I don't want to talk to my wife about it because I want her to know that she can see me as resilient, strong, and capable. So now I'm just left with this increasingly dark burden that has turned into something that keeps me up at night and makes me want to sleep during the day. I find myself constantly ruminating on things that are negative, dark, and heavy, and I can't seem to break out of the cycle. I feel like I've lost my purpose and my energy to pursue any purpose. I started drinking during the day just to get to sleep that night and to get the bare minimum done during the day.";

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: 'user',
          text: userMessage,
        },
      ]);

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
          setMessages((prev) => [
            ...prev,
            {
              id: crypto.randomUUID(),
              role: 'assistant',
              text: "Keep going. I'm listening carefully to what you're sharing. Take your time - I want to understand the full picture of what you're experiencing.",
            },
          ]);
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
    setMessages((prev) => [...prev, { id: crypto.randomUUID(), role: 'user', text: trimmed }]);
    setChatInput('');
    // simulate assistant follow-up briefly
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: 'assistant',
          text: "I'm starting to see some themes emerge. I'll track them below. Can you tell me more about your relationship with your wife?",
        },
      ]);
    }, 400);
  };

  const handleContinue = () => {
    router.push('/wireframe/processing');
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-50 p-4">
      <div
        className="w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl"
        style={{ height: '740px' }}
      >
        <div className="flex h-full flex-col bg-white">
          <div className="rounded-b-3xl bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-white shadow-lg">
            <div className="mb-2 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                <MessageCircle size={20} />
              </div>
              <div>
                <div className="font-medium">Jaspr</div>
                <div className="text-xs text-white/80">
                  Mapping what you tell me. <a>85%</a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto p-6">
            {messages.map((m) => (
              <div key={m.id} className={`flex gap-3 ${m.role === 'user' ? 'justify-end' : ''}`}>
                {m.role === 'assistant' && (
                  <div className="h-8 w-8 flex-shrink-0 rounded-full bg-purple-100" />
                )}
                <div
                  className={`${m.role === 'user' ? 'rounded-2xl rounded-tr-none bg-purple-600 text-white' : 'rounded-2xl rounded-tl-none bg-gray-100'} max-w-xs p-4`}
                >
                  <p className="text-sm">{m.text}</p>
                </div>
                {m.role === 'user' && (
                  <div className="h-8 w-8 flex-shrink-0 rounded-full bg-blue-100" />
                )}
              </div>
            ))}

            {isThinking && (
              <div className="flex gap-3">
                <div className="h-8 w-8 flex-shrink-0 rounded-full bg-purple-100" />
                <div className="max-w-xs rounded-2xl rounded-tl-none bg-gray-100 p-4">
                  <div className="flex items-center gap-2">
                    <div className="flex space-x-1">
                      <div
                        className="h-2 w-2 animate-bounce rounded-full bg-purple-400"
                        style={{ animationDelay: '0ms' }}
                      ></div>
                      <div
                        className="h-2 w-2 animate-bounce rounded-full bg-purple-400"
                        style={{ animationDelay: '150ms' }}
                      ></div>
                      <div
                        className="h-2 w-2 animate-bounce rounded-full bg-purple-400"
                        style={{ animationDelay: '300ms' }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600">Thinking...</span>
                  </div>
                </div>
              </div>
            )}

            <div className="py-2 text-center">
              <button
                onClick={() => router.push('/wireframe/processing')}
                className="inline-flex cursor-pointer flex-col items-center gap-2 rounded-full border-2 border-transparent bg-purple-50 px-4 py-2 text-xs text-purple-700 transition-transform hover:scale-105 hover:border-purple-300 focus:ring-2 focus:ring-purple-400 focus:outline-none"
                style={{ minWidth: 200 }}
                type="button"
              >
                <span className="flex items-center gap-2">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-purple-400" />
                  Listening and Understanding
                </span>
                <div
                  className="relative mt-1 h-1 w-full overflow-hidden rounded bg-purple-100"
                  style={{ width: 140 }}
                >
                  <div
                    className="h-1 rounded bg-purple-500 transition-all"
                    style={{ width: '85%' }}
                  />
                </div>
                <span className="mt-1 text-[10px] text-purple-500">Tap to view results</span>
              </button>
            </div>

            {/* Scroll anchor */}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-gray-200 p-4">
            <div className="flex gap-2">
              <input
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSend();
                }}
                onFocus={handleInputFocus}
                type="text"
                placeholder="Share what's on your mind..."
                className="flex-1 rounded-2xl bg-gray-100 px-4 py-3 text-sm focus:ring-2 focus:ring-purple-400 focus:outline-none"
              />
              <button
                onClick={handleSend}
                className="rounded-2xl bg-purple-600 px-6 py-3 text-sm font-medium text-white"
              >
                Send
              </button>
              <button
                onClick={handleContinue}
                className="rounded-2xl bg-gray-100 px-4 py-3 text-sm font-medium text-gray-700"
              >
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
