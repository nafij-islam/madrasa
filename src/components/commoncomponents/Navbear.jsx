import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Container from './Container'
import logo from '../../assets/logo.jpeg'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // স্ক্রল হ্যান্ডলার
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // বডি স্ক্রল লক (যখন মোবাইল মেনু ওপেন থাকবে)
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [open])

  const menuItems = [
    { id: 1, title: "হোম", url: "/" },
    { id: 2, title: "আমাদের পরিচিতি", url: "/আমাদের-পরিচিতি" },
    { id: 3, title: "শিক্ষক ও প্রশাসন", url: "/শিক্ষক-ও-প্রশাসন" },
    { id: 4, title: "ভর্তি তথ্য", url: "/ভর্তি-তথ্য" },
    { id: 5, title: "দান ও সহযোগিতা", url: "/দান-ও-সহযোগিতা" },
    { id: 6, title: "গ্যালারি", url: "/গ্যালারি" },
  
  ]

  return (
    <>
      <nav className={`sticky top-0 z-[100] transition-all duration-500 ${
        scrolled ? "bg-white px-1 shadow-xl py-2" : "bg-[#E8F5E9] px-1 py-4"
      }`}>
        <Container>
          <div className="flex items-center justify-between">

            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-2 lg:gap-3 group">
              <img
                className={`rounded-full border-2 border-[#1F7A4D] transition-all duration-500 group-hover:rotate-[360deg] ${
                  scrolled ? "w-12 h-12 lg:w-14 h-14" : "w-14 h-14 lg:w-20 h-20"
                }`}
                src={logo}
                alt="Madrasah Logo"
              />
              <div className="flex flex-col">
                <span className={`text-[#1F7A4D] font-black transition-all duration-300 ${
                  scrolled ? "text-lg lg:text-xl" : "text-xl lg:text-2xl"
                }`}>
                  শাহ্ আজম রহ.
                </span>
                <span className="text-[#F4C430] text-[10px] lg:text-xs font-bold tracking-[2px] uppercase">
                  মডেল মাদ্রাসা
                </span>
              </div>
            </Link>

            {/* Desktop Menu (XL Screen এ দেখাবে) */}
            <ul className="hidden xl:flex items-center lg:gap-6 2xl:gap-8">
              {menuItems.map(item => (
                <li key={item.id}>
                  <NavLink
                    to={item.url}
                    className={({ isActive }) => 
                      `relative text-[18px] font-bold transition-all duration-300 py-2 px-1
                      ${isActive ? "text-[#1F7A4D]" : "text-gray-600 hover:text-[#1F7A4D]"}`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.title}
                        <span className={`absolute bottom-0 left-0 w-full h-[3px] bg-[#F4C430] transition-transform duration-300 origin-left ${
                          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        }`}></span>
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Desktop Action Button */}
            <div className="hidden xl:block">
              <Link to="/যোগাযোগ" className="bg-[#1F7A4D] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-[#F4C430] hover:text-[#1F7A4D] transition-all">
                  <button>যোগাযোগ</button>
              </Link>
            </div>

            {/* Hamburger Icon (Mobile & Tablet) */}
            <div className="xl:hidden flex items-center">
               <button 
                onClick={() => setOpen(true)}
                className="text-[#1F7A4D] p-2 hover:bg-[#1F7A4D]/10 rounded-xl transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </Container>
      </nav>

      {/* --- Side Navigation Drawer --- */}
      
      {/* 1. Backdrop Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[150] transition-opacity duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`} 
        onClick={() => setOpen(false)} 
      />

      {/* 2. Side Panel */}
      <div className={`fixed top-0 right-0 h-full w-[300px] bg-white z-[200] shadow-2xl transition-transform duration-500 ease-in-out transform ${
        open ? "translate-x-0" : "translate-x-full"
      }`}>
        <div className="flex flex-col h-full">
          {/* Close Button Header */}
          <div className="flex justify-between items-center p-6 border-b">
            <span className="text-[#1F7A4D] font-bold text-lg">মেনু</span>
            <button 
              onClick={() => setOpen(false)}
              className="text-gray-500 hover:text-red-500 transition-colors p-2 bg-gray-100 rounded-full"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu Links */}
          <div className="flex-grow overflow-y-auto p-6">
            <ul className="flex flex-col gap-3">
              {menuItems.map(item => (
                <li key={item.id}>
                  <NavLink
                    to={item.url}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) => 
                      `flex items-center px-5 py-4 rounded-2xl font-black transition-all duration-300
                      ${isActive 
                        ? "bg-[#1F7A4D] text-white shadow-lg translate-x-2" 
                        : "text-[#1F7A4D] hover:bg-[#E8F5E9] hover:translate-x-1"}`
                    }
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar Footer Button */}
          <div className="p-6 border-t bg-gray-50">
            <Link 
              to="/যোগাযোগ"
              onClick={() => setOpen(false)}
              className="block text-center w-full py-4 bg-[#F4C430] text-[#1F7A4D] font-black rounded-2xl shadow-lg active:scale-95 transition-transform"
            >
              যোগাযোগ
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar