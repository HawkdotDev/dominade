// eslint-disable-next-line react/prop-types
const Footer = ({textColor, bgColor, border}) => {
  return (
    <div
      style={{
        borderColor: border,
      }}
      className="w-full flex justify-center p-2 border-t"
    >
      Brought to you by
      <a
        href="https://github.com/HawkdotDev"
        target="_blank"
        style={{
          backgroundColor: textColor,
          color: bgColor,
        }}
        className="mx-[6px] px-[5px]"
      >
        Dominade 
      </a>
       with ❤️
    </div>
  );
};

export default Footer;
