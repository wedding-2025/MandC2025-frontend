import React from 'react'

const NewFormWrapper = ({ children }) => {
  return (
    <>
      <div className="h-full w-full flex items-center justify-center">
        <div className="h-[80vh] w-full max-w-screen-sm  ">
            <div className="mt-24 mb-auto bg-[#f0f0c7e8] text-[#8b4513] !z-50 opacity-100 rounded-2xl shadow-lg border border-gray-900 p-12">
              { children }
            </div>
        </div>
      </div>
    </>
  )
}

export default NewFormWrapper