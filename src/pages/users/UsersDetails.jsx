import React, { useState } from "react";
import { useFetch } from "../../CustomHooks";
import "./UsersDetails.css";

export default function UsersDetails() {
  const { data, loading, error } = useFetch(
    "https://randomuser.me/api/?results=100"
  );

  //Set states
  const [page, setPage] = useState(1);
  const [isAble, setIsAble] = useState(false);

  //Handle reset
  function handleReset() {
    setIsAble(true);
    if (isAble === true) {
      setPage([]);
    } else {
      setPage(1);
    }
  }
  const perPage = 10;
  const pages = Math.ceil(data?.results.length / perPage);
  const skip = page * perPage - perPage;
  if (loading) return <h1 className="usersDataCondition">Loading...</h1>;
  if (error) return <h1 className="usersDataCondition">Error...</h1>;

  return (
    <div className="userDetails-wrapper">
      <div className="usersList">
        {data?.results.slice(skip, skip + perPage).map((each, index) => {
          const name = `${each.name.title} ${each.name.first} ${each.name.last}`;
          const email = `${each.email}`;
          const picture = `${each.picture.large}`;
          return (
            <div
              key={name.toLowerCase().replaceAll(" ", "")}
              className="usersList-item"
            >
              <img src={picture} 
              alt={name.first} 
              className="usersImg" 
              />
              <h1 className="userNames">{`${index + 1}.${name}`}</h1>
              <p className="usersEmail">{email}</p>
            </div>
          );
        })}
        {/* Button of navigation */}
        {Array.from({ length: pages }, (_, index) => index + 1).map((each) => (
          <button onClick={() => setPage(each)} key={each}>
            {each}
          </button>
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
        <button onClick={handleReset} className="reset">
          RESET
        </button>
      </div>
    </div>
  );
}
