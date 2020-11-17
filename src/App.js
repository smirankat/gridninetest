import React, { useEffect, useState } from "react";

import Card from "./components/Card";
import CarrierFilter from "./components/CarrierFilter";
import StopsFilter from "./components/StopsFilter";
import PriceFilter from "./components/PriceFilter";
import Sort from "./components/Sorts";

function App() {
  const [flights, setFlights] = useState([]);
  const [stops, setStops] = useState([]);
  const [ price, setPrice ] = useState([ '', '' ])
  const [carriers, setCarriers] = useState([]);
const [visible, setVisible] = useState(2)

const showMoreCards = () => {
  setVisible((prevValue) => prevValue + 2)
}

  useEffect(() => {
    fetch("http://localhost:3000/db.json")
      .then((resp) => resp.json())
      .then((json) => {
        setFlights(json.flights);
      });
  }, []);

  const onSelectSortType = (name) => {
    name === "asc"
      ? setFlights(
          [...flights].sort(
            (a, b) => a.flight.price.total.amount - b.flight.price.total.amount
          )
        )
      : name === "desc"
      ? setFlights(
          [...flights].sort(
            (a, b) => b.flight.price.total.amount - a.flight.price.total.amount
          )
        )
      : setFlights(
          [...flights].sort(
            (a, b) => a.flight.legs[0].duration - b.flight.legs[0].duration
          )
        );
  };

  const onSelectStops = (value) => {
    setStops(
      !stops.includes(value)
        ? [...stops, value]
        : stops.filter((n) => n !== value)
    );
  };
  const onSelectCarriers = (value) => {
    setCarriers(
      !carriers.includes(value)
        ? [...carriers, value]
        : carriers.filter((n) => n !== value)
    );
  };
  const onPriceChange = ({ target: { value, dataset: { index } } }) => {
    setPrice(price.map((n, i) => i === +index ? value : n));
  };
  const filteredFlights = [...flights].filter(
    (obj) => (
      (!stops.length ||
      (stops.includes("yes") && obj.flight.legs[0].segments.length === 2) ||
      (stops.includes("no") && obj.flight.legs[0].segments.length === 1)) &&
      (!price[0] || price[0] <= +obj.flight.price.total.amount) &&
      (!price[1] || price[1] >= +obj.flight.price.total.amount) &&
      (!carriers.length ||
        (carriers.includes('lot') && obj.flight.legs[0].segments[0].airline.caption==='LOT Polish Airlines' && obj.flight.price.total.amount > 21049 ) ||
        (carriers.includes('aeroflot') && obj.flight.legs[0].segments[0].airline.caption==="Аэрофлот - российские авиалинии" && obj.flight.price.total.amount > 31733 ))
  ));

  return (
    <div className="app">
      <div className="sidebar">
        <div className="top"></div>
        <Sort onSelectSortType={onSelectSortType} />
        <StopsFilter onSelectStops={onSelectStops} />
        <PriceFilter value={price} onPriceChange={onPriceChange} />
        <CarrierFilter onSelectCarriers={onSelectCarriers} />
        <div className="bottom"></div>
      </div>
      <div className="cards">
        {filteredFlights.slice(0, visible).map((obj) => (
          <Card
            key={obj.flightToken}
            carrierTo={obj.flight.legs[0].segments[0].airline.caption}
            carrierBack={obj.flight.legs[1].segments[0].airline.caption}
            cost={obj.flight.price.total.amount}
            timeTo={obj.flight.legs[0].duration}
            timeBack={obj.flight.legs[1].duration}
            departureCityTo={
              obj.flight.legs[0].segments[0].departureCity.caption
            }
            departureAirportTo={obj.flight.legs[0].segments[0].departureAirport}
            arrivalCityTo={
              !obj.flight.legs[0].segments[1]
                ? obj.flight.legs[0].segments[0].arrivalCity.caption + ","
                : obj.flight.legs[0].segments[1].arrivalCity
                ? obj.flight.legs[0].segments[1].arrivalCity.caption + ","
                : ""
            }
            arrivalAirportTo={
              obj.flight.legs[0].segments[1]
                ? obj.flight.legs[0].segments[1].arrivalAirport
                : obj.flight.legs[0].segments[0].arrivalAirport
            }
            departureDateTo={obj.flight.legs[0].segments[0].departureDate}
            arrivalDateTo={
              obj.flight.legs[0].segments[1]
                ? obj.flight.legs[0].segments[1].arrivalDate
                : obj.flight.legs[0].segments[0].arrivalDate
            }
            departureCityBack={
              obj.flight.legs[1].segments[0].departureCity
                ? obj.flight.legs[1].segments[0].departureCity.caption
                : ""
            }
            departureAirportBack={
              obj.flight.legs[1].segments[0].departureAirport
            }
            arrivalCityBack={
              obj.flight.legs[1].segments[1]
                ? obj.flight.legs[1].segments[1].arrivalCity.caption
                : obj.flight.legs[1].segments[0].arrivalCity.caption
            }
            arrivalAirportBack={
              obj.flight.legs[1].segments[1]
                ? obj.flight.legs[1].segments[1].arrivalAirport
                : obj.flight.legs[1].segments[0].arrivalAirport
            }
            departureDateBack={obj.flight.legs[1].segments[0].departureDate}
            arrivalDateBack={
              obj.flight.legs[1].segments[1]
                ? obj.flight.legs[1].segments[1].arrivalDate
                : obj.flight.legs[1].segments[0].arrivalDate
            }
            transfer={obj.flight.legs[0].segments[1] ? true : false}
          />
        ))}
        <button className='show-more' onClick={showMoreCards}>Показать еще</button>
      </div>
    </div>
  );
}

export default App;
