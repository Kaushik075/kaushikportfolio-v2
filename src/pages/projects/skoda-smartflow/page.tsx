import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function SkodaSmartFlowPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300 cursor-pointer"
            >
              <i className="ri-arrow-left-line text-xl"></i>
              <span className="font-semibold">Back to Portfolio</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black text-black mb-4">
              Skoda SmartFlow
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-black font-semibold">
              Internal Sales Insights & Automation System
            </p>
          </div>

          {/* Project Type Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-3 bg-black rounded-full">
              <i className="ri-briefcase-line text-yellow-400 text-xl"></i>
              <span className="text-yellow-400 font-semibold text-sm sm:text-base">Consulting Prototype & Technical Documentation</span>
            </div>
          </div>

          {/* Main Dashboard Image */}
          <div className="mb-12">
            <div className="bg-black rounded-2xl p-4 shadow-2xl border-4 border-yellow-400">
              <img
                src="https://static.readdy.ai/image/162de1f448c1631ca23ab745508fcce7/c027ea9f7e0f0cb0ab5bcc459cb3d2b1.png"
                alt="Skoda SmartFlow Dashboard"
                className="w-full h-auto rounded-lg object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-black rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border-4 border-yellow-400">
            
            {/* Overview */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <i className="ri-file-text-line text-2xl sm:text-3xl text-yellow-400"></i>
                <h2 className="text-2xl sm:text-3xl font-black text-yellow-400">Overview</h2>
              </div>
              <div className="space-y-4 text-white text-base sm:text-lg leading-relaxed">
                <p>
                  Skoda SmartFlow is an internal sales insights and automation system built as a consulting-style prototype for <strong className="text-yellow-400">Mahavir Group (Skoda Division)</strong>.
                </p>
                <p>
                  The system delivers end-to-end visibility across the dealership sales funnel—<strong className="text-yellow-400">lead, enquiry, booking, and delivery</strong>—through a secure MySQL data warehouse and a one-click executive insights application.
                </p>
              </div>
            </div>

            {/* Business Problem */}
            <div className="mb-12 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <i className="ri-error-warning-line text-2xl sm:text-3xl text-red-400"></i>
                <h2 className="text-2xl sm:text-3xl font-black text-red-400">Business Problem</h2>
              </div>
              <p className="text-white text-base sm:text-lg mb-4">Legacy Excel-based workflows caused:</p>
              <ul className="space-y-3 text-white text-base sm:text-lg">
                <li className="flex items-start gap-3">
                  <i className="ri-close-circle-line text-red-400 mt-1 flex-shrink-0 text-xl"></i>
                  <span><strong>24+ hour delays</strong> in sales and performance reporting</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-close-circle-line text-red-400 mt-1 flex-shrink-0 text-xl"></i>
                  <span><strong>High data entry errors</strong> and manual overhead</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-close-circle-line text-red-400 mt-1 flex-shrink-0 text-xl"></i>
                  <span><strong>No unified, real-time funnel view</strong> for leadership</span>
                </li>
              </ul>
            </div>

            {/* Solution */}
            <div className="mb-12 bg-gradient-to-br from-green-900/20 to-green-800/10 rounded-2xl p-6 sm:p-8 border-2 border-green-500/30">
              <div className="flex items-center gap-3 mb-6">
                <i className="ri-lightbulb-flash-line text-2xl sm:text-3xl text-green-400"></i>
                <h2 className="text-2xl sm:text-3xl font-black text-green-400">Solution</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-black/40 rounded-xl p-4 sm:p-6 border border-green-500/30">
                  <div className="flex items-start gap-3 mb-3">
                    <i className="ri-dashboard-3-line text-2xl text-green-400 flex-shrink-0"></i>
                    <div>
                      <h3 className="text-lg font-bold text-green-400 mb-2">Leadership Dashboard</h3>
                      <p className="text-white text-sm sm:text-base">One-click refresh with live KPIs for CEO & IT Head</p>
                    </div>
                  </div>
                </div>
                <div className="bg-black/40 rounded-xl p-4 sm:p-6 border border-green-500/30">
                  <div className="flex items-start gap-3 mb-3">
                    <i className="ri-robot-2-line text-2xl text-green-400 flex-shrink-0"></i>
                    <div>
                      <h3 className="text-lg font-bold text-green-400 mb-2">Sales & Marketing Automation</h3>
                      <p className="text-white text-sm sm:text-base">Fully digital lead tracking and workflow automation</p>
                    </div>
                  </div>
                </div>
                <div className="bg-black/40 rounded-xl p-4 sm:p-6 border border-green-500/30">
                  <div className="flex items-start gap-3 mb-3">
                    <i className="ri-shield-check-line text-2xl text-green-400 flex-shrink-0"></i>
                    <div>
                      <h3 className="text-lg font-bold text-green-400 mb-2">Secure Architecture</h3>
                      <p className="text-white text-sm sm:text-base">Centralized MySQL backend</p>
                    </div>
                  </div>
                </div>
                <div className="bg-black/40 rounded-xl p-4 sm:p-6 border border-green-500/30">
                  <div className="flex items-start gap-3 mb-3">
                    <i className="ri-line-chart-line text-2xl text-green-400 flex-shrink-0"></i>
                    <div>
                      <h3 className="text-lg font-bold text-green-400 mb-2">Scalability</h3>
                      <p className="text-white text-sm sm:text-base">Blueprint for rollout across multiple brands and branches</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* System Architecture */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <i className="ri-stack-line text-2xl sm:text-3xl text-yellow-400"></i>
                <h2 className="text-2xl sm:text-3xl font-black text-yellow-400">System Architecture</h2>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-yellow-400 mb-4 flex items-center gap-2">
                  <i className="ri-database-2-line"></i>
                  Three-Layer MySQL Data Warehouse
                </h3>
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-yellow-400/20 to-yellow-500/10 rounded-xl p-4 border-l-4 border-yellow-400">
                    <p className="text-white text-base sm:text-lg">
                      <strong className="text-yellow-400">Bronze Layer:</strong> Raw lead, enquiry, booking, and delivery data
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-yellow-400/20 to-yellow-500/10 rounded-xl p-4 border-l-4 border-yellow-400">
                    <p className="text-white text-base sm:text-lg">
                      <strong className="text-yellow-400">Silver Layer:</strong> Cleaned and standardized data
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-yellow-400/20 to-yellow-500/10 rounded-xl p-4 border-l-4 border-yellow-400">
                    <p className="text-white text-base sm:text-lg">
                      <strong className="text-yellow-400">Gold Layer:</strong> Analytics-ready tables powering dashboards
                    </p>
                  </div>
                </div>
                <p className="text-white/80 text-sm sm:text-base mt-4 italic">
                  ETL pipelines are modular and automation-driven for performance and reliability.
                </p>
              </div>
            </div>

            {/* Automation & AI */}
            <div className="mb-12 bg-gradient-to-br from-purple-900/20 to-purple-800/10 rounded-2xl p-6 sm:p-8 border-2 border-purple-500/30">
              <div className="flex items-center gap-3 mb-6">
                <i className="ri-robot-line text-2xl sm:text-3xl text-purple-400"></i>
                <h2 className="text-2xl sm:text-3xl font-black text-purple-400">Automation & AI</h2>
              </div>
              <ul className="space-y-3 text-white text-base sm:text-lg">
                <li className="flex items-start gap-3">
                  <i className="ri-arrow-right-circle-fill text-purple-400 mt-1 flex-shrink-0 text-xl"></i>
                  <span><strong className="text-purple-400">n8n-based</strong> workflow automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-arrow-right-circle-fill text-purple-400 mt-1 flex-shrink-0 text-xl"></i>
                  <span><strong className="text-purple-400">OpenAI-assisted</strong> logic for lead handling and alerts</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-arrow-right-circle-fill text-purple-400 mt-1 flex-shrink-0 text-xl"></i>
                  <span>Automated follow-ups, calendar sync, and notifications</span>
                </li>
              </ul>
            </div>

            {/* Dashboards & Insights */}
            <div className="mb-12 bg-gradient-to-br from-blue-900/20 to-blue-800/10 rounded-2xl p-6 sm:p-8 border-2 border-blue-500/30">
              <div className="flex items-center gap-3 mb-6">
                <i className="ri-bar-chart-box-line text-2xl sm:text-3xl text-blue-400"></i>
                <h2 className="text-2xl sm:text-3xl font-black text-blue-400">Dashboards & Insights</h2>
              </div>
              <ul className="space-y-3 text-white text-base sm:text-lg">
                <li className="flex items-start gap-3">
                  <i className="ri-checkbox-circle-fill text-blue-400 mt-1 flex-shrink-0 text-xl"></i>
                  <span>Executive Power BI dashboards</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-checkbox-circle-fill text-blue-400 mt-1 flex-shrink-0 text-xl"></i>
                  <span>Full sales funnel visibility (Lead → Delivery)</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-checkbox-circle-fill text-blue-400 mt-1 flex-shrink-0 text-xl"></i>
                  <span>Conversion ratios and bottleneck identification</span>
                </li>
              </ul>
            </div>

            {/* Business Impact */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <i className="ri-trophy-line text-2xl sm:text-3xl text-yellow-400"></i>
                <h2 className="text-2xl sm:text-3xl font-black text-yellow-400">Business Impact</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl p-6 text-center shadow-xl">
                  <div className="text-4xl sm:text-5xl font-black text-black mb-2">&lt;1h</div>
                  <div className="text-sm font-bold text-black">Reporting Time</div>
                  <div className="text-xs text-black/70 mt-1">(from 24 hours)</div>
                </div>
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl p-6 text-center shadow-xl">
                  <div className="text-4xl sm:text-5xl font-black text-black mb-2">16-24h</div>
                  <div className="text-sm font-bold text-black">Hours Saved</div>
                  <div className="text-xs text-black/70 mt-1">Per day</div>
                </div>
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl p-6 text-center shadow-xl">
                  <div className="text-4xl sm:text-5xl font-black text-black mb-2">90%</div>
                  <div className="text-sm font-bold text-black">Error Reduction</div>
                  <div className="text-xs text-black/70 mt-1">In data entry</div>
                </div>
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl p-6 text-center shadow-xl">
                  <div className="text-4xl sm:text-5xl font-black text-black mb-2">Instant</div>
                  <div className="text-sm font-bold text-black">Visibility</div>
                  <div className="text-xs text-black/70 mt-1">Leadership insights</div>
                </div>
              </div>
            </div>

            {/* Deliverables */}
            <div className="mb-12 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <i className="ri-gift-line text-2xl sm:text-3xl text-yellow-400"></i>
                <h2 className="text-2xl sm:text-3xl font-black text-yellow-400">Deliverables</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <i className="ri-check-double-line text-yellow-400 mt-1 flex-shrink-0 text-xl"></i>
                  <span className="text-white text-base sm:text-lg">Prototype Application</span>
                </div>
                <div className="flex items-start gap-3">
                  <i className="ri-check-double-line text-yellow-400 mt-1 flex-shrink-0 text-xl"></i>
                  <span className="text-white text-base sm:text-lg">Data Warehouse Design & ETL</span>
                </div>
                <div className="flex items-start gap-3">
                  <i className="ri-check-double-line text-yellow-400 mt-1 flex-shrink-0 text-xl"></i>
                  <span className="text-white text-base sm:text-lg">Automation Workflows</span>
                </div>
                <div className="flex items-start gap-3">
                  <i className="ri-check-double-line text-yellow-400 mt-1 flex-shrink-0 text-xl"></i>
                  <span className="text-white text-base sm:text-lg">Power BI Dashboards</span>
                </div>
                <div className="flex items-start gap-3">
                  <i className="ri-check-double-line text-yellow-400 mt-1 flex-shrink-0 text-xl"></i>
                  <span className="text-white text-base sm:text-lg">Consulting Documentation & Process Maps</span>
                </div>
              </div>
            </div>

            {/* Prototype Link */}
            <div className="mb-12 text-center">
              <div className="bg-gradient-to-r from-yellow-400/20 via-yellow-500/20 to-yellow-400/20 rounded-2xl p-8 border-2 border-yellow-400">
                <h3 className="text-2xl font-black text-yellow-400 mb-6">View Live Prototype</h3>
                <a
                  href="https://skoda-smartflow.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-400 text-black rounded-xl font-bold text-lg hover:bg-yellow-300 transition-all duration-300 cursor-pointer whitespace-nowrap shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  <i className="ri-external-link-line text-2xl"></i>
                  <span>View Live Prototype</span>
                  <i className="ri-arrow-right-line text-2xl"></i>
                </a>
              </div>
            </div>

            {/* Footer Note */}
            <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 rounded-xl p-6 border-l-4 border-yellow-400">
              <p className="text-white text-base sm:text-lg italic">
                <i className="ri-information-line text-yellow-400 mr-2"></i>
                This project was built as a <strong className="text-yellow-400">consulting demonstration and interview assessment</strong>, showcasing end-to-end delivery from business problem to automated insights.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-black py-8 border-t-4 border-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <a
            href="https://github.com/Kaushik075/Skoda-SmartFlow-Internal-Insights-Sales-Automation-App"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-yellow-400 text-black rounded-lg font-bold hover:bg-yellow-300 transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            <i className="ri-github-fill text-xl"></i>
            <span>View on GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
}
