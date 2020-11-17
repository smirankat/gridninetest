import React from 'react'

function StopsFilter({onSelectStops}) {
    return (
        <div>
          <div>
            <b>Фильтровать</b>
          </div>
          <br/>
          <label>
            <input type="checkbox"  onClick={()=>onSelectStops('yes')} /> - 1 пересадка
          </label>
          <label>
            <input type="checkbox"   onClick={()=>onSelectStops('no')} /> - без пересадок
          </label>
          <br/>
        </div>
    )
}

export default StopsFilter
