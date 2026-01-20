import { useEffect } from 'react';

interface ProjectModalProps {
  project: string;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const projectData: Record<string, { title: string; notionUrl: string }> = {
    'logistics-dashboard': {
      title: 'Regional Market Performance Analytics',
      notionUrl: 'https://fancy-anglerfish-6b3.notion.site/Regional-Market-Performance-Analytics-2d3749751fc280bca722fa3f3b8eb907?pvs=21'
    },
    'enterprise-budget': {
      title: 'Enterprise Intelligence Budget Analytics',
      notionUrl: 'https://fancy-anglerfish-6b3.notion.site/Enterprise-Intelligence-Budget-Analytics-2d5749751fc280599a27e82bef815741?pvs=21'
    },
    'product-led-growth': {
      title: 'Product-LED Growth Funnel Analysis (SaaS)',
      notionUrl: 'https://www.notion.so/Product-LED-Growth-Funnel-Analysis-SaaS-User-Journey-Experimentation-2d5749751fc280f29181fa0a887b8949?pvs=21'
    }
  };

  const currentProject = projectData[project];

  if (!currentProject) return null;

  // Handle backdrop click
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-gradient-to-br from-yellow-300/95 via-yellow-400/95 to-yellow-500/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-8"
      onClick={handleBackdropClick}
    >
      <div className="bg-black border-4 border-yellow-400 rounded-2xl w-full h-full max-w-7xl max-h-[95vh] overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b-4 border-yellow-400 bg-gradient-to-r from-black to-gray-900">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-400 truncate pr-4">
            {currentProject.title}
          </h2>
          <button
            onClick={onClose}
            className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400 hover:bg-yellow-300 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 flex-shrink-0"
            aria-label="Close modal"
          >
            <i className="ri-close-line text-black text-xl sm:text-2xl"></i>
          </button>
        </div>

        {/* Notion Embed Content */}
        <div className="flex-1 overflow-hidden bg-white">
          <iframe
            src={currentProject.notionUrl}
            className="w-full h-full border-none"
            title={currentProject.title}
            loading="lazy"
          />
        </div>

        {/* Footer with Close Button */}
        <div className="p-4 sm:p-6 border-t-4 border-yellow-400 bg-gradient-to-r from-black to-gray-900 flex justify-center">
          <button
            onClick={onClose}
            className="px-6 sm:px-8 py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-full transition-all duration-200 hover:scale-105 flex items-center space-x-2 whitespace-nowrap"
          >
            <i className="ri-arrow-left-line text-lg"></i>
            <span>Back to Projects</span>
          </button>
        </div>
      </div>
    </div>
  );
}
