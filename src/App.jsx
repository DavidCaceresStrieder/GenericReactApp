import { ContextProvider, useFetch } from "./hooks"
import { Navigate, Route, Routes } from "react-router-dom"

function App() 
{
  const asd = useFetch('https://api.bluelytics.com.ar/v2/latest');
  console.log(asd);
  return (
    <>
      <ContextProvider>
        <Routes>
          <Route path="/*" element={ <Navigate to="/" />} />
        </Routes>
      </ContextProvider> 
    </>
  )
}

export default App
