
import './App.css'
 
function Header({ title }) {
  return <h1 className="header-title">{title}</h1>;
}
function Sidebar({ children }) {
  return <aside className="sidebar">{children}</aside>;
}
function Content({ children }) {
  return <main className="content">{children}</main>;
}
function App() {

  return (
    <div className="app-container">
      <Header title="Dashboard" />
      <div className="layout">
      <Sidebar>
        <Header title="Sidebar" />
      </Sidebar>
      <Content>
        <Header title="Content" />
      </Content>
    </div>
    </div>
  )
}

export default App

