import { useNavigate } from 'react-router-dom';

export default function TechflowSaasProject() {
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
            TechFlow SaaS Analytics Platform
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            End-to-end SQL analytics project simulating real-world data challenges in a Software-as-a-Service (SaaS) business with 1M+ synthetic records.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl border-4 border-black p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-black mb-6 flex items-center">
              <i className="ri-file-text-line mr-3 text-yellow-500"></i>
              Overview
            </h2>
            <div className="space-y-4 text-gray-800 leading-relaxed">
              <p className="text-lg">
                <strong>TechFlow SaaS Analytics</strong> is an end-to-end SQL analytics project that simulates real-world data challenges in a Software-as-a-Service (SaaS) business.
              </p>
              <p className="text-lg">
                The project demonstrates how large-scale subscription, revenue, and usage data can be transformed into actionable business insights using advanced SQL techniques on <strong>1M+ synthetic records</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Objective Section */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl border-4 border-yellow-400 p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-black mb-6 flex items-center">
              <i className="ri-target-line mr-3 text-yellow-500"></i>
              Project Objective
            </h2>
            <p className="text-lg text-gray-800 mb-6">
              To analyze the SaaS subscription lifecycle and answer business-critical questions related to:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: 'ri-line-chart-line', text: 'Growth & acquisition' },
                { icon: 'ri-money-dollar-circle-line', text: 'Revenue & monetization' },
                { icon: 'ri-user-heart-line', text: 'User engagement' },
                { icon: 'ri-group-line', text: 'Customer segmentation' },
                { icon: 'ri-refresh-line', text: 'Retention & churn risk' },
                { icon: 'ri-product-hunt-line', text: 'Product & feature performance' }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 bg-yellow-50 p-4 rounded-lg border-2 border-yellow-400">
                  <i className={`${item.icon} text-2xl text-yellow-600`}></i>
                  <span className="font-semibold text-gray-800">{item.text}</span>
                </div>
              ))}
            </div>
            <p className="text-lg text-gray-800 mt-6">
              All insights are derived using <strong>production-style SQL queries</strong> designed for real analytics teams.
            </p>
          </div>
        </div>
      </section>

      {/* Data Sources & Schema Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl border-4 border-black p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-black mb-6 flex items-center">
              <i className="ri-database-2-line mr-3 text-yellow-500"></i>
              Data Sources &amp; Schema
            </h2>
            
            <h3 className="text-2xl font-bold text-black mb-4">Core Tables</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                { name: 'users', desc: 'customer demographics and account details' },
                { name: 'subscriptions', desc: 'subscription lifecycle, plans, and revenue' },
                { name: 'subscription_items', desc: 'products linked to subscriptions' },
                { name: 'payments', desc: 'transaction and payment history' },
                { name: 'products', desc: 'SaaS product catalog' },
                { name: 'user_activities', desc: 'granular user engagement & feature usage' }
              ].map((table, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg border-2 border-gray-300">
                  <span className="font-bold text-yellow-600">{table.name}</span>
                  <span className="text-gray-700"> – {table.desc}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-400">
              <p className="text-lg text-gray-800">
                Dataset contains <strong className="text-yellow-600">1,000,000+ records</strong>, generated using Python + Faker to closely mimic real SaaS data distributions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Model Section */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl border-4 border-yellow-400 p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-black mb-6 flex items-center">
              <i className="ri-git-branch-line mr-3 text-yellow-500"></i>
              Data Model
            </h2>
            
            <p className="text-lg text-gray-800 mb-6">
              The project uses a <strong>normalized SaaS subscription schema</strong>, optimized for:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                'Ad-hoc analytics',
                'Cohort and churn analysis',
                'Revenue tracking',
                'Feature-level insights'
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 bg-yellow-50 p-4 rounded-lg border-2 border-yellow-400">
                  <i className="ri-check-line text-2xl text-green-600"></i>
                  <span className="font-semibold text-gray-800">{item}</span>
                </div>
              ))}
            </div>
            
            <h3 className="text-2xl font-bold text-black mb-4">Relationship Overview</h3>
            <div className="bg-gray-900 p-6 rounded-lg font-mono text-sm text-yellow-400 overflow-x-auto">
              <pre className="whitespace-pre">
{`users (1) ──── (M) subscriptions
subscriptions (1) ──── (M) subscription_items
subscriptions (1) ──── (M) payments
users (1) ──── (M) user_activities
subscription_items (M) ──── (1) products`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl border-4 border-black p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-black mb-6 flex items-center">
              <i className="ri-star-line mr-3 text-yellow-500"></i>
              Key Features
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <i className="ri-checkbox-circle-fill text-2xl text-yellow-500 mt-1"></i>
                <p className="text-lg text-gray-800">
                  Generation of <strong>1M+ realistic SaaS records</strong> using Python &amp; Faker
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <i className="ri-checkbox-circle-fill text-2xl text-yellow-500 mt-1"></i>
                <div className="text-lg text-gray-800">
                  <p className="font-semibold mb-2">Advanced SQL techniques:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>CTEs</li>
                    <li>Window functions</li>
                    <li>Aggregations</li>
                    <li>Cohort analysis</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <i className="ri-checkbox-circle-fill text-2xl text-yellow-500 mt-1"></i>
                <p className="text-lg text-gray-800">
                  <strong>Business-first problem framing</strong>
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <i className="ri-checkbox-circle-fill text-2xl text-yellow-500 mt-1"></i>
                <p className="text-lg text-gray-800">
                  Emphasis on <strong>query performance</strong> for large datasets
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <i className="ri-checkbox-circle-fill text-2xl text-yellow-500 mt-1"></i>
                <p className="text-lg text-gray-800">
                  Clear documentation for every analytical problem solved
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Questions Section */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl border-4 border-yellow-400 p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-black mb-8 flex items-center">
              <i className="ri-question-line mr-3 text-yellow-500"></i>
              Business Questions Answered
            </h2>
            
            {/* Acquisition & Growth */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-yellow-600 mb-4 flex items-center">
                <i className="ri-line-chart-line mr-2"></i>
                Acquisition &amp; Growth
              </h3>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start space-x-2">
                  <i className="ri-arrow-right-s-line text-yellow-500 mt-1"></i>
                  <span className="text-gray-800">Top 10 countries by user count</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-arrow-right-s-line text-yellow-500 mt-1"></i>
                  <span className="text-gray-800">Monthly subscription growth trends (2 years)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-arrow-right-s-line text-yellow-500 mt-1"></i>
                  <span className="text-gray-800">Subscription count &amp; MoM growth (last year)</span>
                </li>
              </ul>
            </div>
            
            {/* Revenue & Monetization */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-yellow-600 mb-4 flex items-center">
                <i className="ri-money-dollar-circle-line mr-2"></i>
                Revenue &amp; Monetization
              </h3>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start space-x-2">
                  <i className="ri-arrow-right-s-line text-yellow-500 mt-1"></i>
                  <span className="text-gray-800">Total monthly revenue by subscription plan</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-arrow-right-s-line text-yellow-500 mt-1"></i>
                  <span className="text-gray-800">Customer Lifetime Value (LTV) calculation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-arrow-right-s-line text-yellow-500 mt-1"></i>
                  <span className="text-gray-800">Revenue attributed per product</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-arrow-right-s-line text-yellow-500 mt-1"></i>
                  <span className="text-gray-800">Enterprise plan revenue share</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-arrow-right-s-line text-yellow-500 mt-1"></i>
                  <span className="text-gray-800">Revenue components for forecasting</span>
                </li>
              </ul>
            </div>
            
            {/* Retention & Churn */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-yellow-600 mb-4 flex items-center">
                <i className="ri-refresh-line mr-2"></i>
                Retention &amp; Churn
              </h3>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start space-x-2">
                  <i className="ri-arrow-right-s-line text-yellow-500 mt-1"></i>
                  <span className="text-gray-800">Monthly churn counts (past year)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-arrow-right-s-line text-yellow-500 mt-1"></i>
                  <span className="text-gray-800">Retention rate by plan after 6 months</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-arrow-right-s-line text-yellow-500 mt-1"></i>
                  <span className="text-gray-800">Churn-risk users based on declining activity</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-arrow-right-s-line text-yellow-500 mt-1"></i>
                  <span className="text-gray-800">Average days to first payment</span>
                </li>
              </ul>
            </div>
            
            {/* Product & Usage Analytics */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-yellow-600 mb-4 flex items-center">
                <i className="ri-product-hunt-line mr-2"></i>
                Product &amp; Usage Analytics
              </h3>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start space-x-2">
                  <i className="ri-arrow-right-s-line text-yellow-500 mt-1"></i>
                  <span className="text-gray-800">Products included in most subscriptions</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-arrow-right-s-line text-yellow-500 mt-1"></i>
                  <span className="text-gray-800">Products frequently purchased together</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-arrow-right-s-line text-yellow-500 mt-1"></i>
                  <span className="text-gray-800">Feature usage vs revenue impact</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-arrow-right-s-line text-yellow-500 mt-1"></i>
                  <span className="text-gray-800">Average session duration by activity type</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-arrow-right-s-line text-yellow-500 mt-1"></i>
                  <span className="text-gray-800">Top users by average features used</span>
                </li>
              </ul>
            </div>
            
            {/* Advanced Analytics */}
            <div>
              <h3 className="text-2xl font-bold text-yellow-600 mb-4 flex items-center">
                <i className="ri-brain-line mr-2"></i>
                Advanced Analytics
              </h3>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start space-x-2">
                  <i className="ri-arrow-right-s-line text-yellow-500 mt-1"></i>
                  <span className="text-gray-800">RFM-based customer segmentation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-arrow-right-s-line text-yellow-500 mt-1"></i>
                  <span className="text-gray-800">Feature dataset preparation for churn prediction</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-arrow-right-s-line text-yellow-500 mt-1"></i>
                  <span className="text-gray-800">Revenue volatility by product</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl border-4 border-black p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-black mb-6 flex items-center">
              <i className="ri-tools-line mr-3 text-yellow-500"></i>
              Tech Stack
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: 'MySQL', desc: 'analytics & querying' },
                { name: 'Python', desc: 'synthetic data generation' },
                { name: 'Faker', desc: 'realistic SaaS data simulation' },
                { name: 'SQL', desc: 'CTEs, window functions, cohort logic' }
              ].map((tech, index) => (
                <div key={index} className="bg-yellow-50 p-4 rounded-lg border-2 border-yellow-400">
                  <span className="font-bold text-yellow-600 text-lg">{tech.name}</span>
                  <span className="text-gray-700"> – {tech.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Setup Section */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl border-4 border-yellow-400 p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-black mb-6 flex items-center">
              <i className="ri-settings-3-line mr-3 text-yellow-500"></i>
              Setup &amp; Data Generation
            </h2>
            
            <h3 className="text-2xl font-bold text-black mb-4">Prerequisites</h3>
            <ul className="space-y-2 ml-6 mb-8">
              <li className="flex items-start space-x-2">
                <i className="ri-checkbox-circle-line text-yellow-500 mt-1"></i>
                <span className="text-gray-800">MySQL Server &amp; MySQL Workbench</span>
              </li>
              <li className="flex items-start space-x-2">
                <i className="ri-checkbox-circle-line text-yellow-500 mt-1"></i>
                <span className="text-gray-800">Python 3</span>
              </li>
              <li className="flex items-start space-x-2">
                <i className="ri-checkbox-circle-line text-yellow-500 mt-1"></i>
                <div>
                  <span className="text-gray-800 font-semibold">Required Python packages:</span>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li className="text-gray-700">mysql-connector-python</li>
                    <li className="text-gray-700">faker</li>
                    <li className="text-gray-700">pandas</li>
                    <li className="text-gray-700">numpy</li>
                  </ul>
                </div>
              </li>
            </ul>
            
            <h3 className="text-2xl font-bold text-black mb-4">Steps</h3>
            <div className="space-y-3">
              {[
                'Run SQL schema scripts in MySQL Workbench',
                'Execute Python scripts to generate and insert synthetic data',
                'Validate row counts and relationships',
                'Run analytical SQL queries from the queries folder'
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-3 bg-yellow-50 p-4 rounded-lg border-2 border-yellow-400">
                  <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-gray-800 font-semibold">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Structure Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl border-4 border-black p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-black mb-6 flex items-center">
              <i className="ri-folder-line mr-3 text-yellow-500"></i>
              Project Structure
            </h2>
            
            <div className="bg-gray-900 p-6 rounded-lg font-mono text-sm text-yellow-400 overflow-x-auto">
              <pre className="whitespace-pre">
{`TechFlow-SaaS-Analytics/
├── schema/               # SQL DDL scripts
├── data_generation/      # Python Faker scripts
├── queries/              # Business questions & SQL solutions
├── docs/                 # Schema diagrams & documentation
└── README.md             # Project overview`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome Section */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl border-4 border-yellow-400 p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-black mb-6 flex items-center">
              <i className="ri-trophy-line mr-3 text-yellow-500"></i>
              Outcome &amp; Learnings
            </h2>
            
            <p className="text-lg text-gray-800 mb-6">
              This project demonstrates the ability to:
            </p>
            
            <div className="space-y-3">
              {[
                'Design analytics-ready SaaS schemas',
                'Translate ambiguous business questions into SQL logic',
                'Perform large-scale ad-hoc analytics',
                'Support growth, monetization, and retention decisions using data'
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3 bg-yellow-50 p-4 rounded-lg border-2 border-yellow-400">
                  <i className="ri-check-double-line text-2xl text-green-600 flex-shrink-0"></i>
                  <span className="text-gray-800 font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Case Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl border-4 border-black p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-black mb-6 flex items-center">
              <i className="ri-briefcase-line mr-3 text-yellow-500"></i>
              Use Case
            </h2>
            
            <p className="text-lg text-gray-800 mb-4">
              Ideal for:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Data Analyst / SQL Analyst portfolios',
                'SaaS analytics case studies',
                'Interview discussions on churn, cohorts, and revenue modeling'
              ].map((useCase, index) => (
                <div key={index} className="flex items-start space-x-3 bg-yellow-50 p-4 rounded-lg border-2 border-yellow-400">
                  <i className="ri-star-fill text-2xl text-yellow-500 flex-shrink-0"></i>
                  <span className="text-gray-800 font-semibold">{useCase}</span>
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
            href="https://github.com/Kaushik075/TechFlow-SaaS-Analytics-Project"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-yellow-400 text-black rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 whitespace-nowrap border-2 border-black hover:bg-yellow-300"
          >
            <i className="ri-github-fill text-2xl"></i>
            <span>View on GitHub</span>
          </a>
        </div>
      </section>
    </div>
  );
}
