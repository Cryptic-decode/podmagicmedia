export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 lg:py-32">
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Geometric shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-brand-yellow opacity-10 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-brand-yellow opacity-5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white opacity-5 rounded-full blur-lg"></div>
          
          {/* Topographical pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="topographic-about" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M0,50 Q25,25 50,50 T100,50" stroke="#FFE500" strokeWidth="1" fill="none"/>
                <path d="M0,60 Q25,35 50,60 T100,60" stroke="#FFE500" strokeWidth="0.8" fill="none"/>
                <path d="M0,40 Q25,15 50,40 T100,40" stroke="#FFE500" strokeWidth="0.6" fill="none"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#topographic-about)"/>
          </svg>

          {/* Floating microphone icons */}
          <div className="absolute top-32 right-1/4 opacity-20">
            <svg className="w-16 h-16 text-brand-yellow animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 715 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="absolute bottom-32 left-1/3 opacity-15">
            <svg className="w-12 h-12 text-white animate-pulse" fill="currentColor" viewBox="0 0 20 20" style={{animationDelay: '1s'}}>
              <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 715 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
            </svg>
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              About{" "}
              <span className="text-brand-black bg-brand-yellow px-3 py-1 rounded-lg inline-block transform -rotate-1 shadow-lg">
                PodMagic
              </span>
            </h1>
            <p className="mt-8 text-xl leading-8 text-gray-300 max-w-3xl mx-auto sm:text-2xl sm:leading-9">
              We&apos;re here to turn your content dreams into reality
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-gradient-to-br from-white to-purple-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-40 h-40 bg-brand-yellow opacity-5 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-56 h-56 bg-purple-300 opacity-5 rounded-full blur-xl animate-float" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-pink-400 rounded-full opacity-20 animate-bounce" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl text-center mb-12 animate-on-scroll animate-slideInUp">
              Who We Are
            </h2>
            <div className="prose prose-lg mx-auto text-center animate-on-scroll animate-slideInUp" style={{animationDelay: '0.2s'}}>
              <p className="text-xl leading-relaxed text-gray-600 sm:text-2xl">
                <span className="font-semibold text-brand-black bg-brand-yellow px-2 py-1 rounded">PodMagic Media</span> was born from a simple idea: content creators shouldn&apos;t have to do it all alone.
              </p>
              <p className="mt-6 text-xl leading-relaxed text-gray-600 sm:text-2xl">
                We&apos;re a team of editors, strategists, and creatives passionate about turning raw content into <span className="font-semibold text-purple-700">polished, profitable brands</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-1/4 w-32 h-32 bg-indigo-200 opacity-10 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-10 left-1/3 w-20 h-20 bg-purple-200 opacity-15 rounded-full blur-lg animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll animate-slideInUp">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Who We Serve
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              We work with creators and organizations of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-on-scroll animate-slideInUp">
            {/* Solo Creators & Podcasters */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl hover:bg-white transition-all duration-500 transform hover:-translate-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-yellow to-yellow-300 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-brand-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7 4a3 3 0 616 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 715 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300">Solo Creators & Podcasters</h3>
              <p className="text-gray-600">Independent content creators looking to scale their reach and impact</p>
            </div>

            {/* Small Businesses & Coaches */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl hover:bg-white transition-all duration-500 transform hover:-translate-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-yellow to-yellow-300 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-brand-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300">Small Businesses & Coaches</h3>
              <p className="text-gray-600">Entrepreneurs using content to grow their business and connect with customers</p>
            </div>

            {/* YouTubers & Influencers */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl hover:bg-white transition-all duration-500 transform hover:-translate-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-yellow to-yellow-300 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-brand-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300">YouTubers & Influencers</h3>
              <p className="text-gray-600">Digital creators building their brand across multiple video platforms</p>
            </div>

            {/* Churches & Nonprofits */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl hover:bg-white transition-all duration-500 transform hover:-translate-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-yellow to-yellow-300 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-brand-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300">Churches & Nonprofits</h3>
              <p className="text-gray-600">Organizations sharing their mission and message with their communities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gradient-to-br from-white to-yellow-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-28 h-28 bg-brand-yellow opacity-5 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-36 h-36 bg-purple-200 opacity-5 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll animate-slideInUp">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Our Values
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              The four principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Clarity */}
            <div className="group text-center md:text-left animate-on-scroll animate-slideInLeft">
              <div className="flex items-center justify-center md:justify-start mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-yellow to-yellow-300 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-float">
                  <span className="text-2xl font-bold text-brand-black">C</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 ml-4 group-hover:text-purple-700 transition-colors duration-300">Clarity</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Your voice, your message — delivered clearly. We ensure your content communicates exactly what you mean, every single time.
              </p>
            </div>

            {/* Consistency */}
            <div className="group text-center md:text-left animate-on-scroll animate-slideInRight">
              <div className="flex items-center justify-center md:justify-start mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-yellow to-yellow-300 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-float" style={{animationDelay: '0.5s'}}>
                  <span className="text-2xl font-bold text-brand-black">C</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 ml-4 group-hover:text-purple-700 transition-colors duration-300">Consistency</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                We help you stay on schedule, always. No more missed deadlines or irregular posting — your audience can count on you.
              </p>
            </div>

            {/* Creativity */}
            <div className="group text-center md:text-left animate-on-scroll animate-slideInLeft" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center justify-center md:justify-start mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-yellow to-yellow-300 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-float" style={{animationDelay: '1s'}}>
                  <span className="text-2xl font-bold text-brand-black">C</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 ml-4 group-hover:text-purple-700 transition-colors duration-300">Creativity</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Fresh ideas that stand out on noisy feeds. We bring innovation to your content while staying true to your brand.
              </p>
            </div>

            {/* Conversion */}
            <div className="group text-center md:text-left animate-on-scroll animate-slideInRight" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center justify-center md:justify-start mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-yellow to-yellow-300 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-float" style={{animationDelay: '1.5s'}}>
                  <span className="text-2xl font-bold text-brand-black">C</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 ml-4 group-hover:text-purple-700 transition-colors duration-300">Conversion</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Growth that leads to impact and income. Every piece of content is designed to move your audience towards action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-24 h-24 bg-brand-yellow opacity-5 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-200 opacity-5 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll animate-slideInUp">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Meet Our Team
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              The creative minds behind the magic
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Founder/Creative Lead */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl hover:bg-white transition-all duration-500 transform hover:-translate-y-6 hover:rotate-2 animate-on-scroll animate-slideInLeft">
              <div className="w-24 h-24 bg-gradient-to-br from-brand-yellow to-yellow-300 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-float">
                <span className="text-3xl font-bold text-brand-black">D</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors duration-300">David Olanrewaju</h3>
              <p className="text-brand-yellow font-semibold mb-4">Founder & Creative Lead</p>
              <p className="text-gray-600">
                Visionary behind PodMagic Media with a passion for transforming content creators into successful brands.
              </p>
            </div>

            {/* Lead Podcast Editor */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl hover:bg-white transition-all duration-500 transform hover:-translate-y-6 hover:-rotate-2 animate-on-scroll animate-slideInUp" style={{animationDelay: '0.1s'}}>
              <div className="w-24 h-24 bg-gradient-to-br from-brand-yellow to-yellow-300 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-float" style={{animationDelay: '1s'}}>
                <span className="text-3xl font-bold text-brand-black">B</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors duration-300">Blessing Olanrewaju</h3>
              <p className="text-brand-yellow font-semibold mb-4">Lead Editor & Social Media Manager</p>
              <p className="text-gray-600">
                Master of audio engineering and social media strategy who transforms raw content into professional, engaging experiences across all platforms.
              </p>
            </div>

            {/* Content Strategist */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl hover:bg-white transition-all duration-500 transform hover:-translate-y-6 hover:rotate-2 animate-on-scroll animate-slideInRight" style={{animationDelay: '0.2s'}}>
              <div className="w-24 h-24 bg-gradient-to-br from-brand-yellow to-yellow-300 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-float" style={{animationDelay: '2s'}}>
                <span className="text-3xl font-bold text-brand-black">F</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors duration-300">Faith</h3>
              <p className="text-brand-yellow font-semibold mb-4">Content Strategist</p>
              <p className="text-gray-600">
                Knows what works on every platform and creates data-driven strategies that actually drive results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Callout Section */}
      <section className="py-20 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl animate-on-scroll animate-slideInUp">
            Ready to Join Our Community?
          </h2>
          <p className="mt-6 text-xl text-gray-300 max-w-4xl mx-auto animate-on-scroll animate-slideInUp" style={{animationDelay: '0.2s'}}>
            Whether you&apos;re just getting started or trying to scale, we&apos;re here to help your content reach the people it&apos;s meant for.
          </p>
          <div className="mt-10 animate-on-scroll animate-scaleIn" style={{animationDelay: '0.4s'}}>
            <a 
              href="/contact"
              className="inline-block bg-brand-yellow hover:bg-yellow-400 text-brand-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Let's Work Together
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 