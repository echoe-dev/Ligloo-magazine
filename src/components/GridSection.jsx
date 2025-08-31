import React from "react";

const GridSection = ({ articles, openModal }) => {
  return (
    <section
      id="services"
      className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6"
    >
      {articles.map((article, idx) => (
        <div
          key={idx}
          className="bg-slate-900 rounded-xl shadow-lg p-6 flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 border-2 border-pink-500 hover:border-pink-400"
        >
          <img
            src={article.img}
            alt={article.title}
            className="rounded mb-4 shadow-md border-2 border-pink-500 hover:shadow-pink-400/50 transition-shadow duration-300"
          />
          <h2 className="text-2xl font-bold mb-2 text-pink-400 drop-shadow-lg">
            {article.title}
          </h2>
          <p className="mb-4 text-slate-300">{article.snippet}</p>
          <button
            onClick={() => openModal(article.content)}
            className="mt-auto px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-400 transition-colors duration-300 shadow-lg hover:shadow-pink-400/50"
          >
            Read More
          </button>
        </div>
      ))}
    </section>
  );
};

export default GridSection;
