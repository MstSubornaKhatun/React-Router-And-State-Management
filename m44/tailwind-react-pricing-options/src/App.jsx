import { Suspense } from "react";
import "./App.css";
// import DaisyNav from "./components/DaisyNav/DaisyNav";
import NavBar from "./components/NavBar/NavBar";
import PricingOptions from "./components/PricingOptions/PricingOptions";

// const pricingPromise = fetch('pricingData.json').then(res => res.json());

function App() {
  return (
    <>
      <header> 
         <NavBar></NavBar>
         {/* <DaisyNav></DaisyNav> */}
        <h1 className="text-7xl underline">Vite + React</h1>
      </header>
      <main>
        <Suspense fallback={<span class="loading loading-spinner loading-xl"></span>}>
          <PricingOptions ></PricingOptions>
        </Suspense> 
      

      </main>
    </>
  );
}

export default App;
