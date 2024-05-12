import React from 'react'
import MainLayout from '../../layouts/admin/MainLayout';
import ApointmentList from './AppointmentList';
function Doctors() {
  return (
    <div>
       <MainLayout>
              <ApointmentList />
       </MainLayout>
    </div>
  )
}

export default Doctors;
