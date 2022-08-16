import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useCartegoryState } from '../state/categories/hooks'

function MobileNav() {
  const [navOpen, setNavOpen] = useState(false)
  const { categoriesList } = useCartegoryState()

  const router = useRouter()
  const path = router.asPath.split('/')
  const pathEnd = path[path.length - 1]

  const goToCategory = (id: number) => {
    router.push({
      pathname: `/category/${id}`,
      // query: { id:id  }
    })
    // navigate to category and close side nav
    setNavOpen(false)
  }
  return (
    <div className="lg:hidden fixed bg-white  z-20 w-full">
      <nav className="flex justify-between pt-5 px-5">
        <Link href='/'>
          
          <h3 className="text-2xl font-bold  xl:mb-0">SHOPPER</h3>
        </Link>

        <div onClick={() => setNavOpen(!navOpen)} className="bg-black w-10 p-2 rounded-sm">
          <div className="bg-white h-1 w-full mb-1 rounded-sm"></div>
          <div className="bg-white h-1 w-full mb-1 rounded-sm"></div>
          <div className="bg-white h-1 w-full rounded-sm "></div>
        </div>
      </nav>
      {navOpen && (
        <div className="pl-5 py-5">
          <ul className="bg-white">
            {categoriesList.map((item, index) => (
              <li
                key={index}
                onClick={() => goToCategory(item.id)}
                className={` ${
                  Number(pathEnd) === index + 1 && 'text-blueish'
                }  mb-3 mr-10 text-lg cursor-pointer`}
              >
                {item.name}
              </li>
            ))}
            <Link href="/cart">
              <li className="cursor-pointer  mb-3">Cart</li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  )
}

export default MobileNav
