import styles from './NewQuizEntryForm.module.css';
import { create } from '../util/http.js';

function NewQuizEntryForm(){

    async function handleSubmit(e) {
        e.preventDefault();

        const fd = new FormData(e.target);
        const data = Object.fromEntries(fd.entries());

        create(data);
    }

    return (
        <main className={styles.newMain}>
            <form className={styles.newForm} onSubmit={handleSubmit}> 
                <h2 className={styles.newTitle}>ADD NEW QUERY</h2>
                <section className={styles.formElements}>
                    <label className={styles.newLabel} htmlFor="category">Category:</label><br/>
                    <select id="category" name="category">
                        <option value="physics">physics</option>
                        <option value="chemistry">chemistry</option>
                        <option value="medicine">medicine</option>
                        <option value="literature">literature</option>
                        <option value="peace">peace</option>
                        <option value="economics">economics</option>
                    </select>
                </section>
                <section className={styles.formElements}>
                    <label className={styles.newLabel} htmlFor="question">Question:</label><br/>
                    <textarea id="question" name="question" rows="4" cols="50"></textarea>
                </section>
                <section className={styles.formElements}>
                    <label className={styles.newLabel} htmlFor="answer">Answer:</label><br/>
                    <input type="text" id="answer" name="answer" />
                </section>
                <section className={styles.formElements}>
                    <button className={styles.newButton}>Create</button>
                </section>   
            </form>
        </main>
    );
}

export default NewQuizEntryForm;
