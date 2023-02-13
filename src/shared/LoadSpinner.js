const LoadSpinner = (props) => {
    const className = `spinner-border text-${props.color || "primary"}`
  return (
    <div className={className} role="status">
      <span className="sr-only"></span>
    </div>
  );
};

export default LoadSpinner;
