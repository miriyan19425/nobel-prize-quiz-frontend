import {useState} from 'react';
import QuizEntry from './QuizEntry';
import ModalAnswer from './ModalAnswer';
import ModalEdit from './ModalEdit';
//import {nobelPrizeQuiz} from '../data.js';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { read, del, update } from '../util/http.js';

function QuizEntries({category}){
	const [answer, setAnswer] = useState('');
	const [editOpen, setEditOpen] = useState(false);
	const [entryId, setEntryId] = useState(null);

	const queryClient = useQueryClient();
	const { data, isPending, error } = useQuery({ queryKey: [{category}], queryFn:  () => read(category) });
	if (isPending) return 'Loading...'
  	if (error) return 'An error has occurred: ' + error.message

	function showAnsWindow(ans){ setAnswer(ans); }
	function showEditForm(ent){
		console.log(ent);
		setEntryId(ent._id);
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
     const updatedData = { answer }; // Ensure `entryId` refers to the correct quiz entry
     await update(updatedData, entryId);
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
														showAnsWindow={() => showAnsWindow(entry.answer)} 
														handleEdit={() => showEditForm(entry)}
														handleDelete={() => deleteEntry(entry)} /></li>)}
        	</ul>
		</>
		
	);
}

export default QuizEntries;
