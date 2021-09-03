import { gql, useQuery } from '@apollo/client';

const PERSONAL_INFO = gql`
    query GetUserInfo($userId: ID) {
        getUserPersonalInfo(userId: $userId) {
            name
            lastname
            cellphone
            email
            city
            description
            dni
            dob
            skills
            id
        }
    }
`;

const useGetPersonalInfo = (userId) => {
  const { error: errorUser, data: dataUser } = useQuery(PERSONAL_INFO, {
    variables: { userId },
    onError: (error) => {
      console.log(`Message: ${error.message}`);
    }
  });

  return { errorUser, dataUser };
}

export default useGetPersonalInfo;