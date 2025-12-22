import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="navbar flex items-center justify-between p-4 text-white h-16 bg-black px-12">
                <div className=" hover:scale-110 cursor-pointer text-4xl">
                    <h1 className='font-bold '>Logo</h1>
                </div>

                <div className="menu-sections flex gap-8 text-lg ">
                    <ul className='flex gap-8 ml-8'>
                        <li className='hover:text-teal-400 cursor-pointer'>
                            Home
                        </li>
                        <li className=' hover:text-teal-400 cursor-pointer'>
                            About
                        </li>
                        <li className='hover:text-teal-400 cursor-pointer'>
                            services
                        </li>
                        <li className='hover:text-teal-400 cursor-pointer'>
                            Contact
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar