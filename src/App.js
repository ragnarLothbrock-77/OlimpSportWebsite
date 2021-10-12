import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import Team from './pages/About/Team/Team';
import Documents from './pages/About/Documents/Documents';
import Questions from './pages/About/Questions/Questions';
import About from './pages/About/About';
import ScrollToTop from './utils/ScrollToTop';
import Sections from './pages/Sections/Sections';
import Section from './components/Section/Section';
import Places from './pages/Places/Places';
import AreasByType from './components/AreasByType/AreasByType';
import Contacts from './pages/Contacts/Contacts';
import { HeaderProveider } from './context/headerContext';
import UpcomingEvents from './pages/Events/UpcomingEvents/UpcomingEvents';
import PastEvents from './pages/Events/PastEvents/PastEvents';

function App() {
  return (
    <HeaderProveider>
      <Router>
        <ScrollToTop />
        <Header />
        <Switch>
          <Route exact component={Main} path="/"/>
          <Route component={About} path="/about"/>
          <Route component={Team} path="/team"/>
          <Route component={Documents} path="/documents"/>
          <Route component={Questions} path="/questions"/>
          <Route component={Sections} exact path="/sections"/>
          <Route component={Places} exact path="/places"/>
          <Route component={Contacts} path="/contacts" />
          <Route component={UpcomingEvents} path="/upcoming-events/" />
          <Route component={PastEvents} path="/past-events/" />
          <Route path="/sections/:id"><Section /></Route>
          <Route path="/places/:id"><AreasByType /></Route>
        </Switch>
        <Footer /> 
      </Router>
    </HeaderProveider>
  );
}

export default App;
