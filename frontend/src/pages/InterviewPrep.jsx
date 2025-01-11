import React from "react";
import { FaLightbulb, FaQuestionCircle, FaBook } from "react-icons/fa";

function InterviewPreparation() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 text-gray-900">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-gray-800 via-orange-900 to-gray-800 text-white py-12 text-center shadow-lg">
        <h1 className="text-6xl font-extrabold mb-4 mt-16">Interview Preparation</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Get ready to ace your next interview with our comprehensive tips,
          commonly asked questions, and valuable resources.
        </p>
      </header>

      {/* Main Content */}
      <main className="py-16 px-4 space-y-16">
        {/* Tips Section */}
        <section className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
          <div className="flex items-center space-x-4 mb-6">
            <FaLightbulb className="text-yellow-500 text-4xl" />
            <h2 className="text-2xl font-semibold">Top Tips for Interview Success</h2>
          </div>
          <ul className="list-disc list-inside space-y-4 text-gray-700 text-lg">
            <li>
              Research the company thoroughly and understand their mission,
              values, and recent projects.
            </li>
            <li>Practice common interview questions and prepare concise answers.</li>
            <li>
              Dress professionally and ensure your body language conveys
              confidence.
            </li>
            <li>Prepare questions to ask the interviewer about the role or company.</li>
            <li>
              Follow up with a thank-you email after the interview to express
              gratitude.
            </li>
          </ul>
        </section>

        {/* Common Questions Section */}
        <section className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
          <div className="flex items-center space-x-4 mb-6">
            <FaQuestionCircle className="text-blue-500 text-4xl" />
            <h2 className="text-2xl font-semibold">Common Interview Questions</h2>
          </div>
          <div className="space-y-4 text-gray-700 text-lg">
            <p>
              <strong>1. Tell me about yourself.</strong>
              <br />
              Provide a brief summary of your background, skills, and career
              goals.
            </p>
            <p>
              <strong>2. What are your strengths and weaknesses?</strong>
              <br />
              Highlight your strengths with examples and discuss a weakness with
              steps you're taking to improve.
            </p>
            <p>
              <strong>3. Why do you want to work for this company?</strong>
              <br />
              Connect your career goals to the company's mission and explain
              your motivation.
            </p>
            <p>
              <strong>4. Describe a challenging project you worked on.</strong>
              <br />
              Use the STAR method (Situation, Task, Action, Result) to explain
              your approach and outcome.
            </p>
            <p>
              <strong>5. Where do you see yourself in 5 years?</strong>
              <br />
              Show ambition while aligning your goals with the company's
              opportunities.
            </p>
          </div>
        </section>

        {/* Resources Section */}
        <section className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
          <div className="flex items-center space-x-4 mb-6">
            <FaBook className="text-green-500 text-4xl" />
            <h2 className="text-2xl font-semibold">Recommended Resources</h2>
          </div>
          <ul className="list-disc list-inside space-y-4 text-gray-700 text-lg">
            <li>
              <a
                href="https://www.glassdoor.com"
                className="text-indigo-600 underline hover:text-indigo-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                Glassdoor
              </a>{" "}
              - Company reviews, salary insights, and interview experiences.
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                className="text-indigo-600 underline hover:text-indigo-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>{" "}
              - Network with professionals and discover job opportunities.
            </li>
            <li>
              <a
                href="https://www.themuse.com"
                className="text-indigo-600 underline hover:text-indigo-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Muse
              </a>{" "}
              - Career advice and company profiles.
            </li>
            <li>
              <a
                href="https://www.interviewbit.com"
                className="text-indigo-600 underline hover:text-indigo-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                InterviewBit
              </a>{" "}
              - Technical interview preparation and coding challenges.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default InterviewPreparation;
