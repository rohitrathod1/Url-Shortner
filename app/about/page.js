import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    // Main container with dark background
    <main className="bg-gray-900 text-gray-100 min-h-screen">
      
      {/* Introduction and Mission Section */}
      <section className="py-20 px-8 md:px-16 lg:px-24 text-center">
        <h1 
          className="text-5xl md:text-6xl font-extrabold text-purple-400 mb-4 transition duration-500 hover:scale-105"
        >
          Links, Simplified. Privacy, Guaranteed.
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto opacity-0 animate-fadeIn delay-300">
          We built this URL Shortener because we felt the market was saturated with complex, tracking-heavy, and intrusive services. Our mission is straightforward: to provide the world's most direct and private URL shortener.
        </p>
      </section>

      {/* Core Features / Pillars Section */}
      <section className="py-16 px-8 md:px-16 lg:px-24 bg-gray-800 shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-100 mb-12">
          Why We Are Different
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          
          {/* Feature Card 1 */}
          <div className="p-6 bg-gray-900 rounded-xl shadow-xl border-t-4 border-purple-500 transition duration-300 hover:bg-gray-700 transform hover:scale-[1.02]">
            <div className="text-4xl text-purple-400 mb-3 font-extrabold">01</div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-50 mb-2">No Tracking. Ever.</h3>
            <p className="text-gray-400">
              We do not store any personal data, IP addresses, or click metrics about you or your users. Your privacy is our highest priority.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="p-6 bg-gray-900 rounded-xl shadow-xl border-t-4 border-purple-500 transition duration-300 hover:bg-gray-700 transform hover:scale-[1.02]">
            <div className="text-4xl text-purple-400 mb-3 font-extrabold">02</div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-50 mb-2">Simplicity First</h3>
            <p className="text-gray-400">
              No logins, no CAPTCHAs, no confusing dashboards. Just paste your link and get your shortened URL instantly.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="p-6 bg-gray-900 rounded-xl shadow-xl border-t-4 border-purple-500 transition duration-300 hover:bg-gray-700 transform hover:scale-[1.02]">
            <div className="text-4xl text-purple-400 mb-3 font-extrabold">03</div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-50 mb-2">Built for Speed</h3>
            <p className="text-gray-400">
              Our system is optimized for lightning-fast redirects. This means zero waiting time for your users and a seamless experience.
            </p>
          </div>
          
        </div>
      </section>

      {/* Image and Detailed Content Section */}
      <section className="py-16 px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          <div className="flex flex-col gap-5">
            <h2 className={`text-3xl md:text-4xl font-bold text-gray-50`}>
              The Technology Behind the Service
            </h2>
            <p className="text-gray-400 leading-relaxed">
              This project is powered by **Next.js**, styled with **Tailwind CSS**, and utilizes a lightweight database structure. This modern architecture keeps the service extremely fast, scalable, and easy to maintain.
            </p>
            <p className="text-gray-300 leading-relaxed font-semibold border-l-4 border-purple-500 pl-4 italic">
              &quot;We believe open source is the future. This project is open-sourced and available on GitHub for everyone to inspect and contribute to.&quot;
            </p>

            {/* Call to Action Buttons */}
            <div className='flex flex-col sm:flex-row gap-3 justify-start mt-4'>
              <Link href="/shorten">
                <button className='w-full sm:w-auto bg-purple-600 rounded-lg shadow-lg p-3 py-2 font-bold text-white transition duration-300 hover:bg-purple-700 hover:shadow-xl'>
                  Try the Shortener
                </button>
              </Link>
              <Link href="/github">
                <button className='w-full sm:w-auto bg-gray-700 rounded-lg shadow-lg p-3 py-2 font-bold text-gray-100 transition duration-300 hover:bg-gray-600 hover:shadow-xl'>
                  View GitHub
                </button>
              </Link>
            </div>
          </div>
          
          {/* Image/Graphic */}
          <div className=" flex justify-center relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-2xl transition duration-500 hover:shadow-purple-500/50">
            <Image 
              className="object-cover mix-blend-lighten" 
              alt="An illustration of secure and fast technology" 
              src={"/vector.jpg"} 
              fill={true} 
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;