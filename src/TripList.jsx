/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";

import { getBusinessTrips } from "./tripsService.js";

// functional component TripList, deconstruct props!
function TripList({ dispatch }) {
  // State
  const [trips, setTrips] = useState([]);

  // componentDidMount .. didUpdate etc.
  useEffect(() => {
    // fetch products from api
    getBusinessTrips().then((response) => setTrips(response));
  }, []);

  const tripsMapped = trips.map((trip, index) => (
    <Trip dispatch={dispatch} trip={trip} key={trip.id} />
  ));

  const empty = (
    <section>
      <p className="alert alert-info">Triplist is empty</p>
    </section>
  );

  return (
    <div className="container">
      <section>
        <h4 className="h4">Business Trips - Planned 2021</h4>
        <div className="row">
          {tripsMapped.length > 0 ? tripsMapped : empty}
        </div>
      </section>
    </div>
  );
}
// deconstruct ...props
function Trip({ dispatch, trip }) {
  // Props
  let { id, title, description, startTrip, endTrip } = trip;

  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <figure className="card card-product">
        <div className="img-wrap">
          <img src={"images/items/" + id + ".jpg"} alt="name " />
        </div>
        <figcaption className="info-wrap">
          <a href="#. . . " className="title">
            {title}
          </a>
          <div className="price-wrap">
            <span className="price-new">{startTrip}</span>
          </div>
          <p className="card-text">{description}</p>
          <div className="info-wrap row">
            <button
              type="button"
              className="btn btn-link btn-outline"
              onClick={() => dispatch({ type: "add", ...trip })}
            >
              <i /*className="fa fa-luggage-cart"*/ /> Add to Triplist
            </button>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}

export default TripList;
