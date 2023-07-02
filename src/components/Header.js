import HeroImg from '../images/undraw_hero.svg'
import Navbar from './Navbar'

const Header = ({ setOpenLogin }) => {
  return (
    <div className='h-screen container mx-auto mb-20 max-md:mb-10 overflow-hidden'>
      <Navbar />

      <div className='flex items-center h-3/4 max-md:flex-col-reverse max-md:gap-8'>
        <div className='basis-1/2 max-md:px-4 max-sm:text-center'>
          <h1 className='text-6xl text-gray-500 leading-tight max-md:text-xl'>The workblog of a junior frontend developer</h1>
            <button onClick={() => setOpenLogin(true)} className='text-gray-500 border border-3 rounded border-gray-400 p-3 w-60 mt-6 hover:border-indigo-500 hover:bg-indigo-500 hover:text-white'>Login</button>
        </div>
        <img src={HeroImg} className='basis-1/2 mr-20 max-md:mr-0 max-md:h-20' alt="" height={500} width={500} />
      </div>
    </div>
  )
}

export default Header