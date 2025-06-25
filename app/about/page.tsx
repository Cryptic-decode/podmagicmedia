export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-yellow-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              About{" "}
              <span className="text-brand-black bg-brand-yellow px-3 py-1 rounded-lg inline-block transform -rotate-1">
                PodMagic
              </span>
            </h1>
            <p className="mt-8 text-xl leading-8 text-gray-600 max-w-3xl mx-auto sm:text-2xl sm:leading-9">
              We're here to turn your content dreams into reality
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl text-center mb-12">
              Who We Are
            </h2>
            <div className="prose prose-lg mx-auto text-center">
              <p className="text-xl leading-relaxed text-gray-600 sm:text-2xl">
                <span className="font-semibold text-brand-black">PodMagic Media</span> was born from a simple idea: content creators shouldn't have to do it all alone.
              </p>
              <p className="mt-6 text-xl leading-relaxed text-gray-600 sm:text-2xl">
                We're a team of editors, strategists, and creatives passionate about turning raw content into polished, profitable brands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Who We Serve
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              We work with creators and organizations of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Solo Creators & Podcasters */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-brand-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 715 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Solo Creators & Podcasters</h3>
              <p className="text-gray-600">Independent content creators looking to scale their reach and impact</p>
            </div>

            {/* Small Businesses & Coaches */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-brand-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Small Businesses & Coaches</h3>
              <p className="text-gray-600">Entrepreneurs using content to grow their business and connect with customers</p>
            </div>

            {/* YouTubers & Influencers */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-brand-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">YouTubers & Influencers</h3>
              <p className="text-gray-600">Digital creators building their brand across multiple video platforms</p>
            </div>

            {/* Churches & Nonprofits */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-brand-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Churches & Nonprofits</h3>
              <p className="text-gray-600">Organizations sharing their mission and message with their communities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Our Values
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              The four principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Clarity */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-6">
                <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-brand-black">C</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 ml-4">Clarity</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Your voice, your message — delivered clearly. We ensure your content communicates exactly what you mean, every single time.
              </p>
            </div>

            {/* Consistency */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-6">
                <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-brand-black">C</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 ml-4">Consistency</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                We help you stay on schedule, always. No more missed deadlines or irregular posting — your audience can count on you.
              </p>
            </div>

            {/* Creativity */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-6">
                <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-brand-black">C</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 ml-4">Creativity</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Fresh ideas that stand out on noisy feeds. We bring innovation to your content while staying true to your brand.
              </p>
            </div>

            {/* Conversion */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-6">
                <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-brand-black">C</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 ml-4">Conversion</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Growth that leads to impact and income. Every piece of content is designed to move your audience towards action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Meet Our Team
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              The creative minds behind the magic
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Founder/Creative Lead */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-24 h-24 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-brand-black">N</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Niyi</h3>
              <p className="text-brand-yellow font-semibold mb-4">Founder & Creative Lead</p>
              <p className="text-gray-600">
                Visionary behind PodMagic Media with a passion for transforming content creators into successful brands.
              </p>
            </div>

            {/* Lead Podcast Editor */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-24 h-24 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-brand-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 715 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lead Podcast Editor</h3>
              <p className="text-brand-yellow font-semibold mb-4">Sound Polishing Wizard</p>
              <p className="text-gray-600">
                Master of audio engineering who transforms raw recordings into professional, broadcast-quality content.
              </p>
            </div>

            {/* Content Strategist */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-24 h-24 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-brand-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Content Strategist</h3>
              <p className="text-brand-yellow font-semibold mb-4">Platform Growth Expert</p>
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
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Ready to Join Our Community?
          </h2>
          <p className="mt-6 text-xl text-gray-300 max-w-4xl mx-auto">
            Whether you're just getting started or trying to scale, we're here to help your content reach the people it's meant for.
          </p>
          <div className="mt-10">
            <button className="bg-brand-yellow hover:bg-yellow-400 text-brand-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Let's Work Together
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 