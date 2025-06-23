import React, { useEffect, useRef } from 'react';
import { UploadCloud, Sparkles, BookOpen, Users } from 'lucide-react';

const Hero = () => {
  const canvasRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const particles = [];
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create snowflake particles
    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 4 + 1,
        speed: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        drift: Math.random() * 0.5 - 0.25
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fill();
        
        // Update position
        particle.y += particle.speed;
        particle.x += particle.drift;
        
        // Reset if particle goes off screen
        if (particle.y > canvas.height) {
          particle.y = -10;
          particle.x = Math.random() * canvas.width;
        }
        if (particle.x > canvas.width) {
          particle.x = 0;
        } else if (particle.x < 0) {
          particle.x = canvas.width;
        }
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)'
      }}
    >
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ mixBlendMode: 'screen' }}
      />
      
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl animate-bounce" style={{animationDuration: '6s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-blue-300/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl animate-bounce" style={{animationDuration: '8s', animationDelay: '1s'}}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Floating Icons */}
          <div className="absolute -top-10 -left-10 animate-float">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 shadow-2xl">
              <BookOpen className="text-white" size={24} />
            </div>
          </div>
          <div className="absolute -top-5 -right-5 animate-float" style={{animationDelay: '1s'}}>
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 shadow-2xl">
              <Users className="text-white" size={24} />
            </div>
          </div>
          <div className="absolute -bottom-10 left-5 animate-float" style={{animationDelay: '2s'}}>
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 shadow-2xl">
              <Sparkles className="text-white" size={24} />
            </div>
          </div>

          {/* Main Heading */}
          <div className="mb-8 transform hover:scale-105 transition-transform duration-500">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-200 to-purple-200 leading-tight mb-6 tracking-tight drop-shadow-2xl animate-fadeInUp">
              Empower Your
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 animate-shimmer">
                Learning Journey
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed font-light backdrop-blur-sm bg-white/10 rounded-2xl p-6 shadow-2xl animate-fadeInUp" style={{animationDelay: '0.3s'}}>
            🚀 Explore expert-led courses in development, design, data science, and more. 
            <br />
            <span className="text-yellow-300 font-semibold">Learn at your own pace, from anywhere.</span>
          </p>

          {/* CTA Button */}
          <div className="flex justify-center animate-fadeInUp" style={{animationDelay: '0.6s'}}>
            <button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-10 py-5 rounded-full shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 font-bold text-lg overflow-hidden">
              {/* Button Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Button Content */}
              <div className="relative flex items-center gap-3">
                <UploadCloud size={24} className="group-hover:rotate-12 transition-transform duration-300" />
                <span>Upload Your Resume</span>
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur opacity-30 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </div>
            </button>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fadeInUp" style={{animationDelay: '0.9s'}}>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl font-bold text-white mb-2">10,000+</div>
              <div className="text-white/80">Students Empowered</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-white/80">Expert Courses</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-white/80">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;