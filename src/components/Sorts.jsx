import React from 'react'

function Sort({onSelectSortType}) {

    return (
        <div>
          <div>
            <b>Сортировать</b>
          </div>
          <br/>
          <label>
            <input type="radio" name="sort" onClick={() => onSelectSortType('asc')} /> - по возрастанию цены
          </label>
          <label>
            <input type="radio" name="sort" onClick={() => onSelectSortType('desc')}/> - по убыванию цены
          </label>
          <label>
            <input type="radio" name="sort" onClick={() => onSelectSortType()}/> - по времени в пути
          </label>
          <br/>
        </div>
    )
}

export default Sort
