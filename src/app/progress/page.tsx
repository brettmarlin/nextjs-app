'use client';

import React from 'react';
import { ArrowLeft, TrendingUp, Target, Shield, Anchor, Brain, Heart, Zap } from 'lucide-react';
import Link from 'next/link';

const ProgressPage = () => {
  const progressAreas = [
    {
      name: "Tense",
      percentage: 98,
      color: "bg-indigo-500",
      bgColor: "bg-indigo-50",
      icon: Zap,
      description: "Do you think in the current, past, or future tense"
    },
    {
      name: "Solution Orientation", 
      percentage: 61,
      color: "bg-indigo-500",
      bgColor: "bg-indigo-50",
      icon: Target,
      description: "Do you think in terms of problems or solutions"
    },
    {
      name: "Agency",
      percentage: 91,
      color: "bg-indigo-500",
      bgColor: "bg-indigo-50",
      icon: Shield,
      description: "Do you think in terms that claim ownership over your mental state"
    },
    {
      name: "Grounding",
      percentage: 79,
      color: "bg-indigo-500",
      bgColor: "bg-indigo-50",
      icon: Anchor,
      description: "Are you grounded by others or something bigger than yourself"
    },
    {
      name: "Trauma",
      percentage: 29,
      color: "bg-indigo-500",
      bgColor: "bg-indigo-50",
      icon: Brain,
      description: "Is there evidence of unresolved trauma"
    },
    {
      name: "Anchoring",
      percentage: 67,
      color: "bg-indigo-500",
      bgColor: "bg-indigo-50",
      icon: Anchor,
      description: "What elements in your thinking keep you stuck or keep you safe"
    },
    {
      name: "Belief",
      percentage: 31,
      color: "bg-indigo-500",
      bgColor: "bg-indigo-50",
      icon: Heart,
      description: "What do you surrender to something greater than yourself"
    }
  ];

  const totalProgress = Math.round(
    progressAreas.reduce((sum, area) => sum + area.percentage, 0) / progressAreas.length
  );

  return (
    <div className="w-full h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden" style={{ height: '740px' }}>
        <div className="h-full flex flex-col bg-white">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6">
            <div className="flex items-center gap-3 mb-2">
              <Link 
                href="/wireframe"
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <ArrowLeft size={20} className="text-white" />
              </Link>
              <div>
                <h1 className="text-xl font-bold">Your Progress</h1>
                <p className="text-sm text-white/80">Personal development journey overview</p>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            {/* Overall Progress Summary */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-4 mb-6">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-semibold text-gray-900">Mapping Progress</h2>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">{totalProgress}%</div>
                  <div className="text-xs text-gray-500">Complete</div>
                </div>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${totalProgress}%` }}
                />
              </div>
              
              <p className="text-gray-600 text-xs">
                You are making great progress. Continue talking to improve the quality of your reframes.
              </p>
            </div>

            {/* Progress Areas */}
            <div className="space-y-4">
              {progressAreas.map((area, index) => {
                const IconComponent = area.icon;
                return (
                  <div key={area.name} className="bg-gray-50 rounded-2xl p-4 border border-gray-200">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2 rounded-xl ${area.bgColor}`}>
                        <IconComponent size={20} className={`text-gray-700`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-semibold text-gray-900">{area.name}</h3>
                        <p className="text-xs text-gray-500">{area.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-gray-900">{area.percentage}%</div>
                      </div>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                      <div 
                        className={`${area.color} h-1.5 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${area.percentage}%` }}
                      />
                    </div>
                    
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>0%</span>
                      <span className="font-medium">{area.percentage}% Complete</span>
                      <span>100%</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Insights Section */}
            <div className="mt-6 bg-white rounded-2xl p-4 border border-gray-200">
              <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <TrendingUp size={16} className="text-blue-500" />
                Key Insights
              </h3>
              
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-xl">
                  <div className="font-medium text-blue-900 text-xs mb-1">Strongest</div>
                  <div className="text-blue-700 font-semibold text-sm">You take ownership and seek solutions</div>
                  <div className="text-xs text-blue-600">~75% complete</div>
                </div>
                
                <div className="p-3 bg-green-50 rounded-xl">
                  <div className="font-medium text-green-900 text-xs mb-1">Needs More</div>
                  <div className="text-green-700 font-semibold text-sm">Hints of trauma, but you haven't talked about it much</div>
                  <div className="text-xs text-green-600">13% complete</div>
                </div>
                
                <div className="p-3 bg-yellow-50 rounded-xl">
                  <div className="font-medium text-yellow-900 text-xs mb-1">Focus Area</div>
                  <div className="text-yellow-700 font-semibold text-sm">Trauma Processing</div>
                  <div className="text-xs text-yellow-600">10% complete</div>
                </div>
              </div>
            </div>

            {/* Action Items */}
            <div className="mt-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-4 text-white">
              <h3 className="text-sm font-semibold mb-3">Next Steps</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  <span className="text-xs">Continue daily grounding exercises to improve stability</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  <span className="text-xs">Practice solution-focused thinking in challenging situations</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  <span className="text-xs">Schedule regular check-ins to track progress</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressPage;
