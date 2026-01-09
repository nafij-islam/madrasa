import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Container from './Container'
import logo from '../../assets/logo.jpeg'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // স্ক্রল করলে নেভবারের শ্যাডো পরিবর্তনের জন্য
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { id: 1, title: "হোম", url: "/" },
    { id: 2, title: "আমাদের পরিচিতি", url: "/আমাদের-পরিচিতি" },
    { id: 3, title: "শিক্ষক ও প্রশাসন", url: "/শিক্ষক-ও-প্রশাসন" },
    { id: 4, title: "ভর্তি তথ্য", url: "/ভর্তি-তথ্য" },
    { id: 5, title: "দান ও সহযোগিতা", url: "/দান-ও-সহযোগিতা" },
    { id: 6, title: "গ্যালারি", url: "/গ্যালারি" }
  ]

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-lg py-1" : "bg-[#E8F5E9] py-3"}`}>
      <Container>
        <div className="flex items-center justify-between">

          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
               <img
                className="lg:w-20 md:w-16 w-14 rounded-full border-2 border-[#1F7A4D] transition-transform duration-500 group-hover:rotate-[360deg]"
                src={logo}
                alt="Madrasah Logo"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[#1F7A4D] font-bold lg:text-xl text-lg leading-none">শাহ্ আজম রহ.</span>
              <span className="text-[#F4C430] text-[10px] lg:text-xs font-bold tracking-[2px]">মডেল মাদ্রাসা</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center lg:gap-8 md:gap-4">
            {menuItems.map(item => (
              <li key={item.id} className="relative">
                <NavLink
                  to={item.url}
                  className={({ isActive }) => 
                    `relative text-[17px] font-semibold transition-colors duration-300 py-2
                    ${isActive ? "text-[#1F7A4D]" : "text-gray-600 hover:text-[#1F7A4D]"}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.title}
                      {/* Active Underline Animation */}
                      <span className={`absolute bottom-0 left-0 w-full h-[3px] bg-[#F4C430] transition-transform duration-300 origin-left ${isActive ? "scale-x-100" : "scale-x-0"}`}></span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Action Button */}
          <div className="hidden md:block">
            <button className="relative px-7 py-2.5 overflow-hidden font-bold text-white bg-[#1F7A4D] rounded-full group shadow-md transition-all duration-300 hover:pr-10">
              <span className="absolute right-0 w-8 h-full -mr-10 transition-all duration-300 transform group-hover:-mr-0 group-hover:right-2 flex items-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </span>
              <span className="relative text-base">যোগাযোগ</span>
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button 
              onClick={() => setOpen(!open)}
              className="text-[#1F7A4D] p-1 border-2 border-[#1F7A4D] rounded-md"
            >
              {open ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Slide Down */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${open ? "max-h-[60vh] opacity-100 mt-4" : "max-h-0 opacity-0 overflow-hidden"}`}>
          <div className="bg-white rounded-2xl shadow-xl p-4 border border-[#C8E6C9] mb-4">
            <ul className="flex flex-col gap-1">
              {menuItems.map(item => (
                <li key={item.id}>
                  <NavLink
                    to={item.url}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) => 
                      `block px-4 py-3 rounded-xl font-bold transition-all
                      ${isActive ? "bg-[#1F7A4D] text-white shadow-md" : "text-[#1F7A4D] hover:bg-[#E8F5E9]"}`
                    }
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
              <button className="mt-4 w-full py-3 bg-[#F4C430] text-[#1F7A4D] font-extrabold rounded-xl">
                যোগাযোগ করুন
              </button>
            </ul>
          </div>
        </div>

      </Container>
    </nav>
  )
}

export default Navbar