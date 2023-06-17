import styles from './Home.module.css';
import Link from '../../components/Link';
import Kiara from './Kiara';

import { routes } from '../../main';

const Home = () => {
  return (
    <div className={styles.home}>
      <header>audio exploration</header>
      <main>
        <Kiara />
      </main>
      <footer>
        <ul>
          {routes.map((route) => (
            <li key={route.name}>
              <Link href={route.url}>{route.name}</Link>
            </li>
          ))}
          <li>
            <a
              href='https://github.com/paraparata/kiara'
              target='_blank'
              rel='noopener noreferrer'
            >
              src
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Home;
