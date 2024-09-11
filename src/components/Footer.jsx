// eslint-disable-next-line react/prop-types
const Footer = ({textColor, bgColor, border}) => {
  return (
    <div
      style={{
        borderColor: border,
      }}
      className="w-full flex justify-center p-2 border-t"
    >
      Made with ❤️ by
      <a
        href="https://github.com/HawkdotDev"
        target="_blank"
        style={{
          backgroundColor: textColor,
          color: bgColor,
        }}
        className="ml-[6px] px-[5px]"
      >
        HawkdotDev
      </a>
    </div>
  );
};

export default Footer;
