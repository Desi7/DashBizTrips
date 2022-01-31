import React, {useEffect, useState} from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Spinner from './Spinner';
import {getTrips} from './services/tripsService';
import ShowTrips from "./components/ShowTrips";
import {months} from "./services/months";
import {Form} from "react-bootstrap";

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

    function renderTrip(t) {
        return (
            <ShowTrips trip={t} setTrips={setTrips}/>
        );
    }

    // if month selected then filter the trips from month === month
    const filteredTrips = month ? trips.filter((t) => t.startTrip[1] === parseInt(month)) : trips;

    // if error then throw the errror
    if (errorTrips) throw errorTrips;
    if (loadingTrips) return <Spinner/>;
    // shorthand for react fragment
    return (
        <>
            <div>
                <Header/>
                <main>
                    <h1>Trips</h1>
                    <section id="filters">
                        <Form.Label htmlFor="month">Filter by Month:</Form.Label>
                        <Form.Select
                            id="month"
                            value={month} // controlled component
                            onChange={(e) => {
                                //debugger;
                                setMonth(e.target.value);
                            }}
                        >
                            <option value="">all months</option>
                            {months.map((month, index) => <option value={index}>{month}</option> )}
                        </Form.Select>
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
            <Footer/>
        </>
    );
}
