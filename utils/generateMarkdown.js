// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseArr = [
  '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
  '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
  '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
  '[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)',
  '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
];

function renderLicenseBadge(license) {

  let licenseType = license;
  let yourLicense = ''
  if (licenseType === 'Apache 2.0') {
    yourLicense = licenseArr[0]
  }
  else if (licenseType === 'MIT') {
    yourLicense = licenseArr[1]
  } else if (licenseType === 'MPL 2.0') {
    yourLicense = licenseArr[2]
  } else if (licenseType === 'Artistic 2.0') {
    yourLicense = licenseArr[3]
  } else {
    yourLicense = licenseArr[4]
  }
  return yourLicense;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  someVar = renderLicenseBadge(data.license);
  return `# ${data.title}
  ${someVar}
  
  ## Description
  ${data.description}
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
  ${data.installation}
  \`

  ## Usage
  ${data.usage}

  ## License
  This repository is licensed though ${data.license} license.

  ## Contributing
  ${data.contributing}

  ## Tests
  Run the following code for tests:

  \`
  ${data.tests}
  \`

  ## Questions
  If you have questions about this repo, please contact me at ${data.email}
  My GitHub: [${data.username}](https://github.com/${data.username})
  `;
}

module.exports = generateMarkdown;
