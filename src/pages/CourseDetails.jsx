import React from 'react';
import { useParams } from 'react-router-dom';

const dummyCourses = {
  1: {
    title: 'React for Beginners',
    description: 'Master the fundamentals of modern frontend development using React.',
    image: 'https://source.unsplash.com/600x300/?react,code',
    content: 'Learn React core concepts including components, state, props, JSX, and hooks. Build interactive UIs and single-page applications. Perfect for JavaScript developers new to React.',
  },
  2: {
    title: 'Full Stack MERN Bootcamp',
    description: 'Become a full stack web developer using MongoDB, Express, React, and Node.js.',
    image: 'https://source.unsplash.com/600x300/?mern,developer',
    content: 'Build and deploy dynamic, database-driven web apps. Learn REST APIs, JWT authentication, Redux state management, and how to host your apps on platforms like Vercel or Render.',
  },
  3: {
    title: 'Next.js Mastery',
    description: 'Develop fast, SEO-optimized websites using the power of Next.js.',
    image: 'https://source.unsplash.com/600x300/?nextjs,web',
    content: 'Dive into server-side rendering (SSR), static site generation (SSG), routing, API endpoints, and performance optimizations. Build scalable apps with production-ready deployment strategies.',
  },
  4: {
    title: 'Python for Data Science',
    description: 'Use Python to analyze, clean, and visualize real-world data.',
    image: 'https://source.unsplash.com/600x300/?python,data',
    content: 'Understand data structures, use NumPy and pandas for manipulation, and Matplotlib/Seaborn for visualization. Build a strong Python foundation for advanced data science or machine learning.',
  },
  5: {
    title: 'Machine Learning Essentials',
    description: 'Build intelligent systems and predictive models with hands-on ML projects.',
    image: 'https://source.unsplash.com/600x300/?machinelearning,ai',
    content: 'Learn supervised and unsupervised learning, decision trees, k-means, and linear/logistic regression using scikit-learn. Work on datasets and evaluate your models with real metrics.',
  },
  6: {
    title: 'SQL & Data Visualization',
    description: 'Turn raw data into insights using SQL and modern visualization tools.',
    image: 'https://source.unsplash.com/600x300/?sql,database',
    content: 'Master SQL queries, joins, aggregations, and subqueries. Learn to create dynamic dashboards using tools like Tableau or Power BI for real business storytelling.',
  },
  7: {
    title: 'UI/UX Design Basics',
    description: 'Craft intuitive and visually appealing user experiences from scratch.',
    image: 'https://source.unsplash.com/600x300/?design,uiux',
    content: 'Explore user research, persona creation, wireframing, typography, layout principles, and responsive design. Learn how to make accessible and delightful experiences.',
  },
  8: {
    title: 'Figma for Designers',
    description: 'Design responsive interfaces and collaborate in real-time with Figma.',
    image: 'https://source.unsplash.com/600x300/?figma,design',
    content: 'Get hands-on with Figma tools, components, prototyping, auto layout, and team collaboration features. Build reusable design systems and deliver developer-friendly designs.',
  },
  9: {
    title: 'Graphic Design with Canva',
    description: 'Create stunning marketing assets and graphics easily with Canva.',
    image: 'https://source.unsplash.com/600x300/?canva,graphics',
    content: 'Design logos, posters, presentations, and social media graphics. Learn branding, composition, templates, and animation tools — ideal for beginners or non-designers.',
  },
};


const CourseDetails = () => {
  const { id } = useParams();
  const course = dummyCourses[id];

  if (!course) {
    return <div className="text-center text-red-500 mt-10 text-xl">Course not found.</div>;
  }

  return (
    <section className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <h1 className="text-4xl font-bold text-indigo-700 mb-4">{course.title}</h1>
      <p className="text-gray-700 text-lg mb-4">{course.description}</p>
      <div className="text-gray-600 leading-relaxed">
        <h2 className="text-xl font-semibold mb-2">What you'll learn:</h2>
        <p>{course.content}</p>
      </div>
    </section>
  );
};

export default CourseDetails;
