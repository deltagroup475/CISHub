// Load the AWS SDK for Node.js
const { DynamoDBClient, ListTablesCommand, DescribeTableCommand, GetItemCommand } = require("@aws-sdk/client-dynamodb");

// Set the region
const client = new DynamoDBClient({ region: "us-east-2" });

//read table
// async function read() {
//   const input = {
//     TableName: "h",
//   //   Key: {
//   //     id: {N: "1"},
//   //   },
//   // });
// };
//   const list = new DescribeTableCommand(input);
//   const res = await client.send(list);
//   console.log(res.Table.ItemCount);
// }

// read()

//faculty page
//this function display all faculty member's name and title on the faculty html page
async function facultyPage() {
  // get table item count 
  const table = {
    TableName: "faculty_bio",
  };
  const details = new DescribeTableCommand(table);
  const itemCount = await client.send(details);

  // faculty map
  let name;
  let title;
  let info = new Map ([
    [name, title]
  ])

  //loop through table items and collect name and title attributes into the 'info' map
  for (let x = 0; x < itemCount.Table.ItemCount; x++) {

    PK = x.toString();

    const card = new GetItemCommand ({ 
      TableName: "faculty_bio",
      Key: {
        id: {N: PK}
      }
    });
    const populate = await client.send(card);

    info.set(populate.Item.name, populate.Item.title);
  }

  const facultyContainer = document.querySelector('.faculty-container');

  //print html to page
     cardData.map((info) =>{ //map for faculty cards displayed
        const postElement = document.createElement('div');
        postElement.classList.add('card');
        postElement.innerHTML= `
        <h3 id="faculty-name">${info.name}</h3>
        <p id="faculty-title">${info.title}</p>
        `
        facultyContainer.appendChild(postElement)
    })

  }
  facultyPage();