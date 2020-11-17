import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Pages/Home'
import Footer from './Components/Footer'
import React, { useState } from 'react'
import Projects from './projects.json'
import ProjectsContext from './utils/ProjectsContext'


function App() {
  
  const [projectsState, setProjectsState] = useState(Projects);




  return (
    <Router>
      <div className="App">
    <NavBar />
    <ProjectsContext.Provider value={projectsState}>
    <Route exact path="/" component={Home} />
    </ProjectsContext.Provider>
    <Footer />
    </div>
    </Router>
  );
}

export default App;


{/* <Router>
<div>
  <NavBar />
  <Switch>
    <Route exact path="/" component={Books} />
  </Switch>
</div>
</Router> */}

{/* <Router>
<div>
  <Navbar />
  <Wrapper>
    <Route exact path="/" component={About} />
    <Route exact path="/about" component={About} />
    <Route exact path="/discover" component={Discover} />
    <Route exact path="/search" component={Search} />
  </Wrapper>
  <Footer />
</div>
</Router> */}