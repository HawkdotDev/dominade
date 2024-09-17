const LatestCard = () => {
  return (
    <div className="flex py-3 bg-stone-800 mb-5">
      <div className="pl-2 pr-6 flex flex-col justify-between">
        <h1 className="text-2xl font-hagrid">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima.
          Lorem, ipsum dolor sit amet consectetur adipisicing.
        </h1>
        <div className="flex mt-2">
          <h1>Bigby wolf</h1>
          <h1>some random time</h1>
        </div>
      </div>
      <img
        src="https://m.media-amazon.com/images/M/MV5BZWVmOWMzMzMtODA1YS00ODk5LTlkNmMtZjMyYzhlNzM5ODE4XkEyXkFqcGdeQXVyMTE0MzQwMjgz._V1_.jpg"
        alt=""
        style={{ aspectRatio: 1 / 1 }}
        className="w-[65%] object-cover object-center"
      />
    </div>
  );
};

export default LatestCard;
