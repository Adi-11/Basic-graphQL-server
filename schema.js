import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Test {
        id: ID
        textName: String
        category: String
        price: Int
        email: String
        stack: Stack
        assistants: [employee]
    }

    type employee {
        firstName: String
        lastName: String
        experience: Int
    }

    enum Stack {
        WEB
        MOBILE
        OTHER
    }

    type Query {
        getTest(id: ID): Test
    }
`);

export default schema;
