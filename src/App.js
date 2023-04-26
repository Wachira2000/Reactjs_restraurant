import React from 'react'
import { useMediaQuery } from 'react-responsive'
//components
import Home from './components/home/Home'
import DesktopHeader from './components/header/DesktopHeader'

//css
import './global.scss'

function App() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1280px)' })
  return (
    <div className='overflow-hidden'>
      {isTabletOrMobile ? (
        <div className='flex justify-center items-center pt-20 px-5'>
          <p className='animate-pulse text-3xl'> the device is not supported</p>
        </div>
      ) : (
        <div className='overflow-hidden bg-white w-screen h-screen '>
          <DesktopHeader />
          <Home />
        </div>
      )}
    </div>
  )
}

export default App
