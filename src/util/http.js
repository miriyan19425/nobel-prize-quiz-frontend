export async function fetchQuizEntriesByCategory(cat) {
  	const response = await fetch(`http://localhost:3000/quiz/${cat}`);

  	const { data } = await response.json();

  	return data;
}

export async function createNewQuizEntry(data) {

    const response = await fetch(`http://localhost:3000/quiz`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
    });

    return response.json();   
}
