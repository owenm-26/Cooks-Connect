import './App.css'
import './assets/chef-hat-logo.png' 
import Recipes from './Recipes'
function App() {

  const renderList = () =>{
   console.log('worked')
   
  }

  return (
    <>
      <img src='https://cdn-icons-png.flaticon.com/512/4253/4253632.png' alt="logo" width='200px'></img>
      <h1>Cooks Connect</h1>
      <p>To be implemented soon...</p>
      <div>
        <button onClick={renderList}>Click me</button>
      </div>
      <Recipes/>
    </>
  )
}

export default App
