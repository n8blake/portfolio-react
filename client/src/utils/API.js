export default {
    //get all projects
    getProjects: function(){
        return fetch("/api/portfolio")
        .then(result => result.json())
        .catch(error => console.error(error))
    }
}