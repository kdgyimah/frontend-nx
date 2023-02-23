import { Logo, Sidebar, Card, Button } from '@kado/components';
import iconEye from './icon_eye.svg';
import styles from './account.module.css';

/* eslint-disable-next-line */
export interface AccountProps {}

export function Account(props: AccountProps) {
  return (
    <div className={styles['container']}>
      <nav className="nav mt-8 mb-12">
        <Logo />
      </nav>

      <div className="flex">
        <aside className="sidebar">
          <Sidebar />
        </aside>
        <main className="w-full min-w-max w-100 ml-8">
          <Card>
            <div className="flex items-center justify-between">
              <h1 className="font-medium font-mono">My Account</h1>
              <Button icon={iconEye} className="p-2">
                See details
              </Button>
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
}

export default Account;
