import React, { useState, useEffect } from 'react'
import { GiPositionMarker } from 'react-icons/gi'

const Map = () => {
  return (
    <div className="my-32 w-full bg-slate-900 px-6 pb-10 sm:w-1/2">
      <img src="map.png" className="mb-5 mt-6" alt="map" />
      <div>
        <span className=" text-[20px] text-[#89C8D1]">Offices</span>
        <ul className="mt-5">
          <li className="flex items-center text-white">
            <GiPositionMarker className="mr-2 text-blue-300" />
            Miami, USA
          </li>
          <li className="mt-5 flex items-center text-white">
            {' '}
            <GiPositionMarker className="mr-2 text-blue-300" />
            Calgary, Canada
          </li>
          <li className="mt-5 flex items-center text-white">
            {' '}
            <GiPositionMarker className="mr-2 text-blue-300" />
            Şişli, Istanbul, Türkiye
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Map
