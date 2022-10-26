import { NavLink } from "react-router-dom";
import { useEffect, useReducer, useRef } from "react";

export const CustomNavLink = ({ to, ...props }) => {
  let activeStyle = {
    color: "red",
    transition: "all 0.5s",
    fontWeight: "900",
    textDecoration: "none",
  };
  return (
    <NavLink
      style={({ isActive }) =>
        isActive
          ? activeStyle
          : { color: "#7c7878", textDecoration: "none", fontWeight: "900" }
      }
      to={to}
      end
      {...props}
    />
  );
};

//Use fetch hook
export const useFetch = (url, options) => {
  const cache = useRef({});

  // Used to prevent state update if the component is unmounted
  const cancelRequest = useRef(false);
  const initialState = {
    error: undefined,
    data: undefined,
    loading: false,
  };

  // Keep state logic separated
  const fetchReducer = (state, action) => {
    switch (action.type) {
      case "loading":
        return { ...initialState, loading: true };
      case "fetched":
        return { ...initialState, data: action.payload, laoding: false };
      case "error":
        return { ...initialState, error: action.payload, loading: false };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(fetchReducer, initialState);
  useEffect(() => {
    // Do nothing if the url is not given
    if (!url) return;
    cancelRequest.current = false;
    const fetchData = async () => {
      dispatch({ type: "loading" });

      // If a cache exists for this url, return it
      if (cache.current[url]) {
        dispatch({ type: "fetched", payload: cache.current[url] });
        return;
      }
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        cache.current[url] = data;
        if (cancelRequest.current) return;

        dispatch({ type: "fetched", payload: data });
      } catch (error) {
        if (cancelRequest.current) return;

        dispatch({ type: "error", payload: error });
      }
    };
    fetchData();
    // Use the cleanup function for avoiding a possibly...
    // ...state update after the component was unmounted
    return () => {
      cancelRequest.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);
  return state;
}