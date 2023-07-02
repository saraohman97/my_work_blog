import HeroImg from '../images/undraw_hero.svg'
import Navbar from './Navbar'

const Header = ({ setOpenLogin }) => {
  return (
    <div className='h-screen container mx-auto mb-20'>
      <Navbar />

      <div className='flex items-center h-3/4'>
        <div className='basis-1/2'>
          <h1 className='text-6xl text-gray-500 leading-tight'>The workblog of a junior frontend developer</h1>
            <button onClick={() => setOpenLogin(true)} className='text-gray-500 border border-3 rounded border-gray-400 p-3 w-60 mt-6 hover:border-indigo-500 hover:bg-indigo-500 hover:text-white'>Login</button>
        </div>
        <img src={HeroImg} className='basis-1/2 mr-20' alt="" height={500} width={500} />
      </div>
    </div>
  )
}

export default Header