import { error } from "@sveltejs/kit";
import { gql, GraphQLClient } from "graphql-request";
import { client } from '$lib/graphql-client'
export const load = async () => {

    const query = gql`
        query GetProjects {
            projects {
                name
                slug
                description
                demo
                sourceCode
                image {
                    url
                }
            }
        }
    `;

    const { projects } = await client.request(query);

    return {
        projects: projects,
    }
}