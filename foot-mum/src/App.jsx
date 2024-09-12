import styles from  "./App.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';
import { Route, Switch}  from 'react-router-dom';

export default function App() {
  

  return (
      <div className={styles.App}>

          <NavBar />
          <Container className={styles.Main} >
          <Switch>
            <Route exact path="/" render={()=> <h1>Home Page</h1>} />
            <Route exact path="/signin" render={()=><h1>Sign in</h1> } />
            <Route exact path="/signup" render={()=><h1>Sign up</h1> } />
            <Route render={()=> <p> Page not found!!!</p> } />
          </Switch>
           
          </Container>
      </div>
      
   
  )
}


