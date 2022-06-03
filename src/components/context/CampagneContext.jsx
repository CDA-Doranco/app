import PropTypes from 'prop-types'
import React, { createContext, useState } from 'react'

export const CampagneContext = createContext()

const CampagneProvider = ({ children }) => {
  const [campagne, setCampagne] = useState(
    Number.parseInt(localStorage.getItem('campagne')) ? localStorage.getItem('campagne') : new Date().getFullYear()
  )

  const updateCampagne = (newCampagne) => {
    localStorage.setItem('campagne', newCampagne)
    setCampagne(newCampagne)
  }

  const context = {
    campagne,
    updateCampagne,
  }

  return <CampagneContext.Provider value={context}>{children}</CampagneContext.Provider>
}

CampagneProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CampagneProvider
