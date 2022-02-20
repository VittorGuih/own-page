import { Content } from './components/Content/MainContent';
import { Footer } from './components/Footer/Footer';
import { GlobalStyle } from './components/Global';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Content />
      <Footer />
    </>
  );
}
export default App;
