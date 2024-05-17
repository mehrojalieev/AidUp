import { Skeleton } from 'antd'
import './Table.scss'
import DoctorTr from './doctor-tr/DoctorTr'

const Table = ({ objectKeys, DoctorList, rowPage }) => {
    return (
        <>
            {
                DoctorList?.length > 0 ?
                    <table>
                        <thead>
                            <tr>
                                {
                                    objectKeys?.slice(1, 9).map((column_item, index) =>
                                        <th key={index}>{column_item}</th>
                                    )
                                }
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                DoctorList?.slice(0, rowPage).map((doctorItem, index) =>
                                    <DoctorTr doctorItem={doctorItem} key={index} />
                                )
                            }
                        </tbody>
                    </table>
                    :
                    [1, 2, 3, 4, 5, 6, 7, 78, 1, 1, 1, 1, 1, 1].map((_, index) =>
                        <div className='table-skeleton' key={index}>
                            <Skeleton.Input className='skeleton-item' style={{ width: '100%', marginTop: 1, display: 'block' }} size='default' />
                        </div>
                    )
            }
        </>
    )
}

export default Table
