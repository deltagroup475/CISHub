// Load the AWS SDK for Node.js
import { DynamoDBClient, PutItemCommand} from "@aws-sdk/client-dynamodb";
// PutItemCommand adds an item to the table from the add faculty form in the admin dashboard

// Set the region and client
const client = new DynamoDBClient({ region: "us-east-2" });
// function to add a faculty member to the table
export const addFaculty = async () => {
    const add = new PutItemCommand({
        "TableName": "faculty_bio",
        "Item": {
            //attributes for each faculty memeber
            "id": { 
                "N": "14"
            }, //pass variables from 'add/drop faculty member form in admin dashboard'
            "education": { "SS": ["null"]
            },
            "email": { "S": "pzaleppa@towson.edu"
            },
            "expertise": { "SS": ["null"]
            },
            "name": { "S": "Paige Flores"
            },
            "title": { "S": "Professor, Director of SecurEd - Cyber4All"
            },
            
            "phone": { "S": "NA"
            },
            "office": { "S": "YR 206"
            },
            "links": { "SS": ["null"]
            },
            "type": {"S": "user"
            }
        },
        "ReturnConsumedCapacity": "TOTAL",

    });

    const response = await client.send(add);
    console.log(response);
    return response;
};

addFaculty()