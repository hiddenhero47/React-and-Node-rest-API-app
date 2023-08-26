import React, { useState } from "react";
import { MyContent, Container, Grid } from "./Content.style";
import PropTypes from "prop-types";
import Candle from "../../../components/loaders/candles/Candle";
import ContentHooks from "../../../features/content/contentHooks";
import { MdDeleteSweep } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Showcase } from "./Gallery";

function Content({ setSubPage, setCurrentContent, currentContent }) {
  const OPTIONS = {
    CONTENT: "contents",
    CONTENT_FORM: "contentForm",
    DELETE: "delete",
  };

  const { data, isLoading } = ContentHooks.receive();

  const handelEdit = (data) => {
    setCurrentContent(data);
    setSubPage(OPTIONS.CONTENT_FORM);
  };

  const handelDelete = (data) => {
    setCurrentContent(data);
    setSubPage(OPTIONS.DELETE);
  };

  const [visible, setVisible] = useState(false);
  const [showcaseData, setShowcaseData] = useState([]);

  const setMyImageShowcase = (file) => {
    setShowcaseData(file);
    setVisible(true);
  };

  return (
    <MyContent>
      <h1>Content</h1>
      <div className="user_goals">
        {isLoading ? (
          <div className="AppLoader">
            <Candle />
          </div>
        ) : (
          <Container>
            {data ? (
              <Grid>
                {data.map((content, index) => (
                  <div className="content" id={content?._id} key={index}>
                    <div>
                      {new Date(content.createdAt).toLocaleString("en-US")}
                    </div>

                    {content?.type === "text" && (
                      <p className="Textbox">{content?.content}</p>
                    )}

                    {content?.type === "picture" && (
                      <p
                        className="Textbox"
                        onClick={() => {
                          setMyImageShowcase(content?.content);
                        }}
                      >
                        View pictures
                      </p>
                    )}

                    <div className="btnBox">
                      <span onClick={() => handelEdit(content)}>
                        <FaEdit />
                      </span>
                      <span onClick={() => handelDelete(content)}>
                        <MdDeleteSweep />
                      </span>
                    </div>
                  </div>
                ))}
              </Grid>
            ) : (
              ""
            )}
          </Container>
        )}
      </div>
      <Showcase
        visible={visible}
        onCancel={() => setVisible(false)}
        images={showcaseData}
      />
    </MyContent>
  );
}

Content.propTypes = {
  setSubPage: PropTypes.func,
  setCurrentContent: PropTypes.func,
  currentContent: PropTypes.object,
};

export default Content;
