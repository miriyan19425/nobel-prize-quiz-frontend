import {useState} from 'react';
import QuizEntry from './QuizEntry';
import ModalAnswer from './ModalAnswer';
import ModalEdit from './ModalEdit';
//import {nobelPrizeQuiz} from '../data.js';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { read, del, updateQuizAnswer } from '../util/http.js';

function QuizEntries({category}){
	const [answer, setAnswer] = useState('');
	const [editOpen, setEditOpen] = useState(false);
	const [quizEntryId, setQuizEntryId] = useState(null);

	const queryClient = useQueryClient();
	const { data, isPending, error } = useQuery({ queryKey: [{category}], queryFn:  () => read(category) });
	if (isPending) return 'Loading...'
  	if (error) return 'An error has occurred: ' + error.message

	function showAnswer(ans){ setAnswer(ans); }
	function showEditForm(ent){
		console.log(ent);
		setQuizEntryId(ent._id);
		setAnswer(ent.answer);
		setEditOpen(true);
	}
	async function deleteEntry({_id}) { 
        await del(_id);
        queryClient.invalidateQueries([{ category }]);
    }

	function closeModalAnswer(){ setAnswer(''); }
	function closeModalEdit(){ setEditOpen(false); }
	function updateAnswer(e){ setAnswer(e.target.value); }
	async function handleUpdate() {
     const updatedData = { answer }; // Ensure `quizEntryId` refers to the correct quiz entry
     await updateQuizAnswer(updatedData, quizEntryId);
     queryClient.invalidateQueries([{ category }]); // Refresh data from the backend
    }

	return (
		<>
			{editOpen && <ModalEdit inpVal={answer} changeInput={updateAnswer} handleUpdate={handleUpdate} handleClose={closeModalEdit}/>}
			{answer && <ModalAnswer answer={answer} handleClose={closeModalAnswer}/>}
			<ul>
         		{data.filter((qu) => qu.category === category)
		 						.map((entry) => <li key={entry.id}>
												<QuizEntry question={entry.question} 
														handleAnswer={() => showAnswer(entry.answer)} 
														handleEdit={() => showEditForm(entry)}
														handleDelete={() => deleteEntry(entry)} /></li>)}
        	</ul>
		</>
		
	);
}

export default QuizEntries;
