import './message-board.scss'
import { Header } from '../../Components/Header/header'
import { Search } from '../../Components/Search/search'
import { Table } from '../../Components/Table/table'

export default function MessageBoard() {
    return (
        <>
            <Header />
            <div className='main'>
                <Search />
                <Table />
            </div>
        </>
    )
}