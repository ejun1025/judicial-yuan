import './header.scss'
import Dropdown from '../Dropdown/dropdown'
import { useRef } from 'react'

const dropdownData = [
    { ID: 1, Title: '訊息公告欄', Items: ['AAA', 'BBB', 'CCC', 'DDD', 'AAA', 'BBB', 'CCC', 'DDD'] },
    { ID: 2, Title: '電子閱卷聲請專區', Items: ['AAA', 'BBB', 'CCC', 'DDD'] },
    { ID: 3, Title: '電子書櫃', Items: ['AAA', 'BBB', 'CCC', 'DDD'] },
    { ID: 4, Title: '系統管理', Items: ['AAA', 'BBB', 'CCC', 'DDD'] },
]

const selectOption = () => {
    
}

const Header = () => {
    return (
        <>
        <div className='header'>
            <div className='header__logo'>
                <svg width="175" height="41" viewBox="0 0 175 41" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <rect width="175" height="41" fill="url(#pattern0)"/>
                    <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_12_2158" transform="scale(0.0070922 0.027027)"/>
                    </pattern>
                    <image id="image0_12_2158" width="141" height="37" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI0AAAAlCAYAAAB/EWomAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozMTdBNUQwNDg0MjA2ODExOEMxNEM2RTFBQTUxMjYxMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCOUYxMTE5MUM3NUUxMUU5OEY0MEExQ0JDNjZCMDc3MiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCOUYxMTE5MEM3NUUxMUU5OEY0MEExQ0JDNjZCMDc3MiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDQyNUI4QzJEODIwNjgxMTgyMkE4QjI2NkMwNTZFMkQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzE3QTVEMDQ4NDIwNjgxMThDMTRDNkUxQUE1MTI2MTMiLz4gPC9yZGY6RGVzY3Jp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"/>
                    </defs>
                </svg>
            </div>
            <div className='header-nav'>
                {dropdownData.map((data) => <Dropdown data={data} select={selectOption()}  />)}
            </div>
            <div className='header-info'>
                <p className='header-info__text'>陳哈哈，您好</p>
                <a className='header-info__button'>登出</a>
            </div>
        </div> 
    </>
    )
}

export { Header }