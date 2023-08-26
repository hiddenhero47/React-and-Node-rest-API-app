import React, { useEffect, useState } from "react";
import { DeleteMe } from "./DeleteContent.style";
import PropTypes from "prop-types";
import ContentHooks from "../../../features/content/contentHooks";
import { getErrorMessage } from "../../../appHelpers/utilsErrorUtils";
import { TriangleWarning as Warning } from "../../../components/icons/warningSings";
import { toast } from "react-toastify";
import BubbleSlide from "../../../components/loaders/bubbles/BubbleSlide";

function DeleteContent({ setSubPage, setCurrentContent, currentContent }) {
  const {
    mutate: deleteContent,
    data,
    isLoading,
    isError,
    isSuccess,
    error,
  } = ContentHooks.delete();

  const OPTIONS = {
    CONTENT: "contents",
    CONTENT_FORM: "contentForm",
    DELETE: "delete",
  };

  const [state, setState] = useState({});

  useEffect(() => {
    if (Object.keys(currentContent).length !== 0) {
      setState(currentContent);
      setCurrentContent({});
    }
  }, [setCurrentContent, currentContent]);

  useEffect(() => {
    if (isError) {
      toast.error(getErrorMessage(error) || "Network Error");
    }

    if (isSuccess && data) {
      toast.success("successful");
      setSubPage(OPTIONS.CONTENT);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, isError, isSuccess]);

  const handelDelete = () => {
    const ContentId = state._id;
    deleteContent(ContentId);
  };

  return (
    <DeleteMe>
      {Object.keys(state).length === 0 ? (
        <div className="noData">
          <p className="errorText">
            <i>
              <Warning width={50} height={50} />
            </i>{" "}
            No current data to delete
          </p>
        </div>
      ) : (
        <div className="deletCard">
          <p>Warning are you sure you want to delete this goal</p>

          <div>{new Date(state.createdAt).toLocaleString("en-US")}</div>

          <p>{state?.header}</p>

          <p>{state?.title}</p>

          <p>{state._id}</p>

          <div className="delete">
            <button
              disabled={isLoading}
              onClick={handelDelete}
              type="button"
              className="submitBtn"
            >
              {isLoading ? (
                <span className="appLoader">
                  <BubbleSlide />
                </span>
              ) : (
                <span>Delete Content</span>
              )}
            </button>
          </div>
        </div>
      )}
    </DeleteMe>
  );
}

DeleteContent.propTypes = {
  setSubPage: PropTypes.func,
  setCurrentContent: PropTypes.func,
  currentContent: PropTypes.object,
};

export default DeleteContent;
