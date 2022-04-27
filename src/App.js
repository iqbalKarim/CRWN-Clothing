import { Route, Routes } from 'react-router-dom';
import Authentication from './routes/authentication/authentication.component';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Shop from './routes/shop/shop.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        {/*index denotes that that conponent/route will be displayed under the route ^^ if it matches  */}
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
