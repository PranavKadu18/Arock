import React, { useState } from 'react'
import Landingpage from './components/Landingpage'
import Loading from './components/Loading'
import Menu from './components/Menu'

const App = () => {

  const [flag,setflag] = useState(false);
  

  const handlecom = (f) => {
      setflag(f);
      
  }

  return (
    <div className='app w-full h-screen overflow-hidden'>
      <Loading />
      <Landingpage flag={flag} setflag={setflag} isclicked={handlecom} />
      <Menu flag={flag} setflag={setflag}/>
    </div>
  )
}

export default App