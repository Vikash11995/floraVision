import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import background from './assets/fa0765984e44f85e1a04562f820f1492949a1257.jpg'

const App = () => {
  return (
    <div>
      <header
        className='w-full h-screen md:h-[300vh] bg-cover bg-center'
        style={{ backgroundImage: `url(${background})` }}
      >
        <nav>
          <Navbar />
        </nav>
        <section>
          <Hero />
        </section>
      </header>
    </div>
  )
}

export default App
