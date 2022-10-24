import React, { useState } from "react";
import "./Users.css";
import { useFetch } from "../../CustomHooks";
import { Outlet, Link } from "react-router-dom";

export default function Users() {

  //Set state for users
  const [page, setPage] = useState(1);
  const { data, loading, error } = useFetch(
    "https://randomuser.me/api/?results=100"
  );
  if (loading) return(<div  className="usersDataCondition">
    <div></div>
    <h1>Loading...</h1>
  </div>)
  if (error) return (<div className="usersDataCondition">
    <div></div>
    <h1>Error loading page</h1>
  </div>
  )
  const perPage = 10;
  const pages = Math.ceil(data?.results?.length / perPage);
  const skip = (page * perPage) - perPage;
  return (
    <div className="usersWrapper">
      <h1 className="usersTitle">Users</h1>
      <div className="usersList">
        {data?.results.slice(skip, skip + perPage).map((each, index) => {
          const name = `${each.name.title} ${each.name.first} ${each.name.last}`;
          return (
            <div key={name.toLowerCase().replaceAll(" ", "")} className='usersList-details'>{`${
              index + 1
            }.${name}`}</div>
          );
        })}
        {/* Button of navigation */}
        {Array.from({ length: pages }, (_, index) => index + 1).map((each) => (
          <button onClick={() => setPage(each)} key={each}>{each}</button>
        ))}
        <p className="pagination">
          Pages: {page} of {pages}
        </p>
        {
          <button
            disabled={page <= 1}
            onClick={() => setPage((prev) => prev - 1)}
            className="prev"
          >
            prev
          </button>
        }
        {
          <button
            disabled={page >= pages}
            aria-disabled={page >= pages}
            onClick={() => setPage((prev) => prev + 1)}
            className="next"
          >
            next
          </button>
        }
      </div>
      <div className="displayUsers-details_div">
        <Link to='details'>
        <button className="displayUsers-details_btn">Display Users Details</button>
        </Link>
        <Link to='user'>
        <button className="displayUsers-details_btn" id="displayUsers-details_btn">User</button>
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
