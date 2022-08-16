import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import type { category } from '../interfaces'
import api from '../api/index'

function Nav() {
  const [categories, setCategories] = useState<category[]>([])

  const router = useRouter()

  const path = router.asPath.split('/')
  const pathEnd = path[path.length - 1]

  const goToCategory = (id: number) => {
    router.push({
      pathname: `/category/${id}`,
      // query: { id:id  }
    })
  }

  const fetchCategories = async () => {
    try {
      const res = await api.getCategories()
      const categories = await res.json()
      setCategories(categories)
    } catch (err) {}
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <div className="flex justify-center">
      <nav className="flex flex-col lg:flex-row  xl:flex-row justify-center xl:justify-between md:justify-between fixed w-full bg-white items-center py-5 px-5  xl:px-36 max-w-screen-2xl mx-auto m-auto">
        {' '}
        <h3 className="text-4xl font-bold  xl:mb-0">SHOPPER</h3>
        <ul className="invisible lg:visible xl:visible flex items-center">
          {categories.map((item, index) => (
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
        <input className=" border border-gray rounded-sm pl-2 h-8" type="text" placeholder="Search" />
      </nav>
    </div>
  )
}

export default Nav
