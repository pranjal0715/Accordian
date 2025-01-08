import { QAAccordion } from '@/components/QAAccordion';

export function App() {
  return (
    // <div className="min-h-screen min-w-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
    <div className="min-h-screen w-full min-w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h1 className="text-2xl w-full sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Interactive Q&A Accordion
        </h1>
        <QAAccordion />
      </div>
    </div>
  );
}

export default App;