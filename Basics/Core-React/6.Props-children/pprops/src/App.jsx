
import './App.css'
import CardProp from './card'
import CardDestruct from './card-destructured'
import CardChildren from './cardchildren'

function App() {

  return (
    <>
      <CardProp
        name="John"
        age={22}
        city="New York"
        hobby="Coding"
      />
      <CardDestruct job="web-developer" salary="1800$" />
      <CardChildren>
        <h1>this is a child element i added in app.jsx</h1>
      </CardChildren>
    </>
  )
}

export default App
