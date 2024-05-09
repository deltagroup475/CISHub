// Load the AWS SDK for Node.js
import { DynamoDBClient, DeleteItemCommand} from "@aws-sdk/client-dynamodb";
//DeleteItemCommand deletes an item from a table by identifying an attribute from the item.
// In this script, the admin selects a name to drop from the admin dashboard
// and that input is sent to this script and dropped from the table

// Set the region and client
const client = new DynamoDBClient({ region: "us-east-2" });

export const dropFaculty = async() => {
    const drop = new DeleteItemCommand({
        "TableName" : "faculty_bio",
       "Key": {
            "id" : { "N" : "13"},
            "name" : { "S" : "Blair Taylor" } //input from add/drop form in admin dashboard
        },
        "ReturnConsumedCapacity": "TOTAL",
    });

    const response = await client.send(drop);
    console.log(response);
    return response;
};

dropFaculty()