import React from 'react'
import CountryForm from '../molecules/CountryForm'
import CityForm from '../molecules/CityForm'
import ResidanceForm from '../molecules/ResidanceForm'
 



const NewDataForm = () => {
    
  return (
    <div className=' space-y-4' >
     <div className='   '> 
        <h1 className='  roboto-medium text-center  '> Add New Location Details </h1>
    </div> 
      <div className=' space-y-4' > 
        <CountryForm />
        <CityForm /> 
        <ResidanceForm />
      </div>
    </div>
  )
}

export default NewDataForm
