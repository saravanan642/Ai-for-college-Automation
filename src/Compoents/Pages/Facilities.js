import React from "react";

function Facilities() {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-50 to-blue-100 text-center">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <h2 className="text-4xl font-bold text-blue-800">
          Campus Facilities
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Nandha College of Technology provides modern infrastructure
          and world-class facilities to support academic learning
          and student development.
        </p>

        {/* Facilities Cards */}

        <div className="grid md:grid-cols-4 gap-8 mt-12">

          {/* Lab */}

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">

            <div className="text-4xl mb-3">🧪</div>

            <h3 className="text-xl font-semibold text-blue-700">
              Modern Laboratories
            </h3>

            <p className="text-gray-600 mt-2 text-sm">
              Fully equipped laboratories with advanced equipment
              to support practical learning and research.
            </p>

          </div>

          {/* Library */}

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">

            <div className="text-4xl mb-3">📚</div>

            <h3 className="text-xl font-semibold text-blue-700">
              Digital Library
            </h3>

            <p className="text-gray-600 mt-2 text-sm">
              A large collection of books, journals and digital
              resources for academic learning and research.
            </p>

          </div>

          {/* Hostel */}

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">

            <div className="text-4xl mb-3">🏠</div>

            <h3 className="text-xl font-semibold text-blue-700">
              Hostel Facilities
            </h3>

            <p className="text-gray-600 mt-2 text-sm">
              Comfortable hostel accommodation with modern
              amenities for both boys and girls.
            </p>

          </div>

          {/* Placement */}

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">

            <div className="text-4xl mb-3">💼</div>

            <h3 className="text-xl font-semibold text-blue-700">
              Placement Training
            </h3>

            <p className="text-gray-600 mt-2 text-sm">
              Dedicated placement cell providing training,
              internships and career opportunities.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Facilities;