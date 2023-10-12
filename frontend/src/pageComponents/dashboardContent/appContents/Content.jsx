import React, { useState } from "react";
import { MyContent, Container, Grid, ButtonGrid } from "./Content.style";
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

  const PAGE = {
    ONE: "home",
    TWO: "aboutUs",
    THREE: "portfolio",
    FOUR: "services",
    FIVE: "contactUs",
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
  const [filterString, setFilterString] = useState("all");

  const handelFilter = (string) => {
    setFilterString(string);
  };

  const setMyImageShowcase = (file) => {
    setShowcaseData(file);
    setVisible(true);
  };

  const filterContentByHeader = (data, header) => {
    if (header && header !== "all") {
      return data.filter((content) => content.header === header);
    }

    return data;
  };

  return (
    <MyContent>
      <h1>Content</h1>

      <div className="gridBox">
        <ButtonGrid>
          <button
            className="grid-item"
            onClick={() => handelFilter("all")}
            disabled={filterString === "all"}
            style={{
              backgroundColor:
                filterString === "all" && "rgba(16, 31, 61, 0.489)",
            }}
          >
            All
          </button>
          <button
            className="grid-item"
            onClick={() => handelFilter(PAGE.ONE)}
            disabled={filterString === PAGE.ONE}
            style={{
              backgroundColor:
                filterString === PAGE.ONE && "rgba(16, 31, 61, 0.489)",
            }}
          >
            Home
          </button>
          <button
            className="grid-item"
            onClick={() => handelFilter(PAGE.TWO)}
            disabled={filterString === PAGE.TWO}
            style={{
              backgroundColor:
                filterString === PAGE.TWO && "rgba(16, 31, 61, 0.489)",
            }}
          >
            About Us
          </button>
          <button
            className="grid-item"
            onClick={() => handelFilter(PAGE.THREE)}
            disabled={filterString === PAGE.THREE}
            style={{
              backgroundColor:
                filterString === PAGE.THREE && "rgba(16, 31, 61, 0.489)",
            }}
          >
            Portfolio
          </button>
          <button
            className="grid-item"
            onClick={() => handelFilter(PAGE.FOUR)}
            disabled={filterString === PAGE.FOUR}
            style={{
              backgroundColor:
                filterString === PAGE.FOUR && "rgba(16, 31, 61, 0.489)",
            }}
          >
            Services
          </button>
          <button
            className="grid-item"
            onClick={() => handelFilter(PAGE.FIVE)}
            disabled={filterString === PAGE.FIVE}
            style={{
              backgroundColor:
                filterString === PAGE.FIVE && "rgba(16, 31, 61, 0.489)",
            }}
          >
            Contact Us
          </button>
        </ButtonGrid>
      </div>

      <div className="user_content">
        {isLoading ? (
          <div className="AppLoader">
            <Candle />
          </div>
        ) : (
          <Container>
            {filterContentByHeader(data, filterString).length !== 0 ? (
              <Grid>
                {filterContentByHeader(data ?? [], filterString)?.map(
                  (content, index) => (
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

                      {content?.type === "video" && (
                        <a
                          href={Array.isArray(content?.content) ? content?.content[0] : content?.content}
                          rel="noopener noreferrer"
                          target="_blank"
                          className="Textbox"
                        >
                          Click to see Video
                        </a>
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
                  )
                )}
              </Grid>
            ) : (
              <div className="noData"> No Content </div>
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
