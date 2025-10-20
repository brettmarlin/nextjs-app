export type ChatMessage = {
  id: string;
  role: 'assistant' | 'user';
  text: string;
};

export type Reframe = {
  id: number;
  theme: string;
  mappedArea: string;
  content: string;
  mantra: string;
  status: 'pending' | 'kept';
};
