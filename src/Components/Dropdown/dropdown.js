import './dropdown.scss'
import { useState } from 'react'

const Dropdown = (data) => {
    const showTitle = data.data.Title;
    const showItems = data.data.Items;
    const [openedPlaceId, setOpenedPlaceId] = useState(undefined);

    const openDropdown = (placeId, e) => { 
        console.log(placeId)

        const id = placeId === openedPlaceId ? undefined : placeId;

        console.log(id)

        setOpenedPlaceId(id);

        console.log(openedPlaceId)
    }

    return (
        <>
            <div className='dropdown' key={data.data.ID}>
                <div className='dropdown__module' onClick={(e) => {
                      openDropdown(data.data.ID);
                    }}>
                    <p className='dropdown__title'>{showTitle}</p>
                    <i className='dropdown__icon'><svg><polyline points="0,0 5,4 10,0" /></svg></i>
                </div>
                {openedPlaceId === data.data.ID && (
                    <div className='dropdown__list dropdown__list_active'>
                        {showItems.map((ele) => <div className='dropdown__item'>{ele}</div>)}
                    </div>
                )}

                {openedPlaceId !== data.data.ID && (
                    <div className='dropdown__list'>
                        {showItems.map((ele) => <div className='dropdown__item'>{ele}</div>)}
                    </div>
                )}
            </div>
        </>
    )
}


export default Dropdown
