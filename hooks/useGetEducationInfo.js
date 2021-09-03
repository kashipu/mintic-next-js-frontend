import { gql, useQuery } from '@apollo/client';

const EDUCATION_INFO = gql`
    query GetUserInfo($userId: ID) {
        getUserEducationInfo(userId: $userId) {
            results {
                institution_name
                description
                end_date
                start_date
                program_name
                program_type {
                    name
                }
            }
        }
    }
`;

const useGetEducationInfo = (userId) => {
  const { error: errorEducation, data: dataEducation, loading:loadingEducation } = useQuery(EDUCATION_INFO, {
    variables: { userId },
    onError: (error) => {
      console.log(`Message: ${error.message}`);
    }
  });

  return { errorEducation, dataEducation, loadingEducation };
}

export default useGetEducationInfo;