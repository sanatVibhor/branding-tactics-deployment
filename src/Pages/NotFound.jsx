import React from 'react'

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white px-4 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-3xl mb-6">Page Not Found</h2>
      <p className="text-xl mb-8">The page you are looking for doesn't exist or has been moved.</p>
      <a 
        href="/"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
      >
        Go Back Home
      </a>
    </div>
  )
}

export default NotFound