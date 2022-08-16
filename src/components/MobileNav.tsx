import React, { useState } from 'react'

function MobileNav() {
  const [navOpen, setNavOpen] = useState(false)
  return (
    <div className="lg:hidden">
      <nav className="flex justify-end pt-5 pr-5">
        <div onClick={()=>setNavOpen(!navOpen)} className="bg-black w-10 p-2 rounded-sm">
          <div className="bg-white h-1 w-full mb-1 rounded-sm"></div>
          <div className="bg-white h-1 w-full mb-1 rounded-sm"></div>
          <div className="bg-white h-1 w-full rounded-sm "></div>
        </div>
      </nav>
      {navOpen && (
        <div className="pl-5">
          <ul>
            <li>dcd</li>
            <li>dcd</li>
            <li>dcd</li>
            <li>cdc</li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default MobileNav
