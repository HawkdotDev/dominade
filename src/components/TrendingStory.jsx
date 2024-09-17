// eslint-disable-next-line react/prop-types
const TrendingStory = ({ heading, imgURL }) => {
  return (
    <div className="px-1 pt-[2px] w-full pb-[10px] mb-3 mt-1 border-b border-gray-700">
      <div className="flex">
        <div className="textsection w-[70%] h-20">
          <h1 className="text-emerald-400 cursor-pointer text-sm hover:underline ">
            {heading}
          </h1>
        </div>
        <img
          src={imgURL}
          alt=""
          style={{ aspectRatio: 1 / 1 }}
          className="w-[30%] object-cover object-center"
        />
      </div>
      <div className="flex mt-[2px]">
        <div className="flex pr-4 border-r border-gray-700 mt-1 items-center">
          <div className="w-4 h-4 bg-slate-400 rounded-full mr-1"></div>
          <h1 className="text-xs">Bigby wolf</h1>
        </div>
        <div className="text-xs text-pink-500 pl-4 pt-[5px]">some time</div>
      </div>
    </div>
  );
};

export default TrendingStory;
