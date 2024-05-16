import { useState } from 'react'
import Popular from './Sections/Popular'
import Services from './Sections/Services'
import Speciale from './Sections/Speciale'
import Subscribe from './Sections/Subscribe'
import Hero from './Sections/Hero'
import Super from './Sections/Super'
import Navbar from './components/Navbar'

function App() {


  return (
   <main className=' w-full  '>
    <section>
      <Navbar />
    </section>
    <section className=' px-5 py-1 pb-10 '>
      <Hero />
    </section>
    <section  className=' px-5 py-10 '>
      <Popular />
    </section>
    <section  className=' bg-purple-200 px-5 py-10 '>
      <Super />
    </section>
    <section  className=' px-5 py-10 '>
      <Services />
    </section>
    <section  className=' px-5 py-10 '>
      <Speciale />
    </section>

   </main>
  )
}

export default App
