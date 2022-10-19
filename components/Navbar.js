import Link from "next/link";
import React from "react"

const Navbar = () => {
    return (
        <div className='bg-blue-500 fixed top-0 w-[100%] z-10'>
            <div className='container mx-auto flex justify-between items-center py-4'>
                <div className='text-[24px]'>Bernardo Cusmanich</div>
                <div className='flex gap-6'>
                    
                        <a className='hover:text-[red]'>Home</a>
                    
                        <a className='hover:text-[red]'>About</a>
                        
                        <a className='hover:text-[red]'>Portfolio</a>

                        <a className='hover:text-[red]'>Blog</a>
                    
                        <a className='hover:text-[red]'>Contact</a>

                </div>
            </div>
        </div>
    )
}

export default Navbar