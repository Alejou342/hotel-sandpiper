"use client"
import axios from 'axios';
import React from 'react';
import Button from '@/components/Button';
import Loader from '@/components/Loader';
import { useRouter } from 'next/navigation';
import FormSelect from '@/components/FormSelect';
import SideHeader from '@/components/SideHeader';
import LoginSection from '@/components/LoginSection';

const Index = () => {

    const router = useRouter()
    const [alert, setAlert] = React.useState('')
    const [warning, setWarning] = React.useState('')
    const [loaderActive, setLoaderActive] = React.useState(false)
    const [formData, setFormData] = React.useState({
        number_room: '',
        name_category_room: 'v/c',
    });     

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({
        ...formData,
        [id]: value,
        });
    };

    // const eventForgot = (response) => {
    //     setLoaderActive(false)
    //     setAlert(response?.data?.data?.message)
    //     setTimeout(() => {
    //         router.push('/')
    //     }, 3000);
    // }
    
    // const eventForgotFailed = (error) => {
    //     setLoaderActive(false)
    //     setWarning(error?.response?.data?.error)
    // }

    const onForgotSubmit = (e) => {
        e.preventDefault()
        setAlert('')
        setWarning('')
        // setLoaderActive(true)
        console.log('DATOS A ENVIAR --> ', formData)
        // axios.post(`${process.env.BACK_LINK}/api/forgotpassword`, formData)
        // .then((response) => eventForgot(response))
        // .catch((error) => eventForgotFailed(error))
    }

  return (
    <form className="flex flex-col bg-auxiliar p-4 rounded-lg w-[18rem]" onSubmit={onForgotSubmit}>
        <Loader active={loaderActive} />
        <SideHeader to="/" />
        <LoginSection  
            label="Código"
            className={{div: "flex items-center justify-between"}}
            type="number"
            id="number_room"
            placeholder="# ID"
            onChange={handleInputChange}
            value={formData.number_room}
        />
        {/* <FormSelect  
            label="Estado"
            id="name_category_room"
            list={['v/c', 'o', 'v/d', 'ooo', 'clean/in', 'clean/out', 'p/s']}
            onChange={handleInputChange}
            className={{select: "cursor-pointer"}}
            value={formData.name_category_room}
        /> */}
        <p className='text-xs my-2 text-primary text-center'> {alert} </p>
        <p className='text-xs my-2 text-red-500 text-center'> {warning} </p>
        <Button 
            type="submit" 
            className="bg-secondary"
        >
            Recuperar
        </Button>
    </form>
  )
}

export default Index