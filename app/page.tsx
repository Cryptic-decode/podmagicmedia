import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-yellow-50 to-white">
        {/* Background pattern inspired by the logo's topographical design */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="topographic" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M0,10 Q5,5 10,10 T20,10" stroke="#000" strokeWidth="0.5" fill="none"/>
                <path d="M0,15 Q5,10 10,15 T20,15" stroke="#000" strokeWidth="0.5" fill="none"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#topographic)"/>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            {/* Main Headlines */}
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              Turn Your Voice into a{" "}
              <span className="text-brand-black bg-brand-yellow px-3 py-1 rounded-lg inline-block transform -rotate-1">
                Brand
              </span>
            </h1>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Your Content into a{" "}
              <span className="text-brand-black bg-brand-yellow px-3 py-1 rounded-lg inline-block transform rotate-1">
                Business
              </span>
            </h2>

            {/* Subheadline */}
            <p className="mt-8 text-xl leading-8 text-gray-600 max-w-4xl mx-auto sm:text-2xl sm:leading-9">
              Podcast. YouTube. Social Media. We manage it all — so you can focus on creating, not chasing algorithms.
            </p>

            {/* CTA Button */}
            <div className="mt-12">
              <button className="bg-brand-yellow hover:bg-yellow-400 text-brand-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                📞 Book a Free Discovery Call
              </button>
            </div>

            {/* Supporting visual elements */}
            <div className="mt-16 flex justify-center items-center space-x-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-brand-yellow rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-brand-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium text-gray-600">Podcast</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-brand-yellow rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-brand-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium text-gray-600">YouTube</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-brand-yellow rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-brand-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium text-gray-600">Social Media</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Our Mission
            </h2>
            <div className="mt-8 max-w-4xl mx-auto">
              <p className="text-xl leading-relaxed text-gray-600 sm:text-2xl">
                At <span className="font-semibold text-brand-black">PodMagic Media</span>, we help creators and brands stay consistent, sound professional, and grow profitably — one post, one episode, one video at a time.
              </p>
            </div>

            {/* Mission highlights */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-brand-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Stay Consistent</h3>
                <p className="mt-2 text-gray-600">Never miss a publish date or posting schedule again</p>
              </div>

              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-brand-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Sound Professional</h3>
                <p className="mt-2 text-gray-600">Premium editing and production quality every time</p>
              </div>

              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-brand-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Grow Profitably</h3>
                <p className="mt-2 text-gray-600">Turn your content into a sustainable income stream</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Our Services
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Full-service content management across all your platforms
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Podcast Management */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-brand-yellow rounded-full mb-6">
                <svg className="w-8 h-8 text-brand-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🎙️ Podcast Management</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  Audio editing &amp; mastering
                </li>
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  Noise reduction &amp; mixing
                </li>
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  Episode release scheduling
                </li>
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  Platform publishing
                </li>
              </ul>
            </div>

            {/* YouTube Channel Support */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-brand-yellow rounded-full mb-6">
                <svg className="w-8 h-8 text-brand-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">📹 YouTube Channel Support</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  Video editing (cuts, transitions, intros)
                </li>
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  Custom thumbnail design
                </li>
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  Upload optimization
                </li>
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  Release strategy &amp; SEO
                </li>
              </ul>
            </div>

            {/* Social Media Management */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-brand-yellow rounded-full mb-6">
                <svg className="w-8 h-8 text-brand-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">📲 Social Media Management</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  IG, TikTok, YouTube Shorts, Facebook
                </li>
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  Content calendar &amp; caption writing
                </li>
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  Scheduling &amp; community engagement
                </li>
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  Growth strategies
                </li>
              </ul>
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-8">
              Ready to elevate your content across all platforms?
            </p>
            <button className="bg-brand-black hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200">
              Get Your Custom Quote
            </button>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              How We Work
            </h2>
            <div className="mt-8 max-w-4xl mx-auto">
              <p className="text-xl leading-relaxed text-gray-600 sm:text-2xl">
                Our 3-step process: Strategize, Produce, and Grow with visual flow and descriptions.
              </p>
            </div>

            {/* How We Work highlights */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-brand-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Strategize</h3>
                <p className="mt-2 text-gray-600">Define your goals and target audience</p>
              </div>

              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-brand-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Produce</h3>
                <p className="mt-2 text-gray-600">Create high-quality content</p>
              </div>

              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-brand-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Grow</h3>
                <p className="mt-2 text-gray-600">Scale your content and reach your audience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Real results from real creators
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center">
                  <span className="text-brand-black font-bold text-lg">B</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Bayo A.</h4>
                  <p className="text-gray-600">Content Creator</p>
                </div>
              </div>
              <blockquote className="text-lg text-gray-700 leading-relaxed">
                "Podmagic took my weekly podcast from amateur to pro — my audience grew 3x in 2 months."
              </blockquote>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-brand-yellow" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center">
                  <span className="text-brand-black font-bold text-lg">D</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Debbie T.</h4>
                  <p className="text-gray-600">Wellness Coach</p>
                </div>
              </div>
              <blockquote className="text-lg text-gray-700 leading-relaxed">
                "I never have to worry about what to post again. These guys handle it all."
              </blockquote>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-brand-yellow" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Ready to scale your content game?
          </h2>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Let's chat — no strings attached.
          </p>
          <div className="mt-10">
            <button className="bg-brand-yellow hover:bg-yellow-400 text-brand-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
              📞 Schedule a Free Call
            </button>
          </div>
          
          {/* Additional trust signals */}
          <div className="mt-16 pt-8 border-t border-gray-700">
            <p className="text-gray-400 text-sm">
              Join 100+ creators who trust PodMagic Media with their content
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
