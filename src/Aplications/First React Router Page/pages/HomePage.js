import React from "react";
import Article from "../Components/Article";

const articles = [
  {
    id: 1,
    title: "Czym jest teoria strun?",
    author: "Jan Nowak",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae optio magnam repudiandae iusto accusantium consequuntur, quia sed ea quas. Quis nihil earum natus, repellat cumque delectus debitis consectetur explicabo nemo!"
  },
  {
    id: 2,
    title: "¿Por qué me gustan tanto chicas muy gordas?",
    author: "Yann Blouin",
    text:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam iusto consectetur, quos repudiandae ipsam, illo quisquam, sunt totam minima eos sit culpa et quod sint voluptate laboriosam similique modi blanditiis."
  },
  {
    id: 3,
    title: "¿Cómo ser un capullo y molestar a todo el mundo?",
    author: "Andrea",
    text:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio voluptatum, perspiciatis incidunt, iste tempora autem dolorem beatae aspernatur asperiores earum nisi laudantium hic enim voluptate error molestias ratione tempore delectus."
  }
];

const HomePage = props => {
  const artList = articles.map(article => (
    <Article
      key={article.id}
      author={article.author}
      title={article.title}
      text={article.text}
    />
  ));

  return <div className="home">{artList}</div>;
};

export default HomePage;
