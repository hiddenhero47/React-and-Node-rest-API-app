import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import {
  FormWrapper,
  Form,
  FormControl,
  Radio,
  File,
  ButtonGrid,
} from "./ContentForm.style";
import { TriangleWarning as Warning } from "../../../components/icons/warningSings";
import { ContentFormSchema } from "./validationSchema";
import { toast } from "react-toastify";
import BubbleSlide from "../../../components/loaders/bubbles/BubbleSlide";
import ContentHooks from "../../../features/content/contentHooks";
import { getErrorMessage } from "../../../appHelpers/utilsErrorUtils";
import { BsFillFileEarmarkImageFill as Img } from "react-icons/bs";
import { BsFillFileEarmarkPlayFill as Mp4 } from "react-icons/bs";
import { BsFillFileEarmarkXFill as Bad } from "react-icons/bs";
import { BsFillFileEarmarkCheckFill as Good } from "react-icons/bs";
import { PAGES } from "./selectValues";
import CustomSelect from "../../../components/formComponents/CustomSelect";
import { numberToWords } from "../../../appHelpers/basicFunctions";

function ContentForm({ setSubPage, setCurrentContent, currentContent }) {
  const {
    mutate: create,
    data,
    isLoading,
    isError,
    isSuccess,
    error,
  } = ContentHooks.create();

  const {
    mutate: Update,
    data: dataX,
    isLoading: isLoadingX,
    isError: isErrorX,
    isSuccess: isSuccessX,
    error: errorX,
  } = ContentHooks.update();

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
    if ((isSuccess && data) || (isSuccessX && dataX)) {
      toast.success("successful");
      setSubPage(OPTIONS.CONTENT);
    } else if (isError) {
      toast.error(getErrorMessage(error) || "Network Error");
    } else if (isErrorX) {
      toast.error(getErrorMessage(errorX) || "Network Error");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, errorX, isError, isErrorX, isSuccess, isSuccessX]);

  const onSubmit = async (values) => {
    const formData = new FormData();
    formData.append("header", values.header);
    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("type", values.type);
    if (Object.keys(values.tags).length !== 0) {
      const tagsJSON = JSON.stringify(values.tags);
      formData.append("tags", tagsJSON);
    }

    if (Array.isArray(values.content)) {
      for (let i = 0; i < values.content.length; i++) {
        const file = values.content[i];
        formData.append("content", file);
      }
    } else {
      formData.append("content", values.content);
    }

    if (Object.keys(state).length !== 0) {
      const ContentId = state?._id;
      Update({ ContentId, ContentData: formData });
    } else {
      create(formData);
    }
  };

  const {
    // setErrors,
    // setTouched,
    setFieldValue,
    setValues,
    values,
    errors,
    handleBlur,
    touched,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      header: "",
      title: "",
      description: "",
      type: "text",
      content: "",
      tags: {},
    },
    validationSchema: ContentFormSchema,
    onSubmit,
  });

  useEffect(() => {
    if (Object.keys(state).length !== 0) {
      const Content = {
        header: state?.header,
        title: state?.title,
        description: state?.description,
        type: state?.type,
        content: state?.content,
        tags: state?.tags ? state?.tags : {},
      };

      if (state?.type !== "text") {
        setFileSelected(true);
      }

      setValues(Content);

      if (state?.tags) {
        setTagNos(Object.keys(state?.tags).length);
      }
    }
  }, [state, setValues]);

  const { header, title, description, type, content, tags } = values;

  // Tag Functions
  const [tagNos, setTagNos] = useState(0);

  const handleAddTag = ({ tagValue, tagEvent }) => {
    setFieldValue("tags", { ...tags, [tagValue]: tagEvent.target.value });
  };

  const handleRemoveTag = (tagKey) => {
    const newTags = { ...values.tags };
    delete newTags[tagKey];
    setFieldValue("tags", newTags);
    setTagNos(tagNos - 1);
  };

  // File Uploader
  // const myFileRef = useRef(document.createElement("div"));
  // const inputRef = useRef(document.createElement("input"));
  const myFileRef = useRef(null);
  const inputRef = useRef(null);
  const [fileSelected, setFileSelected] = useState(false);

  const handleDragover = (e) => {
    e.preventDefault();
    myFileRef.current.classList.add("isDragging");
  };

  const handleDragleaveDragend = (e) => {
    if (myFileRef) {
      myFileRef.current.classList.remove("isDragging");
    }
  };

  const onChangeFile = (e) => {
    setFileSelected(true);
    const files = e.target.files;

    if (myFileRef) {
      myFileRef.current.classList.remove("isError");
    }

    const newContent = [];
    for (const file of files) {
      newContent.push(file);
    }

    setFieldValue("content", newContent);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files.length) {
      const files = e.dataTransfer.files;
      inputRef.current = files;
      setFileSelected(true);

      const newContent = [];
      for (const file of files) {
        newContent.push(file);
      }
      setFieldValue("content", newContent);
    }

    myFileRef.current.classList.remove("isDragging");
    myFileRef.current.classList.remove("isError");
  };

  const handelClear = () => {
    setFileSelected(false);
    setFieldValue("content", "");
  };

  return (
    <FormWrapper>
      <h1 className="title">
        {Object.keys(state).length !== 0
          ? "Edit Content"
          : "Create new Content"}
      </h1>
      <Form onSubmit={handleSubmit}>
        <FormControl>
          <label htmlFor="text" className="myLabel">
            Header*
          </label>

          <CustomSelect
            options={PAGES}
            name="header"
            id="header"
            onBlur={handleBlur}
            value={header || ""}
            placeholder=" Select Page"
            onChange={(value) => setFieldValue("header", value)}
            isError={touched.header && errors.header ? true : false}
            errorMessage={errors.header}
            background="#d9d9d9"
          />
        </FormControl>

        <FormControl>
          <label htmlFor="text" className="myLabel">
            Title*
          </label>

          <input
            type="text"
            name="title"
            id="title"
            className={
              touched.title && errors.title ? "myInput isError" : "myInput"
            }
            onBlur={handleBlur}
            value={title || ""}
            placeholder=" Enter text"
            onChange={handleChange}
          />
          {touched.title && errors.title ? (
            <p className="error">
              <Warning width={12} height={12} color="red" /> {errors.title}
            </p>
          ) : (
            ""
          )}
        </FormControl>

        <FormControl>
          <label htmlFor="text" className="myLabel">
            Description*
          </label>

          <input
            type="text"
            name="description"
            id="description"
            className={
              touched.description && errors.description
                ? "myInput isError"
                : "myInput"
            }
            onBlur={handleBlur}
            value={description || ""}
            placeholder=" Enter text"
            onChange={handleChange}
          />
          {touched.description && errors.description ? (
            <p className="error">
              <Warning width={12} height={12} color="red" />{" "}
              {errors.description}
            </p>
          ) : (
            ""
          )}
        </FormControl>

        <Radio>
          <h3>Select content type*</h3>
          <div className="radioBox">
            <span>
              <input
                type="radio"
                id="f-option"
                name="type"
                onChange={handleChange}
                value="text"
                checked={type === "text"}
              />
              <label htmlFor="f-option">
                <div className="check" />
                Text
              </label>
            </span>

            <span>
              <input
                type="radio"
                id="s-option"
                name="type"
                onChange={handleChange}
                value="picture"
                checked={type === "picture"}
              />
              <label htmlFor="s-option">
                <div className="check">
                  <div className="inside" />
                </div>
                Picture
              </label>
            </span>

            <span>
              <input
                type="radio"
                id="t-option"
                name="type"
                onChange={handleChange}
                value="video"
                checked={type === "video"}
              />
              <label htmlFor="t-option">
                <div className="check">
                  <div className="inside" />
                </div>
                Video
              </label>
            </span>
          </div>
        </Radio>

        {type !== "text" ? (
          <File>
            {!fileSelected ? (
              <>
                <div
                  className={
                    touched.content && errors.content
                      ? "FileInput isError"
                      : "FileInput"
                  }
                  id="Container"
                  ref={myFileRef}
                  onDragOver={handleDragover}
                  onDragLeave={handleDragleaveDragend}
                  onDragEnd={handleDragleaveDragend}
                  onDrop={handleDrop}
                >
                  <input
                    type="file"
                    id="uploader-button"
                    multiple
                    accept={
                      type === "video" ? "video/*" : "image/png, image/jpeg"
                    }
                    onChange={onChangeFile}
                    ref={inputRef}
                  />
                  <label htmlFor="uploader-button" className="FileLabel">
                    <i className="icon">
                      {type === "picture" ? <Img /> : <Mp4 />}
                    </i>
                    <p className="FileText">
                      Drag and drop or <span className="Browse">browse</span>{" "}
                      your files
                    </p>
                  </label>
                </div>
                <span className="error_text_file">
                  <Warning width={12} height={12} color="red" />
                  {errors.content}
                </span>
              </>
            ) : (
              <div className="isSelected">
                <div className="Details">
                  <i className="isIcon">
                    <Good />
                  </i>
                  <span className="text">{`Number of content ${
                    Array.isArray(content) ? content.length : typeof content === 'string' ? 1 : 0
                  }`}</span>
                </div>
                <div className="clear" onClick={handelClear}>
                  <i className="isIcon">
                    <Bad />
                  </i>
                  Clear
                </div>
              </div>
            )}
          </File>
        ) : (
          <FormControl>
            <label htmlFor="text" className="myLabel">
              Content*
            </label>

            <textarea
              type="textarea"
              name="content"
              id="content"
              className={
                touched.content && errors.content
                  ? "myBigInput isError"
                  : "myBigInput"
              }
              onBlur={handleBlur}
              value={content || ""}
              placeholder=" Enter text"
              onChange={handleChange}
            />
            {touched.content && errors.content ? (
              <p className="error">
                <Warning width={12} height={12} color="red" /> {errors.content}
              </p>
            ) : (
              ""
            )}
          </FormControl>
        )}

        <ButtonGrid>
          <button
            type="button"
            onClick={() => setTagNos(tagNos + 1)}
            disabled={tagNos >= 9}
            className="grid-item"
          >
            + Add Tag
          </button>
          <button
            type="button"
            onClick={() => handleRemoveTag(`tag${tagNos}`)}
            disabled={tagNos <= 0}
            className="grid-item"
          >
            - Remove Tag
          </button>
        </ButtonGrid>

        {tagNos >= 1 &&
          Array.from({ length: tagNos }).map((_, index) => (
            <FormControl key={index}>
              <label htmlFor="text" className="myLabel">
                Tag {numberToWords(index + 1)}*
              </label>

              <input
                type="text"
                name="tags"
                id="tags"
                className={
                  touched.tags && errors.tags ? "myInput isError" : "myInput"
                }
                onBlur={handleBlur}
                value={tags[`tag${index + 1}`] || ""}
                placeholder=" Enter text"
                onChange={(e) =>
                  handleAddTag({ tagValue: `tag${index + 1}`, tagEvent: e })
                }
              />
            </FormControl>
          ))}

        <button
          disabled={isLoading || isLoadingX}
          type="submit"
          className="submitBtn"
        >
          {isLoading || isLoadingX ? (
            <span className="appLoader">
              <BubbleSlide />
            </span>
          ) : (
            <span>Submit</span>
          )}
        </button>
      </Form>
    </FormWrapper>
  );
}

ContentForm.propTypes = {
  setSubPage: PropTypes.func,
  setCurrentContent: PropTypes.func,
  currentGoal: PropTypes.object,
};

export default ContentForm;
