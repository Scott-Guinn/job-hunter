import Header from './Header';
import StatusTracker from './StatusTracker';
import Dashboard from './Dashboard';

import styles from '../../styles/Home.module.css';


const App = () => (
  <>
    <Header />

    <main className={styles.main}>
      <StatusTracker />
      <Dashboard />
    </main>
  </>
)

export default App;