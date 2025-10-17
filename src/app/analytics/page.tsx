import LinkedInMentionChart from '@/components/LinkedInMentionChart';

export default function AnalyticsPage() {
  // You can replace this with actual data from your LinkedIn feed analysis
  const linkedInData = {
    dates: [
      '2024-01-01',
      '2024-01-08',
      '2024-01-15',
      '2024-01-22',
      '2024-01-29',
      '2024-02-05',
      '2024-02-12',
      '2024-02-19',
      '2024-02-26',
      '2024-03-05',
      '2024-03-12',
      '2024-03-19',
    ],
    orchestrationAgent: [2, 5, 3, 8, 12, 15, 18, 22, 19, 25, 28, 32],
    chat: [15, 18, 22, 25, 28, 32, 35, 38, 42, 45, 48, 52],
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            LinkedIn Feed Analytics
          </h1>
          <p className="mt-2 text-gray-600">
            Track mentions of key terms in your LinkedIn feed over time
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Mention Trends
          </h2>
          <p className="text-gray-600 mb-6">
            This chart shows the frequency of mentions for "orchestration agent" and "chat" 
            in your LinkedIn feed over time. Use this data to understand trending topics 
            and engagement patterns.
          </p>
          
          <LinkedInMentionChart data={linkedInData} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Key Insights
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• "Chat" mentions are consistently higher than "orchestration agent"</li>
              <li>• Both terms show upward trending patterns</li>
              <li>• "Orchestration agent" has seen significant growth in recent weeks</li>
              <li>• Peak engagement occurs mid-week</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Data Collection
            </h3>
            <p className="text-gray-600 mb-4">
              To get real data from your LinkedIn feed, you would need to:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Use LinkedIn API or web scraping tools</li>
              <li>• Set up automated data collection</li>
              <li>• Implement keyword tracking algorithms</li>
              <li>• Store data in a database for historical tracking</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
