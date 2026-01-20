
export function Resume() {
  return (
    <section className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">Resume</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Download my complete resume or view the key highlights below.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 whitespace-nowrap">
            <i className="ri-download-line mr-2"></i>
            Download PDF Resume
          </button>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50">
          <div className="space-y-8">
            <div className="text-center pb-8 border-b border-gray-200">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Kaushik Yeddanapudi</h1>
              <p className="text-xl text-gray-600 mb-4">Business Analyst | Data & Product Analytics</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                <span className="flex items-center">
                  <i className="ri-mail-line mr-2"></i>
                  kaushik.yeddanapudi@email.com
                </span>
                <span className="flex items-center">
                  <i className="ri-phone-line mr-2"></i>
                  +1 (555) 123-4567
                </span>
                <span className="flex items-center">
                  <i className="ri-linkedin-line mr-2"></i>
                  linkedin.com/in/kaushikyeddanapudi
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <i className="ri-user-line mr-2 text-emerald-500"></i>
                Professional Summary
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Results-driven Business Analyst with 3+ years of experience in transforming complex data into 
                actionable insights. Expertise in SQL, business intelligence, and dashboard development. 
                Proven track record of improving operational efficiency and driving strategic decision-making 
                through comprehensive analytics solutions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <i className="ri-briefcase-line mr-2 text-emerald-500"></i>
                Professional Experience
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-emerald-500 pl-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">Senior Business Analyst</h4>
                    <span className="text-sm text-gray-600">2022 - Present</span>
                  </div>
                  <p className="text-emerald-600 font-medium mb-3">Tech Solutions Inc.</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Led enterprise-wide analytics transformation, improving reporting efficiency by 75%</li>
                    <li>Developed automated SQL-based reporting systems serving 50+ stakeholders</li>
                    <li>Created comprehensive budget analytics dashboard reducing planning time by 50%</li>
                    <li>Collaborated with C-level executives on strategic planning and KPI development</li>
                  </ul>
                </div>

                <div className="border-l-4 border-emerald-500 pl-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">Data Analyst</h4>
                    <span className="text-sm text-gray-600">2020 - 2022</span>
                  </div>
                  <p className="text-emerald-600 font-medium mb-3">Growth Analytics Corp.</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Built end-to-end SaaS analytics platform improving customer retention by 25%</li>
                    <li>Implemented data quality frameworks increasing accuracy by 95%</li>
                    <li>Designed logistics performance dashboards reducing operational costs by 15%</li>
                    <li>Mentored 3 junior analysts and established team best practices</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <i className="ri-graduation-cap-line mr-2 text-emerald-500"></i>
                Education
              </h3>
              <div className="border-l-4 border-emerald-500 pl-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h4 className="text-lg font-semibold text-gray-900">Master of Science in Business Analytics</h4>
                  <span className="text-sm text-gray-600">2018 - 2020</span>
                </div>
                <p className="text-emerald-600 font-medium">University of Technology</p>
                <p className="text-gray-700">GPA: 3.8/4.0 | Magna Cum Laude</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <i className="ri-tools-line mr-2 text-emerald-500"></i>
                Technical Skills
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Analytics</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Advanced SQL</li>
                    <li>• Statistical Analysis</li>
                    <li>• Data Modeling</li>
                    <li>• Predictive Analytics</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Visualization</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Tableau</li>
                    <li>• Power BI</li>
                    <li>• QuickSight</li>
                    <li>• Excel/VBA</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Programming</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Python</li>
                    <li>• R</li>
                    <li>• SQL Server</li>
                    <li>• AWS</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <i className="ri-award-line mr-2 text-emerald-500"></i>
                Certifications
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900">Microsoft Certified: Azure Data Analyst</h4>
                  <p className="text-sm text-gray-600">Microsoft | 2023</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900">Tableau Desktop Certified Professional</h4>
                  <p className="text-sm text-gray-600">Tableau | 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
