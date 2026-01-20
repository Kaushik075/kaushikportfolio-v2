
import { useNavigate } from 'react-router-dom';

export default function PromptingCasebook() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500">
      {/* Header */}
      <header className="bg-gradient-to-r from-black to-gray-900 border-b border-yellow-400 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-lg">K</span>
              </div>
              <div>
                <h2 className="font-bold text-yellow-400">Kaushik Yeddanapudi</h2>
                <p className="text-sm text-white">Business Analyst</p>
              </div>
            </div>
            
            <button
              onClick={() => navigate('/')}
              className="px-6 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-300 transition-colors duration-300 whitespace-nowrap font-semibold"
            >
              <i className="ri-arrow-left-line mr-2"></i>
              Back to Portfolio
            </button>
          </div>
        </div>
      </header>

      {/* Project Title Section */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-yellow-400 mb-6">
            🗂️ Prompting Casebook
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Explore 19 Advanced Business Transformation Frameworks designed for AI-powered strategic analysis and decision making.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {['AI Prompting', 'S.T.A.R.T. Framework', 'Business Intelligence', 'Strategic Analysis', '19 Frameworks'].map((tech) => (
              <span key={tech} className="px-4 py-2 bg-yellow-400 text-black rounded-full text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Casebook */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-yellow-400">
            <div className="bg-gradient-to-r from-black to-gray-900 px-6 py-4">
              <h3 className="text-xl font-bold text-yellow-400">Interactive Prompting Casebook</h3>
              <p className="text-white">19 Advanced Business Transformation Frameworks</p>
            </div>
            <div className="p-2">
              <iframe
                src="https://ppl-ai-code-interpreter-files.s3.amazonaws.com/web/direct-files/b5a39463da887fabe0a36d9523059239/afed4d60-4395-4b3e-83b0-4c833f4d50b3/index.html"
                className="w-full h-[800px] border-0 rounded-lg"
                title="AI Prompting Casebook"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
