const generateIntern = function (intern) {
    return `
    <div class="col-4 mt-4">
                    <div class="card h-100">
                        <div class="card-header bg-primary">
                            <h3>${intern.name}</h3>
                            <h4>Intern</h4>
                        </div>

                        <div class="card-body">
                            <p class="id">ID: ${intern.id}</p>
                            <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                            <p class="school">${intern.school}</p>
                        </div>
                    </div>
                </div>
    `;
};

const generateManager = function (manager) {
    return `
    <div class="col-4 mt-4">
                    <div class="card h-100">
                        <div class="card-header bg-primary">
                            <h3>${manager.name}</h3>
                            <h4>Manager</h4>
                        </div>

                        <div class="card-body">
                            <p class="id">ID: ${manager.id}</p>
                            <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                            <p class="office">Office Number: ${manager.officeNumber}</p>
                        </div>
                    </div>
                </div>
    `;
};

const generateEngineer = function(engineer) {
    return `
    <div class="col-4 mt-4">
                    <div class="card h-100">
                        <div class="card-header bg-primary">
                            <h3>${engineer.name}</h3>
                            <h4>Engineer</h4>
                        </div>

                        <div class="card-body">
                            <p class="id">ID: ${engineer.id}</p>
                            <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                            <p class="github">Github: <a href="https://github.com/${engineer.hithub}">${engineer.hithub}</a></p>
                        </div>
                    </div>
                </div>
    `;  
};

createList = (data) => {
    employeeArray = [];

    for (let i = 0; i < employeeArray.length; i++) {
        const worker = data[i];
        const role = getRole();

        if(role === engineer){
            let engineerInfo = generateEngineer(worker);
            employeeArray.push(engineerInfo);
        }
        if (role === intern) {
            let internInfo = generateIntern(worker);
            employeeArray.push(internInfo);
        }
        if (role === manager) {
            let managerInfo = generateManager(worker);
            employeeArray.push(managerInfo);
        };
    }
    const listItems = employeeArray.join('');
    
    const generateWorkers = createPage(listItems);
    return generateWorkers;
}

const createPage = function(listItems) {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>
<body>
    <header class="navbar-brand text-center bg-danger text-light p-4 font-fix">
        <p>My Team</p>
    </header>
    <main>
        <div class="container">
        <div class="row justify-content-center" id="team-cards">
        ${listItems}
        </div>
        </div> 
    </main>
    </body>
    
    </html>
    `
}

module.exports = createList;