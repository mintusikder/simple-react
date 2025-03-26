import { Suspense } from 'react'
import './App.css'
import Countries from './component/Countries/Countries'
function App() {
  const countriesPromise = fetch("https://restcountries.com/v3.1/all")
  .then(res => res.json())
  return (
    <>   
    <Suspense fallback={<h3>Loading....</h3>}>
    <Countries countriesPromise={countriesPromise}></Countries>
    </Suspense>
      
    </>
  )
}

export default App
