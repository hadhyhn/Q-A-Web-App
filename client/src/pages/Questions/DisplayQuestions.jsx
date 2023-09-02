import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import Questiondetail from './Questiondetail'

const DisplayQuestions = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <div className='home-container-2'>
        <Questiondetail />
        <RightSidebar />

      </div>

    </div>
  )
}

export default DisplayQuestions
