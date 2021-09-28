# eCommerceBackend
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
An E-Commerce Backend that demonstrates Object-Relational Mapping

# Table of Contents
1. [Description](#description)
2. [Installation Instructions](#install)
3. [Usage](#usage)
4. [Contribution Guidelines](#contribution)
5. [License](#license)
6. [Questions](#questions)

## Description <a name="description"></a>
This is a Node.js application that will take in input regarding a manager and the engineers and interns on their team.
Using this information, it will generate an HTML web page.
The application uses JavaScript and Node.js.
The HTML webpage uses Bootstrap, FontAwesome, and an application-specific CSS file.

## Installation Instructions <a name="install"></a>
1. Clone the project from the main branch of the repository to the local filesystem
2. make sure that node.js and npm are installed
3. run the command "npm install" to install the dependencies from the package.json file
4. create an .env file with your MySQL username and password, and the database set to "ecommerce_db"
5. run "cd db" in order to enter the db folder
6. open a MySQL shell, and use the command "source schema.sql" in order to load the schema folder
7. ![Schema Load](https://user-images.githubusercontent.com/85419207/135026316-3abcc677-15af-4b68-864b-9d0d78f5a189.jpg)
8. exit out of the MySQL shell, and navigate back to the main folder
9. run the command "npm run seed" in order to seed the database
10. ![Seed DB](https://user-images.githubusercontent.com/85419207/135026353-d2eaf956-8025-4f1f-8f15-2890cab3c420.jpg)

## Usage <a name="usage"></a>
1. in the main folder, run the command "npm start"
2. ![start server](https://user-images.githubusercontent.com/85419207/135026412-a6b47257-866a-4465-a9ed-6fbfcc6b2573.jpg)
3. using Insomnia or another API client, go to localhost:3001/api/
4. Product routes are localhost:3001/api/products/
5. Category routes are localhost:3001/api/categories/
6. Tag routes are localhost:3001/api/tags/
7. GET requests are at / and can have an id parameter passed
8. POST for products should be formatted as: 
 {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
9. POST requests for categories should be formatted as:
 { "category_name": "Underwear" }
10. POST requests for tags should be formatted as:
 {
      "tag_name": "cyan",
      "prodIds": [1, 2, 3, 4]
    }
11. PUT requests for products should be formatted as:
  {
      "product_name": "Basketball",
      "price": 250.00,
      "stock": 2,
      "tagIds": [3, 4]
    }
12. PUT requests for categories should be formatted as:
  { "category_name": "Undergarments" }
13. PUT requests for tags should be formatted as:
  { "tag_name": "fuschia" }
  
## Usage Video
https://drive.google.com/file/d/1Qxct1RAqi-oiIoCqu3e5YKg96VuCM8Z5/view

## Contribution Guidelines <a name="contribution"></a>
1. Clone the Main branch of the repository from GitHub
2. Create a Branch and name it using the format: "feature_contributor"
3. Create a pull request
4. Send an email to the address listed in the Questions section, containing a summary of the contribution

## License <a name="license"></a>
MIT https://opensource.org/licenses/MIT
A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.

## Questions <a name="questions"></a>
GitHub name: KatsuMatsushita

[GitHub Profile](https://github.com/KatsuMatsushita)

To contact me, drop an email to: katsu.matsushita@gmail.com
