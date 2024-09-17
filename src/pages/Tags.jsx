const Tags = () => {
  return (
    <div className="w-full">
      <div className="h-[70vh] flex pb-3 border-b border-gray-500">
        <div className="w-[45%] h-full flex flex-col justify-between">
          <h1 className="text-sm font-hagrid mt-3">
            Sep 14, 2024, 8:30 PM GMT+5:30
          </h1>
          <img
            src="https://m.media-amazon.com/images/M/MV5BMGM2MzA5YzYtODc0Ni00ZjU4LWI4ZmUtZGJjNGU0ODY1MGJkXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg"
            className="w-full h-[92.5%] object-cover object-left-bottom"
            alt="jobless"
          />
        </div>
        <div className="w-[55%] h-full pl-7 pt-[10px] pr-3 flex flex-col justify-between">
          <div>
            <div className="my-3 flex justify-between">
              <div className="flex gap-3">
                <h1 className="bg-purple-500 text-black px-1">#Anime</h1>
                <h1 className="bg-yellow-500 text-black px-1">#Isekai</h1>
                <h1 className="bg-red-500 text-black px-1">#Buzz</h1>
              </div>
            </div>
            <div className="text-6xl font-hagrid mb-4 text-emerald-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="text-2xl font-roboto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Veritatis nobis soluta porro? Lorem ipsum dolor sit amet
              consectetur Lorem ipsum dolor sit amet consectetur adipisicing
              elit.
            </div>
          </div>
          <div>
            <div className="font-hagrid">
              by <span className="w-8 h-8 rounded-full bg-slate-600"></span> <span className="text-pink-500">bigby wolf</span>,
            </div>
            <div className="text-sm mb-2 font-roboto">
            covers the business, culture, and communities of video games, with a focus on marginalized gamers and writing about the intersection of video games
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[200vh] flex">
        <div className="w-[65%] pt-8 font-roboto">

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsam earum voluptatibus vitae quibusdam qui eos non ad? Consequatur, amet. Nisi sed aliquam, quidem nesciunt porro, debitis facere eveniet dolorum, expedita velit vero repellendus odio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius rerum neque maiores soluta corrupti accusamus inventore repudiandae sequi ratione quaerat impedit provident recusandae molestias culpa earum error, odio tenetur. Debitis incidunt dignissimos dicta temporibus a doloremque ratione minus sed officia fugit, eos laudantium consequuntur eum laboriosam quaerat, corporis odit. Doloribus.
        </p>
        <p className="mt-7">
        Though there are two games in the collection, I’m going to focus exclusively on Ace Attorney Investigations 2: Prosecutor’s Gambit. Despite getting a Japanese release on the DS in 2011, the game never officially made it to the West until now. Prosecutor’s Gambit puts you in the cravat of prosecutor Miles Edgeworth, Phoenix Wright’s childhood friend, opposing counsel, and, if you subscribe to certain parts of the fandom, longtime lover. (Not me, though, I’m firmly a Gumshoe / Edgeworth girlie.)

The game plays similarly to Ace Attorney. Somebody gets murdered, somebody innocent gets accused, and Edgeworth must investigate crime scenes for clues. Once the necessary information has been gathered, Edgeworth interrogates people, pointing out contradictions in their testimony with evidence to eventually determine someone’s guilt or innocence.
        </p>
        </div>
        <div>

        </div>

      </div>
    </div>
  );
};

export default Tags;
