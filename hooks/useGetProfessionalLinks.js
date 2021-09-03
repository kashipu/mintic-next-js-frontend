import { gql, useQuery } from '@apollo/client';

const PROFESIONAL_LINKS = gql`
query GetUserInfo($userId: ID) {
    getAllProfessionalLinks(userId: $userId) {
        results {
            id
            social_network {
                name
            }
            url
        }
    }
}
`;

const useGetProfessionalLinks = (userId) => {
  const { error: errorLinks, data: dataLinks, loading:loadingLinks } = useQuery(PROFESIONAL_LINKS, {
    variables: { userId },
    onError: (error) => {
      console.log(`Message: ${error.message}`);
    }
  });

  return { errorLinks, dataLinks, loadingLinks };
};

export default useGetProfessionalLinks;