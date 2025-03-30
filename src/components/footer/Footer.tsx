'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { text: "ראשי", href: "/" },
    { text: "אודות", href: "/about" },
    { text: "תחומי הטיפול", href: "/services" },
    { text: "בלוג", href: "/blog" },
    { text: "שאלות נפוצות", href: "/faq" },
    { text: "יצירת קשר", href: "/contact" }
  ];
  
  const serviceLinks = [
    { text: "ירידה במשקל", href: "/services/weight-loss" },
    { text: "תזונת ספורט", href: "/services/sports-nutrition" },
    { text: "אכילה רגשית", href: "/services/emotional-eating" },
    { text: "תזונה צמחונית וטבעונית", href: "/services/plant-based" },
    { text: "תזונה קלינית", href: "/services/clinical-nutrition" }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <div className="font-bold text-2xl text-teal-400">יפית קרופניק</div>
              <div className="text-white/80 text-sm">דיאטנית קלינית</div>
            </Link>
            
            <p className="text-gray-400 mt-4">
              תזונה מותאמת אישית לאורח חיים בריא ומאוזן. מומחית בליווי תזונתי הוליסטי לירידה במשקל, תזונת ספורט ואכילה רגשית.
            </p>
            
            <div className="flex space-x-4 space-x-reverse">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">ניווט מהיר</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-teal-400 transition-colors">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">תחומי טיפול</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-teal-400 transition-colors">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">יצירת קשר</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-400 shrink-0 mt-1" />
                <span className="text-gray-400">רחוב דיזנגוף 50, תל אביב</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal-400 shrink-0" />
                <Link href="tel:+972501234567" className="text-gray-400 hover:text-teal-400 transition-colors">
                  050-1234567
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal-400 shrink-0" />
                <Link href="mailto:info@yafit-dietitian.co.il" className="text-gray-400 hover:text-teal-400 transition-colors">
                  info@yafit-dietitian.co.il
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© {currentYear} יפית קרופניק - דיאטנית קלינית. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;