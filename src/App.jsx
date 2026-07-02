import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const App = () => {
  return (
<div className="">
      <header className=' w-full h-screen md:h-[300vh] bg-[url("./src/assets/fa0765984e44f85e1a04562f820f1492949a1257.jpg")] bg-cover bg-center'>
      <nav>
        <Navbar/>
      </nav>
      <section>
        <Hero/>
      </section>
    </header>
  
    
</div>
  )
}

export default App