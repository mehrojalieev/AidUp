import React, { useEffect, useState } from 'react'
import './Doctors.scss'
import ApiInstance from '../../../api'
import { AddDoctorModal } from '../../../utils/Utils';
import Table from '../../../components/table/Table';
import { Select, Input } from 'antd'
import { useGetDoctors } from '../../../service/query/useGetDoctors';
const { Search } = Input;



const specializationData = [
    { "value": '', "label": 'All Specialization' },
    { "value": "Cardiology", "label": "Cardiology" },
    { "value": "Dermatology", "label": "Dermatology" },
    { "value": "EmergencyMedicine", "label": "Emergency Medicine" },
    { "value": "Endocrinology", "label": "Endocrinology" },
    { "value": "FamilyMedicine", "label": "Family Medicine" },
    { "value": "Gastroenterology", "label": "Gastroenterology" },
    { "value": "Geriatrics", "label": "Geriatrics" },
    { "value": "Hematology", "label": "Hematology" },
    { "value": "InternalMedicine", "label": "Internal Medicine" },
    { "value": "Nephrology", "label": "Nephrology" },
    { "value": "Neurology", "label": "Neurology" },
    { "value": "Oncology", "label": "Oncology" },
    { "value": "Ophthalmology", "label": "Ophthalmology" },
    { "value": "Orthopedics", "label": "Orthopedics" },
    { "value": "Otolaryngology", "label": "Otolaryngology (ENT)" },
    { "value": "Pediatrics", "label": "Pediatrics" },
    { "value": "PhysicalMedicineRehabilitation", "label": "Physical Medicine and Rehabilitation" },
    { "value": "Psychiatry", "label": "Psychiatry" },
    { "value": "Pulmonology", "label": "Pulmonology" },
    { "value": "Radiology", "label": "Radiology" },
    { "value": "Rheumatology", "label": "Rheumatology" },
    { "value": "Surgery", "label": "Surgery" },
    { "value": "Urology", "label": "Urology" }
]


const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: Math.floor(Math.random() * 30),
        address: `London, Park Lane no. ${i}`,
        action:
            <>
                <button>Delete</button>
                <button >Edit</button>
            </>
    });
}


const Doctors = () => {
    // HOOKS
    const [objectKey, setObjectKey] = useState(null)
    const [DoctorList, setDoctorList] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [orderedValue, setOrderedValue] = useState('')
    const [rowPage, setRowPage] = useState(10)
    const [openDoctorModal, setOpenDoctorModal] = useState(false)

    const { data: doctorsList } = useGetDoctors()

    // Get Object Keys
    useEffect(() => {
        const allKeys = doctorsList?.data.reduce((keys, doctor) => {
            return keys.concat(Object.keys(doctor))
        }, [])
        const uniqueKeys = [...new Set(allKeys)]
        setObjectKey(uniqueKeys)
    }, [doctorsList])

    //  Render Doctors List from Array
    const handleOrder = (value) => {
        setOrderedValue(value)
    };

    
    useEffect(() => {
        if (inputValue.length > 0) {
            const searchedData = doctorsList?.data?.filter(doctor => doctor?.firstName?.toLowerCase().includes(inputValue?.toLowerCase()))
            setDoctorList(searchedData)
        }
        else if (orderedValue) {
            const orderedData = doctorsList?.data?.filter(doctor => doctor?.specialization?.toLowerCase() === orderedValue?.toLowerCase())
            setDoctorList(orderedData)
        }
        else {
            setDoctorList(doctorsList?.data)
        }
    }, [inputValue, orderedValue, doctorsList?.data])

    return (
        <div className='doctors-content'>
            <div className="doctors__content-navigation">
                <h3 className='doctors-subtitle'>Manage Doctors</h3>
                <div className='add__doctor-action'>
                    <span onClick={() => setOpenDoctorModal(true)} className='material-symbols-outlined'>add</span>
                    <button onClick={() => setOpenDoctorModal(true)} className='add__doctor-btn'>Add Doctor</button>
                </div>
            </div>
            <div className="doctor__content-actions">


                <form className='search__form-wrapper'>


                    <Search
                        placeholder="Search Doctor..."
                        allowClear
                        className='search-form'
                        enterButton
                        size="middle"

                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </form>
                <div className="order__page-action">

                    <select className='select-page' onChange={(e) => setRowPage(e.target.value)}>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={15}>15</option>
                        <option value={20}>20</option>
                    </select>
                    <p> page</p>
                </div>
                <Select
                    defaultValue="Select Specialization"
                    className='select-specialization'
                    onChange={handleOrder}
                    options={specializationData}
                    size='middle'
                />

            </div>
            <Table rowPage={rowPage} objectKeys={objectKey} inputValue={inputValue} orderedValue={orderedValue} DoctorList={DoctorList} />
            <AddDoctorModal DoctorList={doctorsList?.data} openDoctorModal={openDoctorModal} setOpenDoctorModal={setOpenDoctorModal} />
        </div>
    )
}

export default Doctors