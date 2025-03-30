import React from 'react'
import { Instagram, Linkedin, Facebook, X } from 'lucide-react'

const FooterComponent = () => {
  return (
    <footer className=" fixed bottom-0 left-0 right-0 bg-black flex items-center justify-between px-6 py-4">
      <div className="text-white text-sm">
        Copyright@2024 All rights reserved
      </div>
      <div className="flex space-x-4">
        <a 
          href="https://www.instagram.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-gray-700 rounded-full p-2 hover:bg-gray-600 transition-colors"
        >
          <Instagram className="text-white" size={20} />
        </a>
        <a 
          href="https://www.x.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-gray-700 rounded-full p-2 hover:bg-gray-600 transition-colors"
        >
          <X className="text-white" size={20} />
        </a>
        <a 
          href="https://www.linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-gray-700 rounded-full p-2 hover:bg-gray-600 transition-colors"
        >
          <Linkedin className="text-white" size={20} />
        </a>
        <a 
          href="https://www.facebook.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-gray-700 rounded-full p-2 hover:bg-gray-600 transition-colors"
        >
          <Facebook className="text-white" size={20} />
        </a>
      </div>
    </footer>
  )
}

export default FooterComponent