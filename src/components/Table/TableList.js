import React, { useEffect, useState } from "react";
import { fetchData } from "../../redux/actions/dataActions";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table, ToggleButton, Form } from "react-bootstrap";
import EditForm from "../Modal/EditForm";
import Paging from "../Pagination/Paging";

import List from "./List";
import SearchFilter from "../SearchFilter/SearchFilter";
import { Link } from "react-router-dom";

export default function TableList() {
  const data = useSelector((state) => state.data);
  let { dataItems, isLoading, error } = data;

  const { userData } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();

  // Pagination State
  const [tableData, setTableData] = useState(data);
  const [number, setNumber] = useState(1);

  // Number of Posts per page
  const [postPerPage] = useState(6);
  //   const [toggle, setToggle] = useState(null); //for data ids
  const [search, setSearch] = useState(""); //for filtering data
  const [order, setOrder] = useState("asc"); //for sorting

  const [radioValue, setRadioValue] = useState("all");

  const radios = [
    { name: "All", value: "all" },
    { name: "Active", value: "active" },
    { name: "Inactive", value: "inactive" },
  ];

  const Sort = (sort) => {
    if (order === "asc") {
      const sorted = [
        ...dataItems.sort((a, b) => (a[sort] > b[sort] ? 1 : -1)),
      ];
      console.log(sorted);
      setTableData(sorted);
      setOrder("desc");
    } else if (order === "desc") {
      const sorted = [
        ...dataItems.sort((a, b) => (a[sort] < b[sort] ? 1 : -1)),
      ];
      console.log(sorted);
      setTableData(sorted);
      setOrder("asc");
    }
  };

  //for Pagination
  const lastPost = number * postPerPage;
  const firstPost = lastPost - postPerPage;

  const filteredList = () => {
    if (radioValue === "all") {
      return dataItems;
    }

    if (radioValue === "inactive") {
      return dataItems.filter((i) => i.status === false);
    }

    if (radioValue === "active") {
      return dataItems.filter((i) => i.status === true);
    }
  };

  const currentData =
    search === "" ? filteredList().slice(firstPost, lastPost) : filteredList();

  useEffect(() => {
    dispatch(fetchData({ token: userData.access_token }));
  }, [dispatch, userData]);

  return (
    <>
      <Link to={"/tenant/add-new"}>
        <Button variant="primary" className="my-4">
          <i className="bi bi-plus-circle" /> Add New Data
        </Button>
      </Link>
      <SearchFilter search={search} setSearch={setSearch} />
      <div className="btn-wrapper d-flex gap-2 mb-3">
        {radios.map((item, idx) => {
          return (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant="primary"
              name="radio"
              value={item.value}
              checked={radioValue === item.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              {item.name}
            </ToggleButton>
          );
        })}
      </div>
      <div className="w-100">
        {isLoading && dataItems.length > 0 ? (
          <p>Loading...</p>
        ) : error ? (
          <p>gagal</p>
        ) : (
          <form>
            <Table striped bordered responsive>
              <thead>
                <tr>
                  <th className="pe-auto" onClick={() => Sort("name")} id="tr">
                    Name
                  </th>
                  <th id="tr">Address</th>
                  <th id="tr">Country</th>
                  <th id="tr">Phone Number</th>
                  <th id="tr">Job</th>
                  <th id="tr">Status</th>
                  <th id="tr">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentData
                  .filter((val) => {
                    if (search === "") {
                      return val;
                    } else if (
                      val.name.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .map((data, idx) => {
                    return (
                      <List
                        keys={idx}
                        data={data}
                        currentData={currentData}
                        // Delete={Delete}
                      />
                    );
                  })}
              </tbody>
            </Table>
          </form>
        )}
      </div>
      <Paging
        number={number}
        setNumber={setNumber}
        postPerPage={postPerPage}
        tableData={filteredList()}
      />
    </>
  );
}
