import React from 'react'
import Image from 'next/image'

const Index = ({ props }) => {

    return (
        <div className="flex justify-center items-center">
            <div className="w-5/6 text-center absolute bottom-8">
                <div onClick={props.handleLogout} className="w-[4rem] mx-auto cursor-pointer aspect-square rounded-full bg-auxiliar flex mb-4 hover:w-[4.2rem]" title='Cerrar sesión'>
                    <Image src="/assets/logout.png" alt="logout.svg" width={20} height={20} className='my-4 mx-auto w-auto' />
                </div>
                <p className='text-white text-xl font-bold'>{props?.user?.Nombre_Inmobiliaria}</p>
                <p className='text-sm'>{props?.user?.Correo_Inmobiliaria}</p>
                <p className='text-sm'>{props?.user?.Celular}</p>
            </div>
        </div>
    )
}

export default Index