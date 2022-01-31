import {Button, Card, Row} from "react-bootstrap";
import React from "react";
import {deleteTrip} from "../services/tripsService";

export default function ShowTrips({trip, setTrips}) {
    return (
        <div className="offset-1">
            <Card bg="light">
                <Card.Img src={'images/items/' + trip.id + '.jpg'} alt={trip.title} style={{height: 300}} variant="top"/>
                <Card.Title className="offset-1">{trip.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted offset-1">{trip.startTrip[2] + '-' + trip.startTrip[1] + '-' + trip.startTrip[0]}</Card.Subtitle>
                <hr/>
                <Card.Body>
                    <Card.Text>{trip.description}</Card.Text>
                    <br/>
                    <Row>
                        <Button className="col-5" disabled={true} variant="secondary">
                            Add to Triplist
                        </Button>
                        <Button variant="secondary" className="col-5 offset-2" onClick={() => {
                            if (window.confirm(`Delete the trip ${trip.title}?`)) deleteTrip(trip.id).then(() => {
                                setTrips((oldTrips) => oldTrips.filter((trip) => trip.id !== trip.id))
                                window.location.reload(false)
                            })
                        }}>delete</Button>
                    </Row>
                </Card.Body>
            </Card>
            <br/>
        </div>
    );
}