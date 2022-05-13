import { useQuery, useMutation } from 'react-query';

export const useReactQuery = (keyName, http) => useQuery(keyName, () => http());

export const useReactQueryMutation = http => useMutation(data => http(data));
