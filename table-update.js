//constructor of Project Objects to be used
const projectFactory = (title, description, link) => {
    return {
        _title: title,
        _description: description,
        _git_link: link,

        get title(){return this._title},
        get description(){return this._description},
        get git_link(){return this._git_link},
        
        set title(newTitle){
            if(typeof newTitle === 'string' && newTitle.length <= 50){
                this._title = newTitle;
            }
            else{
                console.log('Please enter a string of less than 50 characters')
            }
        },

        set description(newDesc){
            if(typeof newDesc === 'string'){
                this._description = newDesc;
            }
            else{
                console.log('Please enter a string')
            }
        }
    }
};

//first project to be included in the table
let projDesc = 'My first javascript code that produces a message of random strings to create a message of comments people will say to their television while watching live sports. This was a silly project to demonstrate my understanding of the basics of javascript.';
const armchairProject = projectFactory('Armchair Commentator', projDesc, 'https://github.com/tristanbac22/Armchair-Commentator')

//console.log(armchairProject)
 const projects = [];
 projects.push(armchairProject);
 //console.log(projects.length);

projDesc = 'An basic Android app that allows the user to create a database of office grievances that implements a recycler view for displaying the list of entries. The user can create new entries, update existing ones and marked them as resolved. The projects used the recycler view and to design Android UI that withstood state changes such as screen rotation.';
const officeCrime = projectFactory('Office Crime', projDesc, 'https://github.com/tristanbac22/OfficeCrime');
projects.push(officeCrime);

projDesc = 'An Android app that makes remote data requests to a remote database of GPAs of schools in New York. The projects practices making remote requests storing results in local repository. The project implements dependency injection using Google Dagger and Hilt libraries.';
const nycSchools = projectFactory('NYC Schools', projDesc, 'https://github.com/tristanbac22/NYC-School')
projects.push(nycSchools);
console.log(projects.length);


const table = document.getElementById('projTable');
console.log(table);

const updateDescription = (index) =>{
    const projTitle = document.getElementsByClassName('project-name');
    const projDescription = document.getElementsByClassName('project-description');
    const projLink = document.getElementsByClassName('repository-link');
    const selectedProj = projects[index];

    projTitle.innerHTML = selectedProj.title;
    projDescription.innerHTML = selectedProj.description;
    projLink.setAttribute("href", selectedProj.git_link);  
}

for(let i = 0; i < table.rows.length; i++){
    //rIndex = this.rowIndex;
    //console.log(rIndex);
    table.rows[i].addEventListener('click', function(i){
        const rIndex = this.rowIndex
        const projTitle = document.getElementById('project-name');
        const projDescription = document.getElementById('project-description');
        const projLink = document.getElementById('repository-link');
        const selectedProj = projects[rIndex];

        projTitle.innerHTML = selectedProj.title;
        projDescription.innerHTML = selectedProj.description;
        projLink.href =  selectedProj.git_link;  
    })

}