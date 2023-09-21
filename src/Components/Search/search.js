import './search.scss'

const Search = () => {
    return (
        <>
            <div className='search'>
                <div className='search__header'>查詢條件</div>
                <div className='search-body'>
                    <div className='search-body__row'>
                        <p className='search-body__title'>關鍵字搜尋</p>
                        <input type='text' className='search-body__input' />
                        <p className='search-body__title'>刊登時間</p>
                        <input type='text' className='search-body__input' />
                    </div>
                    <div className='search-body__row'>
                        <p className='search-body__title'>分類</p>
                        <label className='search-body__label'>
                            <input type='checkbox' />
                            <i className='icon-checkbox'><svg><polyline points='0,9 5,13 13,3' /></svg></i>
                            <p>全選</p>
                        </label>
                        <label className='search-body__label'>
                            <input type='checkbox' />
                            <i className='icon-checkbox'><svg><polyline points='0,9 5,13 13,3' /></svg></i>
                            <p>本院新聞</p>
                        </label>
                        <label className='search-body__label'>
                            <input type='checkbox' />
                            <i className='icon-checkbox'><svg><polyline points='0,9 5,13 13,3' /></svg></i>
                            <p>各法院新聞</p>
                        </label>
                        <label className='search-body__label'>
                            <input type='checkbox' />
                            <i className='icon-checkbox'><svg><polyline points='0,9 5,13 13,3' /></svg></i>
                            <p>即時澄清新聞</p>
                        </label>
                    </div>
                    <div className='search-body__row'>
                        <a className='search-body__button search-body__button_blue'>查詢</a>
                        <a className='search-body__button search-body__button_white'>重置</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Search }