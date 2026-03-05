import React from "react";

function Courses() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-100">

      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}

        <h2 className="text-4xl font-bold text-blue-800">
          Courses Offered
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Nandha College of Technology offers industry-oriented
          undergraduate engineering programs designed to develop
          technical knowledge, problem-solving skills and innovation.
        </p>

      </div>

      {/* Courses Cards */}

      <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto px-6">

        {/* CSE */}

        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">

          <div className="text-4xl mb-4">💻</div>

          <h3 className="text-xl font-semibold text-blue-700">
            B.E Computer Science Engineering
          </h3>

          <p className="mt-3 text-gray-600 text-sm">
            This program focuses on programming, artificial intelligence,
            data structures, machine learning and modern software
            development technologies.
          </p>

          <ul className="mt-4 text-sm text-gray-500 text-left">
            <li>• Programming & Software Development</li>
            <li>• Artificial Intelligence</li>
            <li>• Data Science & Machine Learning</li>
          </ul>

        </div>

        {/* ECE */}

        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">

          <div className="text-4xl mb-4">📡</div>

          <h3 className="text-xl font-semibold text-blue-700">
            B.E Electronics & Communication
          </h3>

          <p className="mt-3 text-gray-600 text-sm">
            This course focuses on electronic circuits, communication
            systems, embedded systems and modern electronic technology.
          </p>

          <ul className="mt-4 text-sm text-gray-500 text-left">
            <li>• Communication Systems</li>
            <li>• Embedded Systems</li>
            <li>• Microprocessors & IoT</li>
          </ul>

        </div>

        {/* IT */}

        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">

          <div className="text-4xl mb-4">🌐</div>

          <h3 className="text-xl font-semibold text-blue-700">
            B.Tech Information Technology
          </h3>

          <p className="mt-3 text-gray-600 text-sm">
            The IT program focuses on networking, cybersecurity,
            cloud computing and modern web development technologies.
          </p>

          <ul className="mt-4 text-sm text-gray-500 text-left">
            <li>• Networking & Cloud Computing</li>
            <li>• Cybersecurity</li>
            <li>• Web & Mobile Development</li>
          </ul>

        </div>

      </div>

    </section>
  );
}

export default Courses;