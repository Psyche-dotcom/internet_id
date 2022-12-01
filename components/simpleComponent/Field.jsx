import React from "react";

const Field = ({
  name,
  id,
  type,
  placeholder,
  setstate,
  error,
  errorState,
}) => {
  return (
    <div className="w-full">
      <input
        name={id}
        type={type}
        placeholder={placeholder}
        id={id}
        className="w-full  bg-cardBg p-4 border border-deepBlue lg:border-none text-sm rounded-lg"
        onChange={(e) => setstate(e.target.value)}
      />
      {errorState && <p className="errorMessage">{error}</p>}
    </div>
  );
};

export default Field;
