// Resolvers constitue the glue between the schema and the data. 
// Apollo uses them to figure out how to respond to a query and 
// resolve the incoming or return types. Every query and mutation 
// requires a resolver function, and each field in every type can 
// have a resolver.

import 'graphql-tools';
import { FilterRootFields } from 'graphql-tools';
import { ADDRGETNETWORKPARAMS } from 'dns';

// First sample data to populate the db
const messages = [{
    id: 1,
    message: 'soccer',
    createdAt: '1527557579267',
    room: '1'
  }, {
    id: 2,
    message: 'baseball',
    createdAt: '1527557579267',
    room: '2'
}];
  
let IDCount = 3; // Set to 3 because of the sample data
  
export const resolvers = {
    Query: {
        // Get the messages. Can take two arguments in params.
        // @params room : Indicate from witch room should the messages be queried
        // @params since : Indicate from what id should the message be returned. If not 
        // indicated, return all.
        getMessages: (root, args) => {
            return new Promise(function(resolve, reject){
                const roomMessages = messages.filter(message => message.room == args.room);
                if(!args.since){
                    resolve(roomMessages);
                } else {
                    if( args.since < roomMessages.length){
                        let sinceMessages = [];
                        for(let i=args.since-1; i<roomMessages.length; i++){
                            sinceMessages.push(roomMessages[i]);
                        }
                        resolve(sinceMessages);
                    } else{
                        reject("No messages since this ID");
                    }
                }
            });
        }
    },
    Mutation: {
        // Post a new message into the db. Can take three aruments in params.
        // @params message : The message to be uploaded
        // @params room : The room to witch the message belongs to
        // @params userHash : Anonymous authentification. If not specified is null.
        postMessage: (root, args) => {
            const date = new Date()
            const newMessage = { id: nextId++, message: args.message, createdAt: date.getTime(), room: args.room};
            messages.push(newMessage);
            return newMessage;
        }
    }
};
