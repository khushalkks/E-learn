import React, { useState } from 'react';
import {
  BookOpen,
  Clock,
  CheckCircle,
  Bell,
  User,
  Star,
  Award,
  TrendingUp,
  Zap,
  Target,
  Calendar,
  Play,
  ChevronRight
} from 'lucide-react';

const Dashboard = () => {
  const [progress] = useState(65);
  const [notifications] = useState(3);

  // Circular progress component
  const CircularProgress = ({ value, size = 80, strokeWidth = 8 }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (value / 100) * circumference;

    return (
      <div className="relative" style={{ width: size, height: size }}>
        <svg className="transform -rotate-90" width={size} height={size}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="none"
            className="text-gray-200"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="text-purple-500 transition-all duration-1000 ease-out"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {value}%
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-500 to-teal-500 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-30 animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 p-6">
        {/* Top Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-black bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-2">
              Welcome back, Khushal 👋
            </h1>
            <p className="text-gray-300 text-lg">Ready to continue your learning journey?</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-lg hover:shadow-purple-500/50">
                <Bell className="text-white" size={20} />
                {notifications > 0 && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full text-xs text-white flex items-center justify-center animate-bounce">
                    {notifications}
                  </span>
                )}
              </div>
            </div>
            
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-lg hover:shadow-blue-500/50">
              <User className="text-white" size={20} />
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            { 
              title: 'Enrolled Courses', 
              value: '5', 
              Icon: BookOpen, 
              color: 'from-purple-600 to-pink-600',
              shadowColor: 'hover:shadow-purple-500/50',
              bgGradient: 'from-purple-500/20 to-pink-500/20'
            },
            { 
              title: 'Hours Learned', 
              value: '12h', 
              Icon: Clock, 
              color: 'from-green-600 to-teal-600',
              shadowColor: 'hover:shadow-green-500/50',
              bgGradient: 'from-green-500/20 to-teal-500/20'
            },
            { 
              title: 'Certifications', 
              value: '2', 
              Icon: Award, 
              color: 'from-yellow-600 to-orange-600',
              shadowColor: 'hover:shadow-yellow-500/50',
              bgGradient: 'from-yellow-500/20 to-orange-500/20'
            },
            { 
              title: 'Course Progress', 
              value: `${progress}%`, 
              Icon: Target, 
              color: 'from-blue-600 to-cyan-600',
              shadowColor: 'hover:shadow-blue-500/50',
              bgGradient: 'from-blue-500/20 to-cyan-500/20',
              isProgress: true
            }
          ].map((stat, i) => (
            <div 
              key={i}
              className={`
                relative group bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 
                hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 
                hover:scale-105 ${stat.shadowColor} hover:shadow-2xl cursor-pointer
              `}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white/80 font-medium">{stat.title}</h3>
                  <div className={`w-10 h-10 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center shadow-lg`}>
                    <stat.Icon className="text-white" size={20} />
                  </div>
                </div>
                
                {stat.isProgress ? (
                  <div className="flex items-center justify-center">
                    <CircularProgress value={progress} size={64} strokeWidth={6} />
                  </div>
                ) : (
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <TrendingUp className="text-white" size={20} />
            </div>
            <h2 className="text-2xl font-bold text-white">Recent Activity</h2>
          </div>
          
          <div className="space-y-4">
            {[
              { icon: '✅', text: 'Completed "React for Beginners"', time: '2 hours ago', color: 'from-green-500 to-emerald-500' },
              { icon: '📚', text: 'Watched 2 lessons in "Machine Learning Essentials"', time: '1 day ago', color: 'from-blue-500 to-cyan-500' },
              { icon: '🎓', text: 'Earned certificate for "UI/UX Design Basics"', time: '3 days ago', color: 'from-yellow-500 to-orange-500' },
              { icon: '🔁', text: 'Resumed "Full Stack MERN Bootcamp"', time: '5 days ago', color: 'from-purple-500 to-pink-500' }
            ].map((activity, i) => (
              <div 
                key={i}
                className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer group"
              >
                <div className="text-2xl">{activity.icon}</div>
                <div className="flex-1">
                  <p className="text-white font-medium group-hover:text-purple-200 transition-colors">{activity.text}</p>
                  <p className="text-gray-400 text-sm">{activity.time}</p>
                </div>
                <ChevronRight className="text-gray-400 group-hover:text-white transition-colors" size={16} />
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Courses */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
              <Star className="text-white" size={20} />
            </div>
            <h2 className="text-2xl font-bold text-white">Recommended Courses</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: 'Advanced React Patterns', 
                description: 'Master advanced React concepts and patterns',
                level: 'Advanced',
                duration: '8 weeks',
                rating: 4.9,
                gradient: 'from-purple-600 to-pink-600'
              },
              { 
                title: 'Machine Learning with Python', 
                description: 'Build intelligent applications with ML',
                level: 'Intermediate',
                duration: '12 weeks',
                rating: 4.8,
                gradient: 'from-green-600 to-teal-600'
              },
              { 
                title: 'Full Stack Development', 
                description: 'Complete web development bootcamp',
                level: 'Beginner',
                duration: '16 weeks',
                rating: 4.9,
                gradient: 'from-blue-600 to-cyan-600'
              }
            ].map((course, i) => (
              <div 
                key={i}
                className="group relative bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs px-3 py-1 bg-white/20 rounded-full text-white font-medium">
                      {course.level}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="text-yellow-400 fill-current" size={14} />
                      <span className="text-sm text-gray-300">{course.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                    {course.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {course.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Clock size={14} />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                  
                  <button className={`
                    w-full py-3 px-4 bg-gradient-to-r ${course.gradient} text-white font-medium rounded-lg 
                    hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 
                    transform hover:scale-105 flex items-center justify-center gap-2
                  `}>
                    <Play size={16} />
                    Start Learning
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;