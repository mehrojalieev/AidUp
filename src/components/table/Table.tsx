// import { Skeleton } from 'antd'
import './Table.scss'
import DoctorTr from './doctor-tr/DoctorTr'
import { Key } from 'react';
import AppointmentTr from './appointment-tr/AppointmentTr';
import PatientTr from './patient-tr/PatientTr';
import { AppointmentType } from '../../types';

const Table = ({ tableHeader, renderData, rowPage, tableType }: { tableHeader?: any, renderData: any, rowPage: any, tableType: String }) => {

    return (
        <>

            {
                tableType === 'doctors' ?
                    <table>
                        <thead>
                            <tr>
                                {
                                    tableHeader?.slice(1, 9).map((column_item: any, index: Key) =>
                                        <th key={index}>{column_item}</th>
                                    )
                                }
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                renderData?.slice(0, rowPage).map((doctorItem: any, index: Key) =>
                                    <DoctorTr doctorItem={doctorItem} key={index} />
                                )
                            }
                        </tbody>
                    </table>


                    : tableType === 'appointments' ?
                        <table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Patient Name</th>
                                    <th>Doctor Name</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    renderData?.slice(0, rowPage).map((appointmentItem: any, index: any) =>
                                        <AppointmentTr appointmentItem={appointmentItem} countColumn={index + 1} key={appointmentItem.id} />
                                    )
                                }
                            </tbody>
                        </table>
                        : tableType === 'patients' ?
                            <table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>NAME</th>
                                        <th>EMAIL</th>
                                        <th>DOB</th>
                                        <th>GENDER</th>
                                        <th>MEDICAL HSITORY</th>
                                        <th>ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        renderData?.slice(0, rowPage).map((patient: AppointmentType, index: any) =>
                                            <PatientTr countColumn={index + 1} patient={patient} key={index} />
                                        )
                                    }
                                </tbody>
                            </table>
                            : null
            }
            {/* // :
                    // [1, 2, 3, 4, 5, 6, 7, 78, 1, 1, 1, 1, 1, 1].map((_, index) =>
                    //     <div className='table-skeleton' key={index}>
                    //         <Skeleton.Input className='skeleton-item' style={{ width: '100%', marginTop: 1, display: 'block' }} size='default' />
                    //     </div>
                    // ) */}

        </>
    )
}

export default Table
