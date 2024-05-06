import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './components/Error/Error';
import Layout from './components/Layout/Layout';
import Hero from './components/Home/Hero';
import Test from './components/test/Test';
const Router = createBrowserRouter([
  {path:'/',element: <Layout/>,children:[
      { index :true , element: <Hero/>},
      { path: "Hero", element: <Hero/>},
      { path: "test", element: <Test/>},
      { path: "*", element: <Error/>}
  ]},
  ])
function App() {
  return <>
<RouterProvider router={Router}/>
</>
}

export default App;
