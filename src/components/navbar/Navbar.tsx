'use client'
import { SelectedPage } from "@/app/types/types";
import { useEffect, useState } from "react";
import { Facebook, Instagram } from 'lucide-react';



const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY === 0) {
            setScrolled(false);  // Transparent when at the top
        } else {
            setScrolled(true);  // Add background when scrolled
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-20 top-0 left-0 transition duration-500 ${scrolled ? "bg-orange-50 shadow-md" : "bg-transparent"}`}>
            <ul className="navigation max-w-[90vw] flex justify-between items-center relative mx-auto py-8">
                <input type="checkbox" id="check" className="hidden" />

                <div className="flex items-center">
                    <div className="social-icons ml-4 flex space-x-2">
                        <a href="#" className=" hover:text-blue-600 transition duration-300">
                            <Facebook size={24} />
                        </a>
                        <a href="#" className=" hover:text-pink-600 transition duration-300">
                            <Instagram size={24} />
                        </a>
                    </div>
                </div>

                <span className="menu flex [&>li]:px-4 [&>li>a]:text-center [&>li>a]:relative [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out [&>li>a]:font-medium [&>li>a]:text-lg">
                    <li><a href="#">יצירת קשר</a></li>
                    <li><a href="#">שאלות נפוצות</a></li>
                    <li><a href="#">בלוג</a></li>
                    <li><a href="#">תחומי הטיפול</a></li>
                    <li><a href="#">אודות</a></li>
                    <label htmlFor="check" className="close-menu">X</label>
                </span>

                <label htmlFor="check" className="open-menu">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </label>

                <a className="logo" href="#">
                    <h3 className="font-bold text-2xl menu">LOGO</h3>
                </a>
            </ul>
        </nav>
    )
};
export default Navbar;
