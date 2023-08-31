import React, { useEffect } from "react";
import { MyUsers, Container, Grid } from "./Users.style";
import Candle from "../../../components/loaders/candles/Candle";
import UsersHooks from "../../../features/users/userHooks";
import { getErrorMessage } from "../../../appHelpers/utilsErrorUtils";
import { toast } from "react-toastify";
import DroupDown from "./DroupDown";

function Users() {
  const { data: Users, isLoading: Loading } = UsersHooks.receive();

  const {
    mutate: DeleteUser,
    data,
    isLoading,
    isError,
    isSuccess,
    error,
  } = UsersHooks.delete();

  const {
    mutate: UpdateUser,
    data: dataX,
    isLoading: isLoadingX,
    isError: isErrorX,
    isSuccess: isSuccessX,
    error: errorX,
  } = UsersHooks.update();

  useEffect(() => {
    if (isSuccessX && dataX) {
      toast.success(`you have successful updated user roal to ${dataX.role}`);
    } else if (isErrorX) {
      toast.error(getErrorMessage(errorX) || "Network Error");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errorX, isErrorX, isSuccessX]);

  useEffect(() => {
    if (isSuccess && data) {
      toast.success(`User ${data?.id} deleted with ${data?.NosGoals} goals`);
    } else if (isError) {
      toast.error(getErrorMessage(error) || "Network Error");
    } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, isError, isSuccess]);

  const handelEdit = (userId) => {
    UpdateUser({ newRole: "admin", userId });
  };

  const handelDelete = (userId) => {
    DeleteUser(userId);
  };

  return (
    <MyUsers>
      <h1>App users</h1>
      <div className="user_content">
        {Loading ? (
          <div className="AppLoader">
            <Candle />
          </div>
        ) : (
          <Container>
            {Users?.length !== 0 ? (
              <Grid>
                {Users.map((user, index) => (
                  <div className="content" id={user?._id} key={index}>
                    <div className="text">
                      {new Date(user.createdAt).toLocaleString("en-US")}
                    </div>

                    <div className="text">{user?.name}</div>

                    <div className="text">{user?.email}</div>

                    <div className="text">{user?.role}</div>

                    <DroupDown
                      user={user}
                      handelEdit={handelEdit}
                      handelDelete={handelDelete}
                      isLoading={isLoading}
                      isLoadingX={isLoadingX}
                      isSuccess={isSuccess}
                      isSuccessX={isSuccessX}
                    />
                  </div>
                ))}
              </Grid>
            ) : (
              <div className="noData"> No Content </div>
            )}
          </Container>
        )}
      </div>
    </MyUsers>
  );
}

export default Users;
