import {  useEffect, useState } from "react"
import "./Utils.scss"
import {  Select } from 'antd';
import { useCreateDoctor } from "../service/mutation/useCreateDoctor";
import { client } from "../service/QueryClient";
import { useCreateUser } from "../service/mutation/useCreateUser";
import { Children } from "../types";


// CONTAINER CONTENT
const Container = ({ children }: Children) => {
  return (
    <div className="container">
      {children}
    </div>
  )
}
export default Container



// --- ADD A NEW DOCTOR MODAL ---
export const AddDoctorModal = ({ openDoctorModal, setOpenDoctorModal }: {openDoctorModal: Boolean, setOpenDoctorModal: any}) => {

  const specializationData = [
    { "value": "cardiologist", "label": "Cardiologist" },
    { "value": "dermatologist", "label": "Dermatologist" },
    { "value": "endocrinologist", "label": "Endocrinologist" },
    { "value": "gastroenterologist", "label": "Gastroenterologist" },
    { "value": "neurologist", "label": "Neurologist" },
    { "value": "oncologist", "label": "Oncologist" },
    { "value": "ophthalmologist", "label": "Ophthalmologist" },
    { "value": "orthopedic_surgeon", "label": "Orthopedic Surgeon" },
    { "value": "pediatrician", "label": "Pediatrician" },
    { "value": "psychiatrist", "label": "Psychiatrist" },
    { "value": "urologist", "label": "Urologist" }
  ]

  // HOOKS
  const [firstName, setFirstName] = useState<String>("")
  const [lastName, setLastName] = useState<String>("")
  const [email, setEmail] = useState<String>("")
  const [address, setAddress] = useState<String>("")
  const [dateOfBirth, setDateOfBirth] = useState<any>()
  const [contactNumber, setContactNumber] = useState<any>()
  const [gender, setGender] = useState<String>('')
  const [specialization, setSpecialization] = useState<String>("")


  const { mutate } = useCreateDoctor()

  useEffect(() => {
    if (openDoctorModal) {
      document.body.style.overflow = 'hidden'
    }
    else {
      document.body.style.overflow = 'auto'
    }
  }, [openDoctorModal])


  const handleCreateDoctor = (e: Event) => {
    e.preventDefault()
    const DoctorData: any = {
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: new Date(dateOfBirth).toISOString(),
      gender: Number(gender),
      specialization: specialization,
      address: address,
      hospitalId: 2,
      contactNumber: contactNumber,
      email: email
    }

    mutate(DoctorData, {
      onSuccess: (res) => {
        console.log(res);
        res.status === 200 && setOpenDoctorModal(false)
        client.invalidateQueries({queryKey: ['get-doctors']})
      }
    })


  }

  return (
    <div style={openDoctorModal ? { display: 'flex' } : { display: 'none' }} className="modal-overlay">

      <div className="add__doctor-modal">
        <h3 className="modal-title">Create New doctor</h3>
        <form onSubmit={handleCreateDoctor as any} className="modal-form">
          <div className="form-item">
            <label htmlFor="doctor-name">Firstname
              <input onChange={(e) => setFirstName(e.target.value)} type="text" id="doctor-name" placeholder="Enter Doctor Name" />
            </label>
            <label htmlFor="lastname">Lastname
              <input onChange={(e) => setLastName(e.target.value)} type="text" id="lastname" placeholder="Enter Doctor Lastname" />
            </label>

          </div>
          <div className="form-item">
            <label htmlFor="doctor-phone">Phone
              <input onChange={(e) => setContactNumber(e.target.value) } type="number" id="doctor-phone" placeholder="Enter Doctor phone" />
            </label>
            <label htmlFor="doctor-email">Email
              <input onChange={(e) => setEmail(e.target.value)} type="email" id="doctor-email" placeholder="Enter Doctor Email" />
            </label>
          </div>
          <div className="form-item">

            <label htmlFor="address">Address
              <input onChange={(e) => setAddress(e.target.value)} type="text" id="address" placeholder="Enter Doctor Address" />
            </label>
            <label htmlFor="doctor-specialization">Specialization
              <Select
                className="specialization-select"
                id="doctor-specialization"
                defaultValue="Select Specialization"
                style={{ width: '100%' }}
                onChange={(selectedOption) => setSpecialization(selectedOption)}
                options={specializationData}
              />
            </label>
          </div>
          <div className="form-item">
            <label htmlFor="license-number">Birthday
              <input type="date" onChange={(e) => setDateOfBirth(e.target.value)} />
            </label>
            <div className="select-gender">
              <h5 className="gender-title">Gender</h5>
              <div className="gender-item">
                <label htmlFor="male">Male
                  <input onChange={(e) => setGender(e.target.value)} name="gender" type="radio" value={0} />
                </label>
                <label htmlFor="female" >Female
                  <input onChange={(e) => setGender(e.target.value)} name="gender" type="radio" value={1} />
                </label>
              </div>
            </div>
          </div>
          <div className="form__action-btns">
            <button type="button" onClick={() => setOpenDoctorModal(!openDoctorModal)} className="cancel-btn">Cancel</button>
            <button type="submit" className="create-btn">Create</button>
          </div>
        </form>
      </div>
    </div>
  )
}

// --- ADD A NEW USER MODAL ---
export const AddUserModal = ({ openUserModal, setOpenUserModal }: {openUserModal: Boolean, setOpenUserModal: any}) => {
  const [userFirstname, setUserFirstname] = useState('')
  const [userLastname, setUserLastname] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [userBirthday, setUserBirthday] = useState('')

  useEffect(() => {
    openUserModal ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
  }, [openUserModal])

  const { mutate } = useCreateUser()
  const handleCreateUser = (e: Event) => {
    e.preventDefault()
    const UserData: any = {
      firstname: userFirstname,
      lastname: userLastname,
      email: userEmail,
      password: userPassword,
      dateOfBirth: new Date(userBirthday).toISOString()
    }
    mutate(UserData, {
      onSuccess: (res) => {
        console.log(res);
      }
    })

  }


  return (
    <div style={openUserModal ? { display: 'flex' } : { display: 'none' }} className="modal-overlay">

      <div className="add__user-modal">
        <h3 className="modal-title">Create New User</h3>
        <form onSubmit={handleCreateUser as any} className="modal-form">
          <div className="form-item">
            <label htmlFor="user-name">Firstname
              <input onChange={(e) => setUserFirstname(e.target.value)} type="text" id="user-name" placeholder="Enter User Firstname" />
            </label>
            <label htmlFor="lastname">Lastname
              <input onChange={(e) => setUserLastname(e.target.value)} type="text" id="lastname" placeholder="Enter User Lastname" />
            </label>
          </div>
          <div className="form-item">
            <label htmlFor="license-number">Birthday
              <input onChange={(e) => setUserBirthday(e.target.value)} type="date" />
            </label>
            <label htmlFor="user-email">Email
              <input onChange={(e) => setUserEmail(e.target.value)} type="email" id="user-email" placeholder="Enter User Email" />
            </label>
          </div>

          <div className="form-item password-item">
            <label htmlFor="user-password">Password
              <input onChange={(e) => setUserPassword(e.target.value)} type="password" id="user-password" placeholder="Enter User Password" />
            </label>
          </div>
          <div className="form__action-btns">
            <button type="button" onClick={() => setOpenUserModal(!openUserModal)} className="cancel-btn">Cancel</button>
            <button type="submit" className="create-btn">Create</button>
          </div>
        </form>
      </div>
    </div>
  )
}


// --- UPDATE USER MODAL

export const UpdateUserModal = ({updateUserModal}: {updateUserModal: Boolean, setUpdateUserModal: any}) => {
  return (
    <div style={updateUserModal ? {display: 'flex'} : {display: 'none'}} className="update__modal-overlay">

      <div className="update__user-modal">

      </div>
    </div>
  )
}

