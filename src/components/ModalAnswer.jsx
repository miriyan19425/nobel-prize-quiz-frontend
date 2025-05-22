import styles from './ModalAnswer.module.css';

function ModalAnswer({ answer, handleClose }) {
  return (
    <dialog className={styles.modal} open>
      <p className={styles.answer}>{answer}</p>
      <form method="dialog">
        <button className={styles.closeButton} onClick={handleClose}>Close</button>
      </form>
    </dialog>
  );
}

export default ModalAnswer;
