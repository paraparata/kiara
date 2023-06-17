import styles from './Header.module.css';
import Link from './Link';
import { ThemeSelector } from './ThemeSelector';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <Link href='/'>
          <span>KIARA</span>
        </Link>
        <ThemeSelector />
      </div>
    </header>
  );
};
