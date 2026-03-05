import React from "react";

function Contact() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-100">

      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-blue-800">
          Contact Nandha College
        </h2>

        <p className="mt-4 text-gray-600">
          Get in touch with us for admission, courses, and campus information.
        </p>

      </div>

      {/* Contact Cards */}

      <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto px-6">

        {/* Address */}

        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition text-center">

          <div className="text-4xl mb-4">📍</div>

          <h3 className="text-xl font-semibold text-blue-700">
            Address
          </h3>

          <p className="mt-2 text-gray-600">
            Nandha College of Technology  
            Erode, Tamil Nadu, India
          </p>

        </div>

        {/* Phone */}

        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition text-center">

          <div className="text-4xl mb-4">📞</div>

          <h3 className="text-xl font-semibold text-blue-700">
            Phone
          </h3>

          <p className="mt-2 text-gray-600">
            +91 9876543210
          </p>

        </div>

        {/* Email */}

        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition text-center">

          <div className="text-4xl mb-4">📧</div>

          <h3 className="text-xl font-semibold text-blue-700">
            Email
          </h3>

          <p className="mt-2 text-gray-600">
            info@nandhacollege.edu
          </p>

        </div>

      </div>

      {/* Contact Form */}

      <div className="max-w-3xl mx-auto mt-16 bg-white p-8 rounded-xl shadow-lg">

        <h3 className="text-2xl font-semibold text-center text-blue-700">
          Send Us a Message
        </h3>

        <form className="mt-6 grid gap-4">

          <input
            type="text"
            placeholder="Your Name"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition"
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;