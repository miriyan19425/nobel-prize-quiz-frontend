function Query({question}){
    return (
        <section className='query'>
		      <h2>{question}</h2>
		      <button type="button">Show Answer</button> 
        </section>
  );
}

export default Query;
