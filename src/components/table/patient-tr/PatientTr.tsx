import { ReactNode, useState } from 'react';
import { AppointmentType } from '../../../types'
import './PatientTr.scss'
import { Button, Modal } from 'antd';
import { useDeleteBooking } from '../../../service/mutation/useDeleteBooking';
import { toast } from 'react-toastify';
import { client } from '../../../service/QueryClient';

const PatientTr = ({ patient, countColumn }: { patient: AppointmentType, countColumn: ReactNode }) => {

    const [patientModal, setPatientModal] = useState<boolean>(false)
    const [deletePatientModal, setDeletePatientModal] = useState<boolean>(false)
    const [patientData, setPatientData] = useState<AppointmentType>()
    const [bookingId, setBookingId] = useState<any>()


    const { mutate } = useDeleteBooking()
    const handleDeleteBooking = () => {
        mutate(bookingId, {
            onSuccess: (res) => {
                console.log(res);
                if (res.statusCode === 200) {
                    client.invalidateQueries({queryKey: ['get-booking']})
                    setDeletePatientModal(false)
                    toast.success(`${res.message}`, {autoClose: 2000 })
                }
            }
        })
    }

    return (
        <tr className='patient__table-row'>
            <td>{countColumn}</td>
            <td>{patient.user.firstname}</td>
            <td>{patient.user.email}</td>
            <td>{patient.user.dateOfBirth.slice(0, 10)}</td>
            <td>Male</td>
            <td>Diabetes Type 2, High Cholesterol</td>
            <td className='patient__row-action'>
                <span onClick={() => { setPatientModal(true); setPatientData(patient) }} className='material-symbols-outlined show-icon'>visibility</span>
                <span className='material-symbols-outlined edit-icon'>edit</span>
                <span onClick={() => { setDeletePatientModal(true); setBookingId(patient.id) }} className='material-symbols-outlined delete-icon'>delete</span>
            </td>
            {/* Detail Modal */}
            <Modal className='patient-modal' title={<h5 className='patient__modal-subtitle'>Show Patient Details</h5>} open={patientModal} onOk={() => setPatientModal(true)} cancelText={' '} okText=' ' okType={'none' as any} onCancel={() => setPatientModal(false)}>
                <div className="patient__modal-content">
                    <div className="content-item">
                        <strong className='item-key'>Patient Name</strong>
                        <p className='item-value'>{patientData?.user.firstname}</p>
                    </div>
                    <div className="content-item">
                        <strong className='item-key'>Patient Email</strong>
                        <p className='item-value'>{patientData?.user.email}</p>
                    </div>
                    <div className="content-item">
                        <strong className='item-key'>Doctor Name</strong>
                        <p className='item-value'>{patientData?.doctor.firstName}</p>
                    </div>
                    <div className="content-item">
                        <strong className='item-key'>DOB</strong>
                        <p className='item-value'>{patientData?.user.dateOfBirth.slice(0, 10)}</p>
                    </div>
                    <div className="content-item">
                        <strong className='item-key'>Gender</strong>
                        <p className='item-value'>Male</p>
                    </div>
                    <div className="content-item">
                        <strong className='item-key'>Medical History</strong>
                        <p className='item-value'>Diabetes Type 2, High Cholesterol</p>
                    </div>
                </div>
            </Modal>

            {/* Delete Modal */}
            <Modal className='delete__user-modal' open={deletePatientModal} okText={<Button onClick={handleDeleteBooking} className='delete-btn'>Delete</Button>} okType={'none' as any} onOk={() => setDeletePatientModal(true)} onCancel={() => setDeletePatientModal(false)}>
                <span className='modal-icon material-symbols-outlined'>warning</span>
                <h5 className='modal-subtitle'>Delete Patient ?</h5>
                <p className='modal-text'>This action can not bu undone. Do you want to continue ?</p>
            </Modal>
        </tr>
    )
}

export default PatientTr
