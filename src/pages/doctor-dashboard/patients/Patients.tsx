import { useEffect, useState } from 'react'
import './Patients.scss'
import Table from '../../../components/table/Table'
import { useGetBooking } from '../../../service/query/useGetBooking'
import { AppointmentType } from '../../../types'
import { Tooltip, Input, Divider } from 'antd'
const { Search } = Input


const Patients = () => {
    const { data } = useGetBooking()
    const [rowPage, setRowPage] = useState<Number>(5)
    const [inputValue, setInputValue] = useState<String>("")
    const [bookingData, setBookingData] = useState([])


    useEffect(() => {
        if (inputValue.trim().length > 0) {
            const searchedData = (data?.data.filter((booking: AppointmentType) => booking.user.firstname.toLowerCase().includes(inputValue.toLowerCase())))
            setBookingData(searchedData)
        } else {
            setBookingData(data?.data)
        }
    }, [inputValue])

    return (
        <div>
            <div className="patient-header">
                <h3 className='header-title'>Manage Patients</h3>
                <Tooltip title='Add New Patient' className='material-symbols-outlined header__add-action'>add</Tooltip>
            </div>
            <Divider />
            <div className="patient__form-wrapper">
                <Search className='search-form'
                    placeholder='Search Patient...'
                    allowClear
                    enterButton
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <select className='row-select' onChange={(e: any) => setRowPage(e.target.value)}>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                </select>
            </div>
            <Table renderData={bookingData} rowPage={rowPage} tableType='patients' />
        </div>
    )
}

export default Patients