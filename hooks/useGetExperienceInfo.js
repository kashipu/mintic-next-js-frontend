import { gql, useQuery } from '@apollo/client';

const EXPERIENCE_INFO = gql`
    query GetUserInfo($userId: ID) {
        getUserExperienceInfo(userId: $userId) {
            results {
                position_name
                company_name
                city
                company_start_date
                company_end_date
                responsabilities
                achievements
            }
        }
    }
`;

const useGetExperienceInfo = (userId) => {
  const { error: errorExperience, data: dataExperience } = useQuery(EXPERIENCE_INFO, {
    variables: { userId },
    onError: (error) => {
      console.log(`Message: ${error.message}`);
    }
  });

  return { errorExperience, dataExperience };
}

export default useGetExperienceInfo;