import { useEffect, useState } from 'react';
import './DoctorTr.scss'
import { Modal, Button, Divider } from 'antd';
import { useDeleteDoctor } from '../../../service/mutation/useDeleteDoctor';
import { client } from '../../../service/QueryClient';
import { toast } from 'react-toastify';

const DoctorTr = ({ doctorItem }) => {
  const [doctorId, setDoctorId] = useState()
  const [doctorName, setDoctorName] = useState('')
  const [updateModal, setUpdateModal] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [detailModal, setDetailModal] = useState(false)
  const [doctorDetail, setDoctorDetail] = useState(null)
  const [randomYear, setRandomYear] = useState(Math.floor(Math.random() * 15))


  const { mutate } = useDeleteDoctor()
  const handleDelete = (e) => {
    e.preventDefault()
    mutate(doctorId, {
      onSuccess: (res) => {
        client.invalidateQueries({ queryKey: 'doctors' })
        if (res.statusCode === 200) {
          setIsModalOpen(false)
          toast.success('Doctor Deleted', {
            autoClose: 2000
          })
        }
      }
    })
  };

  useEffect(() => {
    isModalOpen || detailModal ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
  }, [isModalOpen, detailModal])

  return (
    <tr className='body-row'>
      <td>{doctorItem.firstName}</td>
      <td>{doctorItem.lastName}</td>
      <td>{doctorItem.dateOfBirth?.slice(0, 10)}</td>
      <td>{doctorItem.gender === 0 ? 'Male' : 'Female'}</td>
      <td>{doctorItem.specialization}</td>
      <td>{doctorItem.address}</td>
      <td>{doctorItem.contactNumber}</td>
      <td>{doctorItem.email}</td>
      <td className='row-action'>
        <span onClick={() => { setDetailModal(true); setDoctorDetail(doctorItem) }} className='material-symbols-outlined eye-icon'>visibility</span>
        <span onClick={() => setUpdateModal(true)} className='material-symbols-outlined edit-icon'>edit</span>
        <span onClick={() => { setIsModalOpen(true); setDoctorId(doctorItem.id); setDoctorName(doctorItem.firstName) }} className='material-symbols-outlined delete-icon'>Delete</span>
      </td>
      {/* DELETE MODAL */}
      <Modal className='delete-modal' title={<h5 className='modal-subtitle'>Delete Doctor ?</h5>} open={isModalOpen} onOk={handleDelete} okText={<Button className='delete-btn'>Delete</Button>} okType='none' onCancel={() => setIsModalOpen(false)}>
        <span className=' material-symbols-outlined warning-icon'>warning</span>
        <p className='delete-text'>{`Are you sure you want to delete user ${doctorName} `}?</p>
      </Modal>
      {/* DETAIL MODAL */}
      <Modal className='doctor__data-modal' title={<h5 className='modal-subtitle'>Show Doctor Details</h5>} open={detailModal} onCancel={() => setDetailModal(false)} okType='none' okText=' ' cancelText={' '}  >
        <Divider />
        <div className="detail__item-box">
          <div className="detail-item">
            <strong>Doctor Name</strong>
            <p>{doctorDetail?.lastName} {doctorDetail?.firstName}</p>
          </div>
          <div className="detail-item">
            <strong>Doctor Email</strong>
            <p>{doctorDetail?.email}</p>
          </div>
          <div className="detail-item">
            <strong>Gender</strong>
            <p>{doctorDetail?.gender === 0 ? 'Male' : 'Femail'}</p>
          </div>
          <div className="detail-item">
            <strong>Contact No.</strong>
            <p>{doctorDetail?.contactNumber}</p>
          </div>
          <div className="detail-item">
            <strong>Specialization</strong>
            <p>{doctorDetail?.specialization}</p>
          </div>
          <div className="detail-item">
            <strong>Years Of Experience</strong>
            <p>{randomYear === 0 ? 2 : randomYear}</p>
          </div>
        </div>
      </Modal>

      {/* UPDATE MODAL */}
      <Modal className='doctor__update-modal' title={<h5 className='modal-subtitle'>Show Doctor Details</h5>} open={updateModal} onCancel={() => setUpdateModal(false)} okType='none' >

      </Modal>
    </tr>
  )
}

export default DoctorTr
