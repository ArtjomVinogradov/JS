const looList = callback => {
    const req = new XMLHttpRequest();
    const url = "https://dummyjson.com/quotes";
 
    req.addEventListener('readystatechange', () => {
        if (req.readyState === 4 && req.status === 200) {
            //console.log(req.responseText);
            const data = JSON.parse(req.responseText);
            //console.log(data.todos);
            callback(null, data.todos);
        } else if (req.readyState === 4) {
            //console.log("Probleem andmetega");
            callback("Probleem andmetega", null);
        }
    });
 
    req.open("GET", url);
    req.send();
};
 
looList((err, data) => {
    if (err) {
        console.log(err);
    } else {
        //console.log(data);
        const container = document.getElementById("vastusekast");
 
        data.forEach(todo => {
            const listItem = document.createElement("li");
            listItem.className = "list-group-item d-flex justify-content-between align-items-center";
 
            listItem.innerHTML = `
            Todo #${todo.id} (User: ${todo.userId}) - ${todo.todo}
            <span class="badge bg-${todo.completed
                ? 'success'
                : 'danger'}">
                ${todo.completed
                    ? 'OK'
                    : 'Lõpetamata'}
            </span>
        `;
            container.appendChild(listItem);
        });
    }
});