import React from "react";
import { useParams } from "react-router-dom";
import "./User.css";
import { useFetch } from "../../CustomHooks";

export default function User() {
  const { userId } = useParams();
  const { data, loading, error } = useFetch(
    "https://randomuser.me/api/?results=100"
  );
  if (loading)
    return (
      <div className="usersDataCondition">
        <div></div>
        <h1>Loading...</h1>
      </div>
    );
  if (error)
    return (
      <div className="usersDataCondition">
        <div></div>
        <h1>Error loading page</h1>
      </div>
    );
  if (userId) {
    return (
      <div className="userWrapper">
        <h1 className="userTitle">Users Full Details</h1>
        <div className="userDetails">
          {data?.results.map((item) => {
            return (
              <div key={item} className="userFlex">
                <img src={item.picture.large} alt="user" />
                <div className="userDiv">
                  <h3>
                    <span className="userLabels">Name: </span>{item.name.first} {item.name.last}
                  </h3>
                  <p><span className="userLabels">Email: </span>{item.email}</p>
                  <p><span className="userLabels">Phone: </span>{item.phone}</p>
                  <p><span className="userLabels">City: </span>{item.location.city}</p>
                  <p><span className="userLabels">Country: </span>{item.location.country}</p>
                  <p><span className="userLabels">State: </span>{item.location.state}</p>
                  <p><span className="userLabels">Street: </span>{item.location.street.name}</p>
                  <p><span className="userLabels">Street No: </span>{item.location.street.number}</p>
                  <p><span className="userLabels">Timezone description: </span>{item.location.timezone.description}</p>
                  <p><span className="userLabels"><span>Timezone offset: </span>: </span>{item.location.timezone.offset}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
