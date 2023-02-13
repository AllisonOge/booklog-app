const Error = (props) => {
    const message = props.message;
  
    return (
      <div className="alert alert-danger p-3 rounded mb-2">
        {message}
      </div>
    );
  };

  export default Error;