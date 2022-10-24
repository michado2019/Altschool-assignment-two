import React from "react";
import {useParams} from 'react-router-dom'
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
        <h1 className="userTitle">User Details</h1>
        <div className="userDetails">
            {
                data?.results.map((item) => {
                    return <div key={item} className='userFlex'>
                            <img src={item.picture.large} alt="user" />
                            <h1>{item.name.first} {item.name.last}</h1>
                            <p>{item.email}</p>
                            <p>{item.phone}</p>
                            <p>{item.location.city}</p>
                            <p>{item.location.country}</p>
                            <p>{item.location.state}</p>
                            <p>{item.location.street.name}</p>
                            <p>{item.location.street.number}</p>
                            <p>{item.location.timezone.description}</p>
                            <p>{item.location.timezone.offset}</p>
                        </div>
                })
            }
        </div>
      </div>
    );
  }
}
