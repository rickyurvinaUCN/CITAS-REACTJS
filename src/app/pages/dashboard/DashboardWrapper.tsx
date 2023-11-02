/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useEffect } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import { Card2 } from '../../../_metronic/partials/content/cards/Card2'
import { IconUserModel } from '../../modules/profile/ProfileModels'
import { useState } from 'react'
import { CreateAppModal } from '../../../_metronic/partials'
import axios from 'axios'

const URL_API = "http://192.168.0.6:8000/api/"

const DashboardPage = () => {

  const [showCreateAppModal, setShowCreateAppModal] = useState<boolean>(false)

  const [appointments, setAppointments] = useState<any[]>([])

  useEffect(() => {
    getAllAppointments();
  }, []);

  const getAllAppointments = async () => {
    
    const response = await axios
      .get(`${URL_API}appointment`)
      .then(res => {
        setAppointments(res.data);
        console.log(res.data)
      })
      .catch(error => console.log(error));
  };

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
              Nueva Cita
            </a>
          </div>
        </div>

        <div className='row g-6 g-xl-9'>
          {appointments.map((appointment, index) => {
            return(
              <div key={index} className='col-md-6 col-xl-4'>
              <Card2
                key={index}
                icon='/media/svg/brand-logos/plurk.svg'
                badgeColor='primary'
                status='In Progress'
                statusColor='primary'
                title={appointment.name}
                description={appointment.symptom}
                date={appointment.date}
                budget={appointment.user.name}
                progress={50}
              />
            </div>
            )
          
            })}

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

export { DashboardWrapper }
