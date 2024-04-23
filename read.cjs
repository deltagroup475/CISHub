// Load the AWS SDK for Node.js
//var AWS = require("aws-sdk");
const { DynamoDBClient, ListTablesCommand, DescribeTableCommand, GetItemCommand } = require("@aws-sdk/client-dynamodb");


// Set the region
const client = new DynamoDBClient({ region: "us-east-2" });


async function main() {
  const input = new GetItemCommand ({
    TableName: "faculty_bio",
    Key: {
      id: {N: "1"},
    },
  });
  
  //const list = new GetItemCommand(input);
  const res = await client.send(input);
  console.log(res);
  return res;
}

main()