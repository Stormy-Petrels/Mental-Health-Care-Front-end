import React from 'react'
import MainLayout from '../../layouts/admin/MainLayout';
import PatientList from './PatientList';
function Patients() {
  return (
    <div>
       <MainLayout>
          {[<PatientList />]};
       </MainLayout>
    </div>
  )
}

export default Patients;
