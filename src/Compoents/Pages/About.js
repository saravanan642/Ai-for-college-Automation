import React from "react";

function About() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-100">

      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-blue-800">
          About Nandha College of Technology
        </h2>

        <p className="mt-6 text-gray-700 max-w-3xl mx-auto">
          Nandha College of Technology is one of the leading engineering
          institutions in Tamil Nadu dedicated to academic excellence,
          innovation and student success. Our institution provides
          quality education, modern infrastructure and strong industry
          connections to prepare students for the future.
        </p>

      </div>

      {/* Cards Section */}

      <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto px-6">

        {/* Vision */}

        <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition">

          <h3 className="text-xl font-semibold text-blue-700">
            Our Vision
          </h3>

          <p className="mt-3 text-gray-600">
            To become a center of excellence in education by nurturing
            innovative professionals and responsible leaders who
            contribute positively to society.
          </p>

        </div>

        {/* Mission */}

        <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition">

          <h3 className="text-xl font-semibold text-blue-700">
            Our Mission
          </h3>

          <p className="mt-3 text-gray-600">
            To provide high quality technical education, encourage
            research and innovation, and develop industry-ready
            graduates with strong ethical values.
          </p>

        </div>

        {/* Excellence */}

        <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition">

          <h3 className="text-xl font-semibold text-blue-700">
            Academic Excellence
          </h3>

          <p className="mt-3 text-gray-600">
            Our experienced faculty, advanced laboratories and
            industry collaboration programs help students gain
            practical knowledge and career success.
          </p>

        </div>

      </div>

    </section>
  );
}

export default About;