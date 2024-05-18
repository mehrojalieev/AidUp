import React, { useState } from 'react'
import './Patients.scss'
import Table from '../../../components/table/Table'
import { useGetBooking } from '../../../service/query/useGetBooking'
import { AppointmentType } from '../../../types'


const Patients = () => {
    const {data} = useGetBooking()

    const [rowPage, setRowPage] = useState<Number>(5)
    
    return (
        <div>
            Patients
            <Table renderData={data?.data} rowPage={rowPage}  tableType='patients' />
        </div>
    )
}

export default Patients