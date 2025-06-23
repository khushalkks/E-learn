import React, { useEffect, useRef, useState } from 'react';
import { BookOpen, Clock, Users, CheckCircle, Sparkles, Star, Zap, Trophy } from 'lucide-react';

const features = [
  {
    icon: <BookOpen className="w-10 h-10" />,
    title: 'Expert-Led Courses',
    desc: 'Courses designed and taught by industry professionals with real-world experience.',
    color: 'from-pink-500 to-rose-500',
    bgColor: 'from-pink-50 to-rose-50',
    shadowColor: 'shadow-pink-500/30',
    glowColor: 'shadow-pink-400/50',
    decorIcon: <Star className="w-4 h-4" />
  },
  {
    icon: <Clock className="w-10 h-10" />,
    title: 'Learn at Your Pace',
    desc: 'Access content anytime and anywhere. No deadlines, no pressure.',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'from-blue-50 to-cyan-50',
    shadowColor: 'shadow-blue-500/30',
    glowColor: 'shadow-blue-400/50',
    decorIcon: <Zap className="w-4 h-4" />
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: 'Community Support',
    desc: 'Join a thriving community of learners, mentors, and experts.',
    color: 'from-purple-500 to-indigo-500',
    bgColor: 'from-purple-50 to-indigo-50',
    shadowColor: 'shadow-purple-500/30',
    glowColor: 'shadow-purple-400/50',
    decorIcon: <Sparkles className="w-4 h-4" />
  },
  {
    icon: <CheckCircle className="w-10 h-10" />,
    title: 'Resume Boost',
    desc: 'Earn certificates and skills that improve your resume and job prospects.',
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'from-emerald-50 to-teal-50',
    shadowColor: 'shadow-emerald-500/30',
    glowColor: 'shadow-emerald-400/50',
    decorIcon: <Trophy className="w-4 h-4" />
  },
];

const Feature = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = particlesRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const particles = [];
    
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create floating particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        color: `hsl(${Math.random() * 360}, 70%, 70%)`
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();
        
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
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
      ref={sectionRef}
      className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 py-24 px-6 overflow-hidden"
    >
      {/* Animated Background Canvas */}
      <canvas
        ref={particlesRef}
        className="absolute inset-0 w-full h-full opacity-40"
        style={{ mixBlendMode: 'multiply' }}
      />

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Section Header */}
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-2xl">
            <Sparkles className="w-4 h-4" />
            Why Choose Us?
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900 mb-6 leading-tight">
            Unleash Your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 animate-shimmer">
              Potential
            </span>
          </h2>
          
          <p className="text-xl text-gray-700 mb-16 max-w-3xl mx-auto leading-relaxed font-medium">
            🚀 We're committed to delivering the best learning experience with 
            <span className="text-purple-600 font-bold"> practical skills</span> and 
            <span className="text-pink-600 font-bold"> real results</span> that transform careers.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`group relative transform transition-all duration-700 hover:scale-105 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {/* Card Background with Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300`}></div>
              
              {/* Main Card */}
              <div className={`relative bg-white/80 backdrop-blur-sm border-2 border-white/50 rounded-3xl p-8 shadow-2xl ${feature.shadowColor} hover:${feature.glowColor} hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}>
                
                {/* Floating Decorative Icon */}
                <div className="absolute -top-3 -right-3 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <div className={`text-gradient bg-gradient-to-r ${feature.color} p-2 rounded-full`}>
                    {feature.decorIcon}
                  </div>
                </div>

                {/* Main Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} text-white rounded-2xl mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed font-medium group-hover:text-gray-700 transition-colors duration-300">
                  {feature.desc}
                </p>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}></div>
                
                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r ${feature.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </div>

              {/* Floating Animation Elements */}
              <div className="absolute -z-10 inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute top-4 right-4 w-2 h-2 bg-gradient-to-r ${feature.color} rounded-full animate-ping`}></div>
                <div className={`absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-r ${feature.color} rounded-full animate-ping`} style={{animationDelay: '0.5s'}}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className={`mt-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '800ms'}}>
          <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Career?</h3>
            <p className="text-white/90 text-lg mb-6">Join thousands of successful learners who've boosted their careers with our platform.</p>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Start Learning Today! 🚀
            </button>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Feature;