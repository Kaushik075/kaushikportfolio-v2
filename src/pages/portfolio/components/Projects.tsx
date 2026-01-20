import { useNavigate } from 'react-router-dom';

interface ProjectsProps {
  onProjectClick: (projectId: string) => void;
}

export function Projects({ onProjectClick }: ProjectsProps) {
  const navigate = useNavigate();

  const projects = [
    {
      id: 'product-led-growth',
      title: 'Product LED Growth Analysis',
      description: 'A complete analytics system demonstrating end-to-end SaaS user journey & experimentation.',
      tech: ['SaaS Analytics', 'User Journey', 'Experimentation'],
      status: 'completed',
      route: '/projects/product-led-growth',
      image: 'https://static.readdy.ai/image/162de1f448c1631ca23ab745508fcce7/0abe03322c5a0ea37aba8421284d7546.png'
    },
    {
      id: 'skoda-smartflow',
      title: 'Skoda SmartFlow',
      description: 'Internal insights sales automation app prototype - streamlining dealership operations and leadership visibility.',
      tech: ['Sales Automation', 'Internal Tools', 'Prototype'],
      status: 'completed',
      route: '/projects/skoda-smartflow',
      image: 'https://static.readdy.ai/image/162de1f448c1631ca23ab745508fcce7/c027ea9f7e0f0cb0ab5bcc459cb3d2b1.png'
    },
    {
      id: 'enterprise-budget',
      title: 'Enterprise Intelligence: Budget Analytics Dashboard',
      description: 'Comprehensive budget analysis and forecasting dashboard for enterprise-level financial planning.',
      tech: ['Enterprise Analytics', 'Budget Planning', 'Financial Modeling'],
      status: 'completed',
      hasFilters: true,
      route: '/projects/enterprise-budget',
      image: 'https://static.readdy.ai/image/162de1f448c1631ca23ab745508fcce7/aa9cd606e6eb5c85844eaa62e1fcd61a.png'
    },
    {
      id: 'techflow-saas',
      title: 'TechFlow SaaS Analytics Platform',
      description: 'End-to-end business insights platform providing comprehensive analytics for SaaS companies.',
      tech: ['Business Intelligence', 'SaaS Analytics', 'Dashboard Design'],
      status: 'completed',
      route: '/projects/techflow-saas',
      image: 'https://readdy.ai/api/search-image?query=Modern%20SaaS%20analytics%20platform%20interface%20with%20multiple%20dashboard%20panels%2C%20business%20metrics%20charts%2C%20clean%20white%20and%20blue%20design%2C%20professional%20business%20intelligence%20interface%2C%20data%20visualization&width=400&height=250&seq=techflow-project&orientation=landscape'
    },
    {
      id: 'logistics-dashboard',
      title: 'Regional Market Performance Analytics',
      description: 'Unified market intelligence dashboard providing comprehensive real-time visibility into regional business performance and revenue optimization opportunities.',
      tech: ['Market Intelligence', 'Regional Analytics', 'Performance Metrics'],
      status: 'completed',
      route: '/projects/logistics-dashboard',
      image: 'https://static.readdy.ai/image/162de1f448c1631ca23ab745508fcce7/92f122f2b7a0b23e52743f2c223d4035.png'
    },
    {
      id: 'sql-analytics',
      title: 'End-to-End Ad Hoc Analytics using SQL',
      description: 'Comprehensive SQL-based analytics solution for business intelligence and data-driven decision making.',
      tech: ['SQL', 'Database Design', 'Analytics'],
      status: 'completed',
      route: '/projects/sql-analytics',
      image: 'https://readdy.ai/api/search-image?query=SQL%20database%20analytics%20dashboard%20with%20complex%20queries%20and%20data%20visualization%20charts%2C%20professional%20dark%20theme%20interface%2C%20modern%20business%20intelligence%20tools%2C%20clean%20database%20schema%20design&width=400&height=250&seq=sql-project&orientation=landscape'
    }
  ];

  const handleProjectClick = (project: any) => {
    navigate(project.route);
  };

  return (
    <section className="min-h-screen pt-24 pb-20 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Featured <span className="text-black font-black">Projects</span>
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto font-semibold">
            Explore my portfolio of data analytics and business intelligence projects, 
            each showcasing different aspects of modern data-driven decision making.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-gradient-to-r from-black to-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 border border-yellow-400 cursor-pointer"
              onClick={() => handleProjectClick(project)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'completed' 
                      ? 'bg-yellow-400 text-black border border-yellow-400' 
                      : 'bg-orange-100 text-orange-800'
                  }`}>
                    {project.status === 'completed' ? 'Completed' : 'In Progress'}
                  </span>
                </div>
                {project.hasFilters && (
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-yellow-400 text-black rounded-full text-xs font-semibold border border-yellow-400">
                      Dual View
                    </span>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-white text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-yellow-400 text-black rounded-lg text-xs font-medium border border-yellow-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-yellow-400 font-semibold text-sm">View Case Study</span>
                  <i className="ri-arrow-right-line text-yellow-400 group-hover:translate-x-2 transition-transform duration-300"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
