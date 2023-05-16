import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/Home';
import PutawayPage from './pages/Putaway';
import PickingPage from './pages/Picking';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' exact element={<HomePage />}/>
        <Route path='/putaway' exact element={<PutawayPage />}/>
        <Route path='/picking' exact element={<PickingPage />}/>
      </Routes>
    </Layout> 
  );
}

export default App;
