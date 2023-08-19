import './App.css';
import Home from './components/Home';
import DataProvider from './context/DataProvider';


function App() {
  return (
    <DataProvider>
    <Home/>
    </DataProvider>
  );
}

export default App;


// Installing Mateerial UI:- npm install @mui/material @emotion/react @emotion/styled
// Installing Material UI Icons:- npm install @mui/icons-material
// Using Tooltip from material UI Tooltips display a text label identifying an element, such as a description of its function.
// Using App Bar. The top App bar provides content and actions related to the current screen. It's used for branding, screen titles, navigation, and actions. It can transform into a contextual action bar or be used as a navbar.
// Here App Bar position is fixed. Fixed position hamare elemnt ko normal flow se bahar le aata hai and jaise he ese hoga toh wo element jinki position static hogi wo unko uske piche move kr dega aur tab apko wo nazar ni ayenge
// Here you are passing home as a childern to the DataProvider but not as a prop
// Childern ko forward bhi krna padta h 