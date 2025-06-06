import React from 'react'
import "./HomeDoc.css"
import HomeDocHead from './HomeDocHead'
import HomeDocMain from './HomeDocMain'

const HomeDoc = () => {
  return (
    <div className='homeDoc-container'>
      <HomeDocHead/>
      <HomeDocMain/>
    </div>
  )
}

export default HomeDoc
