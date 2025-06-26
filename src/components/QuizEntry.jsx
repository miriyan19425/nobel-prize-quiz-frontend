import styles from './QuizEntry.module.css';

function QuizEntry({question, showAnsWindow, handleEdit}){
    return (
        <article className={styles.entry}>
		      <h2 className={styles.question}>{question}</h2>
          <section className={styles.buttons}>
            <button type="button" className={styles.answer} onClick={showAnsWindow}>answer</button>
            <button type="button" className={styles.edit} onClick={handleEdit}>edit</button>
            <button type="button" className={styles.delete}>delete</button>
          </section> 
        </article>
  );
}

export default QuizEntry;
