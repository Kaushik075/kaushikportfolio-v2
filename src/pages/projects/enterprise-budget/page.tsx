
import { useNavigate } from 'react-router-dom';

export default function EnterpriseBudgetProject() {
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
              Back to Projects
            </button>
          </div>
        </div>
      </header>

      {/* Project Title Section */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-yellow-400 mb-6">
            Enterprise Intelligence: Budget Analytics Dashboard
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Comprehensive budget analysis and forecasting dashboard for enterprise-level financial planning and strategic decision making.
          </p>
        </div>
      </section>

      {/* Dashboard Image Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-black mb-8">Dashboard Overview</h2>
          <div className="bg-gradient-to-r from-black to-gray-900 rounded-xl shadow-lg overflow-hidden border border-yellow-400">
            <img
              src="https://static.readdy.ai/image/162de1f448c1631ca23ab745508fcce7/aa9cd606e6eb5c85844eaa62e1fcd61a.png"
              alt="Enterprise Budget Dashboard Main"
              className="w-full h-auto object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* README Content Section */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl border border-yellow-400 p-8 lg:p-12">
            
            {/* Description */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Description</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                This project contains a complete Budget Analytics Dashboard built with Power BI Desktop, powered by a Python data generation pipeline. The project demonstrates end-to-end analytics capabilities including data generation, visualization, and business intelligence without requiring database infrastructure.
              </p>
              
              <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl p-6 border border-yellow-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Facts</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold text-gray-900">Dashboard Pages:</p>
                      <p className="text-gray-700">3 interactive Power BI dashboards covering Budget Summary, Department Spend & Cost, and Revenue/ROI Analysis</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold text-gray-900">Technology Stack:</p>
                      <p className="text-gray-700">Power BI Desktop, Python (Faker, Pandas), CSV data exports</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold text-gray-900">Key Metrics:</p>
                      <p className="text-gray-700">$149M Total Budget, $161M Actual Spend, 108.4% Budget Utilization, 93.4% Average ROI</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold text-gray-900">Analysis Depth:</p>
                      <p className="text-gray-700">Variance analysis, trend forecasting, department performance, campaign ROI comparison</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Problem */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Business Problem</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-red-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Multiple CSV Files & Data Fragmentation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Budget data scattered across 6+ separate CSV files (departments.csv, budgets.csv, actual_spend.csv, campaigns.csv) with no centralized system, making it impossible to correlate budget allocations with actual spending or campaign performance in a unified view.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-orange-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Messy & Inconsistent Data & No Budget Tracking Capability</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Raw data contains inconsistent formatting, missing values, duplicate records, and conflicting values across files (e.g., same department with different budget amounts in different files), requiring extensive manual cleanup before any analysis could be performed. Organization cannot track real-time budget vs. actual spend variances across departments and months, leading to blind spots on overspending (discovered later to be $12M/8.4% over budget) and inability to take corrective action until damage is done.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-yellow-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">No Professional Reporting Infrastructure</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Organization lacks formal reporting structure for communicating budget performance to executives, department heads, and finance teams, resulting in inconsistent insights, missed insights, and inability to support data-driven budget decisions. All data trapped in raw CSV format with no dashboards, charts, or visual analytics—stakeholders forced to manually open Excel spreadsheets, copy/paste data, and create ad-hoc pivot tables to answer basic questions about budget status.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-emerald-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Department Performance Visibility Gap & Campaign ROI Blindness</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Finance and department heads cannot see which departments are exceeding budgets, by how much, or why—preventing proactive cost control and accountability measures despite organization-wide overspending. Marketing spend tracked separately from revenue generated, making it impossible to correlate campaign investments with actual returns or optimize marketing budget allocation based on performance data.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Metrics</h2>
              
              {/* Budget Summary */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center mr-3">
                    <i className="ri-funds-line text-black"></i>
                  </span>
                  Budget Summary
                </h3>
                <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl p-6 border border-yellow-200">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-yellow-600 mt-1 mr-3"></i>
                      <span className="text-gray-700"><strong>Total Budget Allocated:</strong> $149M across all departments</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-yellow-600 mt-1 mr-3"></i>
                      <span className="text-gray-700"><strong>Total Actual Spend:</strong> $161M (over budget by $12M)</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-yellow-600 mt-1 mr-3"></i>
                      <span className="text-gray-700"><strong>Budget Variance:</strong> $12M overage (8% over allocated budget)</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-yellow-600 mt-1 mr-3"></i>
                      <span className="text-gray-700"><strong>Budget Utilization:</strong> 108.4% (departments spending more than planned)</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-yellow-600 mt-1 mr-3"></i>
                      <span className="text-gray-700"><strong>Remaining Budget:</strong> -$12M (deficit position)</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-yellow-600 mt-1 mr-3"></i>
                      <span className="text-gray-700"><strong>Department Performance:</strong> Color-coded status showing which departments are over/under budget</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-yellow-600 mt-1 mr-3"></i>
                      <span className="text-gray-700"><strong>Monthly Trend Analysis:</strong> Budget vs. actual spend tracking across 24-month period with variance indicators</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Department Spend & Cost Analysis */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center mr-3">
                    <i className="ri-building-line text-black"></i>
                  </span>
                  Department Spend & Cost Analysis
                </h3>
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-gray-600 mt-1 mr-3"></i>
                      <span className="text-gray-700"><strong>Overbudget Departments:</strong> 6 departments exceeding allocated budgets</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-gray-600 mt-1 mr-3"></i>
                      <span className="text-gray-700"><strong>Average Utilization Rate:</strong> 108.4% (showing organization-wide overspending)</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-gray-600 mt-1 mr-3"></i>
                      <span className="text-gray-700"><strong>Total Department Spend:</strong> $161M distributed across Finance, Marketing, HR, Sales, Operations, and IT</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-gray-600 mt-1 mr-3"></i>
                      <span className="text-gray-700"><strong>Highest Monthly Spend:</strong> $11M (Marketing department in peak month)</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-gray-600 mt-1 mr-3"></i>
                      <span className="text-gray-700"><strong>Cost as % of Revenue:</strong> 129.1% (spending exceeds revenue generation)</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-gray-600 mt-1 mr-3"></i>
                      <span className="text-gray-700"><strong>Top 5 Spenders:</strong> Rankings showing Marketing ($47M), Finance ($43M), Sales ($42M) leading spend</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-gray-600 mt-1 mr-3"></i>
                      <span className="text-gray-700"><strong>Budget vs Actual by Department:</strong> Side-by-side comparison showing variance magnitude for each department</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-gray-600 mt-1 mr-3"></i>
                      <span className="text-gray-700"><strong>% Budget Used by Department:</strong> Utilization percentages (Marketing 113.1%, Finance 114.2%, HR 111.0%)</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Image 2 Placeholder */}
              <div className="mb-8">
                <div className="bg-gradient-to-r from-black to-gray-900 rounded-xl shadow-lg overflow-hidden border border-yellow-400">
                  <img
                    src="https://static.readdy.ai/image/162de1f448c1631ca23ab745508fcce7/3027cb6cea32619ed405f9e008c1d2d9.png"
                    alt="Department Spend & Cost Analysis Dashboard"
                    className="w-full h-auto object-cover object-top"
                  />
                </div>
              </div>

              {/* Revenue, ROI & Forecast Analysis */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center mr-3">
                    <i className="ri-line-chart-line text-black"></i>
                  </span>
                  Revenue, ROI & Forecast Analysis
                </h3>
                <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-xl p-6 border border-emerald-200">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-emerald-600 mt-1 mr-3"></i>
                      <span className="text-gray-700"><strong>Total Campaign Revenue:</strong> $39M generated from campaigns</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-emerald-600 mt-1 mr-3"></i>
                      <span className="text-gray-700"><strong>Average ROI:</strong> 93.4% across all campaigns</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-emerald-600 mt-1 mr-3"></i>
                      <span className="text-gray-700"><strong>Campaign Efficiency:</strong> 4.9% conversion rate indicating campaign performance</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-emerald-600 mt-1 mr-3"></i>
                      <span className="text-gray-700"><strong>Total Ad Spend:</strong> $2M invested in paid advertising</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-emerald-600 mt-1 mr-3"></i>
                      <span className="text-gray-700"><strong>Sum of Revenue by Campaign:</strong> Complete revenue contribution by campaign name</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-emerald-600 mt-1 mr-3"></i>
                      <span className="text-gray-700"><strong>Campaign ROI Comparison:</strong> Detailed comparison showing which campaigns deliver highest ROI</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-emerald-600 mt-1 mr-3"></i>
                      <span className="text-gray-700"><strong>Total Ad Spend & Revenue by Campaign:</strong> Spend efficiency analysis identifying highest-performing campaigns</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-emerald-600 mt-1 mr-3"></i>
                      <span className="text-gray-700"><strong>Revenue vs Net Income Over Time:</strong> Trend line showing revenue stability and net income tracking from 2021-2024</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-emerald-600 mt-1 mr-3"></i>
                      <span className="text-gray-700"><strong>Quarterly Performance:</strong> Q1-Q4 breakdown across fiscal years with growth trajectory</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Image 3 Placeholder */}
              <div className="mb-8">
                <div className="bg-gradient-to-r from-black to-gray-900 rounded-xl shadow-lg overflow-hidden border border-yellow-400">
                  <img
                    src="https://static.readdy.ai/image/162de1f448c1631ca23ab745508fcce7/b3c26bd8136a90ca272a39cfb2bb14fe.png"
                    alt="Revenue, ROI & Forecast Analysis Dashboard"
                    className="w-full h-auto object-cover object-top"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* GitHub Link */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <a
            href="https://github.com/Kaushik075/Enterprise-Intelligence-Budget-Analytics-Dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-black to-gray-900 text-yellow-400 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 whitespace-nowrap border border-yellow-400"
          >
            <i className="ri-github-fill text-xl"></i>
            <span>View on GitHub</span>
          </a>
        </div>
      </section>
    </div>
  );
}
