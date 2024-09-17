/* eslint-disable react/prop-types */
const Scroller = ({textColor, bgColor, emailLink}) => {
  return (
    <div id="scroller" style={{borderColor: textColor}} className="border-t">
      <h1>
        Signup to the {"  "}
        <span style={{ backgroundColor: textColor, color: bgColor }}>
          <a href={emailLink} target="_blank">
            News Letter
          </a>
        </span>
      </h1>
      <h1>
        Signup to the {"  "}
        <span style={{ backgroundColor: textColor, color: bgColor }}>
          <a href={emailLink} target="_blank">
            News Letter
          </a>
        </span>
      </h1>
      <h1>
        Signup to the {" "}
        <span style={{ backgroundColor: textColor, color: bgColor }}>
          <a href={emailLink} target="_blank">
            News Letter
          </a>
        </span>
      </h1>
    </div>
  );
};

export default Scroller;
