import styles from './ModalEdit.module.css';

function ModalEdit({ val, changeAnswer, updateEntry, hideEditWindow }) {
  return (
    <dialog className={styles.modal} open>
      <input type="text" value={val} onChange={changeAnswer}/>
      <form method="dialog">
        <button className={styles.newButton} onClick={updateEntry}>Edit</button>
        <button className={styles.closeButton} onClick={hideEditWindow}>Close</button>
      </form>
    </dialog>
  );
}

export default ModalEdit;
