// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `
  ![License](https://img.shields.io/badge/License-${answers.license}-blue.svg)
  `
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `
  https://opensource.org/licenses/${answers.license}
  `
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'N/A') {
    return '';
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseSection}
  
  ## Description
  ${answers.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
   
  ## Installation
  Follow the steps to for installation:

  \`
  ${answers.installation}
  \`

  ## Usage
  ${answers.usage}

  ## License
  This repository is licensed though ${answers.license} license.

  ## Contributing
  ${answers.contributing}

  ## Tests
  Run the following code for tests:
  \`
  ${answers.tests}
  \`

  ## Questions
  If you have questions about this repo, please contact me at ${answers.email}
  My GitHub: [${data.username}](https://github.com/${answers.username})
  `;
}

module.exports = generateMarkdown;
