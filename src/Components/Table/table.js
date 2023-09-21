import className from './table.module.scss'

const Table = () => {
    return (
        <>
            <div className={className.main}>
                <div className={className['main-header']}>
                    <p className={className['main-header__title']}>訊息公告欄</p>
                    <div className={className['main-header__box']}>
                        <a className={className['main-header__button'] + ' ' + className['main-header__button_add']}>
                            <i></i>
                            <p>新增</p>
                        </a>
                        <a className={className['main-header__button'] + ' ' + className['main-header__button_delete']}>
                            <i></i>
                            <p>刪除</p>
                        </a>
                        <a className={className['main-header__button'] + ' ' + className['main-header__button_search']}>
                            <i></i>
                            <p>查詢</p>
                        </a>
                    </div>
                </div>
                <div className={className['main-table']}>
                    <ul className={className['main-table-header']}>
                        <li className={className['main-table-header__item']}>序</li>
                        <li className={className['main-table-header__item']}>標題名稱</li>
                        <li className={className['main-table-header__item']}>分類</li>
                        <li className={className['main-table-header__item']}>刊登者</li>
                        <li className={className['main-table-header__item']}>刊登日期</li>
                        <li className={className['main-table-header__item']}>結束日期</li>
                        <li className={className['main-table-header__item']}>刊登</li>
                        <li className={className['main-table-header__item']}>編輯</li>
                    </ul>
                    <div className={className['main-table-body']}>
                        <ul className={className['main-table-body__row']}>
                            <li className={className['main-table-body__item']}><p>01</p></li>
                            <li className={className['main-table-body__item']}><p>疫情因素交流國際研討會改為線上模式辦理</p></li>
                            <li className={className['main-table-body__item']}><p>本院新聞</p></li>
                            <li className={className['main-table-body__item']}><p>Sally</p></li>
                            <li className={className['main-table-body__item']}><p>112-02-23</p></li>
                            <li className={className['main-table-body__item']}><p>112-03-16</p></li>
                            <li className={className['main-table-body__item']}><p>刊登</p></li>
                            <li className={className['main-table-body__item']}><p>編輯</p></li>
                        </ul>
                        <ul className={className['main-table-body__row']}>
                            <li className={className['main-table-body__item']}><p>02</p></li>
                            <li className={className['main-table-body__item']}><p>疫情因素交流國際研討會改為線上模式辦理</p></li>
                            <li className={className['main-table-body__item']}><p>本院新聞</p></li>
                            <li className={className['main-table-body__item']}><p>Sally</p></li>
                            <li className={className['main-table-body__item']}><p>112-02-23</p></li>
                            <li className={className['main-table-body__item']}><p>112-03-16</p></li>
                            <li className={className['main-table-body__item']}><p>刊登</p></li>
                            <li className={className['main-table-body__item']}><p>編輯</p></li>
                        </ul>
                    </div>
                </div>
                <div className={className['main-page']}>
                    <p className={className['main-page__text']}>共50條</p>
                    <div className={className['main-page__controller']}>
                        <i></i>
                        <a className={className['main-page__nums']}>1</a>
                        <a className={className['main-page__nums']}>2</a>
                        <a className={className['main-page__nums']}>3</a>
                        <a className={className['main-page__nums']}>4</a>
                        <a className={className['main-page__nums']}>5</a>
                        <i></i>
                    </div>
                    <p className={className['main-page__text']}>共32頁</p>
                    <p className={className['main-page__text']}>跳轉至</p>
                    <a className={className['main-page__nums']}>112</a>
                    <p className={className['main-page__text']}>頁</p>

                </div>
            </div>
        </>
    )
}

export { Table }