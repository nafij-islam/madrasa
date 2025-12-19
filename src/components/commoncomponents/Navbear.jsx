import React, { useState } from 'react'
import Container from './Container'
import logo from '../../assets/logo.jpeg'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const menuItems = [
    { id: 1, title: "হোম", url: "/" },
    { id: 2, title: "একাডেমিক", url: "/about" },
    { id: 3, title: "যোগাযোগ", url: "/services" },
    { id: 4, title: "একাডেমিক", url: "/contact" }
  ]

  return (
    <nav className="bg-white py-2 shadow">
      <Container>
        <div className="flex items-center justify-between py-4">

          {/* Logo */}
          <div>
            <a href="/" className="text-2xl font-bold">
              <img className='lg:w-25 sm:w-20 md:w-20 w-15' src={logo} alt="" />
            </a>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6">
            {menuItems.map(item => (
              <li key={item.id}>
                <a
                  href={item.url}
                  className="text-[#2f328c] text-[25px] hover:text-blue-500"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <button className="px-4 py-2 bg-[#76288e] text-white rounded">
              যোগাযোগ
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden pb-4">
            <ul className="flex flex-col gap-4">
              {menuItems.map(item => (
                <li key={item.id}>
                  <a
                    href={item.url}
                    className="block text-gray-700 hover:text-blue-500"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
              <button className="w-full px-4 py-2 bg-[#76288e] text-white rounded">
                যোগাযোগ
              </button>
            </ul>
          </div>
        )}

      </Container>
    </nav>
  )
}

export default Navbar
