import { useEffect, useState } from 'react';
import { useGetBooking } from '../../../service/query/useGetBooking';
import './Appointments.scss'
import Table from '../../../components/table/Table';


const Appointments = () => {

    // HOOKS
    const [rowPage, setRowpage] = useState<Number>(5)

    useEffect(() => {
        setRowpage(5)
    }, [])

    const { data: bookingsAll } = useGetBooking()

    return (
        <div>
            <Table renderData={bookingsAll?.data} rowPage={rowPage} tableType='appointments' />
        </div>
    )
}

export default Appointments