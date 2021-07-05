// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseArr = {
  'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
  'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
  'MPL 2.0': '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
  'Artistic 2.0': '[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)',
  'Unlicense': '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseSection = licenseArr[data.license];

  return `# ${data.title}
  ${licenseSection}
  
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
