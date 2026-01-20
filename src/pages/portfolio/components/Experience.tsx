
import { useState } from 'react';

export function Experience() {
  const [activeTab, setActiveTab] = useState('work');

  const workExperience = [
    {
      title: 'Big Data Intern',
      company: 'Sneston Systems',
      location: 'Remote, Hyderabad, Telangana',
      duration: 'June 2025 – July 2025',
      type: 'Internship',
      achievements: [
        'Processed 500K+ sales records using Apache Spark 3.4.0 and PySpark to generate actionable business insights and performance analytics',
        'Built end-to-end data pipelines for multi-dimensional analysis: sales trends, regional performance, and customer segmentation',
        'Created interactive dashboards in Python (Matplotlib, Seaborn), transforming complex datasets into executive-ready visualizations',
        'Accelerated development cycles by 75% through AI-assisted coding with ChatGPT and Claude.ai for optimized code generation',
        'Delivered cloud-based analytics solutions from data ingestion to reporting using modern DevOps and Git workflows'
      ],
      skills: ['Apache Spark', 'PySpark', 'Python', 'Data Visualization', 'DevOps', 'Git'],
      projectLink: 'https://github.com/Kaushik075/Big-Data-Analysis-Sales-Data-Analysis-using-Hadoop-and-Spark---Internship-Task-',
      projectTitle: 'Big Data Analysis - Sales Data Analysis using Hadoop and Spark'
    },
    {
      title: 'Power BI Intern',
      company: 'CODTECH IT SOLUTIONS',
      location: 'Remote, Hyderabad, Telangana',
      duration: 'April 2025 – May 2025',
      type: 'Internship',
      achievements: [
        'Developed a Sales Performance Dashboard to track KPIs and trends, using Power BI Desktop for interactive visual analytics',
        'Integrated data from multiple sources (SQL databases, Excel, APIs) into a unified Power BI model with automated refresh configurations',
        'Created a real-time dashboard featuring dynamic visuals, drill-throughs, and bookmarks to support business decision-making',
        'Connected Python scripts with Power BI via the Python visual to embed advanced data processing and statistical insights',
        'Gained hands-on experience with DAX measures, Power Query transformations, and best practices in data storytelling for stakeholders'
      ],
      skills: ['Power BI', 'DAX', 'Power Query', 'SQL', 'Python Integration', 'Data Storytelling'],
      projects: [
        {
          title: 'Power BI Task 1',
          link: 'https://github.com/Kaushik075/POWER-BI-',
          description: 'Comprehensive Power BI dashboard development'
        },
        {
          title: 'Power BI Task 2',
          link: 'https://github.com/Kaushik075/POWER-BI-TASK-2-',
          description: 'Advanced data modeling and visualization'
        },
        {
          title: 'Power BI Task 3',
          link: 'https://github.com/Kaushik075/POWER-BI---TASK-3-/blob/main/README.md',
          description: 'Complex business intelligence solutions'
        },
        {
          title: 'Power BI Task 4',
          link: 'https://github.com/Kaushik075/POWER-BI---TASK-4-',
          description: 'Enterprise-level dashboard implementation'
        }
      ]
    }
  ];

  const education = [
    {
      degree: 'BCOM Business Analytics',
      institution: 'Avinash College of Commerce, Osmania University',
      duration: '2022 - 2025',
      location: 'Hyderabad, India',
      type: "Bachelor's Degree",
      highlights: [
        'Specialized in Business Analytics with focus on data-driven decision making',
        'Coursework in Statistical Analysis, Business Intelligence, and Financial Modeling',
        'Hands-on projects in SQL, Excel Analytics, and Business Process Optimization',
        'Strong foundation in Economics, Accounting, and Business Strategy'
      ],
      relevantCourses: ['Business Analytics', 'Statistics', 'Financial Modeling', 'Database Management', 'Business Intelligence']
    }
  ];

  const certifications = [
    {
      name: 'Power BI Workshop',
      issuer: 'AI for Techies',
      status: 'Completed',
      icon: 'ri-award-line',
      color: 'text-yellow-400'
    },
    {
      name: 'SQL Using AI Workshop',
      issuer: 'AI for Techies',
      status: 'Completed',
      icon: 'ri-database-line',
      color: 'text-yellow-400'
    },
    {
      name: 'Python Workshop',
      issuer: 'AI for Techies',
      status: 'Completed',
      icon: 'ri-code-line',
      color: 'text-yellow-400'
    },
    {
      name: 'SQL New',
      issuer: 'Bit Bridges',
      status: 'Completed',
      icon: 'ri-database-2-line',
      color: 'text-yellow-400'
    },
    {
      name: 'Data Visualization: Empowering Business with Effective Insights Job Simulation',
      issuer: 'Tata',
      status: 'Completed',
      icon: 'ri-bar-chart-line',
      color: 'text-yellow-400'
    },
    {
      name: 'Deloitte Australia - Data Analytics Job Simulation',
      issuer: 'Forage',
      status: 'Completed',
      icon: 'ri-line-chart-line',
      color: 'text-yellow-400'
    },
    {
      name: 'Business Analytics Fundamentals - ECBA, CCBA, CBAP endorsed',
      issuer: 'Udemy',
      status: 'Completed',
      icon: 'ri-trophy-line',
      color: 'text-yellow-400'
    }
  ];

  return (
    <section className="min-h-screen pt-24 pb-20 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Professional <span className="text-black font-black">Journey</span>
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto font-semibold">
            Building expertise in business analytics through hands-on experience with cutting-edge technologies 
            and real-world data challenges.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gradient-to-r from-black to-gray-900 rounded-2xl p-2 shadow-lg border border-yellow-400">
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveTab('work')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeTab === 'work'
                    ? 'bg-yellow-400 text-black shadow-lg'
                    : 'text-yellow-400 hover:text-black hover:bg-yellow-400'
                }`}
              >
                <i className="ri-briefcase-line mr-2"></i>
                Work Experience
              </button>
              <button
                onClick={() => setActiveTab('education')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeTab === 'education'
                    ? 'bg-yellow-400 text-black shadow-lg'
                    : 'text-yellow-400 hover:text-black hover:bg-yellow-400'
                }`}
              >
                <i className="ri-graduation-cap-line mr-2"></i>
                Education
              </button>
              <button
                onClick={() => setActiveTab('certifications')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeTab === 'certifications'
                    ? 'bg-yellow-400 text-black shadow-lg'
                    : 'text-yellow-400 hover:text-black hover:bg-yellow-400'
                }`}
              >
                <i className="ri-award-line mr-2"></i>
                Certifications
              </button>
            </div>
          </div>
        </div>

        {/* Work Experience Tab */}
        {activeTab === 'work' && (
          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <div key={index} className="bg-gradient-to-r from-black to-gray-900 rounded-2xl p-8 shadow-lg border border-yellow-400 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-grow">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-yellow-400 mb-1">{job.title}</h3>
                        <p className="text-lg font-semibold text-yellow-300 mb-1">{job.company}</p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-white">
                          <span className="flex items-center">
                            <i className="ri-map-pin-line mr-1"></i>
                            {job.location}
                          </span>
                          <span className="flex items-center">
                            <i className="ri-calendar-line mr-1"></i>
                            {job.duration}
                          </span>
                          <span className="px-3 py-1 bg-yellow-400 text-black rounded-full text-xs font-semibold">
                            {job.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    {job.projectLink && (
                      <div className="mb-6 p-4 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl border border-yellow-300">
                        <h4 className="text-lg font-semibold text-black mb-2 flex items-center">
                          <i className="ri-github-line text-black mr-2"></i>
                          Featured Project
                        </h4>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <p className="text-black font-medium mb-2 sm:mb-0">{job.projectTitle}</p>
                          <a
                            href={job.projectLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-black text-yellow-400 rounded-lg hover:bg-gray-800 transition-colors duration-300 text-sm font-medium whitespace-nowrap"
                          >
                            <i className="ri-external-link-line mr-2"></i>
                            View on GitHub
                          </a>
                        </div>
                      </div>
                    )}

                    {job.projects && (
                      <div className="mb-6 p-4 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl border border-yellow-300">
                        <h4 className="text-lg font-semibold text-black mb-3 flex items-center">
                          <i className="ri-folder-line text-black mr-2"></i>
                          Internship Projects
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {job.projects.map((project, idx) => (
                            <div key={idx} className="bg-black/80 rounded-lg p-3 border border-yellow-300">
                              <div className="flex items-center justify-between">
                                <div className="flex-1">
                                  <h5 className="font-medium text-yellow-400 text-sm">{project.title}</h5>
                                  <p className="text-white text-xs mt-1">{project.description}</p>
                                </div>
                                <a
                                  href={project.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="ml-2 p-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-300 transition-colors duration-300"
                                >
                                  <i className="ri-external-link-line text-sm"></i>
                                </a>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-yellow-400 mb-3 flex items-center">
                        <i className="ri-trophy-line text-yellow-400 mr-2"></i>
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {job.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start text-white">
                            <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            <span className="text-sm leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-yellow-400 mb-3 flex items-center">
                        <i className="ri-tools-line text-yellow-400 mr-2"></i>
                        Technologies & Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-yellow-400 text-black rounded-lg text-sm font-medium hover:bg-yellow-300 transition-all duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Education Tab */}
        {activeTab === 'education' && (
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-gradient-to-r from-black to-gray-900 rounded-2xl p-8 shadow-lg border border-yellow-400 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-grow">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-yellow-400 mb-1">{edu.degree}</h3>
                      <p className="text-lg font-semibold text-yellow-300 mb-1">{edu.institution}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-white">
                        <span className="flex items-center">
                          <i className="ri-map-pin-line mr-1"></i>
                          {edu.location}
                        </span>
                        <span className="flex items-center">
                          <i className="ri-calendar-line mr-1"></i>
                          {edu.duration}
                        </span>
                        <span className="px-3 py-1 bg-yellow-400 text-black rounded-full text-xs font-semibold">
                          {edu.type}
                        </span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-yellow-400 mb-3 flex items-center">
                        <i className="ri-lightbulb-line text-yellow-400 mr-2"></i>
                        Academic Highlights
                      </h4>
                      <ul className="space-y-3">
                        {edu.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start text-white">
                            <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            <span className="text-sm leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-yellow-400 mb-3 flex items-center">
                        <i className="ri-book-line text-yellow-400 mr-2"></i>
                        Relevant Coursework
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.relevantCourses.map((course, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-yellow-400 text-black rounded-lg text-sm font-medium hover:bg-yellow-300 transition-all duration-300"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Certifications Tab */}
        {activeTab === 'certifications' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gradient-to-r from-black to-gray-900 rounded-2xl p-6 shadow-lg border border-yellow-400 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
                    <i className={`${cert.icon} text-3xl text-black`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-yellow-400 mb-2 leading-tight">{cert.name}</h3>
                  <p className="text-white mb-3 font-medium">{cert.issuer}</p>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    cert.status === 'Completed' 
                      ? 'bg-yellow-400 text-black' 
                      : 'bg-yellow-400 text-black'
                  }`}>
                    {cert.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}