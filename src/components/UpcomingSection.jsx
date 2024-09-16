import UpcomingCard from "./UpcomingCard";

const UpcomingSection = () => {
  const bgColor = "#141414";
  const textColor = "#eddccc";

  return (
    <>
      <div className="flex mt-1 items-center justify-between">
        <h1 className="font-hagrid font-bold text-[#fc116b]">Upcoming</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e8eaed"
          className="mb-[2px]"
          //   className="bg-slate-800 rounded-full text-center mb-[2px] border border-gray-700"
        >
          <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
        </svg>
      </div>
      <div
        // style={{ backgroundColor: textColor }}
        className="flex w-full bg-emerald-400 gap-3 overflow-auto flex-nowrap scrollbar-hide h-[15vh] items-center font-hagrid font-bold"
      >
        <UpcomingCard
          tagBG={"#23eb55"}
          borderColor={bgColor}
          textColor={textColor}
          imgURL={
            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d3139093-f1c4-4621-b7bc-30aeeff7178a/dgj1z72-b23d5b7d-2a04-4146-abbc-7e4393124ef1.png/v1/fill/w_1129,h_707/grand_theft_auto_vi___gta_6_4k_supreme_wallpaper_by_nurboyxvi_dgj1z72-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjYwNyIsInBhdGgiOiJcL2ZcL2QzMTM5MDkzLWYxYzQtNDYyMS1iN2JjLTMwYWVlZmY3MTc4YVwvZGdqMXo3Mi1iMjNkNWI3ZC0yYTA0LTQxNDYtYWJiYy03ZTQzOTMxMjRlZjEucG5nIiwid2lkdGgiOiI8PTQxNjEifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.K7Z-v7XQggTbd19yL14MWe8I3aptItHE7ZrjhMTR9WI"
          }
        />
        <UpcomingCard
          tagBG={"#23a8eb"}
          borderColor={bgColor}
          textColor={textColor}
          imgURL={
            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d3139093-f1c4-4621-b7bc-30aeeff7178a/dhehxj7-f2e0e6a1-3f49-4b0b-914b-8d2dfd8b4804.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QzMTM5MDkzLWYxYzQtNDYyMS1iN2JjLTMwYWVlZmY3MTc4YVwvZGhlaHhqNy1mMmUwZTZhMS0zZjQ5LTRiMGItOTE0Yi04ZDJkZmQ4YjQ4MDQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.TefbmZN43SGyDFc2Fnt_2bp3qcN_xyFY64Yy40M9OAA"
          }
        />
        <UpcomingCard
          tagBG={"#ffffff"}
          borderColor={bgColor}
          textColor={textColor}
          imgURL={"https://yattatachi.com/wp-content/uploads/2023/12/Great-Pretender-Razbliuto-poster.jpg"}
        />
        <UpcomingCard
          tagBG={"#f20f62"}
          borderColor={bgColor}
          textColor={textColor}
          imgURL={
            "https://cdn.mos.cms.futurecdn.net/C76JswZduwNLSqNMfXvi5b-1200-80.jpg"
          }
        />
        <UpcomingCard
          tagBG={"#9e23eb"}
          borderColor={bgColor}
          textColor={textColor}
          imgURL={
            "https://m.media-amazon.com/images/M/MV5BNTRlNmU1NzEtODNkNC00ZGM3LWFmNzQtMjBlMWRiYTcyMGRhXkEyXkFqcGc@._V1_.jpg"
          }
        />
        <UpcomingCard
          tagBG={"#23eb55"}
          borderColor={bgColor}
          textColor={textColor}
          imgURL={
            "https://yattatachi.com/wp-content/uploads/2024/03/the-boy-and-the-beast-poster-725x1024.jpg"
          }
        />
        <UpcomingCard
          tagBG={"#e3df0e"}
          borderColor={bgColor}
          textColor={textColor}
          imgURL={
            "https://m.media-amazon.com/images/M/MV5BYzQ0NGZkOTMtMjMxMy00NWY0LWIxYzctZjhiZTdjZDA5OTJjXkEyXkFqcGc@._V1_.jpg"
          }
        />
        <UpcomingCard
          tagBG={"#23eb55"}
          borderColor={bgColor}
          textColor={textColor}
          imgURL={
            "https://wallpapercave.com/wp/wp10511195.jpg"
          }
        />
      </div>
    </>
  );
};

export default UpcomingSection;
