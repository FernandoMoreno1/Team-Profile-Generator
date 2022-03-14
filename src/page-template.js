

//creates the MANAGER section 
const generateManager = ManagerSection => {
 return`
 <section class="col-3">

<div class="card">
    <div class="card-header bg-primary text-white"">
    <h5 class="">${ManagerName}</h5>
    <h5 class="">☕️ Manager</h5>
</div>

<div class=" m-5 card">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID:${ManagerID}</li>
            <li class="list-group-item">Email:${ManagerEmail}</li>
            <li class="list-group-item">Office number:${ManagerOffice}</li>
        </ul>
    </div>
</div>
</section>
 `   
}
//creates the ENGINEER section
const generateEngineer = ManagerSection => {
    return`
    <section class="col-3">

    <div class="card">
        <div class="card-header bg-primary text-white"">
        <h5 class="">${Engineername}</h5>
        <h5 class="">👓 Engineer</h5>
    </div>
    
    <div class=" m-5 card">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:${EngineerID}</li>
                <li class="list-group-item">Email:${EngineerEmail}</li>
                <li class="list-group-item">Github:${EngineerGithub}</li>
            </ul>
        </div>
    </div>
</section>
    `
}

//creates the Intern Section
const generateIntern = ManagerSection => {
    return`
    <section class="col-3">

<div class="card">
    <div class="card-header bg-primary text-white">
    <h5 class="">${InternName}</h5>
    <h5 class="">🎓 Intern</h5>
</div>

<div class=" m-5 card">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID:${InternID}</li>
            <li class="list-group-item">Email:${InternEmail}</li>
            <li class="list-group-item">School:${InternSchool}</li>
        </ul>
    </div>
</div>
</section>
    `
    }



// This is what should generate the whole webpage 
module.exports = templateData => {
// destructure page data by section
const {Manager, Engineer, Intern} = templateData

return`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>Document</title>
</head>

<body>
    <header>
        <div class="topless">My Team</div>
    </header>
<div class="row m-5">

    <section class="col-3">

        <div class="card">
            <div class="card-header bg-primary text-white"">
            <h5 class="">Jared</h5>
            <h5 class="">☕️ Manager</h5>
        </div>
        
        <div class=" m-5 card">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID:</li>
                    <li class="list-group-item">Email:</li>
                    <li class="list-group-item">Office number:</li>
                </ul>
            </div>
        </div>
    </section>

    <section class="col-3">

        <div class="card">
            <div class="card-header bg-primary text-white"">
            <h5 class="">Alec</h5>
            <h5 class="">👓 Engineer</h5>
        </div>
        
        <div class=" m-5 card">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID:</li>
                    <li class="list-group-item">Email:</li>
                    <li class="list-group-item">Github:</li>
                </ul>
            </div>
        </div>
    </section>

    <section class="col-3">

        <div class="card">
            <div class="card-header bg-primary text-white">
            <h5 class="">John</h5>
            <h5 class="">🎓 Intern</h5>
        </div>
        
        <div class=" m-5 card">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID:</li>
                    <li class="list-group-item">Email:</li>
                    <li class="list-group-item">School:</li>
                </ul>
            </div>
        </div>
    </section>
</div>

</body>

</html>
`;
};
