import { PropTypes } from "prop-types";

export const FirstApp = ({ title, subTitle }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{subTitle + 1}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number.isRequired,
};

FirstApp.dafaultProps = {
  title: "No hay titulo",
  subTitle: "No hay subtitulo",
};
