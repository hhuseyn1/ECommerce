import React from 'react'

const NotFound = () => {
    return (
        <>
          <div className="flex items-center justify-center w-screen h-screen">
            <div className="px-4 lg:py-12">
              <div className="lg:gap-4 lg:flex">
                <div className="flex flex-col items-center justify-center md:py-24 lg:py-32">
                  <h1 className="font-bold text-red-600 text-9xl">404</h1>
                  <p className="mb-8 text-center text-gray-600 md:text-xl">
                    The page not found!
                  </p>
                  
                </div>
                
              </div>
            </div>
          </div>
        </>
      );
}

export default NotFound