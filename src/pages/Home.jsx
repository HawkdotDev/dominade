
import MasoneryLayout from "../components/MasoneryLayout";

const Home = () => {
    const border = "#5c5a59";

  const bgColor = "#141414";
  const textColor = "#eddccc";
  return (
    <>
      <div className="flex font-hagrid font-bold w-full pt-3">
        <div
          style={{
            borderColor: border,
          }}
          className="w-[80%] bg-transparent"
        >
          <div className="w-full h-[63.3%] pt-1 mt-2 mb-[5px]">
            <div className="h-[7%] w-[98%] flex justify-between mb-2">
              <h1 className="text-3xl font-bold">Editors Pick</h1>
              <button
                onClick={() => {
                  alert("maybe some other time! boss is sleeping.");
                }}
                className="py-1 mb-1 px-2 rounded-sm bg-stone-800"
              >
                see all
              </button>
            </div>
            <div className="h-[93%] w-[98%] flex flex-col justify-between">
              <div className="flex w-full h-[49%] justify-between">
                <div className="w-[47%] bg-stone-800 flex cursor-pointer">
                  <img
                    src="https://m.media-amazon.com/images/M/MV5BYzQ0NGZkOTMtMjMxMy00NWY0LWIxYzctZjhiZTdjZDA5OTJjXkEyXkFqcGc@._V1_.jpg"
                    alt="wolf among us 2"
                    style={{ aspectRatio: 1 / 1 }}
                    className="h-full object-cover object-center"
                  />
                  <div className="w-full text-wrap p-4 flex flex-col justify-between">
                    <div>
                      <div className="flex gap-2 items-center mb-1">
                        <h1 className="text-sm bg-red-500 px-1 py-[2px] text-black">
                          #Gaming
                        </h1>
                        <h1 className="text-sm bg-[#FF6B81] px-1 py-[2px] text-black">
                          #Buzz
                        </h1>
                      </div>
                      <h1>Lorem ipsum dolor sit amet consectetur ?</h1>
                      <h2 className="text-sm text-gray-400 mt-2 font-roboto">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Quos quod amet vero Lorem, ipsum dolor.
                      </h2>
                    </div>
                    <div className="flex bottom-0">
                      <div className="flex pr-4 border-r border-white">
                        <div className="w-4 h-4 bg-slate-400 rounded-full mr-1"></div>
                        <h1 className="text-xs">Bigby wolf</h1>
                      </div>
                      <div className="text-xs text-pink-500 pl-4">
                        some time
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[25%] relative group cursor-pointer">
                  <img
                    src="https://m.media-amazon.com/images/M/MV5BNTRlNmU1NzEtODNkNC00ZGM3LWFmNzQtMjBlMWRiYTcyMGRhXkEyXkFqcGc@._V1_.jpg"
                    alt="wolf among us 2"
                    className="h-full w-full object-cover object-top absolute"
                  />
                  <div className="w-full h-full bg-transparent absolute group-hover:bg-black/50 flex p-4 justify-between flex-col">
                    <div>
                      <div className="flex gap-2 items-center mb-1">
                        <h1 className="text-sm bg-[#FFD700] px-1 py-[2px] text-black">
                          #Film & TV
                        </h1>
                        <h1 className="text-sm bg-[#FF6B81] px-1 py-[2px] text-black">
                          #Buzz
                        </h1>
                      </div>
                      <h1>Lorem ipsum dolor sit amet consectetur ?</h1>
                      <h2 className="font-roboto text-sm text-gray-300/80 mt-2 group-hover:block hidden">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Quos quod amet vero Lorem, ipsum dolor.
                      </h2>
                    </div>
                    <div className="flex">
                      <div className="flex pr-4 border-r border-white">
                        <div className="w-4 h-4 bg-slate-400 rounded-full mr-1"></div>
                        <h1 className="text-xs">Bigby wolf</h1>
                      </div>
                      <div className="text-xs text-pink-500 pl-4">
                        some time
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[23.5%] bg-neutral-700 p-6 flex items-center justify-center">
                  ads play here
                </div>
              </div>

              <div className="w-full h-[48%] flex justify-between mt-5">
                <div className="w-[28.5%] h-full relative">
                  <img
                    src="https://cdnr.escharts.com/uploads/public/66c/edd/070/66cedd0701409241009183.png?width=737&height=255&extension=png"
                    alt="wolf among us 2"
                    className="h-full w-full object-cover object-left-bottom absolute"
                  />
                  <div className="w-full h-full bg-black/40 absolute flex justify-between flex-col">
                    <div className="flex gap-2 items-center mb-1 p-4">
                      <h1 className="text-sm bg-[#4BFFA5] px-1 py-[2px] text-black">
                        #Esports
                      </h1>
                      <h1 className="text-sm bg-[#FF6B81] px-1 py-[2px] text-black">
                        #Buzz
                      </h1>
                    </div>
                    <div className="px-4 py-3 bg-neutral-800">
                      <h1>Lorem ipsum dolor sit amet consectetur ?</h1>
                      <div className="flex mt-1">
                        <div className="flex pr-4 border-r border-white">
                          <div className="w-4 h-4 bg-slate-400 rounded-full mr-1"></div>
                          <h1 className="text-xs">Bigby wolf</h1>
                        </div>
                        <div className="text-xs text-pink-500 pl-4">
                          some time
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[22%] h-full bg-stone-600">
                  <div className="w-full h-full bg-black/40 p-4 flex justify-between flex-col">
                    <div>
                      <div className="flex gap-2 items-center mb-1">
                        <h1 className="text-sm bg-[#FF6B81] px-1 py-[2px] text-black">
                          #Buzz
                        </h1>
                      </div>
                      <h1>Lorem ipsum dolor sit amet consectetur</h1>
                      <h2 className="text-sm text-gray-400 mt-1 pt-2 font-roboto">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Quos quod amet vero Lorem, ipsum dolor.
                      </h2>
                    </div>
                    <div className="flex bottom-0">
                      <div className="flex pr-4 border-r border-white">
                        <div className="w-4 h-4 bg-slate-400 rounded-full mr-1"></div>
                        <h1 className="text-xs">Bigby wolf</h1>
                      </div>
                      <div className="text-xs text-pink-500 pl-4">
                        some time
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[25%] h-full relative">
                  <img
                    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d3139093-f1c4-4621-b7bc-30aeeff7178a/dgj1z72-b23d5b7d-2a04-4146-abbc-7e4393124ef1.png/v1/fill/w_1129,h_707/grand_theft_auto_vi___gta_6_4k_supreme_wallpaper_by_nurboyxvi_dgj1z72-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjYwNyIsInBhdGgiOiJcL2ZcL2QzMTM5MDkzLWYxYzQtNDYyMS1iN2JjLTMwYWVlZmY3MTc4YVwvZGdqMXo3Mi1iMjNkNWI3ZC0yYTA0LTQxNDYtYWJiYy03ZTQzOTMxMjRlZjEucG5nIiwid2lkdGgiOiI8PTQxNjEifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.K7Z-v7XQggTbd19yL14MWe8I3aptItHE7ZrjhMTR9WI"
                    alt="wolf among us 2"
                    className="h-full w-full object-cover object-bottom absolute"
                  />
                  <div className="w-full h-full bg-black/60 absolute p-4 flex justify-between flex-col">
                    <div>
                      <div className="flex gap-2 items-center mb-1">
                        <h1 className="text-sm bg-[#ff002b] px-1 py-[2px] text-black">
                          #Gaming
                        </h1>
                        <h1 className="text-sm bg-[#f523f5] px-1 py-[2px] text-black">
                          #GTA 6
                        </h1>
                      </div>
                      <h1 className="">
                        Lorem ipsum dolor sit amet consectetur ?
                      </h1>
                    </div>
                    <h2 className="text-sm font-roboto">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quos quod amet vero Lorem, ipsum dolor.
                    </h2>
                    <div className="flex">
                      <div className="flex pr-4 border-r border-white">
                        <div className="w-4 h-4 bg-slate-400 rounded-full mr-1"></div>
                        <h1 className="text-xs">Bigby wolf</h1>
                      </div>
                      <div className="text-xs text-pink-500 pl-4">
                        some time
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[18%] h-full relative">
                  <img
                    src="https://pbs.twimg.com/media/GJw028tWAAAqNXV?format=jpg&name=4096x4096"
                    alt="wolf among us 2"
                    className="h-full w-full object-cover object-bottom absolute"
                  />
                  <div className="h-full w-full absolute">
                    <h1 className="my-4 mx-3 text-sm bg-[#b910f2] px-1 py-[2px] text-black w-[35%]">
                      #Anime
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[34%] mt-5">
            <h1 className="text-3xl pt-3">Latest</h1>
            <div className="w-[98%] h-[83%] flex justify-between pt-2">
              <div className="w-[31.8%] h-full bg-orange-400">
                <div className="w-full h-full relative">
                  <img
                    src="https://i.pinimg.com/originals/ac/43/52/ac4352f877cd4265d69538bd7532b7b3.jpg"
                    alt="wolf among us 2"
                    className="h-full w-full object-cover object-left-top absolute"
                  />
                  <div className="w-full h-full bg-black/40 absolute flex justify-between flex-col">
                    <div className="flex gap-2 items-center mb-1 p-4">
                      <h1 className="text-sm bg-[#b910f2] px-1 py-[2px] text-black">
                        #Anime
                      </h1>
                      <h1 className="text-sm bg-[#FF6B81] px-1 py-[2px] text-black">
                        #Buzz
                      </h1>
                    </div>
                    <div className="px-4 py-3 bg-neutral-800">
                      <h1>Lorem ipsum dolor sit amet consectetur ?</h1>
                      <div className="flex mt-1">
                        <div className="flex pr-4 border-r border-white">
                          <div className="w-4 h-4 bg-slate-400 rounded-full mr-1"></div>
                          <h1 className="text-xs">Bigby wolf</h1>
                        </div>
                        <div className="text-xs text-pink-500 pl-4">
                          some time
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[31.8%] h-full bg-orange-400">
                <div className="w-full h-full relative">
                  <img
                    src="https://media.assettype.com/afkgaming%2F2024-01%2Ff6a64425-13c2-40a9-b3cb-1e527c6b7bd5%2FCover_Image___VCT_2024___All_Valorant_Teams_From_Americas__China__EMEA__Pacific.jpg?auto=format%2Ccompress&dpr=1.0&format=webp&w=900"
                    alt="wolf among us 2"
                    className="h-full w-full object-cover object-left-bottom absolute"
                  />
                  <div className="w-full h-full bg-black/40 absolute flex justify-between flex-col">
                    <div className="flex gap-2 items-center mb-1 p-4">
                      <h1 className="text-sm bg-[#4BFFA5] px-1 py-[2px] text-black">
                        #Esports
                      </h1>
                      <h1 className="text-sm bg-[#FF6B81] px-1 py-[2px] text-black">
                        #Buzz
                      </h1>
                    </div>
                    <div className="px-4 py-3 bg-neutral-800">
                      <h1>Lorem ipsum dolor sit amet consectetur ?</h1>
                      <div className="flex mt-1">
                        <div className="flex pr-4 border-r border-white">
                          <div className="w-4 h-4 bg-slate-400 rounded-full mr-1"></div>
                          <h1 className="text-xs">Bigby wolf</h1>
                        </div>
                        <div className="text-xs text-pink-500 pl-4">
                          some time
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[31.8%] h-full bg-orange-400">
                <div className="w-full h-full relative">
                  <img
                    src="https://wallpapercg.com/media/ts_orig/25888.webp"
                    alt="wolf among us 2"
                    className="h-full w-full object-cover object-left-bottom absolute"
                  />
                  <div className="w-full h-full bg-black/40 absolute flex justify-between flex-col">
                    <div className="flex gap-2 items-center mb-1 p-4">
                      <h1 className="text-sm bg-[#4BFFA5] px-1 py-[2px] text-black">
                        #Esports
                      </h1>
                      <h1 className="text-sm bg-[#FF6B81] px-1 py-[2px] text-black">
                        #Buzz
                      </h1>
                    </div>
                    <div className="px-4 py-3 bg-neutral-800">
                      <h1>Lorem ipsum dolor sit amet consectetur ?</h1>
                      <div className="flex mt-1">
                        <div className="flex pr-4 border-r border-white">
                          <div className="w-4 h-4 bg-slate-400 rounded-full mr-1"></div>
                          <h1 className="text-xs">Bigby wolf</h1>
                        </div>
                        <div className="text-xs text-pink-500 pl-4">
                          some time
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            borderColor: border,
          }}
          className="w-[20%] bg-transparent relative border-l"
        >
          <h1
            style={{ backgroundColor: bgColor, color: textColor }}
            className="text-3xl mt-2 py-1 px-3 font-bold"
          >
            Trending
          </h1>
          <div className="pl-[12px]">
            <h1 className="px-1 py-[2px] mt-[2px]">
              <h1 className="text-emerald-400">lendi story 1</h1>
              <h2 className="text-sm mt-[2px] font-roboto text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur.
              </h2>
              <div className="flex mt-1">
                <div className="flex pr-4 border-r border-white mt-1 items-center">
                  <div className="w-4 h-4 bg-slate-400 rounded-full mr-1"></div>
                  <h1 className="text-xs">Bigby wolf</h1>
                </div>
                <div className="text-xs text-pink-500 pl-4 pt-[5px]">
                  some time
                </div>
              </div>
            </h1>
            <h1 className="px-1 py-[2px] mt-2">
              <h1 className="text-emerald-400">lendi story 1</h1>
              <h2 className="text-sm mt-[2px] font-roboto text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur.
              </h2>
              <div className="flex mt-1">
                <div className="flex pr-4 border-r border-white mt-1 items-center">
                  <div className="w-4 h-4 bg-slate-400 rounded-full mr-1"></div>
                  <h1 className="text-xs">Bigby wolf</h1>
                </div>
                <div className="text-xs text-pink-500 pl-4 pt-[5px]">
                  some time
                </div>
              </div>
            </h1>
            <h1 className="px-1 py-[2px] mt-2">
              <h1 className="text-emerald-400">lendi story 1</h1>
              <h2 className="text-sm mt-[2px] font-roboto text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur.
              </h2>
              <div className="flex mt-1">
                <div className="flex pr-4 border-r border-white mt-1 items-center">
                  <div className="w-4 h-4 bg-slate-400 rounded-full mr-1"></div>
                  <h1 className="text-xs">Bigby wolf</h1>
                </div>
                <div className="text-xs text-pink-500 pl-4 pt-[5px]">
                  some time
                </div>
              </div>
            </h1>
            <div className="bg-blue-500 w-full h-[395px] mt-6 flex items-center justify-center">
              <h1>ads play here</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex mt-1">
        <div className="w-[80%] h-full border-r pb-2">
          <MasoneryLayout />
        </div>
        <div className="w-[20%] h-[60vh]"></div>
      </div>
    </>
  );
};

export default Home;
