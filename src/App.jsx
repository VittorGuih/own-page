import { Content } from './components/Content/MainContent';
import { Footer } from './components/Footer/Footer';
import { GlobalStyle } from './components/Global';
import { Navigation } from './components/Navigation';

function App() {
  const linkedin_link = 'https://www.linkedin.com/in/vittorguih/';
  const github_link = 'https://github.com/VittorGuih';
  return (
    <>
      <GlobalStyle />
      <Navigation linkedin_link={linkedin_link} />
      <Content linkedin_link={linkedin_link} github_link={github_link} />
      <Footer />
    </>
  );
}
export default App;
