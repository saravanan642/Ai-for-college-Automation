import React from "react";
import About from "./About";
import Courses from "./Courses";
import Facilities from "./Facilities";
import Contact from "./Contact";

function Home() {

    return (

        <div>

            {/* HERO SECTION */}

            <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-24 text-center">

                <div className="max-w-5xl mx-auto px-6">

                    <h1 className="text-5xl md:text-6xl font-bold">
                        Nandha College of Technology
                    </h1>

                    <p className="mt-6 text-lg text-gray-200">

                        Empowering students with quality education, modern
                        infrastructure and excellent placement opportunities.

                        Students can also use our AI chatbot to get instant
                        information about courses, admission, hostel and campus
                        facilities.

                    </p>

                    {/* Buttons */}

                    <div className="mt-8 flex justify-center gap-6">

                        <a
                            href="/admistion"
                            className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition inline-block"
                        >
                            Apply Now
                        </a>

                        <a
                            href="/courses"
                            className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition inline-block"
                        >
                            Explore Courses
                        </a>

                    </div>

                </div>

            </section>

            {/* COLLEGE STATS */}

            <section className="bg-white py-16">

                <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center px-6">

                    <div>

                        <h2 className="text-4xl font-bold text-blue-700">5000+</h2>
                        <p className="text-gray-600 mt-2">Students</p>

                    </div>

                    <div>

                        <h2 className="text-4xl font-bold text-blue-700">10+</h2>
                        <p className="text-gray-600 mt-2">Departments</p>

                    </div>

                    <div>

                        <h2 className="text-4xl font-bold text-blue-700">95%</h2>
                        <p className="text-gray-600 mt-2">Placement Rate</p>

                    </div>

                    <div>

                        <h2 className="text-4xl font-bold text-blue-700">20+</h2>
                        <p className="text-gray-600 mt-2">Years Experience</p>

                    </div>

                </div>

            </section>

            {/* OTHER SECTIONS */}

            <About />
            <Courses />
            <Facilities />
            <Contact />

        </div>

    )

}

export default Home;