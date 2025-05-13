import Query from './Query';
import {nobelPrizeQuiz} from '../data.js';

function Queries({category}){
	
	return (
		<ul>
      {nobelPrizeQuiz.filter((query) => query.category === category).map((entry) => <li key={entry.id}><Query question={entry.question} /></li>)}
    </ul>
	);
}

export default Queries;
