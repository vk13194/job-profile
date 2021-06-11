import React from "react";
import {Link} from 'react-router-dom'
const FilterItem = ({ data1 }) => {
  console.log(data1);
  return (
    <div>
      {data1.map((item) => (
        <Link  to={`/details/${item.id}`} className="nav-link">
        <div
          className="d-flex shadow-lg m-3 justify-content-between"
          key={item.id}
        >
          <div className="d-flex align-items-center pl-3">
            <img
              src={item.logo}
              alt="logo"
              style={{ width: "75px", height: "75px" }}
            />
            <div className="pl-2">
              <h3>{item.company}</h3>
              <h5>{item.position}</h5>
              <div className="d-flex ">
                <p>{item.experience}</p> |<p>{item.contract}</p> |{" "}
                <p>{item.location}</p>
              </div>
            </div>
          </div>

          <div className="d-flex align-items-center mr-5">
            <div className="d-flex">
              {item.technology.map((tech, index) => (
                <div className="p-2 m-1">
                  <span class="badge badge-pill badge-success">{tech}</span>
                </div>
              ))}
            </div>
            <span class="badge badge-pill badge-success">{item.ctc}-LPA</span>
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default FilterItem;
