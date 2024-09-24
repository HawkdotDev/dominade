import LatestCard from "./LatestCard"

const Section2 = () => {
  return (
    <div className="w-full flex mt-4 justify-between">
        <div className="w-[55.5%] h-full">
          <LatestCard />
          <LatestCard />
          <LatestCard />
          <LatestCard />
        </div>
        <div className="w-[42.5%] bg-slate-700"></div>
      </div>
  )
}

export default Section2