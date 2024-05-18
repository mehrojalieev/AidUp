import  { useEffect, useRef, useState } from 'react'
import './UserCard.scss'
import { Button, Divider, Modal, Upload, Form, Input, DatePicker } from 'antd'
import { useDeleteUser } from '../../../../service/mutation/useDeleteUser'
// import { UpdateUserModal } from '../../../../utils/Utils'
import { useUpdateUser } from '../../../../service/mutation/useUpdateUser'
// import { toast } from 'react-toastify'
// import { UploadOutlined } from '@ant-design/icons';
import { client } from '../../../../service/QueryClient'
import { UserType } from '../../../../types';


const UserCard = ({ userItem }: {userItem: any}) => {
    const { mutate  } = useUpdateUser()
    // --- STATE HOOKS ---
    const clickOutside: any = useRef()
    const [userId, setUserId] = useState<string>('')
    const [fileList, setFileList] = useState([])
    // const [photoUrl, setPhotourl] = useState(null)
    // const [imageList, setImageList] = useState([])
    const [openAction, setOpenAction] = useState(false)
    const [currentUser, setCurrentUser] = useState<UserType |undefined>()
    // const [updatePhoto, setUpdatePhoto] = useState(null)
    // const [previewImage, setPreviewImage] = useState('')
    const [deleteModal, setDeleteModal] = useState(false)
    // const [previewOpen, setPreviewOpen] = useState(false)
    const [updatingBirthday, setUpdatingBirthday] = useState<String | undefined>('')
    const [updateUpdateModal, setUpdateUserModal] = useState(false)
    const [updatingFirstname, setUpdatingFirstname] = useState(currentUser?.firstname)


    console.log(updatingBirthday, updatingFirstname);
    


    useEffect(() => {
        setUpdatingFirstname(currentUser?.firstname)
        setUpdatingBirthday(currentUser?.dateOfBirth)
    }, [currentUser])

    // Using Queries
    const { mutate: mutateDelete } = useDeleteUser()



    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (clickOutside.current && !clickOutside.current.contains(event.target))  {
                setOpenAction(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);
    


    // --- Delete User Function ---
    const handleDeleteUser = () => {
        mutateDelete(userId as any, {
            onSuccess: (res) => {
                res.statusCode === 200 && setDeleteModal(false)
                client.invalidateQueries({ queryKey: ['get-users'] })
            }
        })
    }

    useEffect(() => {
        deleteModal || updateUpdateModal ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
    }, [deleteModal, updateUpdateModal])





    // const handleUploadPhoto = (e: any) => {
    //     const file = e.target.files[0]
    //     if (file) {
    //         const fileReader = new FileReader()
    //         fileReader.onload = (e) => {
    //             const content = e.target.result
    //             setUpdatePhoto(content)
    //             setPhotourl(content)
    //         }
    //         fileReader.readAsDataURL(file)
    //     }
    // }

    // --- Update User Function ---
    const handleUpdateUser = (values: any) => {
        const formData: any = new FormData();
        formData.append('Id', userItem?.id);
        formData.append('Firstname', values?.firstname);
        formData.append('Lastname', values?.lastname);
        formData.append('DateOfBirth', new Date(values?.dateofbirth).toISOString());
        formData.append('ImagePath', values?.image?.file || null)
        console.log(formData);

        // fetch('http://45.138.158.240:4040/api/users/update', {
        //     method: 'PUT',
        //     headers: {
        //         'Content-Type': 'multipart/form-data',
        //         'Authorization': `Bearer ${token}`
        //     },
        //     body: formData
        // })
        //     .then(response => response.json())
        //     .then(data => console.log(data))
        //     .catch(error => console.log(error))


        mutate(formData, {
            // onSuccess: (res: Response) => {
            //     // res.statusCode === 200 && setUpdateUserModal(false)
            //     // client.invalidateQueries({ queryKey: ['get-users'] })
            //     console.log(res);
            // },
            onError: (error: Error) => console.log(error)
        })
    }


    return (
        <>
            <div ref={clickOutside as any} onClick={() => setOpenAction(true)} className='user-card'>
                <p className='user-role'>{userItem.userRole === '0' ? 'Staff' : 'Client'}</p>
                <span onClick={() => setOpenAction(true)} className='material-symbols-outlined user__action-btn'>more_vert</span>
                <img src={'https://png.pngtree.com/png-vector/20230918/ourmid/pngtree-man-in-shirt-smiles-and-gives-thumbs-up-to-show-approval-png-image_10094381.png'} alt={userItem.firstname} />
                <h3 className='user-name'>{userItem.firstname}</h3>
                <p className='user-email'>{userItem.email}</p>

                <div style={openAction ? { display: 'block' } : { display: 'none' }} className="action-card">
                    <div onClick={() => { setUpdateUserModal(true); setCurrentUser(userItem) }} className="action-item">
                        <span className='item-icon material-symbols-outlined'>edit</span>
                        <strong className='item-text'>Edit</strong>
                    </div>
                    <div onClick={() => { setDeleteModal(true); setUserId(userItem.id as any) }} className="action-item">
                        <span className='item-icon material-symbols-outlined'>delete</span>
                        <strong className='item-text'>Delete</strong>
                    </div>
                    <div className="action-item">
                        <span className='item-icon material-symbols-outlined'>discover_tune</span>
                        <strong className='item-text'>Reset Password</strong>
                    </div>
                </div>
                <Modal className='delete__user-modal' open={deleteModal} okText={<Button onClick={handleDeleteUser} className='delete-btn'>Delete</Button>} okType={'none' as any} onOk={() => setDeleteModal(true)} onCancel={() => setDeleteModal(false)}>
                    <span className='modal-icon material-symbols-outlined'>warning</span>
                    <h5 className='modal-subtitle'>Delete User ?</h5>
                    <p className='modal-text'>This action can not bu undone. Do you want to continue ?</p>
                </Modal>
            </div>
            <Modal open={updateUpdateModal} title={<h5 className='update-subtitle'>Update</h5>} onCancel={() => setUpdateUserModal(false)} okType={'none' as any} className='update__user-modal'>
                <Divider />
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={handleUpdateUser}
                    autoComplete="off"
                    layout="vertical"
                >
                    <Form.Item
                        label="FirstName"
                        name="firstname"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="LastName"
                        name="lastname"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Date of Birth"
                        name="dateofbirth"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <DatePicker />
                    </Form.Item>
                    <Form.Item name={'image'} label="Image">
                        <Upload.Dragger
                            headers={{ "Access-Control-Allow-Origin": "*" }}
                            multiple={false}
                            listType="picture"
                            action={"https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"}
                            accept=".png,.jpeg"
                            showUploadList={true}
                            beforeUpload={(file) => {
                                console.log({ file });
                                return false
                            }}
                            fileList={fileList}
                            onChange={({ fileList: newFileList }) => setFileList(newFileList as any)}
                        >
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                            <p className="ant-upload-hint">
                                Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                                banned files.
                            </p>
                        </Upload.Dragger>
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>

        </>
    )
}

export default UserCard
