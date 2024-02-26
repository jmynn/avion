import { FunctionComponent, ReactNode } from 'react';
import styles from './Wrapper.module.css';

type TypeWrapper = {
	children: ReactNode;
};

const Wrapper: FunctionComponent<TypeWrapper> = ({ children }): ReactNode => {
	return <div className={styles.wrapper}>{children}</div>;
};

export default Wrapper;
