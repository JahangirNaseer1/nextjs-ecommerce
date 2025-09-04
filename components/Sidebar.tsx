import React from 'react';
import styles from '../styles/Sidebar.module.scss';

interface SidebarProps extends React.PropsWithChildren {
    open: boolean;
    onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onClose, children }) => {
    return (
        <div className={`${styles.sidebar} ${open ? styles.open : ''}`}>
            <button className={styles.closeBtn} onClick={onClose} aria-label="Close sidebar">&times;</button>
            <div className={styles.content}>{children}</div>
        </div>
    );
};

export default Sidebar;
