import { useSelector } from "react-redux";
import { useQuery, useMutation, useQueryClient  } from 'react-query';
import contentService from "./contentService";

const useGetContentQuery = () => {
  const token = useSelector((state) => state.auth?.user?.token);

  const queryResult = useQuery(["content/get", token], () => contentService.getContent(token), {
    enabled: !!token,
    onSuccess: (data) => {
      console.log("Data fetched successfully:", data);
    },
  });

  return queryResult;
};

const useCreateContentMutation = () => {
  const token = useSelector((state) => state.auth?.user?.token);
  const queryClient = useQueryClient();

  const queryResult = useMutation(["content/post", token], () => contentService.createContent({ token }), {
    enabled: !!token,
    onSuccess: () => {queryClient.invalidateQueries("content/get")},
  });

  return queryResult;
};

const useDeleteContentMutation = () => {
  const token = useSelector((state) => state.auth?.user?.token);
  const queryClient = useQueryClient();

  const queryResult = useMutation(["content/delete", token], () => contentService.deleteContent({ token }), {
    enabled: !!token,
    onSuccess: () => {queryClient.invalidateQueries("content/get")},
  });

  return queryResult;
};

const useUpdateContentMutation = () => {
  const token = useSelector((state) => state.auth?.user?.token);
  const queryClient = useQueryClient();

  const queryResult = useMutation(["content/edit", token], () => contentService.editContent({ token }), {
    enabled: !!token,
    onSuccess: () => {queryClient.invalidateQueries("content/get")},
  });

  return queryResult;
};

const ContentHooks = {
  create: useCreateContentMutation,
  receive: useGetContentQuery,
  update: useUpdateContentMutation,
  delete: useDeleteContentMutation,
};

export default ContentHooks;

