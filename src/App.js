import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  return (
    <div className="App clear">

      <Drawer />

      <Header />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All sneakers</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input type="" placeholder="Search..." />
          </div>
        </div>


        <div className="sneakers-cards d-flex">

          <Card />

          <Card />

        </div>



      </div>
    </div>
  );
}

export default App;
