import React from 'react';

//import styles from './styles.less';

export default class About extends React.Component {
	render () {
		return (
			<p>About, <span className={styles.hello}>{this.props.name}</span>!</p>
		);
	}
}
