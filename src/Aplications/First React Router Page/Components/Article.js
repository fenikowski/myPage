import React from "react";

const styles = { marginBottom: 40 };

const Article = props => {
  return (
    <article style={styles}>
      <h3
        style={{
          marginBottom: 3,
          textTransform: "uppercase"
        }}
      >
        {props.title}
      </h3>
      <span
        style={{
          marginBottom: 10,
          display: "block",
          fontSize: 12
        }}
      >
        {props.author}
      </span>
      <p style={{ fontSize: 15 }}>{props.text}</p>
    </article>
  );
};

export default Article;
