import React, { useState } from 'react';
import { 
  Laptop, 
  BarChart, 
  PenTool, 
  Play, 
  Users, 
  Clock, 
  Star, 
  BookOpen,
  Award,
  TrendingUp,
  Code,
  Database,
  Palette,
  ChevronRight,
  Zap
} from 'lucide-react';

const fieldIcons = {
  'Web Development': { icon: Code, gradient: 'from-blue-600 to-cyan-600', bgGradient: 'from-blue-500/20 to-cyan-500/20' },
  'Data Science': { icon: Database, gradient: 'from-green-600 to-emerald-600', bgGradient: 'from-green-500/20 to-emerald-500/20' },
  'Design': { icon: Palette, gradient: 'from-pink-600 to-purple-600', bgGradient: 'from-pink-500/20 to-purple-500/20' },
};

const coursesByField = {
  'Web Development': [
    {
      id: 1,
      title: 'React for Beginners',
      description: 'Start building dynamic web apps using React, JSX, and hooks.',
      level: 'Beginner',
      duration: '6 weeks',
      students: '12.5k',
      rating: 4.8,
      price: '$49',
      instructor: 'Sarah Chen',
      gradient: 'from-blue-600 to-indigo-600'
    },
    {
      id: 2,
      title: 'Full Stack MERN Bootcamp',
      description: 'Learn MongoDB, Express, React, and Node to build complete web apps.',
      level: 'Advanced',
      duration: '16 weeks',
      students: '8.2k',
      rating: 4.9,
      price: '$199',
      instructor: 'Mike Rodriguez',
      gradient: 'from-indigo-600 to-purple-600'
    },
    {
      id: 3,
      title: 'Next.js Mastery',
      description: 'Build SEO-friendly, blazing-fast web apps with Next.js.',
      level: 'Intermediate',
      duration: '8 weeks',
      students: '6.7k',
      rating: 4.7,
      price: '$89',
      instructor: 'Alex Thompson',
      gradient: 'from-cyan-600 to-blue-600'
    },
  ],
  'Data Science': [
    {
      id: 4,
      title: 'Python for Data Science',
      description: 'Use Python to analyze data and build models using pandas and NumPy.',
      level: 'Beginner',
      duration: '10 weeks',
      students: '15.3k',
      rating: 4.8,
      price: '$79',
      instructor: 'Dr. Emily Watson',
      gradient: 'from-green-600 to-teal-600'
    },
    {
      id: 5,
      title: 'Machine Learning Essentials',
      description: 'Understand ML algorithms, sklearn, and apply them to real datasets.',
      level: 'Intermediate',
      duration: '12 weeks',
      students: '9.8k',
      rating: 4.9,
      price: '$149',
      instructor: 'Prof. David Kim',
      gradient: 'from-emerald-600 to-green-600'
    },
    {
      id: 6,
      title: 'SQL & Data Visualization',
      description: 'Query databases and visualize insights using tools like Tableau.',
      level: 'Beginner',
      duration: '6 weeks',
      students: '11.2k',
      rating: 4.6,
      price: '$59',
      instructor: 'Lisa Park',
      gradient: 'from-teal-600 to-cyan-600'
    },
  ],
  'Design': [
    {
      id: 7,
      title: 'UI/UX Design Basics',
      description: 'Understand design principles and create wireframes and prototypes.',
      level: 'Beginner',
      duration: '8 weeks',
      students: '13.7k',
      rating: 4.8,
      price: '$69',
      instructor: 'Maya Patel',
      gradient: 'from-pink-600 to-rose-600'
    },
    {
      id: 8,
      title: 'Figma for Designers',
      description: 'Use Figma to design interactive and modern UIs collaboratively.',
      level: 'Intermediate',
      duration: '5 weeks',
      students: '7.9k',
      rating: 4.7,
      price: '$45',
      instructor: 'James Wilson',
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      id: 9,
      title: 'Graphic Design with Canva',
      description: 'Learn to create stunning visuals and branding assets with Canva.',
      level: 'Beginner',
      duration: '4 weeks',
      students: '16.4k',
      rating: 4.5,
      price: '$39',
      instructor: 'Sophie Martin',
      gradient: 'from-rose-600 to-purple-600'
    },
  ],
};

const CourseCards = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'Advanced': return 'bg-red-500/20 text-red-300 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
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
        {[...Array(15)].map((_, i) => (
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

      <div className="relative z-10 p-6 space-y-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-4">
            Explore Our Courses
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transform your career with expert-led courses designed for the modern learner
          </p>
        </div>

        {Object.entries(coursesByField).map(([field, courses]) => {
          const FieldIcon = fieldIcons[field].icon;
          
          return (
            <div key={field} className="space-y-8">
              {/* Field Header */}
              <div className="flex items-center justify-center mb-12">
                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-xl rounded-2xl px-8 py-4 border border-white/20">
                  <div className={`w-12 h-12 bg-gradient-to-r ${fieldIcons[field].gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                    <FieldIcon className="text-white" size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-white">{field}</h2>
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                    <TrendingUp className="text-white" size={20} />
                  </div>
                </div>
              </div>

              {/* Course Grid */}
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {courses.map((course) => (
                  <div
                    key={course.id}
                    className="group relative bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 cursor-pointer"
                    onMouseEnter={() => setHoveredCard(course.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Animated gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                    
                    {/* Glowing border effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                    
                    <div className="relative z-10 p-6">
                      {/* Course Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getLevelColor(course.level)}`}>
                          {course.level}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="text-yellow-400 fill-current" size={16} />
                          <span className="text-sm text-white font-medium">{course.rating}</span>
                        </div>
                      </div>

                      {/* Course Title */}
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">
                        {course.title}
                      </h3>

                      {/* Course Description */}
                      <p className="text-gray-300 text-sm mb-6 line-clamp-3 group-hover:text-gray-200 transition-colors">
                        {course.description}
                      </p>

                      {/* Course Stats */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Clock size={14} className="text-blue-400" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Users size={14} className="text-green-400" />
                          <span>{course.students}</span>
                        </div>
                      </div>

                      {/* Instructor */}
                      <div className="flex items-center gap-3 mb-6 p-3 bg-white/5 rounded-lg border border-white/10">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                          <Award size={14} className="text-white" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400">Instructor</p>
                          <p className="text-sm text-white font-medium">{course.instructor}</p>
                        </div>
                      </div>

                      {/* Price and CTA */}
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-white">
                          {course.price}
                        </div>
                        
                        <button className={`
                          group/btn relative px-6 py-3 bg-gradient-to-r ${course.gradient} text-white font-medium rounded-xl 
                          hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 
                          transform hover:scale-110 flex items-center gap-2 overflow-hidden
                        `}>
                          <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                          <Play size={16} className="relative z-10" />
                          <span className="relative z-10">Enroll Now</span>
                          <ChevronRight size={16} className="relative z-10 transform group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>

                      {/* Hover Effect - Additional Info */}
                      {hoveredCard === course.id && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 transition-all duration-300">
                          <div className="w-full space-y-2">
                            <div className="flex items-center gap-2 text-white text-sm">
                              <Zap size={14} className="text-yellow-400" />
                              <span>Lifetime Access</span>
                            </div>
                            <div className="flex items-center gap-2 text-white text-sm">
                              <BookOpen size={14} className="text-blue-400" />
                              <span>Certificate Included</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseCards;