import React from 'react'

const TilesHeader = ({tileHeading}) => {
  return (
    <div className="bg-primary container mx-auto h-10 flex items-center">
        <h3 className="font-semibold text-lg text-white">{tileHeading}</h3>
    </div>
  )
}

export default TilesHeader