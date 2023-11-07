// import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import appServices from "./appService";

const useGetContentQuery = ({ searchField, searchString }) => {

  const queryResult = useQuery(
    ["content/get/field", searchString, searchField],
    () => appServices.getContentBysearchField({ searchField, searchString }),
    {
      onSuccess: (data) => {
        // console.log("Data fetched successfully:", data);
      },
      refetchOnWindowFocus: false,
      // retry: 0,
    }
  );

  return queryResult;
};

const AppHooks = {
    receive: useGetContentQuery,
  };
  
  export default AppHooks;