// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = '';
  if (license === 'MIT') {
    licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license === 'Apache 2.0') {
    licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (license === 'PDDL') {
    licenseBadge = '[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)'
  } else {
    licenseBadge = '';
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const turd = ({ title, description, license, installation, usage, technologies1, technologies2, technologies3, contributing, tests, questions}) =>
  `# ${title}
  ${renderLicenseBadge(license)}

  ## Description
  ${description}

  ##Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Technologies](#technologies)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)

  ## Installation
  ${installation}

  ## Usage
  ${usage}

  ## Technologies
 - ${technologies1}
 - ${technologies2}
 - ${technologies3}

 ## Contributing
 ${contributing}

 ## Tests
 ${tests}

 ## Questions
 If you have questions, comments, or concerns please reach me at https://github.com/${questions}

 ## License
 **License:** ${license}
 

`;


module.exports = turd;
