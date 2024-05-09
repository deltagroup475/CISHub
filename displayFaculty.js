//This script dynamically loads a grid of all CIS Faculty and their titles on the faculty page
// Load the AWS SDK for Node.js
import { DynamoDBClient, DescribeTableCommand, GetItemCommand } from "@aws-sdk/client-dynamodb";
//DescribeTableCommand pulls information about the table in AWS, GetItemCommand pulls a specific item from the table
// in this script the GetItemCommand pulls the items by their primary key


// Set the region and client
const client = new DynamoDBClient({ region: "us-east-2" });

export const displayFaculty = async () => {
  // get table item count 
  const table = {
    TableName: "faculty_bio",
  };
  const details = new DescribeTableCommand(table);
  const itemCount = await client.send(details);

  // faculty map
  let pname;
  let ptitle;
  let info = new Map ([
    [pname, ptitle]
  ])

  //loop through table items and collect name and title attributes into the 'info' map
  for (let x = 0; x < itemCount.Table.ItemCount; x++) {

    let PK = x.toString();

    const card = new GetItemCommand ({ 
      TableName: "faculty_bio",
      Key: {
        id: {N: PK}
      }
    });
    const populate = await client.send(card);

    info.set(populate.Item.name, populate.Item.title);
  }
console.log(info) // print map with names and titles of the professors
  const facultyContainer = document.querySelector('.faculty-container');

  //print html to page
     cardData.map((info) =>{ //map for faculty cards displayed
         const postElement = document.createElement('div');
         postElement.classList.add('card');
         postElement.innerHTML= `
        // <h3 id="faculty-name">${info.pname}</h3>
        // <p id="faculty-title">${info.ptitle}</p>
         `
         facultyContainer.appendChild(postElement)
    })

    return cardData;
  };

  displayFaculty()