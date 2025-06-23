import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Database, 
  Palette, 
  Play, 
  Users, 
  Clock, 
  Star, 
  BookOpen,
  Award,
  TrendingUp,
  ChevronRight,
  Zap,
  Filter,
  Search,
  Grid,
  List,
  ArrowRight,
  Sparkles
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
      description: 'Learn React.js from scratch and build modern web applications.',
      level: 'Beginner',
      duration: '6 weeks',
      students: '12.5k',
      rating: 4.8,
      price: '$49',
      instructor: 'Sarah Chen',
      gradient: 'from-blue-600 to-indigo-600',
      skills: ['React', 'JSX', 'Hooks', 'Components']
    },
    {
      id: 2,
      title: 'Full Stack with MERN',
      description: 'Build full-stack web apps with MongoDB, Express, React, and Node.',
      level: 'Advanced',
      duration: '16 weeks',
      students: '8.2k',
      rating: 4.9,
      price: '$199',
      instructor: 'Mike Rodriguez',
      gradient: 'from-indigo-600 to-purple-600',
      skills: ['MongoDB', 'Express', 'React', 'Node.js']
    },
  ],
  'Data Science': [
    {
      id: 3,
      title: 'Python for Data Science',
      description: 'Explore data using Python libraries like Pandas and NumPy.',
      level: 'Beginner',
      duration: '10 weeks',
      students: '15.3k',
      rating: 4.8,
      price: '$79',
      instructor: 'Dr. Emily Watson',
      gradient: 'from-green-600 to-teal-600',
      skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib']
    },
    {
      id: 4,
      title: 'Machine Learning A-Z',
      description: 'Learn supervised and unsupervised ML techniques.',
      level: 'Intermediate',
      duration: '12 weeks',
      students: '9.8k',
      rating: 4.9,
      price: '$149',
      instructor: 'Prof. David Kim',
      gradient: 'from-emerald-600 to-green-600',
      skills: ['Scikit-learn', 'TensorFlow', 'Deep Learning', 'Neural Networks']
    },
  ],
  'Design': [
    {
      id: 5,
      title: 'UI/UX Design Basics',
      description: 'Design intuitive and user-friendly interfaces.',
      level: 'Beginner',
      duration: '8 weeks',
      students: '13.7k',
      rating: 4.8,
      price: '$69',
      instructor: 'Maya Patel',
      gradient: 'from-pink-600 to-rose-600',
      skills: ['Figma', 'Wireframing', 'Prototyping', 'User Research']
    },
    {
      id: 6,
      title: 'Figma for Beginners',
      description: 'Start designing with Figma tools and best practices.',
      level: 'Beginner',
      duration: '5 weeks',
      students: '7.9k',
      rating: 4.7,
      price: '$45',
      instructor: 'James Wilson',
      gradient: 'from-purple-600 to-pink-600',
      skills: ['Figma', 'Design Systems', 'Collaboration', 'Auto Layout']
    },
  ],
};

const Courses = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [animatedStats, setAnimatedStats] = useState({ courses: 0, students: 0, instructors: 0 });

  // Animate stats on mount
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimatedStats({ courses: 24, students: 47, instructors: 12 });
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  const allCourses = Object.values(coursesByField).flat();
  const totalStudents = allCourses.reduce((sum, course) => sum + parseFloat(course.students), 0);

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'Advanced': return 'bg-red-500/20 text-red-300 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  const filteredCourses = selectedFilter === 'All' 
    ? coursesByField 
    : { [selectedFilter]: coursesByField[selectedFilter] || [] };

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
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-40 animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="text-yellow-400 animate-pulse" size={32} />
              <h1 className="text-6xl font-black bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Our Courses
              </h1>
              <Sparkles className="text-yellow-400 animate-pulse" size={32} />
            </div>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Transform your career with our expert-crafted courses. Learn from industry professionals and build real-world projects that matter.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
              {[
                { label: 'Courses', value: animatedStats.courses, suffix: '+', icon: BookOpen, gradient: 'from-blue-600 to-cyan-600' },
                { label: 'Students', value: animatedStats.students, suffix: 'k+', icon: Users, gradient: 'from-green-600 to-emerald-600' },
                { label: 'Instructors', value: animatedStats.instructors, suffix: '+', icon: Award, gradient: 'from-purple-600 to-pink-600' }
              ].map((stat, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className={`w-12 h-12 bg-gradient-to-r ${stat.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <stat.icon className="text-white" size={24} />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.value}{stat.suffix}
                  </div>
                  <p className="text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filters & Search */}
        <section className="px-4 mb-12">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <div className="flex flex-wrap items-center justify-between gap-4">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search courses..."
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                {/* Filters */}
                <div className="flex items-center gap-2">
                  {['All', ...Object.keys(coursesByField)].map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setSelectedFilter(filter)}
                      className={`
                        px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                        ${selectedFilter === filter 
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg' 
                          : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                        }
                      `}
                    >
                      {filter}
                    </button>
                  ))}
                </div>

                {/* View Toggle */}
                <div className="flex items-center gap-2 bg-white/10 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'grid' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Grid size={18} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'list' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <List size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="px-4 pb-20">
          <div className="max-w-6xl mx-auto space-y-16">
            {Object.entries(filteredCourses).map(([field, courses]) => {
              const FieldIcon = fieldIcons[field].icon;
              
              return (
                <div key={field} className="space-y-8">
                  {/* Field Header */}
                  <div className="flex items-center justify-center mb-12">
                    <div className="flex items-center gap-4 bg-white/10 backdrop-blur-xl rounded-2xl px-8 py-4 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                      <div className={`w-12 h-12 bg-gradient-to-r ${fieldIcons[field].gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                        <FieldIcon className="text-white" size={24} />
                      </div>
                      <h2 className="text-3xl font-bold text-white">{field}</h2>
                      <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <TrendingUp className="text-white" size={20} />
                      </div>
                    </div>
                  </div>

                  {/* Course Grid */}
                  <div className={`grid gap-8 ${viewMode === 'grid' ? 'sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
                    {courses.map((course) => (
                      <div
                        key={course.id}
                        className={`
                          group relative bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden 
                          hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 cursor-pointer
                          ${viewMode === 'list' ? 'flex items-center gap-6 p-6' : 'p-6'}
                        `}
                        onMouseEnter={() => setHoveredCard(course.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        {/* Animated gradient overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                        
                        {/* Glowing border effect */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                        
                        <div className={`relative z-10 ${viewMode === 'list' ? 'flex-1' : ''}`}>
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
                          <p className="text-gray-300 text-sm mb-6 group-hover:text-gray-200 transition-colors">
                            {course.description}
                          </p>

                          {/* Skills Tags */}
                          {course.skills && (
                            <div className="flex flex-wrap gap-2 mb-6">
                              {course.skills.slice(0, 3).map((skill, i) => (
                                <span key={i} className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/20">
                                  {skill}
                                </span>
                              ))}
                              {course.skills.length > 3 && (
                                <span className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-400 border border-white/20">
                                  +{course.skills.length - 3} more
                                </span>
                              )}
                            </div>
                          )}

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
        </section>

        {/* CTA Section */}
        <section className="px-4 pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Ready to Start Learning?
                </h2>
                <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                  Join thousands of students who have transformed their careers with our courses.
                </p>
                <button className="group bg-white text-purple-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto">
                  <span>Browse All Courses</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Courses;