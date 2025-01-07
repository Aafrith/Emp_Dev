import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBrain, FaChalkboardTeacher, FaChartLine } from "react-icons/fa";
import { AiOutlineRobot, AiOutlineVideoCamera, AiOutlineMessage } from "react-icons/ai";
import why from "../assets/images/why.jpg";
import interview from "../assets/images/interview.jpg";
import ai from "../assets/images/ai.jpg";
import chat from "../assets/images/chat.jpg";
import person1 from "../assets/images/person1.jpg";
import person2 from "../assets/images/person2.jpg";
import person3 from "../assets/images/person3.jpg";



function Home() {
  const token = localStorage.getItem("token");

  useEffect(() => {
    const sections = document.querySelectorAll(".animate__animated");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate__fadeInUp");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-50 text-gray-900 min-h-screen">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-gray-800 to-orange-800 text-white py-16 shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-extrabold tracking-wide transform transition duration-500 hover:scale-105">
            Employee Development Platform
          </h1>
          <p className="mt-6 text-2xl font-light max-w-3xl mx-auto">
            Unlock your true potential with curated learning paths, AI-driven tools, and career support.
          </p>
          {!token && (
            <div className="mt-8">
              <Link
                to="/signup"
                className="py-4 px-8 bg-orange-600 text-white rounded-lg hover:bg-gray-600 shadow-md transition duration-300"
              >
                Get Started
              </Link>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-20 px-6 space-y-24">
        {/* Why Choose Us */}
        <section className="animate__animated">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800">Why Choose Us?</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              We provide innovative tools and curated resources to help you succeed in your career.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <img
              src={why}
              alt="Why Choose Us"
              className="rounded-lg shadow-xl transform hover:scale-105 transition duration-300"
            />
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="text-orange-600 text-3xl">
                  <FaBrain />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">Tailored Learning Paths</h3>
                  <p className="text-gray-600">
                    Customized training modules designed to match your career aspirations.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="text-orange-600 text-3xl">
                  <FaChalkboardTeacher />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">Interactive Learning</h3>
                  <p className="text-gray-600">
                    Engage with interactive tutorials, quizzes, and real-world projects.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="text-orange-600 text-3xl">
                  <FaChartLine />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">Career Progress Tracking</h3>
                  <p className="text-gray-600">
                    Visualize your achievements and identify growth opportunities with analytics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

         {/* Premium Features */}
         <section className="bg-gradient-to-r from-orange-100 to-gray-50 py-16 px-10 rounded-lg shadow-lg animate__animated">
          <div className="text-center mb-10">
            <h2 className="text-5xl font-bold text-orange-800">Premium Features</h2>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
              Elevate your learning experience with exclusive premium tools.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center ">
              <img
                src={ai}
                alt="AI Insights"
                className="mx-auto mb-6 rounded-full"
              />
              <h3 className="text-xl font-semibold text-gray-800">AI-Powered Insights</h3>
              <p className="text-gray-600">
                Personalized recommendations to optimize your learning journey.
              </p>
            </div>
            <div className="text-center">
              <img
                src={interview}
                alt="Mock Interviews"
                className="mx-auto mb-6 rounded-full"
              />
              <h3 className="text-xl font-semibold text-gray-800">Mock Interviews</h3>
              <p className="text-gray-600">
                Industry-standard interview prep with real-time feedback.
              </p>
            </div>
            <div className="text-center">
              <img
                src={chat}
                alt="Exclusive Access"
                className="mx-auto mb-6 rounded-full"
              />
              <h3 className="text-xl font-semibold text-gray-800">Chat Application</h3>
              <p className="text-gray-600">
                Clear your doubts instantly with our real-time chat feature, connecting you to experts and peers.
              </p>
            </div>
          </div>
        </section>


        {/* Success Stories */}
        <section className="animate__animated">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800">Success Stories</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from individuals who have transformed their careers using our platform.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
            <div className="text-center">
              <img
                src={person1}
                alt="Success 1"
                className="mx-auto rounded-full shadow-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600">Software Developer | 6-month career transformation.</p>
            </div>
            <div className="text-center">
              <img
                src={person2}
                alt="Success 2"
                className="mx-auto rounded-full shadow-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800">Jane Smith</h3>
              <p className="text-gray-600">Product Manager | Boosted leadership skills.</p>
            </div>
            <div className="text-center">
              <img
                src={person3}
                alt="Success 3"
                className="mx-auto rounded-full shadow-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800">Amanda Lee</h3>
              <p className="text-gray-600">Data Analyst | Landed a top-tier job.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-gradient-to-r from-gray-100 to-gray-50 py-16 px-12 rounded-lg shadow-lg animate__animated">
          <div className="text-center mb-10">
            <h2 className="text-5xl font-bold text-gray-800">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">What is Employee Development Platform?</h3>
              <p className="text-gray-600 mt-2">
                Our platform offers personalized learning paths, career development resources, and tools for professional growth.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">How do I start?</h3>
              <p className="text-gray-600 mt-2">
                Sign up for free, choose your learning path, and start gaining new skills.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Is it free to use?</h3>
              <p className="text-gray-600 mt-2">
                You can access basic content for free, and premium features are available through our subscription plan.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        {!token && (
          <section className="text-center py-20 bg-gradient-to-r from-orange-50 to-gray-100 rounded-xl animate__animated shadow-xl">
            <h2 className="text-5xl font-bold text-orange-800">Join Us Today</h2>
            <p className="text-lg mt-6 text-gray-600">
              Take the first step toward a brighter career.
            </p>
            <div className="mt-10 flex justify-center gap-6">
              <Link
                to="/signup"
                className="py-4 px-12 bg-orange-600 text-white rounded-lg hover:bg-orange-700 shadow-md transition duration-300"
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                className="py-4 px-12 bg-gray-700 text-white rounded-lg hover:bg-gray-800 shadow-md transition duration-300"
              >
                Log In
              </Link>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default Home;
