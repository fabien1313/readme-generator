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
function renderLicenseLink(license) {
  let licenseLink = '';
  if (license === 'MIT') {
    licenseLink = 'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions. The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.';
  } else if (license === "Apache 2.0") {
    licenseLink = 'title: Apache License 2.0, spdx-id: Apache-2.0, redirect_from: /licenses/apache/, featured: true, hidden: false. Description: A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code. How: Create a text file (typically named LICENSE or LICENSE.txt) in the root of your source code and copy the text of the license into the file. Note: The Apache Software Foundation <a href="https://apache.org/foundation/license-faq.html#Apply-My-Software">recommends</a> taking the additional step of adding a boilerplate notice to the header of each source file. You can find the notice in the appendix at the very end of the license text. Using: Kubernetes: https://github.com/kubernetes/kubernetes/blob/master/LICENSE,  PDF.js: https://github.com/mozilla/pdf.js/blob/master/LICENSE, Swift: https://github.com/apple/swift/blob/main/LICENSE.txt. Permissions: commercial-use, modifications, distribution, patent-use, private-use. Conditions: include-copyright, document-changes. Limitations: trademark-use, liability, warranty. Apache License Version 2.0, January 2004  http://www.apache.org/licenses/  TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION 1. Definitions. "License" shall mean the terms and conditions for use, reproduction, and distribution as defined by Section 1 through 9 of this document. "Licensor" shall mean the copyright owner or entity authorized by the copyright owner that is granting the License. "Legal Entity" shall mean the union of the acting entity and all other entities that control, are controlled by, or are under common control with that entity. For the purposes of this definition, "control" means (i) the power, direct or indirect, to cause the direction or management of such entity, whether by contract or otherwise, or (ii) ownership of fifty percent (50%) or more of the outstanding shares, or (iii) beneficial ownership of such entity. "You" (or "Your") shall mean an individual or Legal Entity exercising permissions granted by this License. For the full license please visit https://github.com/github/choosealicense.com/blob/gh-pages/_licenses/apache-2.0.txt'
  } else if (license === 'PDDL') {
    licenseLink = 'PDDL Tools library for Common Lisp Copyright (c) 2016, SIFT, LLC; Robert P. Goldman; and Ugur Kuter. All rights reserved. Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met: 1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer. 2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution. 3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission. THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.'
  } else {
    licenseLink = '';
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const turd = ({ title, description, license, installation, usage, technologies1, technologies2, technologies3, contributing, tests, questions}) =>
  `# ${title}
  ${renderLicenseBadge(license)}
  <hr>
  ## Description
  ${description}
  <hr>
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Technologies](#technologies)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)
  <hr>
  ## Installation
  ${installation}
  <hr>
  ## Usage
  ${usage}
  <hr>
  ## Technologies
 - ${technologies1}
 - ${technologies2}
 - ${technologies3}
 <hr>
 ## Contributing
 ${contributing}
 <hr>
 ## Tests
 ${tests}
 <hr>
 ## Questions
 If you have questions, comments, or concerns please reach me at https://github.com/${questions}
<hr>
 ## License
 **License:** ${license}
 <br>Copyright 2022 ${questions}<br>
 ${renderLicenseLink(license)}


`;


module.exports = turd;
