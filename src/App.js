import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app__wrapper'>
        <Header />
        <Sidebar />
        <div className='app__wrapper-content'>
          <Routes>
            <Route path='/profile/*' element={
              <Profile />} />

            <Route path='/messages/*' element={
              <DialogsContainer />} />
            
            <Route path='/users/*' element={
              <UsersContainer /> } />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
