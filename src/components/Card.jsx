import React from "react";

function Card({
  carrierTo,
  carrierBack,
  cost,
  timeTo,
  timeBack,
  departureCityTo,
  departureAirportTo,
  arrivalCityTo,
  arrivalAirportTo,
  departureDateTo,
  arrivalDateTo,
  departureCityBack,
  departureAirportBack,
  arrivalCityBack,
  arrivalAirportBack,
  departureDateBack,
  arrivalDateBack,
  transfer
}) {
 const days =["вс", "пн", "вт", "ср", "чт", "пт", "сб"]
 const months =["янв.", "фев.", "мар.", "мая", "июн.", "июл.", "авг.", "сен.", "окт.", "нояб.", "дек."]

const outTimeTo = new Date(departureDateTo).toLocaleTimeString().slice(0,-3)
const outDateTo = new Date(departureDateTo).getDate()
const outMonthTo = months[new Date(departureDateTo).getMonth()]
const outDayTo = days[new Date(departureDateTo).getDay()]

const inTimeTo = new Date(arrivalDateTo).toLocaleTimeString().slice(0,-3)
const inDateTo = new Date(arrivalDateTo).getDate()
const inMonthTo = months[new Date(arrivalDateTo).getMonth()]
const inDayTo = days[new Date(arrivalDateTo).getDay()]

const outTimeBack = new Date(departureDateBack).toLocaleTimeString().slice(0,-3)
const outDateBack = new Date(departureDateBack).getDate()
const outMonthBack = months[new Date(departureDateBack).getMonth()]
const outDayBack = days[new Date(departureDateBack).getDay()]

const inTimeBack = new Date(arrivalDateBack).toLocaleTimeString().slice(0,-3)
const inDateBack = new Date(arrivalDateBack).getDate()
const inMonthBack = months[new Date(arrivalDateBack).getMonth()]
const inDayBack = days[new Date(arrivalDateBack).getDay()]

  return (
    <div className="card">
      <header>
        <img src="" alt="logo" />
        <div className="price">
          {cost} &#x20bd;
          <br />
          Стоимость для одного взрослого пассажира
        </div>
      </header>
      <main>
        <div className="itinerary">
          <div className="flight">
            {departureCityTo}, {departureAirportTo.caption}&nbsp;
            <span>({departureAirportTo.uid}) &#8594;</span> {arrivalCityTo} {arrivalAirportTo.caption}&nbsp;
            <span>({arrivalAirportTo.uid})</span>
          </div>
          <hr />
          <div className="time">
            <div>
  {outTimeTo} <span>{outDateTo} {outMonthTo} {outDayTo}</span>
            </div>
            <div>
              &#128339; {(timeTo - (timeTo % 60)) / 60} ч {timeTo % 60} мин
            </div>
            <div>
              <span>{inDateTo} {inMonthTo} {inDayTo}</span> {inTimeTo}
            </div>
          </div>
          <div className="stop">
            { transfer ?
              <div className='stop__text'>
            <div className='hl'></div>
            <div>1 пересадка</div>
            <div className='hl'></div>
            </div>
            :
            <div className='stop__line'></div>}
          </div>
          <div className="carrier">Рейс выполняет: {carrierTo}</div>
        </div>
        <div className="hline"></div>
        <div className="itinerary">
          <div className="flight">
            {departureCityBack}, {departureAirportBack.caption}&nbsp;
            <span>({departureAirportBack.uid}) &#8594;</span> {arrivalCityBack}, {arrivalAirportBack.caption}&nbsp;
            <span>({arrivalAirportBack.uid})</span>
          </div>
          <hr />
          <div className="time">
            <div>
              {outTimeBack} <span>{outDateBack} {outMonthBack} {outDayBack}</span>
            </div>
            <div>
              &#128339; {(timeBack - (timeBack % 60)) / 60} ч {timeBack % 60}{" "}
              мин
            </div>
            <div>
            <span>{inDateBack} {inMonthBack} {inDayBack}</span> {inTimeBack}
            </div>
          </div>
          <div className="stop">
          { transfer ?
              <div className='stop__text'>
            <div className='hl'></div>
            <div>1 пересадка</div>
            <div className='hl'></div>
            </div>
            :
            <div className='stop__line'></div>}
          </div>
          <div className="carrier">Рейс выполняет: {carrierBack}</div>
        </div>
      </main>
      <button>ВЫБРАТЬ</button>
    </div>
  );
}

export default Card;
