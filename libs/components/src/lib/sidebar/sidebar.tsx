import { Card, Button, Icontext } from '@kado/components';
import homeIcon from './icon_home.svg';
import rampIcon from './icon_ramp.svg';
import earnIcon from './icon_earn.svg';
import payIcon from './icon_pay.svg';
import styles from './sidebar.module.css';
import { text } from 'stream/consumers';

/* eslint-disable-next-line */
export interface SidebarProps {}

export function Sidebar(props: SidebarProps) {
  /**
   * variable
   */

  const menuItems = [
    {
      icon: homeIcon,
      text: 'Home',
    },
    {
      icon: rampIcon,
      text: 'Ramp',
    },
    {
      icon: payIcon,
      text: 'Pay',
      comingSooon: true,
    },
    {
      icon: earnIcon,
      text: 'Earn',
      comingSooon: true,
    },
  ];

  return (
    <div className={styles['container']}>
      <Card className="flex-col space-y-4">
        {menuItems.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <Icontext
              icon={item?.icon}
              disabled={item?.comingSooon || false}
              text={item?.text}
            />
            {item?.comingSooon && (
              <p className="text-xs text-blue-400">Coming soon</p>
            )}
          </div>
        ))}
      </Card>
    </div>
  );
}

export default Sidebar;
