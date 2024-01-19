"use client"
import React from 'react'
import Image from 'next/image'

const Index = ({id, placeholder, label, onChange}) => {

    const [state, setState] = React.useState(false)

    return (
        <div className="mb-2">
            <label htmlFor={id} className="form-label text-secondary font-semibold">{label}</label>
            <div className="relative flex items-center">
                <input 
                    type={state ? "text" : "password"}
                    className="w-full h-10 px-3 rounded-lg placeholder:text-sm"
                    aria-describedby="inputGroupPrepend"
                    id={id} 
                    placeholder={placeholder}
                    onChange={onChange}
                    required
                />
                <Image 
                    src={`/assets/${state ? 'open' : 'close'}.png`} alt="check" 
                    className="absolute right-3 cursor-pointer"
                    onClick={() => setState(!state)}
                    width={20}
                    height={20}
                />
            </div>
        </div>
    )
}

export default Index