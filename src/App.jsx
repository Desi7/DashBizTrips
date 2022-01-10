import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Spinner from './Spinner';
import { deleteTrip, getTrips } from './services/tripsService';

export default function App() {
  const [month, setMonth] = useState('');

  const [trips, setTrips] = useState([]);
  const [errorTrips, setError] = useState(null);
  const [loadingTrips, setLoading] = useState(true);

  useEffect(() => {
    getTrips()
      .then((data) => {
        setTrips(data);
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
        setLoading(false);
      });
  }, []);

  const months = ['Idle', 'Jan', 'Feb', 'March', 'April', 'Mai', 'June'];

  function renderTrip(t) {
    return (
      <div className="product" key={t.id}>
        <figure>
          <div>
            <img src={'images/items/' + t.id + '.jpg'} alt="name " />
          </div>
          <figcaption>
            {t.title}
            <div>
              <span>{t.startTrip[2] + '-' + t.startTrip[1] + '-' + t.startTrip[0]}</span>
            </div>
            <p>{t.description}</p>
            <div>
              <button type="button" disabled>
                Add to Triplist
              </button>
              <button
                onClick={() => {
                  deleteTrip(t.id).then(() =>
                    setTrips((oldTrips) => oldTrips.filter((trip) => trip.id !== t.id))
                  );
                }}
              >
                delete
              </button>
            </div>
          </figcaption>
        </figure>
      </div>
    );
  }

  // if month selected then filter the trips from month === month
  const filteredTrips = month ? trips.filter((t) => t.startTrip[1] === parseInt(month)) : trips;

  // if error then throw the errror
  if (errorTrips) throw errorTrips;
  if (loadingTrips) return <Spinner />;
  // shorthand for react fragment
  return (
    <>
      <div>
        <Header />
        <main>
          <section id="filters">
            <label htmlFor="month">Filter by Month:</label>
            <select
              id="month"
              value={month} // controlled component
              onChange={(e) => {
                //debugger;
                setMonth(e.target.value);
              }}
            >
              <option value="">All Months</option>
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">Mai</option>
              <option value="6">June</option>
            </select>
            {month && (
              <h2>
                Found {filteredTrips.length}
                {filteredTrips.length > 1 ? ' trips' : ' trip'} for the month of
                {' ' + months[month]}
              </h2>
            )}
          </section>
          <section id="products">{filteredTrips.map(renderTrip)}</section>
        </main>
      </div>
      <Footer />
    </>
  );
}
