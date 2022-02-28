import PropagateLoader from "react-spinners/PropagateLoader";
import { css } from "@emotion/react";

const override = css`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
`;

const PropagateSpinner = ({ text, color }) => {
  return (
    <div className="h-50vh w-full flex flex-col justify-center items-center gap-8 animate-pulse">
      <p className="uppercase text-2xl font-thin">{text}</p>
      <PropagateLoader css={override} size={30} color={color} />
    </div>
  );
};

export default PropagateSpinner;
