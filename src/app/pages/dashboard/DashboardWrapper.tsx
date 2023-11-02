/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import { Card2 } from '../../../_metronic/partials/content/cards/Card2'
import { IconUserModel } from '../../modules/profile/ProfileModels'
import { useState } from 'react'
import { CreateAppModal } from '../../../_metronic/partials'


const DashboardPage = () => {

  const [showCreateAppModal, setShowCreateAppModal] = useState<boolean>(false)

  return (
    <>
      {/* begin::Row */}
      <div className='row g-5 g-xl-10 mb-5 mb-xl-10'>
        <div className='d-flex flex-wrap flex-stack mb-6'>
          <h3 className='fw-bolder my-2'>
            Mis citas
            <span className='fs-6 text-gray-400 fw-bold ms-1'>Active</span>
          </h3>

          <div className='d-flex flex-wrap my-2'>
            <div className='me-4'>
              <select
                name='status'
                data-control='select2'
                data-hide-search='true'
                className='form-select form-select-sm form-select-white w-125px'
                defaultValue='Active'
              >
                <option value='Active'>Active</option>
                <option value='Approved'>In Progress</option>
                <option value='Declined'>To Do</option>
                <option value='In Progress'>Completed</option>
              </select>
            </div>
            <a
              href='#'
              onClick={() => {
                setShowCreateAppModal(true)
              
              }}
              className='btn btn-sm fw-bold btn-primary'
            >
              New Project
            </a>
          </div>
        </div>

        <div className='row g-6 g-xl-9'>
          <div className='col-md-6 col-xl-4'>
            <Card2
              icon='/media/svg/brand-logos/plurk.svg'
              badgeColor='primary'
              status='In Progress'
              statusColor='primary'
              title='Fitnes App'
              description='CRM App application to HR efficiency'
              date='November 10, 2021'
              budget='$284,900.00'
              progress={50}
              users={users1}
            />
          </div>
        </div>

       
      </div>
      {/* end::Row */}
      <CreateAppModal show={showCreateAppModal} handleClose={() => setShowCreateAppModal(false)} />
    </>
  )
}

const DashboardWrapper: FC = () => {
  const intl = useIntl()



  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'MENU.DASHBOARD' })}</PageTitle>
      <DashboardPage />
    </>
  )
}

const users1: Array<IconUserModel> = [
  { name: 'Emma Smith', avatar: '/media/avatars/300-6.jpg' },
  { name: 'Rudy Stone', avatar: '/media/avatars/300-1.jpg' },
  { name: 'Susan Redwood', initials: 'S', color: 'primary' },
]

const users2 = [
  { name: 'Alan Warden', initials: 'A', color: 'warning' },
  { name: 'Brian Cox', avatar: '/media/avatars/300-5.jpg' },
]

const users3 = [
  { name: 'Mad Masy', avatar: '/media/avatars/300-6.jpg' },
  { name: 'Cris Willson', avatar: '/media/avatars/300-1.jpg' },
  { name: 'Mike Garcie', initials: 'M', color: 'info' },
]

const users4 = [
  { name: 'Nich Warden', initials: 'N', color: 'warning' },
  { name: 'Rob Otto', initials: 'R', color: 'success' },
]

const users5 = [
  { name: 'Francis Mitcham', avatar: '/media/avatars/300-20.jpg' },
  { name: 'Michelle Swanston', avatar: '/media/avatars/300-7.jpg' },
  { name: 'Susan Redwood', initials: 'S', color: 'primary' },
]

const users6 = [
  { name: 'Emma Smith', avatar: '/media/avatars/300-6.jpg' },
  { name: 'Rudy Stone', avatar: '/media/avatars/300-1.jpg' },
  { name: 'Susan Redwood', initials: 'S', color: 'primary' },
]

const users7 = [
  { name: 'Meloday Macy', avatar: '/media/avatars/300-2.jpg' },
  { name: 'Rabbin Watterman', initials: 'S', color: 'success' },
]

const users8 = [
  { name: 'Emma Smith', avatar: '/media/avatars/300-6.jpg' },
  { name: 'Rudy Stone', avatar: '/media/avatars/300-1.jpg' },
  { name: 'Susan Redwood', initials: 'S', color: 'primary' },
]

const users9 = [
  { name: 'Meloday Macy', avatar: '/media/avatars/300-2.jpg' },
  { name: 'Rabbin Watterman', initials: 'S', color: 'danger' },
]

export { DashboardWrapper }
