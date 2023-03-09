document.querySelector('#push').onclick = function(){
    if(document.querySelector('#new-task input').value.length === 0){
        alert("Hey? don't you have a lot of activities today? :D")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#new-task input').value}
                </span>
                <button class="delete">
                <p>&check;</p>
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        const current_tasks = document.querySelectorAll(".delete");
        for(let i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}