import React, { useState } from 'react'
import HomeDrawer from '../../../views/client/components/HomeDrawer'
import { SearchBar } from '../../Components/Html'
import { allProduct } from '../../../services/clientService'

const HomePage = (p) => {



  return (
    <>
        {p.children}
    </>
  )
}

export default HomePage