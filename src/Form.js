import React from "react";

export default function Form({ handleSubmit, updateCity }) {
  return (
    // <div className="weather-app">
    <form className="mb-4" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col col-sm-8">
          <input
            type="text"
            placeholder="Search for a city"
            onChange={updateCity}
            autoComplete="off"
            className="form-control"
          />
        </div>
        <div className="col col-sm-2">
          <button type="Submit" className="btn btn-light">
            Search{" "}
          </button>
        </div>
        <div className="col col-sm-2">
          <button type="Submit" className="btn btn-light">
            <img
              width="40"
              src="https://www.iconbolt.com/preview/twitter/font-awesome-solid/map-marked-alt.svg"
              alt="pin image"
            />
          </button>
        </div>
      </div>
    </form>
    // </div>
  );
}
