import { useNavigate } from 'react-router-dom';

export default function SqlAnalyticsProject() {
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
            End-to-End Ad Hoc Analytics using SQL
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Real-world, on-demand analytics in a product-based SaaS company, solving complex business questions using SQL on a large-scale dataset (2M+ transactions).
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {['SQL', 'Database Design', 'Business Intelligence', 'Data Analytics', 'ETL Pipelines'].map((tech) => (
              <span key={tech} className="px-4 py-2 bg-yellow-400 text-black rounded-full text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Overview</h2>
            <p className="text-lg text-black font-semibold max-w-4xl mx-auto">
              ProductCo Ad-Hoc Analytics simulates real-world, on-demand analytics in a product-based SaaS company, solving complex business questions using SQL on a large-scale dataset (2M+ transactions).
            </p>
          </div>

          <div className="bg-gradient-to-r from-black to-gray-900 rounded-2xl p-8 shadow-xl border-4 border-yellow-400 mb-8">
            <h3 className="text-2xl font-bold text-yellow-400 mb-6">This project focuses on end-to-end analytics thinking, not just query writing:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: 'ri-lightbulb-line', title: 'Business problem understanding', desc: 'Translating ambiguous questions into structured analytics' },
                { icon: 'ri-database-2-line', title: 'Scalable schema design', desc: 'Production-ready fact and dimension modeling' },
                { icon: 'ri-code-s-slash-line', title: 'Advanced SQL analysis', desc: 'CTEs, window functions, cohorts, and churn logic' },
                { icon: 'ri-bar-chart-box-line', title: 'Insight generation & recommendations', desc: 'Actionable insights for product, growth, and revenue teams' }
              ].map((item, index) => (
                <div key={index} className="bg-yellow-400 rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className={`${item.icon} text-2xl text-yellow-400`}></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-black mb-2">{item.title}</h4>
                      <p className="text-sm text-black font-semibold">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Data Model & Schema Design Section */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">🏗️ Data Model & Schema Design</h2>
            <p className="text-lg text-white max-w-3xl mx-auto">
              The analytics layer is built on a <strong className="text-yellow-400">Star Schema</strong>, optimized for ad-hoc querying and performance.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Dimension Tables */}
            <div className="bg-yellow-400 rounded-2xl p-8 shadow-xl border-4 border-black">
              <h3 className="text-2xl font-bold text-black mb-6 flex items-center">
                <i className="ri-database-line mr-3"></i>
                Dimension Tables
              </h3>
              <div className="space-y-3">
                {[
                  { name: 'dim_users', desc: 'user profile & lifecycle attributes' },
                  { name: 'dim_products', desc: 'product & feature grouping' },
                  { name: 'dim_features', desc: 'feature-level usage mapping' },
                  { name: 'dim_regions', desc: 'geographic segmentation' },
                  { name: 'dim_subscription_plans', desc: 'pricing & plan metadata' },
                  { name: 'dim_time', desc: 'calendar & time intelligence' }
                ].map((table, index) => (
                  <div key={index} className="bg-black rounded-lg p-4 hover:bg-gray-900 transition-colors duration-300">
                    <p className="text-yellow-400 font-bold text-lg">{table.name}</p>
                    <p className="text-white text-sm mt-1">{table.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Fact Tables */}
            <div className="bg-yellow-400 rounded-2xl p-8 shadow-xl border-4 border-black">
              <h3 className="text-2xl font-bold text-black mb-6 flex items-center">
                <i className="ri-table-line mr-3"></i>
                Fact Tables
              </h3>
              <div className="space-y-3">
                {[
                  { name: 'fact_events', desc: 'user activity & feature usage logs' },
                  { name: 'fact_payments', desc: 'subscription & revenue transactions' },
                  { name: 'fact_feedback', desc: 'ratings & qualitative feedback' },
                  { name: 'fact_upgrades', desc: 'plan changes (Free → Paid, expansion)' },
                  { name: 'fact_cohorts', desc: 'cohort tracking for retention analysis' }
                ].map((table, index) => (
                  <div key={index} className="bg-black rounded-lg p-4 hover:bg-gray-900 transition-colors duration-300">
                    <p className="text-yellow-400 font-bold text-lg">{table.name}</p>
                    <p className="text-white text-sm mt-1">{table.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Problems Solved Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">❓ Business Problems Solved</h2>
          </div>

          <div className="space-y-6">
            {/* Product Usage Analytics */}
            <div className="bg-gradient-to-r from-black to-gray-900 rounded-2xl p-8 shadow-xl border-4 border-yellow-400">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center">
                <i className="ri-line-chart-line mr-3"></i>
                📊 Product Usage Analytics
              </h3>
              <ul className="space-y-3 text-white">
                <li className="flex items-start">
                  <i className="ri-arrow-right-s-line text-yellow-400 mt-1 mr-2 flex-shrink-0"></i>
                  <span>Percentage of new users adopting a feature within 7 days</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-arrow-right-s-line text-yellow-400 mt-1 mr-2 flex-shrink-0"></i>
                  <span>Weekly retention by feature</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-arrow-right-s-line text-yellow-400 mt-1 mr-2 flex-shrink-0"></i>
                  <span>Average events per Daily Active User (DAU)</span>
                </li>
              </ul>
            </div>

            {/* Revenue & Monetization */}
            <div className="bg-gradient-to-r from-black to-gray-900 rounded-2xl p-8 shadow-xl border-4 border-yellow-400">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center">
                <i className="ri-money-dollar-circle-line mr-3"></i>
                💰 Revenue & Monetization
              </h3>
              <ul className="space-y-3 text-white">
                <li className="flex items-start">
                  <i className="ri-arrow-right-s-line text-yellow-400 mt-1 mr-2 flex-shrink-0"></i>
                  <span>ARPU by region and subscription plan</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-arrow-right-s-line text-yellow-400 mt-1 mr-2 flex-shrink-0"></i>
                  <span>Features most likely to trigger Free → Paid upgrades</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-arrow-right-s-line text-yellow-400 mt-1 mr-2 flex-shrink-0"></i>
                  <span>Revenue decomposition: New revenue, Expansion revenue, Churn recovery</span>
                </li>
              </ul>
            </div>

            {/* Retention & Churn */}
            <div className="bg-gradient-to-r from-black to-gray-900 rounded-2xl p-8 shadow-xl border-4 border-yellow-400">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center">
                <i className="ri-refresh-line mr-3"></i>
                🔁 Retention & Churn
              </h3>
              <ul className="space-y-3 text-white">
                <li className="flex items-start">
                  <i className="ri-arrow-right-s-line text-yellow-400 mt-1 mr-2 flex-shrink-0"></i>
                  <span>Cohort retention at 30 / 60 / 90 days</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-arrow-right-s-line text-yellow-400 mt-1 mr-2 flex-shrink-0"></i>
                  <span>Identification of top 10 churn-risk users based on declining engagement</span>
                </li>
              </ul>
            </div>

            {/* Support & Feedback Intelligence */}
            <div className="bg-gradient-to-r from-black to-gray-900 rounded-2xl p-8 shadow-xl border-4 border-yellow-400">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center">
                <i className="ri-customer-service-2-line mr-3"></i>
                🧠 Support & Feedback Intelligence
              </h3>
              <ul className="space-y-3 text-white">
                <li className="flex items-start">
                  <i className="ri-arrow-right-s-line text-yellow-400 mt-1 mr-2 flex-shrink-0"></i>
                  <span>Correlation between usage frequency and user ratings</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-arrow-right-s-line text-yellow-400 mt-1 mr-2 flex-shrink-0"></i>
                  <span>Features with consistently low feedback scores</span>
                </li>
              </ul>
            </div>

            {/* Advanced Analytics */}
            <div className="bg-gradient-to-r from-black to-gray-900 rounded-2xl p-8 shadow-xl border-4 border-yellow-400">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center">
                <i className="ri-rocket-line mr-3"></i>
                🚀 Advanced (FAANG-Style) Analytics
              </h3>
              <ul className="space-y-3 text-white">
                <li className="flex items-start">
                  <i className="ri-arrow-right-s-line text-yellow-400 mt-1 mr-2 flex-shrink-0"></i>
                  <span>Detection of anomalous usage patterns</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-arrow-right-s-line text-yellow-400 mt-1 mr-2 flex-shrink-0"></i>
                  <span>User segmentation by adoption speed</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-arrow-right-s-line text-yellow-400 mt-1 mr-2 flex-shrink-0"></i>
                  <span>Comparison of ARPU and churn across segments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Skills Section */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">🛠️ Tools & Skills Demonstrated</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'ri-code-s-slash-line', title: 'SQL Mastery', desc: 'CTEs, Window Functions, Cohorts, Churn Logic' },
              { icon: 'ri-database-2-line', title: 'Data Modeling', desc: 'Analytical data modeling (Fact & Dimension design)' },
              { icon: 'ri-lightbulb-line', title: 'Business-First', desc: 'Business-first problem solving' },
              { icon: 'ri-scales-3-line', title: 'Scalable Thinking', desc: 'Scalable analytics thinking used in SaaS & product companies' }
            ].map((skill, index) => (
              <div key={index} className="bg-yellow-400 rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300 border-4 border-black">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${skill.icon} text-3xl text-yellow-400`}></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{skill.title}</h3>
                <p className="text-sm text-black font-semibold">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-black to-gray-900 rounded-2xl p-12 shadow-xl border-4 border-yellow-400 text-center">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">🎯 Outcome</h2>
            <p className="text-xl text-white mb-8 font-semibold">This project demonstrates the ability to:</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: 'ri-question-answer-line', text: 'Translate ambiguous business questions into structured analytics' },
                { icon: 'ri-database-2-line', text: 'Design production-ready schemas' },
                { icon: 'ri-lightbulb-flash-line', text: 'Deliver actionable insights used by product, growth, and revenue teams' }
              ].map((item, index) => (
                <div key={index} className="bg-yellow-400 rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`${item.icon} text-3xl text-yellow-400`}></i>
                  </div>
                  <p className="text-black font-bold">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Link */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <a
            href="https://github.com/Kaushik075/End-to-End-Ad-Hoc-Analytics-using-SQL"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-yellow-400 text-black rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 whitespace-nowrap border-4 border-black hover:bg-yellow-300"
          >
            <i className="ri-github-fill text-xl"></i>
            <span>View on GitHub</span>
            <i className="ri-external-link-line text-lg"></i>
          </a>
        </div>
      </section>
    </div>
  );
}
