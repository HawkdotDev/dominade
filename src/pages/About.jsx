const About = () => {
  return (
    <section className="min-h-screen text-white py-6 px-8 font-roboto">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-emerald-400 font-hagrid mb-8">
          About
        </h1>
        <p className="text-xl text-gray-300 leading-relaxed">
          <span className="text-pink-600 font-hagrid">Dominade</span> — your
          go-to platform for the latest and most exciting news, from gaming and
          anime to film, TV, and esports. Our goal is to keep Gen Z updated,
          engaged, and informed.
        </p>
      </div>

      {/* Vision, Mission, Values, and Promise Section */}
      <div className="max-w-7xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div className="bg-gray-900 px-8 py-6 rounded-lg shadow-md hover:shadow-neon-pink transition-all duration-300">
          <h2 className="text-xl font-hagrid mb-4 font-semibold text-neon-green">
            Our Vision
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            We envision a world where Gen Z stays ahead of the curve with
            cutting-edge content that resonates with their interests and
            passions.
          </p>
        </div>

        <div className="bg-gray-900 px-8 py-6 rounded-lg shadow-md hover:shadow-neon-cyan transition-all duration-300">
          <h2 className="text-xl font-hagrid mb-4 font-semibold text-neon-pink">
            Our Mission
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            At <span className="text-neon-pink">Dominade</span>, our mission is
            to deliver high-quality, engaging content to empower Gen Z, whether
            its the latest in entertainment or the next big trend in esports.
          </p>
        </div>

        {/* New Section 1: Our Values */}
        <div className="bg-gray-900 px-8 py-6 rounded-lg shadow-md hover:shadow-neon-yellow transition-all duration-300">
          <h2 className="text-xl font-hagrid mb-4 font-semibold text-neon-yellow">
            Our Values
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Integrity, creativity, and inclusivity are at the core of everything
            we do. We believe in fostering a community where all voices are
            heard and respected.
          </p>
        </div>

        {/* New Section 2: Our Promise */}
        <div className="bg-gray-900 px-8 py-6 rounded-lg shadow-md hover:shadow-neon-blue transition-all duration-300">
          <h2 className="text-xl font-hagrid mb-4 font-semibold text-neon-blue">
            Our Promise
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            We promise to keep pushing the boundaries of content creation and to
            consistently deliver quality, engaging stories that matter to you.
          </p>
        </div>
      </div>

      {/* Meet the Team Section */}
      <div className="max-w-7xl mx-auto mt-12 text-center">
        <h2 className="text-4xl font-bold text-neon-yellow mb-12">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Team Member 1 */}
          <div className="p-8 bg-gray-900 rounded-lg shadow-md hover:shadow-neon-green transition-all duration-300">
            <img
              src="https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/2800/Bigby-Wolf.The-Wolf-Among-Us.webp"
              alt="Team Member 1"
              className="rounded-full w-32 h-32 mx-auto mb-6 object-cover object-right"
            />
            <h3 className="text-2xl text-neon-green font-semibold">Bigby</h3>
            <p className="text-gray-400">Co-founder</p>
            <p className="text-gray-500 mt-4">
              Passionate about delivering the latest news in a way thats
              engaging and dynamic for readers.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="p-8 bg-gray-900 rounded-lg shadow-md hover:shadow-neon-cyan transition-all duration-300">
            <img
              src="https://wallpaper.forfun.com/fetch/1e/1e0b5205d5528532135b05bf7209fb74.jpeg"
              alt="Team Member 2"
              className="rounded-full w-32 h-32 mx-auto mb-6 object-cover object-center"
            />
            <h3 className="text-2xl text-neon-cyan font-semibold">Hawk</h3>
            <p className="text-gray-400">Co-founder</p>
            <p className="text-gray-500 mt-4">
              Always on top of the latest trends in gaming, anime, and
              entertainment to create content Gen Z loves.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="p-8 bg-gray-900 rounded-lg shadow-md hover:shadow-neon-pink transition-all duration-300">
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/25530c1b-5c89-4c85-8b65-8602af58c383/dgq3h68-96d3ab0d-95c0-462a-b192-ff74db31cd5d.jpg/v1/fill/w_894,h_894,q_70,strp/mew_4k__2__by_punkerlazar_dgq3h68-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI1NTMwYzFiLTVjODktNGM4NS04YjY1LTg2MDJhZjU4YzM4M1wvZGdxM2g2OC05NmQzYWIwZC05NWMwLTQ2MmEtYjE5Mi1mZjc0ZGIzMWNkNWQuanBnIiwiaGVpZ2h0IjoiPD0xOTIwIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvMjU1MzBjMWItNWM4OS00Yzg1LThiNjUtODYwMmFmNThjMzgzXC9wdW5rZXJsYXphci00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.0eEZSEOOxu3KxLuKUS7KhwiTxurmkAdTiehf-mHMFdA"
              alt="Team Member 3"
              className="rounded-full w-32 h-32 mx-auto mb-6 object-cover object-center"
            />
            <h3 className="text-2xl text-neon-pink font-semibold">Mewnot</h3>
            <p className="text-gray-400">Founding Team Member</p>
            <p className="text-gray-500 mt-4">
              Ensures our social channels stay active, responsive, and engaging
              with the latest viral content.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-24 text-center">
        <a
          href="/contact"
          className="text-2xl text-neon-pink border border-neon-pink px-6 py-3 rounded-md hover:bg-neon-pink hover:text-white text-emerald-400 transition-colors duration-300"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default About;
