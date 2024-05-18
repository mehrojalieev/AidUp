import { Modal } from 'antd';
import { useEffect, useState } from 'react'
import { AppointmentType } from '../../../types';
import './AppointmentTr.scss'

const AppointmentTr = ({ appointmentItem, countColumn }: { appointmentItem: AppointmentType, countColumn: any }) => {

    const [detailModal, setDetailModal] = useState<any>(false)
    const [detailData, setDetailData] = useState<AppointmentType>()

    useEffect(() => {
        detailModal ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
    }, [detailModal])

    return (
        <tr className='appointment__table-row'>
            <td>{countColumn}</td>
            <td>{appointmentItem.user.firstname}</td>
            <td>{appointmentItem.doctor.firstName}</td>
            <td>{appointmentItem.from.slice(0, 10)}</td>
            <td>{appointmentItem.to.slice(0, 10)}</td>
            <td className='row-status'>
                <p >Approved</p>
            </td>
            <td className='status-action'><span onClick={() => { setDetailModal(true); setDetailData(appointmentItem) }} className='material-symbols-outlined'>visibility</span></td>
            <Modal className='appointment-modal' okType={'none' as any} okText=' ' cancelText=' ' title={<h5 className='appointment__modal-subtitle'>Manage Appointment Details</h5>} onCancel={() => setDetailModal(false)} open={detailModal}>
                <div className="detail-content">
                    <div className="content-item">
                        <strong className='item-key'>Patient Name</strong>
                        <p className='item-value'>{detailData?.user.firstname}</p>
                    </div>
                    <div className="content-item">
                        <strong className='item-key'>Doctor Name</strong>
                        <p className='item-value'>{detailData?.doctor.firstName}</p>
                    </div>
                    <div className="content-item">
                        <strong className='item-key'>Start Date</strong>
                        <p className='item-value'>{detailData?.from.slice(0, 10)}</p>
                    </div>
                    <div className="content-item">
                        <strong className='item-key'>End Date</strong>
                        <p className='item-value'>{detailData?.to.slice(0, 10)}</p>
                    </div>
                    <div className="content-item">
                        <strong className='item-key'>Status</strong>
                        <p className='item-value detail_modal-status'>Approved</p>
                    </div>

                </div>
                <div className="detail-action">
                    <button onClick={() => setDetailModal(false)} className='action-btn'>Complete</button>
                </div>
            </Modal>
        </tr>
    )
}

export default AppointmentTr
