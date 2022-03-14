const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-page');

// These Questions will be asked about the manager
const ManagerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'ManagerName',
            message: 'Enter the managers name',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the managers name!');
                    return false;
                }
            }
        }, {
            type: 'input',
            name: 'ManagerID',
            message: 'Enter employee ID',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the employee ID!');
                    return false;
                }
            }
        }, {
            type: 'input',
            name: 'ManagerEmail',
            message: 'Enter email address',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the  email address!');
                    return false;
                }
            }
        }, {
            type: 'input',
            name: 'ManagerOffice',
            message: 'Enter the office number',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the  office number!');
                    return false;
                }
            }
        },
    ]);
};

// These Questions will be asked about the Engineer
const EngineerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Engineername',
            message: 'Enter the engineers name',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the engineers name!');
                    return false;
                }
            }
        }, {
            type: 'input',
            name: 'EngineerID',
            message: 'Enter employee ID',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the employee ID!');
                    return false;
                }
            }
        }, {
            type: 'input',
            name: 'EngineerEmail',
            message: 'Enter email address',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the  email address!');
                    return false;
                }
            }
        }, {
            type: 'input',
            name: 'EngineerGithub',
            message: 'Enter the engineers github username',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the engineers github username!');
                    return false;
                }
            }
        },
    ]);
};

// These Questions will be asked about the Intern
const InternQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'InternName',
            message: 'Enter the Interns name',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the interns name!');
                    return false;
                }
            }
        }, {
            type: 'input',
            name: 'InternID',
            message: 'Enter employee ID',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the employee ID!');
                    return false;
                }
            }
        }, {
            type: 'input',
            name: 'InternEmail',
            message: 'Enter email address',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the  email address!');
                    return false;
                }
            }
        }, {
            type: 'input',
            name: 'InternSchool',
            message: 'Enter the interns school',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the interns school!');
                    return false;
                }
            }
        },
    ]);
};

// function to generate HTML page file using file system 
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the profile has been created 
        } else {
            console.log("The team profile has been created!")
        }
    })
}; 

// ManagerQuestions()
//     .then(EngineerQuestions)
//     return()

    addManager()
  .then(addEmployee)
  .then(teamArray => {
    return generateHTML(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });