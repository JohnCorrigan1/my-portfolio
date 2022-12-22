const Icon = (props) => {
  return (
    <img
      className="w-24 hover:scale-110 duration-300 hover:rotate-12"
      src={`https://skillicons.dev/icons?i=${props.icon}&perline=1`}
      height={50}
      width={50}
      alt="skill icons"
    />
  );
};

export default Icon;