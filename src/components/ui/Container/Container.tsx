import { FunctionComponent, ReactNode } from 'react';
import styles from './Container.module.css';

type TypeContainer = {
	children: ReactNode;
};

const Container: FunctionComponent<TypeContainer> = ({
	children,
}): ReactNode => {
	return <div className={styles.container}>{children}</div>;
};

export default Container;
