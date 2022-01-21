import logo from './logo.svg';
import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto/ProfilePhoto';
import FullName from './Component/Profile/FullName/FullName';
import Address from './Component/Profile/Address/Address';
import SocialMedia from './Component/Profile/SocialMedia/SocialMedia';

function App() {
  return (
    <div className="App">

    <div className='flexy'>
      <ProfilePhoto/>
      
      <div>
      <FullName/>
      <Address/>
      <SocialMedia/>
      </div>

      </div>
     
    </div>
  );
}

export default App;
