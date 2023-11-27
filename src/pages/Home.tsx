import Background from '../assets/images/Library.jpg'

function Home() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
      >
        <div className='flex h-screen'>
          <h3 className='p-5  bg-opacity-100 text-white rounded'>Welcome to the library!</h3>
        </div>
    </div>
  )
}

export default Home