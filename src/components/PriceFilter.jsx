import React from 'react'

function PriceFilter({value, onPriceChange}) {
    return (
        <div>
          <div>
            <b>Цена</b>
          </div>
          <br/>
          <label >
          От <input type="text" value={value[0]} onChange={onPriceChange} data-index="0" />
          </label>
          <br/>
          <label >
          До <input type="text" value={value[1]} onChange={onPriceChange} data-index="1" />
          </label>
          <br/>

        </div>
    )
}

export default PriceFilter
