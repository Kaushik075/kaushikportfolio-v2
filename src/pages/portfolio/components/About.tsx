
import { useEffect, useRef } from 'react';

export function About() {
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [
    {
      name: 'Apache Spark',
      logo: 'https://spark.apache.org/images/spark-logo-trademark.png',
      description: 'Processed 500K+ records with Spark 3.4.0 for large-scale data analytics using AI',
      category: 'Big Data'
    },
    {
      name: 'PySpark',
      logo: 'https://spark.apache.org/images/spark-logo-trademark.png',
      description: 'Built end-to-end data pipelines and multi-dimensional analysis using AI',
      category: 'Big Data'
    },
    {
      name: 'Power BI',
      logo: 'https://logos-world.net/wp-content/uploads/2022/02/Microsoft-Power-BI-Symbol.png',
      description: 'Created interactive dashboards with real-time analytics and DAX measures',
      category: 'Business Intelligence'
    },
    {
      name: 'MySQL',
      logo: 'https://www.mysql.com/common/logos/logo-mysql-170x115.png',
      description: 'Advanced database design, optimization, and complex query development',
      category: 'Database'
    },
    {
      name: 'Python',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
      description: 'Data analysis, visualization with Matplotlib/Seaborn, and automation using AI',
      category: 'Programming'
    },
    {
      name: 'Excel',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg',
      description: 'Advanced analytics, pivot tables, VBA, and financial modeling',
      category: 'Analytics'
    },
    {
      name: 'Generative AI',
      logo: 'https://readdy.ai/api/search-image?query=Artificial%20intelligence%20brain%20logo%20with%20neural%20network%20design%2C%20modern%20AI%20technology%20symbol%2C%20blue%20and%20purple%20gradient%2C%20clean%20minimalist%20design&width=80&height=80&seq=ai-logo&orientation=squarish',
      description: 'AI-assisted coding, prompt engineering, and automated solution development',
      category: 'AI Technology'
    },
    {
      name: 'Documentation',
      logo: 'https://readdy.ai/api/search-image?query=Professional%20documentation%20icon%20with%20clean%20paper%20and%20pen%20design%2C%20business%20documentation%20symbol%2C%20organized%20files%20logo%2C%20modern%20office%20style&width=80&height=80&seq=docs-logo&orientation=squarish',
      description: 'Technical documentation, process mapping, and knowledge management systems',
      category: 'Documentation'
    }
  ];

  const aiTools = [
    {
      name: 'Perplexity Labs',
      logo: 'https://readdy.ai/api/search-image?query=Perplexity%20AI%20logo%20with%20modern%20search%20and%20research%20theme%2C%20clean%20technology%20branding%2C%20purple%20and%20blue%20colors&width=60&height=60&seq=perplexity-logo&orientation=squarish',
      description: 'Advanced research and data analysis'
    },
    {
      name: 'Claude AI',
      logo: 'https://readdy.ai/api/search-image?query=Claude%20AI%20Anthropic%20logo%20with%20clean%20modern%20design%2C%20orange%20and%20blue%20branding%2C%20professional%20AI%20assistant%20symbol&width=60&height=60&seq=claude-logo&orientation=squarish',
      description: 'Complex problem solving and code optimization'
    },
    {
      name: 'Gemini AI',
      logo: 'https://readdy.ai/api/search-image?query=Google%20Gemini%20AI%20logo%20with%20colorful%20gradient%20design%2C%20modern%20Google%20branding%2C%20multimodal%20AI%20symbol&width=60&height=60&seq=gemini-logo&orientation=squarish',
      description: 'Multimodal analysis and automation'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillCards = entry.target.querySelectorAll('.skill-card');
            skillCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-in');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen pt-24 pb-20 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            About <span className="text-black font-black">Me</span>
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto font-semibold">
            Business Analytics Graduate | Advanced SQL & Power BI Specialist | Helping Companies Turn Data Into Profitable Insights
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Professional Summary */}
          <div className="space-y-6">
            <div className="bg-black/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-yellow-400">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center">
                <i className="ri-user-line text-yellow-400 mr-3"></i>
                Professional Summary
              </h3>
              <div className="space-y-4 text-white leading-relaxed">
                <p>
                  Experienced business analytics professional specializing in transforming complex data into strategic business solutions that drive revenue growth and operational excellence. I help organizations unlock hidden value from their data through advanced analytics, predictive modeling, and intelligent business intelligence frameworks.
                </p>
                <p>
                  With expertise in Apache Spark, PySpark, Power BI, and advanced SQL, I've successfully processed 500K+ transaction records, built comprehensive analytics solutions that increased revenue by 40%, and reduced customer churn by 35% through advanced segmentation and predictive modeling.
                </p>
              </div>
            </div>

            {/* Key Achievements */}
            <div className="bg-black/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-yellow-400">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center">
                <i className="ri-trophy-line text-yellow-400 mr-3"></i>
                Key Achievements
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                  <p className="text-white text-sm">Developed comprehensive analytics solutions that increased revenue by 40% and reduced customer churn by 35%</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                  <p className="text-white text-sm">Created end-to-end analytics frameworks processing 2M+ transactions with real-time insights</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                  <p className="text-white text-sm">Improved operational efficiency by 50% through data-driven process automation and optimization</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                  <p className="text-white text-sm">Accelerated development cycles by 75% through AI-assisted coding and modern DevOps workflows</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services & Expertise */}
          <div className="space-y-6">
            <div className="bg-black/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-yellow-400">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center">
                <i className="ri-service-line text-yellow-400 mr-3"></i>
                What I Deliver
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-yellow-400 mb-2 flex items-center">
                    <i className="ri-line-chart-line text-yellow-400 mr-2"></i>
                    Revenue Growth & Customer Analytics
                  </h4>
                  <p className="text-white text-sm">Customer lifetime value optimization, RFM analysis, and behavioral analytics that drive targeted marketing strategies and retention programs.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-400 mb-2 flex items-center">
                    <i className="ri-dashboard-line text-yellow-400 mr-2"></i>
                    Advanced Analytics & Business Intelligence
                  </h4>
                  <p className="text-white text-sm">Interactive dashboards with real-time analytics, executive reporting, predictive modeling, and automated business monitoring systems.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-400 mb-2 flex items-center">
                    <i className="ri-settings-line text-yellow-400 mr-2"></i>
                    Operational Excellence & Process Optimization
                  </h4>
                  <p className="text-white text-sm">Supply chain analytics, financial performance modeling, regulatory compliance reporting, and process automation.</p>
                </div>
              </div>
            </div>

            {/* Industry Expertise */}
            <div className="bg-black/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-yellow-400">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center">
                <i className="ri-building-line text-yellow-400 mr-3"></i>
                Industry Expertise
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="p-4 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl border border-yellow-300">
                  <h4 className="font-semibold text-black mb-1">SaaS & Technology</h4>
                  <p className="text-black text-sm font-medium">Revenue attribution, subscription analytics, feature adoption tracking</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-xl border border-yellow-300">
                  <h4 className="font-semibold text-black mb-1">Financial Services</h4>
                  <p className="text-black text-sm font-medium">Risk assessment, regulatory compliance, cost optimization</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl border border-yellow-300">
                  <h4 className="font-semibold text-black mb-1">E-commerce & Retail</h4>
                  <p className="text-black text-sm font-medium">Customer behavior analysis, inventory optimization, demand forecasting</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills & Expertise */}
        <div ref={skillsRef} className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-black mb-4">
              Skills & <span className="text-black font-black">Expertise</span>
            </h3>
            <p className="text-black max-w-2xl mx-auto font-semibold">
              Comprehensive technical expertise in modern data analytics, business intelligence, and big data technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-card opacity-0 transform translate-y-8 transition-all duration-700 ease-out bg-black/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-yellow-400 hover:shadow-2xl hover:scale-105 hover:rotate-1 group cursor-pointer"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center p-2 group-hover:from-yellow-300 group-hover:to-yellow-400 transition-all duration-300 border border-yellow-300">
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-12 h-12 object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <i className="ri-tools-line text-3xl text-black hidden"></i>
                  </div>
                  <h4 className="text-lg font-bold text-yellow-400 mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                    {skill.name}
                  </h4>
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-full text-xs font-bold mb-3 group-hover:bg-gradient-to-r group-hover:from-yellow-300 group-hover:to-yellow-400 group-hover:text-black transition-all duration-300 border border-yellow-300">
                    {skill.category}
                  </span>
                  
                  {/* Tooltip */}
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 absolute z-10 bg-black text-yellow-400 p-3 rounded-lg text-sm max-w-xs pointer-events-none border border-yellow-400">
                    {skill.description}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-black"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* AI Tools Section */}
          <div className="mt-12">
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold text-black mb-4">
                AI Tools & <span className="text-black font-black">Technologies</span>
              </h4>
              <p className="text-black max-w-2xl mx-auto font-semibold">
                Leveraging cutting-edge AI tools for enhanced productivity and advanced problem-solving capabilities
              </p>
            </div>

            <div className="flex justify-center">
              <div className="grid grid-cols-3 gap-8 max-w-2xl">
                {aiTools.map((tool, index) => (
                  <div
                    key={index}
                    className="group bg-black/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-yellow-400 hover:shadow-2xl hover:scale-110 transition-all duration-500 cursor-pointer"
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center p-2 group-hover:from-yellow-300 group-hover:to-yellow-400 transition-all duration-300 border border-yellow-300">
                        <img
                          src={tool.logo}
                          alt={`${tool.name} logo`}
                          className="w-12 h-12 object-contain"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling?.classList.remove('hidden');
                          }}
                        />
                        <i className="ri-robot-line text-3xl text-black hidden"></i>
                      </div>
                      <h5 className="text-sm font-bold text-yellow-400 mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                        {tool.name}
                      </h5>
                      <p className="text-xs text-white group-hover:text-yellow-100 transition-colors duration-300">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Freelance Services */}
        <div className="bg-gradient-to-r from-black to-gray-900 rounded-2xl p-8 border border-yellow-400">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-yellow-400 mb-4">
              Ready to Transform Your Business Data Into <span className="text-yellow-300 font-black">Competitive Advantage?</span>
            </h3>
            <p className="text-white max-w-4xl mx-auto leading-relaxed">
              I combine technical expertise with strategic business thinking to deliver analytics solutions that generate measurable results. 
              Whether you need comprehensive business intelligence implementation, advanced analytics consulting, or specialized data analysis projects, 
              I'm equipped to help your organization achieve data-driven success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold text-yellow-400 mb-4 flex items-center">
                <i className="ri-briefcase-line text-yellow-400 mr-3"></i>
                Available Services
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="ri-check-line text-yellow-400 mr-2 mt-1"></i>
                  <span className="text-white text-sm">Analytics Strategy Consulting & BI Implementation</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-yellow-400 mr-2 mt-1"></i>
                  <span className="text-white text-sm">Custom Power BI & Excel Dashboard Development</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-yellow-400 mr-2 mt-1"></i>
                  <span className="text-white text-sm">Statistical Analysis & Predictive Modeling</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-yellow-400 mr-2 mt-1"></i>
                  <span className="text-white text-sm">Process Optimization & Automation Strategies</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold text-yellow-400 mb-4 flex items-center">
                <i className="ri-star-line text-yellow-400 mr-3"></i>
                Core Competencies
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Advanced SQL', 'Power BI', 'Apache Spark', 'PySpark', 'Python', 'Business Intelligence', 'Data Analytics', 'Statistical Analysis', 'Customer Analytics', 'Revenue Optimization', 'Predictive Modeling', 'Process Automation'].map((competency, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-yellow-400 text-black rounded-lg text-sm font-bold border border-yellow-300 hover:bg-yellow-300 transition-colors duration-300"
                  >
                    {competency}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .skill-card.animate-in {
          opacity: 1;
          transform: translateY(0) rotate(0);
        }
      `}</style>
    </section>
  );
}
