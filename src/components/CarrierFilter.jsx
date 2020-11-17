import React from 'react'

function CarrierFilter({onSelectCarriers}) {
    return (
        <div>
          <div>
            <b>Авиакомпании</b>
          </div>
          <br/>
          <label>
            <input type="checkbox" onClick={()=>onSelectCarriers('lot')}  /> - LOT Polish Airlines от 21049 р.
          </label>
          <label>
            <input type="checkbox" onClick={()=>onSelectCarriers('aeroflot')} /> - Аэрофлот - рос... от 31733 р.
          </label>
          <br/>
        </div>
    )
}

export default CarrierFilter
