import App from './App.js';
import Profile from './Profile.js';
import TimeLine from './TimeLine';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function Router()
{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <App/> } />
                <Route path='/proflie' element={ <Profile/> } />
                <Route path='/timeline' element={ <TimeLine/> } />
            </Routes>
        </BrowserRouter>
    )    
}

export default Router;