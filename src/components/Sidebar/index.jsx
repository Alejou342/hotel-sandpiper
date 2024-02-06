"use client"
import React from 'react'
import Button from '@/components/Button'
import { useItem } from '@/context/ItemContext'
import UserInfo from '@/components/UserInfo'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import SideHeader from '@/components/SideHeader'

const Index = () => {

    const router = useRouter()
    const styles = ['bg-secondary hover:bg-auxiliar hover:text-secondary', 'bg-white hover:bg-auxiliar !text-black']
    const [user, setUser] = React.useState()
    const { item, setItem } = useItem() 

    React.useEffect(() => {
      try {
        const userLogged = JSON.parse(Cookies.get('SessionInfo'))

        if (userLogged) {
          setUser(userLogged?.data?.user_name)
        }
      } catch (error) {
        console.error('Error al renderizar --> ', error)
      }
    }, [])

    const handleLogout = () => {
      Cookies.remove('SessionInfo')
      setTimeout(() => {
        router.push('/')
      }, 2000);
    }

    const handleChange = (id) => {
      router.push('/main')
      setItem(id)
    }

  return (
    <aside className="bg-primary w-1/6 h-screen relative py-12 rounded-r-[4rem]">
      <SideHeader to="/main" />
      <div className="buttons gap-8 flex flex-col">
        <Button 
          onClick={() => handleChange(1)} 
          type="button" 
          className={`text-xs ${item == 1 ? styles[0] : styles[1]}`} 
        >
          Propiedades residenciales
        </Button>
        <Button 
          onClick={() => handleChange(2)} 
          type="button" 
          className={`text-xs ${item == 2 ? styles[0] : styles[1]}`} 
          >
          Propiedades comerciales 
          </Button>
        <Button 
          onClick={() => handleChange(3)} 
          type="button" 
          className={`text-xs ${item == 3 ? styles[0] : styles[1]}`} 
        >
          Leads
        </Button>
        <Button 
          onClick={() => handleChange(4)} 
          type="button" 
          className={`text-xs ${item == 4 ? styles[0] : styles[1]}`} 
        >
          {user?.rol == 'admin' ? 'Inmobiliarias' : 'Añadir propiedad'} 
        </Button>
      </div>
      <UserInfo props = {{user, handleLogout}} />
    </aside>
  )
}

export default Index