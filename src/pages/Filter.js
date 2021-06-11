import React, { useState } from "react";
import FilterList from "../components/FilterList";
const Filter = () => {
  const [text, setText] = useState("");
  //console.log(text);
  return (
    <div
      className="mt-2"
      style={{
        backgroundImage: `url('https://codejudge-question-artifacts-dev.s3.amazonaws.com/q-795/bg-header-desktop.svg')`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="row">
        <div className="col-3">
        <h3>Job Role</h3>
          <div className="input-group mb-3">
            
            <select
              className="custom-select"
              onChange={(e) => setText(e.target.value)}
            >
              <option selected>Nothing Selected</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Fullstack">Fullstack</option>
            </select>
          </div>
        </div>

        <div className="col-3">
        <h3>Experience</h3>
          <div className="input-group mb-3">
            <select
              className="custom-select"
              onChange={(e) => setText(e.target.value)}
            >
              <option selected>Nothing Selected</option>
              <option value="Fresher">Fresher</option>
              <option value="Junior">Junior</option>
              <option value="Midweight">Midweight</option>
            </select>
          </div>
        </div>
      </div>
      <FilterList text={text} />
    </div>
  );
};

export default Filter;
