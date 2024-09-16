/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/prop-types
const UpcomingCard = ({ borderColor, imgURL, textColor, tagBG }) => {
  return (
    <div
      style={{ borderColor: borderColor }}
      className="w-[13vw] ml-3 h-[13vh] flex border-r flex-grow-0 flex-shrink-0 basis-auto"
    >
      <div
        style={{ borderColor: borderColor }}
        className="bg-red-400 w-[35%] h-full border"
      >
        <img
          src={imgURL}
          alt="GTA 6"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div
        style={{ color: borderColor }} // textColor
        className=" w-[65%] h-full text-wrap p-1 ml-[2px] flex flex-col justify-between"
      >
        <h1
          style={{ fontSize: "10px", lineHeight: "16px" }}
          className="flex justify-between mr-2"
        >
          <h2 style={{fontWeight: 900, fontSize: "11px"}} className="text-[#FC116B]">12 pm</h2>
        </h1>
        <h1 className="text-xs hover:text-purple-700 cursor-pointer">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </h1>
      </div>
    </div>
  );
};

export default UpcomingCard;
