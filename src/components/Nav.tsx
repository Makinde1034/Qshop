import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCartegoryState } from '../state/categories/hooks'


function Nav() {
  const router = useRouter()
  const { categoriesList } = useCartegoryState()

  const path = router.asPath.split('/')
  const pathEnd = path[path.length - 1]

  const goToCategory = (id: number) => {
    router.push({
      pathname: `/category/${id}`,
      // query: { id:id  }
    })
  }

  return (
    <div className="flex  lg:block justify-center">
      <nav className="flex flex-col lg:flex-row  xl:flex-row justify-center xl:justify-between md:justify-between fixed w-full bg-white items-center py-5 px-5   xl:px-36 max-w-screen-2xl mx-auto m-auto">
        {' '}
        <Link href='/'>
          <h3 className="text-4xl hidden lg:block font-bold cursor-pointer xl:mb-0">SHOPPER</h3>
        </Link>
        <ul className="invisible lg:visible xl:visible flex items-center">
          {categoriesList.map((item, index) => (
            <li
              key={index}
              onClick={() => goToCategory(item.id)}
              className={` ${Number(pathEnd) === index + 1 && 'text-blueish'} mr-10 text-lg cursor-pointer`}
            >
              {item.name}
            </li>
          ))}
          <Link href="/cart">
            <li className="cursor-pointer">Cart</li>
          </Link>
        </ul>
        <input
          className="mt-10 lg:mt-0 hidden lg:block  border w-full lg:w-[150px] border-gray rounded-sm pl-2 h-10 lg:h-8"
          type="text"
          placeholder="Search"
        />
      </nav>
    </div>
  )
}

export default Nav
