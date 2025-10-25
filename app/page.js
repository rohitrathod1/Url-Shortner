import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-900 min-h-screen text-gray-100 p-4 md:p-8 lg:p-12">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center min-h-[75vh]">
        
        <div className="flex flex-col gap-6 items-center md:items-start justify-center text-center md:text-left p-4 md:p-0">
          <p className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-purple-400 leading-tight animate-slideInLeft">
            The best URL shortener in the Market
          </p>
          
          <p className="text-base md:text-lg text-gray-400 max-w-xl animate-fadeIn delay-300">
            We are the most straightforward URL Shortener in the world. Most of the url shorteners will track you or ask you to give your details for login. We understand your needs and hence we have created this URL shortener.
          </p>
          
          <div className='flex flex-col sm:flex-row gap-4 mt-2'>
            <Link href="/shorten">
              <button 
                className='w-full sm:w-auto bg-purple-600 rounded-lg shadow-lg p-3 py-2 font-bold text-white transition duration-300 hover:bg-purple-700 hover:shadow-2xl hover:scale-105'
              >
                Try Now
              </button>
            </Link>
            <Link href="/github">
              <button 
                className='w-full sm:w-auto bg-gray-700 rounded-lg shadow-lg p-3 py-2 font-bold text-gray-100 transition duration-300 hover:bg-gray-600 hover:shadow-xl hover:scale-105'
              >
                GitHub
              </button>
            </Link>
          </div>
        </div>
        
        <div className="flex justify-center md:justify-end relative h-64 md:h-full max-h-[500px] w-full rounded-xl overflow-hidden shadow-2xl animate-zoomIn">
          <Image 
            className="object-contain mix-blend-lighten" 
            alt="an Image of a vector" 
            src={"/vector.jpg"} 
            fill={true} 
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

      </section>
    </main>
  );
}