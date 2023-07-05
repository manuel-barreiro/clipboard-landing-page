import Image from 'next/image'
import { Bai_Jamjuree } from 'next/font/google'

const baiJamjuree = Bai_Jamjuree({ 
  subsets: ['latin'],
  weight: ['400', '600']
 })

export default function Home() {
  return (
    <div className={`${baiJamjuree.className} container`}>
      <h1 className='text-color-text text-6xl'>Hola Mundo</h1>
    </div>
  )
}
