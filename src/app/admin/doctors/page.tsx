import React from 'react'
import MainLayout from '../../layouts/admin/MainLayout';
import DoctorList from './DoctorList';
function Doctors() {
  return (
    <div>
       <MainLayout>
              <DoctorList />
       </MainLayout>
    </div>
  )
}

export default Doctors;
