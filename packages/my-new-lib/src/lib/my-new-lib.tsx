import styles from './my-new-lib.module.css';

/* eslint-disable-next-line */
export interface MyNewLibProps {}

export function MyNewLib(props: MyNewLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MyNewLib!</h1>
    </div>
  );
}

export default MyNewLib;
