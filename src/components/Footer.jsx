import React from 'react';
import { Facebook, Twitter, Linkedin, Mail, BookOpen, Users, Award, Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Main content grid */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
            
            {/* Brand section with 3D effect */}
            <div className="lg:col-span-2">
              <div className="relative group">
                <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent transform hover:scale-105 transition-all duration-300 cursor-default">
                  E-LearnHub
                </h2>
                <div className="absolute -inset-2 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
              </div>
              
              <p className="text-gray-200 text-lg leading-relaxed mb-6 max-w-md">
                🚀 Empower your future with expert-led courses and real-world projects. Learn, grow, and shine in the digital age.
              </p>
              
              {/* Stats cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center gap-3">
                    <Users className="text-cyan-400" size={24} />
                    <div>
                      <div className="text-xl font-bold">50K+</div>
                      <div className="text-sm text-gray-300">Students</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center gap-3">
                    <BookOpen className="text-green-400" size={24} />
                    <div>
                      <div className="text-xl font-bold">200+</div>
                      <div className="text-sm text-gray-300">Courses</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-6 text-cyan-300">Quick Links</h3>
              <div className="space-y-3">
                {['About Us', 'Courses', 'Instructors', 'Career Support', 'Success Stories'].map((link, i) => (
                  <a 
                    key={i}
                    href="#" 
                    className="block text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <Zap size={16} className="text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Social & Contact */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-pink-300">Connect With Us</h3>
              
              {/* Social icons with 3D hover effect */}
              <div className="flex gap-4">
                {[
                  { Icon: Facebook, color: 'hover:bg-blue-600', shadow: 'hover:shadow-blue-500/50' },
                  { Icon: Twitter, color: 'hover:bg-sky-500', shadow: 'hover:shadow-sky-400/50' },
                  { Icon: Linkedin, color: 'hover:bg-blue-700', shadow: 'hover:shadow-blue-600/50' },
                  { Icon: Mail, color: 'hover:bg-red-600', shadow: 'hover:shadow-red-500/50' }
                ].map(({ Icon, color, shadow }, i) => (
                  <a 
                    key={i}
                    href="#" 
                    className={`
                      w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 
                      flex items-center justify-center transition-all duration-300 
                      transform hover:-translate-y-2 hover:scale-110 ${color} ${shadow}
                      hover:shadow-xl
                    `}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>

              {/* Contact info */}
              <div className="bg-gradient-to-r from-purple-800/50 to-pink-800/50 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="text-yellow-400" size={20} />
                  <span className="font-semibold">Premium Support</span>
                </div>
                <p className="text-sm text-gray-300">24/7 expert assistance for all learners</p>
              </div>
            </div>
          </div>

          {/* Bottom section with wave effect */}
          <div className="relative">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            <div className="pt-8 text-center">
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400">
                <span>&copy; {new Date().getFullYear()} E-LearnHub.</span>
                <span className="hidden sm:inline">•</span>
                <span>All rights reserved.</span>
                <span className="hidden sm:inline">•</span>
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent font-semibold">
                  Made with 💜 for learners worldwide
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated border effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 animate-pulse"></div>
      </div>
    </footer>
  );
};

export default Footer;