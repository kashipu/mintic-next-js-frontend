import { gql } from "@apollo/client";
import client from "../apollo-client";

export default function apollotest({  }) {
    return (
        <div>
          <p>
              
                Apollo test
          </p>
        </div>
    );
}

export async function getStaticProps() {
    /* const { data } = await client.query({
        query: gql`
            query Countries {
                countries {
                    code
                    name
                    emoji
                }
            }
        `
    }); */
    const {data} = await client.mutate({
        mutation: gql`
            mutation Mutation($authenticateCredentials: CredentialsInput!) {
                authenticate(credentials: $authenticateCredentials) {
                    access
                    refresh
                }
            }
        `,
        variables: {
            authenticateCredentials: {
                "username": "jaltamar",
                "password": "Jar.12345"
            }
        }
    })
    console.log(data.authenticate) 
    return {
        props: {
            datos: data.authenticate
        }
    };
}
