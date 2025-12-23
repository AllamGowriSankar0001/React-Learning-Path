
import './App.css'

function App() {
  const listwithids = [
    {id: 1, name: "apple"},
    {id: 2, name: "banana"},
    {id: 3, name: "cherry"},
    {id: 4, name: "date"},
    {id: 5, name: "elderberry"},
  ];
  const listwithoutids = [
    "apple",
    "banana",
    "cherry",
    "date",
    "elderberry",
  ];
  return (
    <>
      <h1>Lists with ids</h1>
      {
        listwithids.map((fruit)=>{
          return <li key={fruit.id}>{fruit.name} id is {fruit.id}</li>
        })
      }
      <h1>Lists without ids</h1>
      {
        listwithoutids.map((fruit)=>{
          return <li key={fruit}>{fruit}</li>
        })
      }
    </>
  )
}

export default App
