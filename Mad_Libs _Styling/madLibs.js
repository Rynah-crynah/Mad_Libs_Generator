const submitMadLibs = (event) =>{
    alert("Hey!")
    event.preventDefault()

    const form = new FormData(event.target);
    const userSubmission = Object.frommEntries(form);
    
}