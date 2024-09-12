// eslint-disable-next-line react/prop-types
const ThemeButton = ({IsLight, setIsLight, moonIcon, sunIcon}) => {
  return (
    <button
      className="w-[35px] h-[35px] px-[1px]"
      onClick={() => {
        setIsLight(!IsLight);
      }}
    >
      <img
        src={IsLight ? moonIcon : sunIcon}
        alt="theme button"
        className="w-full h-full rounded-full"
      />
    </button>
  );
};

export default ThemeButton;
