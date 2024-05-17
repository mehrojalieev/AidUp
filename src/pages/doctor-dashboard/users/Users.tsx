import './Users.scss'
import { useState } from 'react'
import { Tooltip, Input, Skeleton } from 'antd';
import UserCard from './user-card/UserCard';
import { useGetUsers } from '../../../service/query/useGetUsers';
import { AddUserModal } from '../../../utils/Utils';
const { Search } = Input;


const Users = () => {
  const [searchValue, setSearchValue] = useState('')
  const [openUserModal, setOpenUserModal] = useState(false)

  const { data, isLoading,  isFetched } = useGetUsers('/users/get-all')
  const filteredData = data?.filter(item => item.firstname?.toLowerCase().includes(searchValue.toLowerCase()))

  return (
    <div className='users-content'>
      <h3>Users</h3>
      <div className="users__content-header">
        <Search className='search-form'
          placeholder="Search Doctor..."
          allowClear
          enterButton="Search"
          size="medium"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <div className="content__header-action">
          <Tooltip className='action-tooltip' placement='top' title="Users Log history">
            <span className='tooltip-icon material-symbols-outlined'>person_check</span>
          </Tooltip>
          <Tooltip className='action-tooltip' placement='top' title="List view">
            <span className='tooltip-icon material-symbols-outlined'>list</span>
          </Tooltip>
          <Tooltip className='action-tooltip' placement='top' title="Create">
            <span onClick={() => setOpenUserModal(true)} className='tooltip-icon material-symbols-outlined'>add</span>
          </Tooltip>
        </div>
        <AddUserModal openUserModal={openUserModal} setOpenUserModal={setOpenUserModal}/>
      </div>
      <div className="users__card-wrapper">
      {
          filteredData?.length > 0 ? filteredData?.map(user =>
          <UserCard userItem={user} key={user.id} />
          )
            : isLoading ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12].map((_, index) =>
          <div key={index} className='skeleton__card-wrapper'>
            <Skeleton.Node className="card-skeleton">
              <Skeleton.Avatar active={true} size={'large'} shape='circle' style={{ width: 120, height: 110, marginTop: 50 }} />
              <Skeleton.Input active={true} size='medium' style={{ width: 120, height: 20 }} />
            </Skeleton.Node>
          </div>
          )
          :
          <div className="not__found-content">
            <span className='error-icon material-symbols-outlined'>sentiment_dissatisfied</span>
            <h5 className='status-code'>404</h5>
            <p className='error-text'>User Not Found</p>
          </div>
      }
      </div>
    </div>
  )
}

export default Users