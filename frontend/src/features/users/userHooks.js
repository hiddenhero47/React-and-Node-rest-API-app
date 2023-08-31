import { useSelector } from "react-redux";
import { useQuery, useMutation, useQueryClient } from "react-query";
import usersService from "./userService";

const useGetUsersQuery = () => {
  const token = useSelector((state) => state.auth?.user?.token);

  const queryResult = useQuery(
    ["users/get", token],
    () => usersService.getUsers(token),
    {
      enabled: !!token,
      refetchOnWindowFocus: false,
    }
  );

  return queryResult;
};

const useDeleteUsersMutation = () => {
  const token = useSelector((state) => state.auth?.user?.token);
  const queryClient = useQueryClient();

  const queryResult = useMutation(
    ["users/delete", token],
    (userId) => usersService.deleteUser({ userId, token }),
    {
      enabled: !!token,
      onSuccess: () => {
        queryClient.invalidateQueries("users/get");
      },
    }
  );

  return queryResult;
};

const useUpdateUsersMutation = () => {
  const token = useSelector((state) => state.auth?.user?.token);
  const queryClient = useQueryClient();

  const queryResult = useMutation(
    ["users/edit", token],
    ({userId, newRole}) =>
    usersService.changeUserRoal({ userId, newRole, token }),
    {
      enabled: !!token,
      onSuccess: () => {
        queryClient.invalidateQueries("users/get");
      },
    }
  );

  return queryResult;
};

const UsersHooks = {
  receive: useGetUsersQuery,
  update: useUpdateUsersMutation,
  delete: useDeleteUsersMutation,
};

export default UsersHooks;
