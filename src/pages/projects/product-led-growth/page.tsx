
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function ProductLedGrowthPage() {
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
              Product LED Growth Analysis
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-black font-semibold">
              SaaS User Journey & Experimentation
            </p>
          </div>

          {/* Main Dashboard Image */}
          <div className="mb-12">
            <div className="bg-black rounded-2xl p-4 shadow-2xl border-4 border-yellow-400">
              <img
                src="https://static.readdy.ai/image/162de1f448c1631ca23ab745508fcce7/0abe03322c5a0ea37aba8421284d7546.png"
                alt="Product LED Growth Dashboard"
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
            
            {/* Executive Summary */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <i className="ri-file-text-line text-2xl sm:text-3xl text-yellow-400"></i>
                <h2 className="text-2xl sm:text-3xl font-black text-yellow-400">Executive Summary</h2>
              </div>
              <div className="space-y-4 text-white text-base sm:text-lg leading-relaxed">
                <p>
                  This Full Stack Analysis project demonstrates a complete, production-grade analytics pipeline that transforms raw user data into actionable business intelligence. Starting from a normalized MySQL database with 10,000 users and 51,000+ events, the analysis identifies a critical feature adoption bottleneck and quantifies a $570K/year revenue opportunity through A/B testing and statistical validation.
                </p>
              </div>
            </div>

            {/* Overview */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <i className="ri-dashboard-line text-2xl sm:text-3xl text-yellow-400"></i>
                <h2 className="text-2xl sm:text-3xl font-black text-yellow-400">Overview</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-500/10 rounded-xl p-4 sm:p-6 border-2 border-yellow-400/50">
                  <i className="ri-user-line text-2xl sm:text-3xl text-yellow-400 mb-3"></i>
                  <h3 className="text-base sm:text-lg font-bold text-yellow-400 mb-2">Users Analyzed</h3>
                  <p className="text-white text-sm">10,000 active users tracked across 8-week cohorts</p>
                </div>
                <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-500/10 rounded-xl p-4 sm:p-6 border-2 border-yellow-400/50">
                  <i className="ri-bar-chart-line text-2xl sm:text-3xl text-yellow-400 mb-3"></i>
                  <h3 className="text-base sm:text-lg font-bold text-yellow-400 mb-2">Events Tracked</h3>
                  <p className="text-white text-sm">51,000+ events capturing user behavior across funnel</p>
                </div>
                <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-500/10 rounded-xl p-4 sm:p-6 border-2 border-yellow-400/50">
                  <i className="ri-search-line text-2xl sm:text-3xl text-yellow-400 mb-3"></i>
                  <h3 className="text-base sm:text-lg font-bold text-yellow-400 mb-2">Key Finding</h3>
                  <p className="text-white text-sm">50% feature adoption bottleneck = $529K annual revenue leakage</p>
                </div>
                <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-500/10 rounded-xl p-4 sm:p-6 border-2 border-yellow-400/50">
                  <i className="ri-checkbox-circle-line text-2xl sm:text-3xl text-yellow-400 mb-3"></i>
                  <h3 className="text-base sm:text-lg font-bold text-yellow-400 mb-2">Solution Validated</h3>
                  <p className="text-white text-sm">+87% Tooltip Guide test (p&lt;0.001) generates $165.6K annually</p>
                </div>
                <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-500/10 rounded-xl p-4 sm:p-6 border-2 border-yellow-400/50">
                  <i className="ri-rocket-line text-2xl sm:text-3xl text-yellow-400 mb-3"></i>
                  <h3 className="text-base sm:text-lg font-bold text-yellow-400 mb-2">Market Expansion</h3>
                  <p className="text-white text-sm">+47% Freemium model expands TAM to 556 customers = $318.6K opportunity</p>
                </div>
                <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-500/10 rounded-xl p-4 sm:p-6 border-2 border-yellow-400/50">
                  <i className="ri-money-dollar-circle-line text-2xl sm:text-3xl text-yellow-400 mb-3"></i>
                  <h3 className="text-base sm:text-lg font-bold text-yellow-400 mb-2">Revenue Opportunity</h3>
                  <p className="text-white text-sm">Combined interventions: $680K baseline → $1.25M (87% growth)</p>
                </div>
              </div>
              <div className="mt-6 bg-gradient-to-r from-green-900/30 to-green-800/20 rounded-xl p-4 sm:p-6 border-2 border-green-500/50">
                <p className="text-white text-base sm:text-lg">
                  <i className="ri-shield-check-line text-green-400 mr-2"></i>
                  <strong className="text-green-400">Data Confidence:</strong> &lt;1% weekly cohort variance across 8 weeks = 99.9% production confidence
                </p>
              </div>
            </div>

            {/* Key Deliverables */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <i className="ri-stack-line text-2xl sm:text-3xl text-yellow-400"></i>
                <h2 className="text-2xl sm:text-3xl font-black text-yellow-400">Key Deliverables</h2>
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-yellow-400/20 to-yellow-500/10 rounded-xl p-4 sm:p-6 border-l-4 border-yellow-400">
                  <h3 className="text-lg sm:text-xl font-bold text-yellow-400 mb-2 flex items-center gap-2">
                    <i className="ri-file-chart-line"></i>
                    EDA Report
                  </h3>
                  <p className="text-white text-sm sm:text-base">PLG_Analytics_Report.pdf - Comprehensive exploratory data analysis with statistical findings</p>
                </div>
                <div className="bg-gradient-to-r from-yellow-400/20 to-yellow-500/10 rounded-xl p-4 sm:p-6 border-l-4 border-yellow-400">
                  <h3 className="text-lg sm:text-xl font-bold text-yellow-400 mb-2 flex items-center gap-2">
                    <i className="ri-database-2-line"></i>
                    MySQL Queries
                  </h3>
                  <p className="text-white text-sm sm:text-base">PLG_MySQL_Queries.pdf - 10 production-ready queries covering funnel, cohort, and revenue analysis</p>
                </div>
                <div className="bg-gradient-to-r from-yellow-400/20 to-yellow-500/10 rounded-xl p-4 sm:p-6 border-l-4 border-yellow-400">
                  <h3 className="text-lg sm:text-xl font-bold text-yellow-400 mb-2 flex items-center gap-2">
                    <i className="ri-dashboard-3-line"></i>
                    Power BI Dashboard
                  </h3>
                  <p className="text-white text-sm sm:text-base">3-page interactive dashboard with automated insights and recommendations</p>
                </div>
                <div className="bg-gradient-to-r from-yellow-400/20 to-yellow-500/10 rounded-xl p-4 sm:p-6 border-l-4 border-yellow-400">
                  <h3 className="text-lg sm:text-xl font-bold text-yellow-400 mb-2 flex items-center gap-2">
                    <i className="ri-code-s-slash-line"></i>
                    Python Analysis
                  </h3>
                  <p className="text-white text-sm sm:text-base">End-to-end data pipeline with chi-square testing and scenario modeling</p>
                </div>
              </div>
            </div>

            {/* Business Problem */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <i className="ri-lightbulb-line text-2xl sm:text-3xl text-yellow-400"></i>
                <h2 className="text-2xl sm:text-3xl font-black text-yellow-400">🔍 Business Problem</h2>
              </div>
              <div className="space-y-4 text-white text-base sm:text-lg leading-relaxed mb-6">
                <p>
                  Product-led growth platforms struggle with understanding user progression through the funnel and identifying where interventions create the most impact. This project addresses three critical questions:
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
                <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-xl p-4 sm:p-6 border-2 border-red-500/50">
                  <h3 className="text-lg sm:text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
                    <i className="ri-error-warning-line"></i>
                    Where do users drop off?
                  </h3>
                  <p className="text-white text-sm">
                    Analysis reveals 50% activation-to-feature adoption drop-off, indicating a severe engagement issue that costs the company ~$200K annually in potential revenue.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-xl p-4 sm:p-6 border-2 border-blue-500/50">
                  <h3 className="text-lg sm:text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                    <i className="ri-flask-line"></i>
                    Which interventions work best?
                  </h3>
                  <p className="text-white text-sm">
                    Three A/B tests were designed to address different funnel stages: onboarding flow (+31% lift), pricing strategy (+47% lift), and feature adoption (+87% lift), all achieving statistical significance.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 rounded-xl p-4 sm:p-6 border-2 border-green-500/50">
                  <h3 className="text-lg sm:text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                    <i className="ri-shield-check-line"></i>
                    Is deployment safe?
                  </h3>
                  <p className="text-white text-sm">
                    Weekly cohort analysis confirms metrics are stable (variance &lt; 1%), validating that observed improvements are genuine and not noise.
                  </p>
                </div>
              </div>
            </div>

            {/* Methodology */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <i className="ri-flow-chart text-2xl sm:text-3xl text-yellow-400"></i>
                <h2 className="text-2xl sm:text-3xl font-black text-yellow-400">Methodology</h2>
              </div>

              {/* Phase Details */}
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-yellow-400/20 to-yellow-500/10 rounded-xl p-4 sm:p-6 border-l-4 border-yellow-400">
                  <h3 className="text-lg sm:text-xl font-bold text-yellow-400 mb-3">Phase 1: Data Generation & Infrastructure</h3>
                  <p className="text-white leading-relaxed text-sm sm:text-base">
                    The project begins with a 3NF normalized MySQL database designed to handle millions of records with proper relationships and constraints. Using Python and the Faker library, 10,000 realistic user profiles were generated across Organic, Paid, Referral, and Direct segments with device and platform distribution. Events were created to simulate realistic user journeys (51,231 total events) with probabilistic conversion rates at each funnel stage (signup→activation: 70%, activation→feature: 50%, feature→PQL: 40%, PQL→paid: 25%).
                  </p>
                </div>

                <div className="bg-gradient-to-r from-yellow-400/20 to-yellow-500/10 rounded-xl p-4 sm:p-6 border-l-4 border-yellow-400">
                  <h3 className="text-lg sm:text-xl font-bold text-yellow-400 mb-3">Phase 2: Exploratory Data Analysis</h3>
                  <p className="text-white leading-relaxed text-sm sm:text-base">
                    Pandas-based EDA examined user demographics, funnel progression, and temporal patterns. Each user segment was analyzed separately to identify performance differences (Direct segment showed 4.3% conversion vs 3.4% for Paid). Time-to-value metrics were calculated (1.1 days signup→activation, 11 days activation→PQL, 15 days PQL→paid), revealing that the activation bottleneck happens early when engagement barriers are highest.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-yellow-400/20 to-yellow-500/10 rounded-xl p-4 sm:p-6 border-l-4 border-yellow-400">
                  <h3 className="text-lg sm:text-xl font-bold text-yellow-400 mb-3">Phase 3: A/B Testing & Statistical Validation</h3>
                  <p className="text-white leading-relaxed text-sm sm:text-base">
                    Three concurrent tests were conducted on balanced samples (n=4,000 per variant). Chi-square tests confirmed statistical significance for all treatments (p &lt; 0.001, 99.9% confidence level). The Feature Adoption test achieved the highest lift (+87%) using an in-app tooltip, demonstrating that simple, contextual guidance directly addresses the engagement gap identified in Phase 2.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-yellow-400/20 to-yellow-500/10 rounded-xl p-4 sm:p-6 border-l-4 border-yellow-400">
                  <h3 className="text-lg sm:text-xl font-bold text-yellow-400 mb-3">Phase 4: Power BI Visualization & Insights</h3>
                  <p className="text-white leading-relaxed text-sm sm:text-base">
                    A professional 3-page dashboard was built in Power BI to present findings: funnel visualization with drop-off indicators, A/B test comparison charts, and weekly cohort retention tracking. An insights bookmark synthesizes all analysis into 8 actionable boxes covering health assessment, statistical significance, revenue scenarios, and priority recommendations, making the findings accessible to both technical and non-technical stakeholders.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-yellow-400/20 to-yellow-500/10 rounded-xl p-4 sm:p-6 border-l-4 border-yellow-400">
                  <h3 className="text-lg sm:text-xl font-bold text-yellow-400 mb-3">Phase 5: Business Impact Modeling & Documentation</h3>
                  <p className="text-white leading-relaxed text-sm sm:text-base">
                    Three revenue scenarios were modeled based on test results: deploying the tooltip guide (low effort, +$165.6K/year), implementing freemium pricing (+$318.6K/year), or both (+$570K/year). Documentation ensures every number is traceable to its underlying calculation, supporting stakeholder confidence in deployment decisions.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-black py-8 border-t-4 border-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <a
            href="https://github.com/Kaushik075/Product--LED-Growth-Analysis"
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
