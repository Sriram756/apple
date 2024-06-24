import React from 'react'

const footer = () => {
  return (
    <footer className='py-5 sm:px-10 px-5' >
        <div className="screen-max-width">
            <div>
                <p className="font-semibold text-gray text-xs">
                    more ways to shop 
                    <span className="underline text-blue">find an apple store{' '} </span>
                    or {' '}
                   <span className="underline text-blue">other retailer {' '} </span>
                   near you {' '}
                </p>
                 <p className="font-semibold text-gray text-xs">
                    or call 00003-99-0</p>
            </div>
            <div className="bg-neutral-700 my-5 h-[1px] w-full"/>
        </div>
    </footer>    
  )
}

export default footer
