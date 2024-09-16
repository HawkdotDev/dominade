/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/prop-types
const LatestNotification = ({color, backgroundColor, border }) => {
  return (
    <div style={{borderColor: border, backgroundColor: backgroundColor}} className="w-full font-hagrid font-medium flex items-center py-[1px] border-b z-50">
      <div style={{color: backgroundColor}} className="px-2 w-[8%] bg-emerald-400 mb-[2px] text-center">Latest</div>
      <div style={{borderColor: border}} className="w-[82%] flex flex-nowrap overflow-hidden relative border-r text-sm">
        <ul className="flex items-center animate-infinite-scroll w-full justify-evenly">
          <li className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, provident culpa debitis.</li>
        </ul>
        <ul style={{borderColor: border}} className="flex items-center animate-infinite-scroll absolute top-0 left-full w-full justify-evenly border-x ">
        <li className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, provident culpa debitis.</li>
        </ul>
      </div>
      <div className="w-[10%] flex justify-evenly items-center">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[16%] h-[16%]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            className="w-full h-full"
            fill={color}
          >
            <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
          </svg>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[18%] h-[18%]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-full h-full"
            fill= "#e30e6e"
          >
            <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
          </svg>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[17%] h-[17%]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            className="w-full h-full"
            fill="#0e55e3"
          >
            <path d="M32,6C17.642,6,6,17.642,6,32c0,13.035,9.603,23.799,22.113,25.679V38.89H21.68v-6.834h6.433v-4.548	c0-7.529,3.668-10.833,9.926-10.833c2.996,0,4.583,0.223,5.332,0.323v5.965h-4.268c-2.656,0-3.584,2.52-3.584,5.358v3.735h7.785	l-1.055,6.834h-6.73v18.843C48.209,56.013,58,45.163,58,32C58,17.642,46.359,6,32,6z"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default LatestNotification;
