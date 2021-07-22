import {useState, useEffect} from 'react';

import Header from './Header';
import StatusTracker from './StatusTracker';
import Dashboard from './Dashboard';

import styles from '../../styles/Home.module.css';


const App = () => {
  const defaultUser = {
    userID: 1,
    username: 'anonymous',
    pointTotal: 100,

  }

  const [user, setUser] = useState(defaultUser);

  return (
    <>
    <Header user={user} />

    <main className={styles.main}>
      <StatusTracker />
      <Dashboard />
    </main>
  </>
)

}
export default App;