// Layout.js

import { ReactNode } from "react";
import Header from "../header/index";
import Menu from "../Menu/index";
import styles from '@/styles/Layout.module.css'




interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div >
      <Header />
        <div className={styles.container}>
          <div className={styles.box_menu}>
            <Menu />
          </div>
          <div className={styles.box_pages}>
            <main>{children}</main>
          </div>
        </div>
      
      
      
    </div>
  );
};

export default Layout;
