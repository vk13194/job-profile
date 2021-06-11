import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const Details = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState([]);
  const [detailsPage, setDetailsPage] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://codejudge-question-artifacts-dev.s3.amazonaws.com/q-795/data.json"
      );
      setDetailData(res.data.data);
      setDetailsPage(res.data);
    };
    fetchData();
  }, []);
  // eslint-disable-next-line
  const newData = detailData.filter((item) => item.id == id);
  console.log("newdara", newData[0]);
  console.log("detailspage", detailsPage);
  return (
    <div>
      {newData.length > 0 ? (
        <div className="mx-5 mt-1">
          <div>
            <img src={detailsPage.detailPageImage} alt="detail" />
          </div>

          <div className="d-flex  pl-lg-5" style={{backgroundColor:'#e1e1ed'}}>
            <div className="ml-5">
              <img src={newData[0].logo} alt="pageLogo" />
            </div>

            <div className="pl-2">
              <div>
                <h3>{newData[0].company}</h3>
              </div>
              <div className="d-flex">
                <h5 className="px-1">{newData[0].position}</h5> |
                <h5 className="px-1">{newData[0].location}</h5>
              </div>

              <div className="d-flex">
                <h5 className="px-1">{newData[0].experience}</h5> |
                <h5 className="px-1">CTC:{newData[0].ctc} LPA</h5>
              </div>
            </div>
          </div>

          <div className="d-flex">
            <h6>About The Company:</h6>
            <p>{newData[0].about}</p>
          </div>

          <div className="d-flex px-1">
            <h6 className="mx-1">Website: </h6>
            <p>{newData[0].website}</p>
          </div>
          <div className="d-flex">
            <h6 className="mx-1">Contract:</h6>
            <p>{newData[0].contract}</p>
          </div>

          <div className="d-flex">
            <h6>Skill Required:</h6>
            {newData[0].technology.map((tech, index) => (
              <span
                class="badge badge-pill badge-secondary text-center p-1 mx-2"
                key={index}
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="d-flex">
            <h6 className="mx-1">Job Description:</h6>
            <p>{newData[0].description}</p>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Details;
