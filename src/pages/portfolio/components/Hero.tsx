import { useEffect, useRef } from 'react';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

export function Hero({ setActiveSection }: HeroProps) {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = chartRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (container) {
        const rect = container.getBoundingClientRect();
        canvas.width = rect.width * window.devicePixelRatio;
        canvas.height = rect.height * window.devicePixelRatio;
        canvas.style.width = rect.width + 'px';
        canvas.style.height = rect.height + 'px';
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Growth data points
    const dataPoints = [
      { x: 0.1, y: 0.8, value: '15%' },
      { x: 0.25, y: 0.65, value: '28%' },
      { x: 0.4, y: 0.45, value: '42%' },
      { x: 0.55, y: 0.35, value: '58%' },
      { x: 0.7, y: 0.25, value: '75%' },
      { x: 0.85, y: 0.15, value: '92%' }
    ];

    let animationProgress = 0;
    const animationDuration = 3000; // 3 seconds
    let startTime: number | null = null;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      animationProgress = Math.min(elapsed / animationDuration, 1);

      // Clear canvas with transparent background
      ctx.clearRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio);

      const width = canvas.width / window.devicePixelRatio;
      const height = canvas.height / window.devicePixelRatio;

      // Draw animated line with black color
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 4;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      ctx.beginPath();
      
      const visiblePoints = Math.floor(animationProgress * dataPoints.length);
      const partialProgress = (animationProgress * dataPoints.length) % 1;

      for (let i = 0; i <= visiblePoints && i < dataPoints.length; i++) {
        const point = dataPoints[i];
        const x = point.x * width;
        const y = point.y * height;

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      // Draw partial line to next point
      if (visiblePoints < dataPoints.length - 1 && partialProgress > 0) {
        const currentPoint = dataPoints[visiblePoints];
        const nextPoint = dataPoints[visiblePoints + 1];
        
        const currentX = currentPoint.x * width;
        const currentY = currentPoint.y * height;
        const nextX = nextPoint.x * width;
        const nextY = nextPoint.y * height;
        
        const partialX = currentX + (nextX - currentX) * partialProgress;
        const partialY = currentY + (nextY - currentY) * partialProgress;
        
        ctx.lineTo(partialX, partialY);
      }

      ctx.stroke();

      // Draw animated points and labels
      dataPoints.forEach((point, index) => {
        if (index <= visiblePoints || (index === visiblePoints + 1 && partialProgress > 0.5)) {
          const x = point.x * width;
          const y = point.y * height;

          // Draw point
          ctx.fillStyle = '#FFFFFF';
          ctx.beginPath();
          ctx.arc(x, y, 8, 0, 2 * Math.PI);
          ctx.fill();
          
          ctx.strokeStyle = '#000000';
          ctx.lineWidth = 3;
          ctx.stroke();

          // Draw value label
          ctx.fillStyle = '#000000';
          ctx.font = 'bold 14px system-ui';
          ctx.textAlign = 'center';
          ctx.fillText(point.value, x, y - 15);
        }
      });

      // Continue animation
      if (animationProgress < 1) {
        requestAnimationFrame(animate);
      }
    };

    // Start animation after a short delay
    setTimeout(() => {
      requestAnimationFrame(animate);
    }, 500);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section className="min-h-screen pt-20 md:pt-24 pb-20 flex items-center bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-black text-yellow-400 rounded-full text-sm font-bold mb-4 border border-black">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></span>
                Available for new opportunities
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-black text-black leading-tight mb-4">
                Kaushik <span className="text-black font-black">Yeddanapudi</span>
              </h1>
              
              <p className="text-2xl text-black font-bold mb-6">
                Business Analytics Graduate | Advanced SQL & Power BI Specialist
              </p>
              
              <p className="text-lg text-black leading-relaxed max-w-2xl font-semibold">
                Helping Companies Turn Data Into Profitable Insights. Experienced business analytics professional specializing in transforming complex data into strategic business solutions that drive revenue growth and operational excellence.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setActiveSection('projects')}
                className="px-8 py-4 bg-black text-yellow-400 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 whitespace-nowrap border border-black"
              >
                View Projects
              </button>
              <button
                onClick={() => setActiveSection('contact')}
                className="px-8 py-4 border-2 border-black text-black rounded-xl font-bold hover:bg-black hover:text-yellow-400 transition-all duration-300 whitespace-nowrap"
              >
                Get in Touch
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 p-4">
              <div className="w-full h-80 lg:h-[320px] relative">
                <canvas
                  ref={chartRef}
                  className="w-full h-full"
                  style={{ width: '100%', height: '100%', background: 'transparent' }}
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-black rounded-2xl opacity-20 blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-black rounded-2xl opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
