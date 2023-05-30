import HeaderAndNavBar from './components/navbarIntro';
import WelcomeToJournalContainer from './components/welcomeToJournal';
/**
 * App returns the relevant components. (First Page that is seen by the user)
 * 
 * @returns NavBar when a user is logged out.
 */
function App() {
  return (
    <div class="App">
      <HeaderAndNavBar/>
      <br/>
      <WelcomeToJournalContainer/>
    </div>
  );
}

export default App;
