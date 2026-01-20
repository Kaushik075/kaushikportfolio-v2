import { useNavigate } from 'react-router-dom';

export default function LogisticsDashboardProject() {
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
            Regional Market Performance Analytics
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Unified market intelligence dashboard providing comprehensive real-time visibility into regional business performance and revenue optimization opportunities.
          </p>
        </div>
      </section>

      {/* Dashboard Image Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black">Dashboard Overview</h2>
          </div>
          
          {/* Single Dashboard Image - Full Width */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-black to-gray-900 rounded-xl shadow-lg overflow-hidden border border-yellow-400">
              <img
                src="https://static.readdy.ai/image/162de1f448c1631ca23ab745508fcce7/92f122f2b7a0b23e52743f2c223d4035.png"
                alt="Regional Market Performance Analytics Dashboard"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* README Content Section */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl border border-yellow-400 p-8 lg:p-12">
            
            {/* Executive Summary */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center mr-3">
                  <i className="ri-file-text-line text-black text-xl"></i>
                </div>
                Executive Summary
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl p-6 border-l-4 border-yellow-400">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <i className="ri-target-line text-yellow-600 mr-2"></i>
                    Objective
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Develop a unified market intelligence dashboard providing comprehensive real-time visibility into regional business performance, customer acquisition patterns, and revenue optimization opportunities across geographic markets and product categories in a single consolidated view.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl p-6 border-l-4 border-yellow-400">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <i className="ri-line-chart-line text-yellow-600 mr-2"></i>
                    Business Impact
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    This integrated analytics solution enables business leadership and strategy teams to monitor all critical market performance indicators simultaneously—from revenue and order metrics to regional performance rankings, product category contributions, and shipping logistics effectiveness. The single-dashboard design enables rapid decision-making and eliminates the need for multiple reports.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl p-6 border-l-4 border-yellow-400">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <i className="ri-dashboard-line text-yellow-600 mr-2"></i>
                    Key Metrics Delivered
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-yellow-500 mr-3 mt-1"></i>
                      <span>Consolidated regional revenue performance (₹3.4bn) with YoY/MoM growth trends</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-yellow-500 mr-3 mt-1"></i>
                      <span>Geographic market penetration across Indian states with heat map visualization</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-yellow-500 mr-3 mt-1"></i>
                      <span>Total customer acquisition and retention by geography</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-yellow-500 mr-3 mt-1"></i>
                      <span>Product category revenue contribution breakdown (Electronics 37.29%, Home 31.78%, Fashion 30.93%)</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-yellow-500 mr-3 mt-1"></i>
                      <span>Shipping mode effectiveness and monthly volume trends across all 5 logistics modes</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-yellow-500 mr-3 mt-1"></i>
                      <span>Real-time order volume tracking and monthly growth rate analysis</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Business Problem */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center mr-3">
                  <i className="ri-error-warning-line text-black text-xl"></i>
                </div>
                Business Problem
              </h2>

              <div className="space-y-6">
                <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-400">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <i className="ri-alert-line text-red-600 mr-2"></i>
                    Problem Statement
                  </h3>
                  <p className="text-gray-700 mb-4 font-semibold">Business stakeholders faced critical challenges due to fragmented performance visibility:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <i className="ri-close-circle-fill text-red-500 mr-3 mt-1"></i>
                      <span>Multiple reports needed to assess regional performance (no single source of truth)</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-close-circle-fill text-red-500 mr-3 mt-1"></i>
                      <span>5-7 day reporting cycles delayed critical market expansion and strategy decisions</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-close-circle-fill text-red-500 mr-3 mt-1"></i>
                      <span>Inability to quickly identify high-growth vs. stagnant geographic markets in real-time</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-close-circle-fill text-red-500 mr-3 mt-1"></i>
                      <span>Scattered dashboards prevented stakeholders from seeing complete market picture simultaneously</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-close-circle-fill text-red-500 mr-3 mt-1"></i>
                      <span>Inconsistent metrics and definitions across different reporting tools</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-close-circle-fill text-red-500 mr-3 mt-1"></i>
                      <span>Marketing and operations teams making independent decisions without unified data</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-400">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <i className="ri-information-line text-blue-600 mr-2"></i>
                    Business Context
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    In a fast-moving market, organizations need unified data visibility to optimize market entry strategy, allocate resources effectively, and respond quickly to regional opportunities. Key stakeholders—Regional Managers, Marketing Leadership, Finance teams, and Executive Strategy—needed a single consolidated view combining revenue, customer, geographic, product, and logistics metrics without context switching.
                  </p>
                </div>

                <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-400">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <i className="ri-team-line text-purple-600 mr-2"></i>
                    Stakeholder Requirements
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex items-start">
                      <i className="ri-user-line text-purple-500 mr-3 mt-1"></i>
                      <div>
                        <strong>Regional Managers:</strong> All-in-one view of regional performance, state rankings, and growth metrics
                      </div>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-user-star-line text-purple-500 mr-3 mt-1"></i>
                      <div>
                        <strong>Executive Leadership:</strong> High-level KPIs (revenue ₹3.4bn, orders 50K, customers 9933) with consolidated trends
                      </div>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-megaphone-line text-purple-500 mr-3 mt-1"></i>
                      <div>
                        <strong>Marketing Team:</strong> Customer acquisition by region, category performance insights, and geographic heat map
                      </div>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-money-dollar-circle-line text-purple-500 mr-3 mt-1"></i>
                      <div>
                        <strong>Finance Team:</strong> Revenue analysis, growth percentages, quantity metrics, and budget allocation data
                      </div>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-settings-line text-purple-500 mr-3 mt-1"></i>
                      <div>
                        <strong>Operations Team:</strong> Regional shipping logistics effectiveness, mode distribution, and monthly volume patterns
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-400">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <i className="ri-lightbulb-line text-green-600 mr-2"></i>
                    Business Context & Impact
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                    <div className="flex items-start">
                      <i className="ri-speed-line text-green-500 mr-3 mt-1"></i>
                      <div>
                        <strong>Decision Speed:</strong> Manual multi-report approach took 5-7 days; consolidated dashboard enables real-time decisions
                      </div>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-eye-line text-green-500 mr-3 mt-1"></i>
                      <div>
                        <strong>Strategic Visibility:</strong> Geographic market opportunities previously scattered across reports now visible at a glance
                      </div>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-rocket-line text-green-500 mr-3 mt-1"></i>
                      <div>
                        <strong>Operational Efficiency:</strong> Eliminated context-switching between multiple dashboards
                      </div>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-double-line text-green-500 mr-3 mt-1"></i>
                      <div>
                        <strong>Data Consistency:</strong> Single source of truth eliminating metric definition conflicts
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Methodology */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center mr-3">
                  <i className="ri-flow-chart text-black text-xl"></i>
                </div>
                Methodology
              </h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl p-6 border-l-4 border-yellow-400">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <i className="ri-database-2-line text-yellow-600 mr-2"></i>
                    Data Architecture
                  </h3>
                  
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-900 mb-3">Data Sources:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <i className="ri-arrow-right-s-line text-yellow-500 mr-2 mt-1"></i>
                        <span><strong>Transaction database:</strong> Orders, revenue, shipment details, and timestamps</span>
                      </li>
                      <li className="flex items-start">
                        <i className="ri-arrow-right-s-line text-yellow-500 mr-2 mt-1"></i>
                        <span><strong>Customer master:</strong> Geographic location, acquisition channel, customer segment</span>
                      </li>
                      <li className="flex items-start">
                        <i className="ri-arrow-right-s-line text-yellow-500 mr-2 mt-1"></i>
                        <span><strong>Product catalog:</strong> Category, subcategory, pricing, and product taxonomy</span>
                      </li>
                      <li className="flex items-start">
                        <i className="ri-arrow-right-s-line text-yellow-500 mr-2 mt-1"></i>
                        <span><strong>Logistics data:</strong> Shipping modes, regions, delivery status, and volumes</span>
                      </li>
                    </ul>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mt-4">
                    <div className="bg-white rounded-lg p-4 border border-yellow-200">
                      <div className="font-bold text-gray-900 mb-2">Data Integration Method</div>
                      <div className="text-gray-700 text-sm">Daily ETL pipeline combining multiple source systems into unified dimensional model</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-yellow-200">
                      <div className="font-bold text-gray-900 mb-2">Update Frequency</div>
                      <div className="text-gray-700 text-sm">Daily automated refresh</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-yellow-200">
                      <div className="font-bold text-gray-900 mb-2">Data Consolidation Approach</div>
                      <div className="text-gray-700 text-sm">Multi-dimensional star schema enabling simultaneous analysis across geography, product, time, and logistics dimensions</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl p-6 border-l-4 border-yellow-400">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <i className="ri-file-list-3-line text-yellow-600 mr-2"></i>
                    Data Processing Steps
                  </h3>
                  
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-900 mb-3">Data Extraction:</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="bg-white rounded-lg p-3 border border-yellow-200">
                        <i className="ri-shopping-cart-line text-yellow-500 mr-2"></i>
                        <span className="text-gray-700">Customer transaction data: Orders, revenue, timestamps</span>
                      </div>
                      <div className="bg-white rounded-lg p-3 border border-yellow-200">
                        <i className="ri-user-location-line text-yellow-500 mr-2"></i>
                        <span className="text-gray-700">Customer master: State, region, acquisition channel</span>
                      </div>
                      <div className="bg-white rounded-lg p-3 border border-yellow-200">
                        <i className="ri-product-hunt-line text-yellow-500 mr-2"></i>
                        <span className="text-gray-700">Product catalog: Category, pricing, product attributes</span>
                      </div>
                      <div className="bg-white rounded-lg p-3 border border-yellow-200">
                        <i className="ri-truck-line text-yellow-500 mr-2"></i>
                        <span className="text-gray-700">Shipment data: Mode, region, volumes</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-bold text-gray-900 mb-3">Data Transformation:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <i className="ri-arrow-right-s-line text-yellow-500 mr-2 mt-1"></i>
                        <span>Revenue calculations by state, category, and shipping mode</span>
                      </li>
                      <li className="flex items-start">
                        <i className="ri-arrow-right-s-line text-yellow-500 mr-2 mt-1"></i>
                        <span>Customer count aggregations at geographic and segment levels</span>
                      </li>
                      <li className="flex items-start">
                        <i className="ri-arrow-right-s-line text-yellow-500 mr-2 mt-1"></i>
                        <span>Order volume and quantity metrics across all dimensions</span>
                      </li>
                      <li className="flex items-start">
                        <i className="ri-arrow-right-s-line text-yellow-500 mr-2 mt-1"></i>
                        <span>MoM and YoY growth rate calculations</span>
                      </li>
                      <li className="flex items-start">
                        <i className="ri-arrow-right-s-line text-yellow-500 mr-2 mt-1"></i>
                        <span>Geographic heat map data preparation (state-level aggregations)</span>
                      </li>
                      <li className="flex items-start">
                        <i className="ri-arrow-right-s-line text-yellow-500 mr-2 mt-1"></i>
                        <span>Product category revenue contribution percentage calculations</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-bold text-gray-900 mb-3">Data Modeling:</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="bg-white rounded-lg p-3 border border-yellow-200">
                        <div className="font-semibold text-gray-900 mb-1">Fact Tables:</div>
                        <div className="text-gray-700 text-sm">Revenue, Orders, Customers, Quantities</div>
                      </div>
                      <div className="bg-white rounded-lg p-3 border border-yellow-200">
                        <div className="font-semibold text-gray-900 mb-1">Dimension Tables:</div>
                        <div className="text-gray-700 text-sm">Date, State/Region, Product Category, Shipping Mode, Customer Segment</div>
                      </div>
                      <div className="bg-white rounded-lg p-3 border border-yellow-200">
                        <div className="font-semibold text-gray-900 mb-1">Calculated Fields:</div>
                        <div className="text-gray-700 text-sm">Growth percentages, market penetration rates, category contribution %</div>
                      </div>
                      <div className="bg-white rounded-lg p-3 border border-yellow-200">
                        <div className="font-semibold text-gray-900 mb-1">Aggregation Levels:</div>
                        <div className="text-gray-700 text-sm">National, Regional, State, Category, Shipping Mode, Monthly, Quarterly</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Dashboard Design (Single-Page Consolidation):</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <i className="ri-arrow-right-s-line text-yellow-500 mr-2 mt-1"></i>
                        <span><strong>Top section:</strong> Executive KPIs</span>
                      </li>
                      <li className="flex items-start">
                        <i className="ri-arrow-right-s-line text-yellow-500 mr-2 mt-1"></i>
                        <span><strong>Left section:</strong> Geographic analysis (State rankings, India heat map)</span>
                      </li>
                      <li className="flex items-start">
                        <i className="ri-arrow-right-s-line text-yellow-500 mr-2 mt-1"></i>
                        <span><strong>Right top:</strong> Category performance (Revenue contribution pie chart)</span>
                      </li>
                      <li className="flex items-start">
                        <i className="ri-arrow-right-s-line text-yellow-500 mr-2 mt-1"></i>
                        <span><strong>Right middle:</strong> Shipping mode analysis (Monthly volume heatmap by mode)</span>
                      </li>
                      <li className="flex items-start">
                        <i className="ri-arrow-right-s-line text-yellow-500 mr-2 mt-1"></i>
                        <span><strong>Bottom:</strong> Trend analysis (Monthly order volume and growth rate chart)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Calculations & Formulas */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center mr-3">
                  <i className="ri-calculator-line text-black text-xl"></i>
                </div>
                Key Calculations & Formulas
              </h2>

              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border-l-4 border-yellow-400">
                    <div className="font-bold text-gray-900 mb-2">Regional Revenue</div>
                    <code className="text-sm text-gray-700 bg-gray-50 px-3 py-1 rounded">Regional Revenue = SUM(Order Value) by State</code>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-yellow-400">
                    <div className="font-bold text-gray-900 mb-2">Month-over-Month Growth %</div>
                    <code className="text-sm text-gray-700 bg-gray-50 px-3 py-1 rounded">MoM Growth % = ((Current Month Revenue - Previous Month Revenue) / Previous Month Revenue) × 100</code>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-yellow-400">
                    <div className="font-bold text-gray-900 mb-2">Year-over-Year Growth %</div>
                    <code className="text-sm text-gray-700 bg-gray-50 px-3 py-1 rounded">YoY Growth % = ((Current Year Revenue - Previous Year Revenue) / Previous Year Revenue) × 100</code>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-yellow-400">
                    <div className="font-bold text-gray-900 mb-2">Customer Count by Region</div>
                    <code className="text-sm text-gray-700 bg-gray-50 px-3 py-1 rounded">Regional Customers = DISTINCTCOUNT(Customer ID) by State</code>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-yellow-400">
                    <div className="font-bold text-gray-900 mb-2">Product Category Revenue Contribution</div>
                    <code className="text-sm text-gray-700 bg-gray-50 px-3 py-1 rounded">Category % = (Category Revenue / Total Revenue) × 100</code>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-yellow-400">
                    <div className="font-bold text-gray-900 mb-2">Shipping Mode Monthly Volume</div>
                    <code className="text-sm text-gray-700 bg-gray-50 px-3 py-1 rounded">Monthly Volume by Mode = COUNT(Orders) by Shipping Mode and Month</code>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-yellow-400">
                    <div className="font-bold text-gray-900 mb-2">Average Order Value</div>
                    <code className="text-sm text-gray-700 bg-gray-50 px-3 py-1 rounded">AOV = Total Revenue / Total Orders = ₹3.4bn / 50K = ₹68,000</code>
                  </div>
                </div>
              </div>
            </div>

            {/* Analysis Approach */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center mr-3">
                  <i className="ri-search-line text-black text-xl"></i>
                </div>
                Analysis Approach
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-5 border-l-4 border-blue-400">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                    <i className="ri-map-pin-line text-blue-600 mr-2"></i>
                    Geographic Performance
                  </h3>
                  <p className="text-gray-700 text-sm">State-level revenue ranking (Rajasthan 5.2K, Karnataka 5.1K, Andhra Pradesh 5.1K leading)</p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-5 border-l-4 border-purple-400">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                    <i className="ri-shopping-bag-line text-purple-600 mr-2"></i>
                    Product Strategy
                  </h3>
                  <p className="text-gray-700 text-sm">Category contribution analysis (Electronics 37.29% dominates, Home 31.78% growth opportunity)</p>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-5 border-l-4 border-green-400">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                    <i className="ri-truck-line text-green-600 mr-2"></i>
                    Logistics Optimization
                  </h3>
                  <p className="text-gray-700 text-sm">Shipping mode distribution across months (all modes 750-900 volume range, consistent demand)</p>
                </div>
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-5 border-l-4 border-orange-400">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                    <i className="ri-line-chart-line text-orange-600 mr-2"></i>
                    Trend Analysis
                  </h3>
                  <p className="text-gray-700 text-sm">Monthly growth rates (4.3K orders January, stabilizing at 4.1K-4.3K monthly)</p>
                </div>
                <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-5 border-l-4 border-red-400">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                    <i className="ri-user-line text-red-600 mr-2"></i>
                    Market Penetration
                  </h3>
                  <p className="text-gray-700 text-sm">9,933 total customers across India states, with concentrated growth in top 3 states</p>
                </div>
                <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl p-5 border-l-4 border-yellow-400">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                    <i className="ri-dashboard-line text-yellow-600 mr-2"></i>
                    Consolidated View
                  </h3>
                  <p className="text-gray-700 text-sm">Single-page dashboard eliminating need for cross-referencing multiple reports</p>
                </div>
              </div>
            </div>

            {/* Technical Skills Demonstrated */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center mr-3">
                  <i className="ri-code-box-line text-black text-xl"></i>
                </div>
                Technical Skills Demonstrated
              </h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl p-6 border-l-4 border-yellow-400">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Tools & Technologies</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-white rounded-lg border border-yellow-200 text-gray-700 font-medium">Power BI Desktop & Cloud</span>
                    <span className="px-4 py-2 bg-white rounded-lg border border-yellow-200 text-gray-700 font-medium">SQL (MySQL/SQL Server)</span>
                    <span className="px-4 py-2 bg-white rounded-lg border border-yellow-200 text-gray-700 font-medium">Power Query (M Language)</span>
                    <span className="px-4 py-2 bg-white rounded-lg border border-yellow-200 text-gray-700 font-medium">DAX (Data Analysis Expressions)</span>
                    <span className="px-4 py-2 bg-white rounded-lg border border-yellow-200 text-gray-700 font-medium">Dashboard Design</span>
                    <span className="px-4 py-2 bg-white rounded-lg border border-yellow-200 text-gray-700 font-medium">Version Control: GitHub</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 border-l-4 border-gray-400">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Competencies Showcased</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-center">
                      <i className="ri-checkbox-circle-fill text-gray-600 mr-3"></i>
                      <span className="text-gray-700">Unified Dashboard Design</span>
                    </div>
                    <div className="flex items-center">
                      <i className="ri-checkbox-circle-fill text-gray-600 mr-3"></i>
                      <span className="text-gray-700">Advanced Data Modeling</span>
                    </div>
                    <div className="flex items-center">
                      <i className="ri-checkbox-circle-fill text-gray-600 mr-3"></i>
                      <span className="text-gray-700">Executive Communication</span>
                    </div>
                    <div className="flex items-center">
                      <i className="ri-checkbox-circle-fill text-gray-600 mr-3"></i>
                      <span className="text-gray-700">Business Intelligence</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results & Key Insights */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center mr-3">
                  <i className="ri-trophy-line text-black text-xl"></i>
                </div>
                Results & Key Insights
              </h2>

              <div className="space-y-6">
                {/* Section 1 */}
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-400">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <i className="ri-dashboard-3-line text-blue-600 mr-2"></i>
                    Section 1: Executive KPI Summary (Top Left)
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <div className="text-sm text-gray-600 mb-1">Revenue</div>
                      <div className="text-2xl font-bold text-gray-900">₹3.4bn</div>
                      <div className="text-sm text-green-600">↑1.3% YoY</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <div className="text-sm text-gray-600 mb-1">Orders</div>
                      <div className="text-2xl font-bold text-gray-900">50K</div>
                      <div className="text-sm text-green-600">↑1.3% growth</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <div className="text-sm text-gray-600 mb-1">Customers</div>
                      <div className="text-2xl font-bold text-gray-900">9,933</div>
                      <div className="text-sm text-gray-600">Stable</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <div className="text-sm text-gray-600 mb-1">Quantity</div>
                      <div className="text-2xl font-bold text-gray-900">150K</div>
                      <div className="text-sm text-green-600">↑1.2% growth</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-blue-200">
                    <strong className="text-gray-900">Insight:</strong>
                    <span className="text-gray-700"> Mature, stable market with steady single-digit growth</span>
                  </div>
                </div>

                {/* Section 2 */}
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 border-l-4 border-purple-400">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <i className="ri-map-2-line text-purple-600 mr-2"></i>
                    Section 2: Geographic Performance (Center-Left)
                  </h3>
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-900 mb-3">Highest Performing States Bar Chart:</h4>
                    <div className="space-y-2">
                      <div className="bg-white rounded-lg p-3 border border-purple-200 flex justify-between items-center">
                        <span className="text-gray-700">Rajasthan</span>
                        <span className="font-bold text-gray-900">5.2K customers</span>
                      </div>
                      <div className="bg-white rounded-lg p-3 border border-purple-200 flex justify-between items-center">
                        <span className="text-gray-700">Karnataka</span>
                        <span className="font-bold text-gray-900">5.1K customers</span>
                      </div>
                      <div className="bg-white rounded-lg p-3 border border-purple-200 flex justify-between items-center">
                        <span className="text-gray-700">Andhra Pradesh</span>
                        <span className="font-bold text-gray-900">5.1K customers</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-purple-200 mb-3">
                    <strong className="text-gray-900">India State Heat Map:</strong>
                    <span className="text-gray-700"> Geographic distribution visualization</span>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-purple-200">
                    <strong className="text-gray-900">Insight:</strong>
                    <span className="text-gray-700"> Top 3 states account for 15.4K of 9,933 customers (~15% each)</span>
                  </div>
                </div>

                {/* Section 3 */}
                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-green-400">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <i className="ri-pie-chart-line text-green-600 mr-2"></i>
                    Section 3: Product Category Analysis (Top Right)
                  </h3>
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-900 mb-3">Revenue Contribution Donut Chart:</h4>
                    <div className="space-y-2">
                      <div className="bg-white rounded-lg p-3 border border-green-200 flex justify-between items-center">
                        <span className="text-gray-700">Electronics</span>
                        <span className="font-bold text-gray-900">37.29%</span>
                      </div>
                      <div className="bg-white rounded-lg p-3 border border-green-200 flex justify-between items-center">
                        <span className="text-gray-700">Fashion</span>
                        <span className="font-bold text-gray-900">31.78%</span>
                      </div>
                      <div className="bg-white rounded-lg p-3 border border-green-200 flex justify-between items-center">
                        <span className="text-gray-700">Home</span>
                        <span className="font-bold text-gray-900">30.93%</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-green-200">
                    <strong className="text-gray-900">Insight:</strong>
                    <span className="text-gray-700"> Diversified portfolio, but Electronics dominance suggests category-specific growth opportunity</span>
                  </div>
                </div>

                {/* Section 4 */}
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-6 border-l-4 border-orange-400">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <i className="ri-truck-line text-orange-600 mr-2"></i>
                    Section 4: Shipping Logistics Analysis (Right Center)
                  </h3>
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-900 mb-3">Shipping Mode vs Monthly Volume Heatmap:</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="bg-white rounded-lg p-3 border border-orange-200">
                        <div className="text-sm text-gray-600">5 modes:</div>
                        <div className="text-gray-700 font-medium">Economy, Express, Overnight, Same-Day, Standard</div>
                      </div>
                      <div className="bg-white rounded-lg p-3 border border-orange-200">
                        <div className="text-sm text-gray-600">12 months data:</div>
                        <div className="text-gray-700 font-medium">January-December</div>
                      </div>
                      <div className="bg-white rounded-lg p-3 border border-orange-200">
                        <div className="text-sm text-gray-600">Volume range:</div>
                        <div className="text-gray-700 font-medium">750-900 orders per mode per month</div>
                      </div>
                      <div className="bg-white rounded-lg p-3 border border-orange-200">
                        <div className="text-sm text-gray-600">Total monthly orders:</div>
                        <div className="text-gray-700 font-medium">3,800-4,300</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-orange-200">
                    <strong className="text-gray-900">Insight:</strong>
                    <span className="text-gray-700"> Consistent shipping mode adoption, no seasonal shipping preference variance</span>
                  </div>
                </div>

                {/* Section 5 */}
                <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-6 border-l-4 border-red-400">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <i className="ri-line-chart-line text-red-600 mr-2"></i>
                    Section 5: Trend Analysis (Bottom)
                  </h3>
                  <div className="space-y-3 mb-4">
                    <div className="bg-white rounded-lg p-3 border border-red-200">
                      <strong className="text-gray-900">Monthly Order Trend:</strong>
                      <span className="text-gray-700"> 4.3K (January) → 4.1K-4.3K (stabilized)</span>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-red-200">
                      <strong className="text-gray-900">Monthly Growth Rate:</strong>
                      <span className="text-gray-700"> 0.02% to 0.15% (positive but modest growth)</span>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-red-200">
                      <strong className="text-gray-900">Year-View Completeness:</strong>
                      <span className="text-gray-700"> All 12 months visible for pattern analysis</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-red-200">
                    <strong className="text-gray-900">Insight:</strong>
                    <span className="text-gray-700"> Stable monthly order base, single-digit growth patterns, mature market dynamics</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Impact & Metrics */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center mr-3">
                  <i className="ri-bar-chart-box-line text-black text-xl"></i>
                </div>
                Business Impact & Metrics
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-xl border border-gray-200">
                  <thead className="bg-gradient-to-r from-yellow-400 to-yellow-500">
                    <tr>
                      <th className="px-6 py-4 text-left text-black font-bold">Metric</th>
                      <th className="px-6 py-4 text-left text-black font-bold">Previous State</th>
                      <th className="px-6 py-4 text-left text-black font-bold">Current Capability</th>
                      <th className="px-6 py-4 text-left text-black font-bold">Impact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-gray-900">Reporting Cycle</td>
                      <td className="px-6 py-4 text-gray-700">5-7 days (manual)</td>
                      <td className="px-6 py-4 text-gray-700">Real-time</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">5-7x faster decisions</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-gray-900">Visibility</td>
                      <td className="px-6 py-4 text-gray-700">5+ scattered dashboards</td>
                      <td className="px-6 py-4 text-gray-700">Single unified view</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">100% data transparency</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-gray-900">Decision Layers</td>
                      <td className="px-6 py-4 text-gray-700">3-4 context switches</td>
                      <td className="px-6 py-4 text-gray-700">Single page</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">Reduced analysis friction</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-gray-900">Regional Comparison</td>
                      <td className="px-6 py-4 text-gray-700">Manual extraction</td>
                      <td className="px-6 py-4 text-gray-700">Instant ranking</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">Immediate benchmarking</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-gray-900">Stakeholder Access</td>
                      <td className="px-6 py-4 text-gray-700">Custom reports</td>
                      <td className="px-6 py-4 text-gray-700">Shared dashboard</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">Universal access</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Business Recommendations */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center mr-3">
                  <i className="ri-lightbulb-flash-line text-black text-xl"></i>
                </div>
                Business Recommendations
              </h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-green-400">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <i className="ri-time-line text-green-600 mr-2"></i>
                    Immediate Actions (0-3 months)
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <i className="ri-arrow-right-circle-fill text-green-500 mr-3 mt-1"></i>
                      <div>
                        <strong className="text-gray-900">High-Growth Category Marketing Push (Home Category)</strong>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-arrow-right-circle-fill text-green-500 mr-3 mt-1"></i>
                      <div>
                        <strong className="text-gray-900">State-Based Resource Allocation</strong>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-arrow-right-circle-fill text-green-500 mr-3 mt-1"></i>
                      <div>
                        <strong className="text-gray-900">Shipping Logistics Optimization</strong>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-400">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <i className="ri-calendar-line text-blue-600 mr-2"></i>
                    Medium-Term Initiatives (3-6 months)
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <i className="ri-arrow-right-circle-fill text-blue-500 mr-3 mt-1"></i>
                      <div>
                        <strong className="text-gray-900">Geographic Expansion Strategy</strong>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-arrow-right-circle-fill text-blue-500 mr-3 mt-1"></i>
                      <div>
                        <strong className="text-gray-900">Product Category Rebalancing</strong>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-arrow-right-circle-fill text-blue-500 mr-3 mt-1"></i>
                      <div>
                        <strong className="text-gray-900">Predictive Analytics & Seasonality</strong>
                      </div>
                    </li>
                  </ul>
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
            href="https://github.com/Kaushik075/Regional-Market-Performance-Analytics?tab=readme-ov-file"
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
