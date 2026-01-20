
import { useNavigate } from 'react-router-dom';

export function PromptingCaseBook() {
  const navigate = useNavigate();

  const handleViewCasebook = () => {
    // Navigate to the prompting casebook page within the portfolio
    navigate('/prompting-casebook');
  };

  return (
    <section className="min-h-screen pt-24 pb-20 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            AI <span className="text-black font-black">Prompting Casebook</span>
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto font-semibold">
            Explore my comprehensive collection of 19 advanced business transformation frameworks 
            designed for AI-powered strategic analysis and decision making.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="group bg-gradient-to-r from-black to-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 border border-yellow-400 cursor-pointer"
               onClick={handleViewCasebook}>
            
            <div className="relative mb-8 overflow-hidden rounded-xl">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20AI%20prompting%20interface%20with%20business%20frameworks%2C%20structured%20S.T.A.R.T%20methodology%20display%2C%20modern%20dashboard%20with%20charts%20and%20analytics%2C%20clean%20business%20intelligence%20design%2C%20purple%20and%20emerald%20gradient%20theme&width=800&height=400&seq=ai-prompts-casebook&orientation=landscape"
                alt="AI Prompting Casebook"
                className="w-full h-64 object-cover object-top group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-6 right-6">
                <span className="px-4 py-2 bg-yellow-400 text-black rounded-full text-sm font-semibold">
                  🗂️ Interactive Casebook
                </span>
              </div>
              <div className="absolute bottom-6 left-6">
                <span className="px-4 py-2 bg-yellow-400 text-black rounded-full text-sm font-semibold">
                  19 Frameworks
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300 text-center">
                🗂️ Prompting Casebook
              </h3>
              
              <p className="text-white text-lg leading-relaxed text-center">
                Comprehensive collection of AI prompting strategies that drive measurable business outcomes 
                across 8 critical domains including Big Data Analytics, Strategic Analysis, and Operational Excellence.
              </p>

              <div className="grid md:grid-cols-3 gap-4 my-8">
                <div className="text-center p-4 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl">
                  <div className="text-3xl font-bold text-black mb-2">19</div>
                  <div className="text-sm text-black font-semibold">Advanced Prompts</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl">
                  <div className="text-3xl font-bold text-black mb-2">8</div>
                  <div className="text-sm text-black font-semibold">Business Domains</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl">
                  <div className="text-3xl font-bold text-black mb-2">200%+</div>
                  <div className="text-sm text-black font-semibold">Average ROI</div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-yellow-400">Key Features:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <i className="ri-check-line text-yellow-400 text-xl"></i>
                    <span className="text-white">S.T.A.R.T. Framework Implementation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="ri-check-line text-yellow-400 text-xl"></i>
                    <span className="text-white">Interactive Typing Demonstrations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="ri-check-line text-yellow-400 text-xl"></i>
                    <span className="text-white">Copy/Paste Ready Prompts</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="ri-check-line text-yellow-400 text-xl"></i>
                    <span className="text-white">Business Impact Visualizations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="ri-check-line text-yellow-400 text-xl"></i>
                    <span className="text-white">AI Tool Recommendations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="ri-check-line text-yellow-400 text-xl"></i>
                    <span className="text-white">Confidentiality Guidelines</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center pt-6">
                <div className="flex items-center space-x-4">
                  <span className="text-yellow-400 font-semibold text-lg">➡️ View Prompting Casebook</span>
                  <i className="ri-arrow-right-line text-yellow-400 group-hover:translate-x-2 transition-transform duration-300 text-xl"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-black to-gray-900 text-yellow-400 rounded-full text-sm font-medium border border-yellow-400">
              <i className="ri-information-line mr-2"></i>
              Click the card above to explore the full interactive casebook with live demonstrations
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
