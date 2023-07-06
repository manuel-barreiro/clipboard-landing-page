import Image from 'next/image'
import { Bai_Jamjuree } from 'next/font/google'

const baiJamjuree = Bai_Jamjuree({ 
  subsets: ['latin'],
  weight: ['400', '600']
 })

export default function Home() {
  return (
    <div className={`${baiJamjuree.className} bg-background min-h-screen bg-[url('/img/bg-header-mobile.png')] bg-top bg-no-repeat bg-contain`}>
      <div className='container flex justify-center'>
        <main className='flex flex-col justify-center pt-[125px]'>
          <Image src='img/logo.svg' height={125} width={125} alt='logo'></Image>
        </main>
      </div>
    </div>
  )
}
