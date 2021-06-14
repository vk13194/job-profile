import React, { useState, useEffect } from "react";
import DataItem from "./DataItem";
import FilterItem from "./FilterItem";
import axios from "axios";
import ReactPaginate from "react-paginate";

const FilterList = ({ text, range }) => {
  const [newData, setNewData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [perPage] = useState(5);
  const [pageCount, setPageCount] = useState(0);
  
  console.log(text)

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://codejudge-question-artifacts-dev.s3.amazonaws.com/q-795/data.json"
      );
      const data = res.data.data;
      const slice = data.slice(offset, offset + perPage);
      setNewData(slice);
      setPageCount(Math.ceil(data.length / perPage));
    };
    fetchData();
    // eslint-disable-next-line
  }, [offset]);
  const filterData = newData.filter(
    (item) =>
      item.role === text ||
       item.experience === text ||
        item.ctc <= range ||
        item.technology.some((tech)=>{
          return tech === text
        })
  );
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };
  return (
    <div>
      <div>
        {filterData.length > 0 ? (
          <FilterItem data1={filterData} />
        ) : (
          <DataItem data1={newData} />
        )}
      </div>
      <div className="d-flex justify-content-center">
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
};

export default FilterList;
