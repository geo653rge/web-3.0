import {Navbar, Welcome , Footer , Transaction , Services} from './componets';


function App() {


  return (
    <>
      <div className='min-h-screen'>
        <div className='gradient-bg-welcome'>

          <Navbar/>
          <Welcome/>
          </div>
          <Services/>
          <Transaction/>
          <Footer/>
       
       

      </div>

      <div className="card">



        {/* <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p> */}
      </div>

    </>
  )
}

export default App
