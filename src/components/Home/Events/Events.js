import React from 'react';
import wedding from '../../../images/recentWedding.jpg';
import birthday from '../../../images/recentBirthday.jpg';
import party from '../../../images/recentParty.jpg';
import EventDetail from '../EventDetail/EventDetail';

const recentEvents = [
    {
        img: wedding,
        title: "Fuad & Afrin's Wedding",
        description: "Fuad and Afrin's wedding was our recent wedding event. It was a very nice experience with this sweet couple."
    },
    {
        img: birthday,
        title: "Inaya's 1st birthday",
        description: "Recently we arranged Inaya's 1st birthday. Such a cute baby girl Inaya is. We were very happy to arrange the whole birthday event."
    },
    {
        img: party,
        title: "Club party",
        description: "We arranged a club party in a well-known club in Dhaka. It was very first time for us to arrange a club party. But overall experience was awesome."
    }
]

const Events = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h1>Recent Events</h1>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row w-75 mt-5 pt-5">
                    {
                        recentEvents.map(event => <EventDetail event={event}></EventDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Events;