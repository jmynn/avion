import { ReactNode } from 'react';
import styles from './FormFeedback.module.css'

const FormFeedback = (): ReactNode => {
	return (
		<form
			action='#'
			className={styles.feedback}>
			<input
				type='email'
				placeholder='your@email.com'
				required
			/>
			<button type='submit'>Sign up</button>
		</form>
	);
};

export default FormFeedback;
