import React from 'react';
import Link from 'next/link';

const Contact = () => {
  return (
    <main className="bg-gray-900 text-gray-100 min-h-screen py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <header className="text-center mb-12 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-400 mb-3">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-400">
            Have questions, feedback, or need support? We&apos;re here to help.
          </p>
        </header>

        {/* Contact Form and Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="bg-gray-800 p-6 sm:p-8 rounded-xl shadow-2xl transition duration-500 hover:shadow-purple-500/50">
            <h2 className="text-2xl font-bold mb-6 text-white">Send us a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-white transition duration-300"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-white transition duration-300"
                  placeholder="you@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-white transition duration-300"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-purple-600 text-white font-bold py-3 rounded-lg shadow-lg transition duration-300 hover:bg-purple-700 hover:scale-[1.01] transform"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information & Links */}
          <div className="flex flex-col space-y-8">
            
            {/* Support Info */}
            <div className="p-6 bg-gray-800 rounded-xl shadow-xl border-l-4 border-purple-500">
              <h3 className="text-xl font-semibold text-white mb-3">Support & Help</h3>
              <p className="text-gray-400 mb-3">
                For technical issues or general inquiries, you can reach out directly.
              </p>
              <div className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-3 text-purple-400" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
                <a href="mailto:support@bitlinks.com" className="hover:text-purple-400 transition duration-300">support@bitlinks.com</a>
              </div>
            </div>

            {/* GitHub Community */}
            <div className="p-6 bg-gray-800 rounded-xl shadow-xl border-l-4 border-purple-500">
              <h3 className="text-xl font-semibold text-white mb-3">Community & Code</h3>
              <p className="text-gray-400 mb-3">
                Since BitLinks is open source, join our community on GitHub for discussions and contributions.
              </p>
              <Link href="/github">
                <button 
                  className='w-full md:w-auto bg-gray-700 rounded-lg shadow-md px-4 py-2 font-bold text-white transition duration-300 hover:bg-gray-600 hover:shadow-xl'
                >
                  Visit GitHub Repository
                </button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;