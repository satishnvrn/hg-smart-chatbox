'use client';

import { useCompletion } from 'ai/react';

export default function Completion() {
  const { completion, input, stop, isLoading, handleInputChange, handleSubmit } = useCompletion({
    api: '/api/query'
  });

  return (
    <div className="flex flex-col h-screen justify-center items-center bg-gray-50">
      <div className="w-4/5 md:w-3/4 lg:w-1/2 xl:w-2/5 p-8 bg-white shadow-xl rounded-xl">
        <h1 className="text-2xl font-bold mb-4 text-blue-500">Hugging Face AI Smart Chatbot</h1>
        <div className="p-4 bg-gray-100 rounded-lg mb-4">
          <p className="text-gray-700">{completion}</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-gray-600" htmlFor="user-input">
            Ask something...
          </label>
          <input
            id="user-input"
            type="text"
            className="text-gray-600 w-full p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
            value={input}
            onChange={handleInputChange}
            placeholder="Type your message here..."
          />
          <div className="flex justify-between items-center">
            <button 
              type="button" 
              onClick={stop}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-200"
            >
              Stop
            </button>
            <button 
              disabled={isLoading} 
              type="submit"
              className={`px-4 py-2 rounded-lg ${isLoading ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-600'} text-white focus:outline-none focus:ring focus:ring-blue-200`}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}