import {Button, Card, Row} from "react-bootstrap";
import React from "react";
import {deleteTrip} from "../services/tripsService";

export default function ShowTrips({trip, setTrips}) {
    return (
        <div className="offset-1">
            <Card bg="light">
                <Card.Img src={'images/items/' + trip.id + '.jpg'} alt={trip.title} style={{height: 300}}
                          variant="top"/>
                <br/>
                <Row>
                    <Card.Title className="col-6 offset-1">{trip.title}</Card.Title>
                    <Button className="col-4" onClick={() => alert("this feature is not yet implemented!")}
                            style={{backgroundColor: '#e7883a', border: "none"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path
                                d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fill-rule="evenodd"
                                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                        </svg>
                        edit
                    </Button>
                </Row>
                <Card.Subtitle
                    className="mb-2 text-muted offset-1">{trip.startTrip[2] + '-' + trip.startTrip[1] + '-' + trip.startTrip[0]}</Card.Subtitle>
                <hr/>
                <Card.Body>
                    <Card.Text>{trip.description}</Card.Text>
                    <br/>
                    <Row>
                        <Button className="col-5" disabled={true} style={{backgroundColor: '#e7883a', border: "none"}}>
                            Add to Triplist
                        </Button>
                        <Button style={{backgroundColor: '#c76137', border: "none"}} className="col-5 offset-2"
                                onClick={() => {
                                    if (window.confirm(`Delete the trip ${trip.title}?`)) deleteTrip(trip.id).then(() => {
                                        setTrips((oldTrips) => oldTrips.filter((trip) => trip.id !== trip.id))
                                        window.location.reload(false)
                                    })
                                }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-archive" viewBox="0 0 16 16">
                                <path
                                    d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                            delete
                        </Button>
                    </Row>
                </Card.Body>
            </Card>
            <br/>
        </div>
    );
}