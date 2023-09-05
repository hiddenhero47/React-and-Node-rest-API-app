import { useSelector } from "react-redux";
import { useQuery, useMutation, useQueryClient } from "react-query";
import contentService from "./contentService";

const useGetContentQuery = () => {
  const token = useSelector((state) => state.auth?.user?.token);

  const queryResult = useQuery(
    ["content/get", token],
    () => contentService.getContent(token),
    {
      onSuccess: (data) => {
        console.log("Data fetched successfully:", data);
      },
      refetchOnWindowFocus: false,
    }
  );

  return queryResult;
};

const useCreateContentMutation = () => {
  const token = useSelector((state) => state.auth?.user?.token);
  const queryClient = useQueryClient();

  const queryResult = useMutation(
    ["content/post", token],
    (ContentData) => contentService.createContent({ ContentData, token }),
    {
      enabled: !!token,
      onSuccess: () => {
        queryClient.invalidateQueries("content/get");
      },
    }
  );

  return queryResult;
};

const useDeleteContentMutation = () => {
  const token = useSelector((state) => state.auth?.user?.token);
  const queryClient = useQueryClient();

  const queryResult = useMutation(
    ["content/delete", token],
    (ContentId) => contentService.deleteContent({ ContentId, token }),
    {
      enabled: !!token,
      onSuccess: () => {
        queryClient.invalidateQueries("content/get");
      },
    }
  );

  return queryResult;
};

const useUpdateContentMutation = () => {
  const token = useSelector((state) => state.auth?.user?.token);
  const queryClient = useQueryClient();

  const queryResult = useMutation(
    ["content/edit", token],
    ({ContentId, ContentData}) =>
      contentService.editContent({ ContentId, ContentData, token }),
    {
      enabled: !!token,
      onSuccess: () => {
        queryClient.invalidateQueries("content/get");
      },
    }
  );

  return queryResult;
};

const ContentHooks = {
  create: useCreateContentMutation,
  receive: useGetContentQuery,
  update: useUpdateContentMutation,
  delete: useDeleteContentMutation,
};

export default ContentHooks;
