import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types'
import ArticleCard from '../ArticleCard';

const CategoriesShow = ({ articles }) => {

  let { category } = useParams();

  const [categoryArticles, setCategoryArticles] = useState([]);

  useEffect(() => {
    document.title = category[0].toUpperCase() + category.slice(1) + ' - ' + process.env.REACT_APP_NAME;
  }, [category]);

  useEffect(() => {

    const getCategoryArticles = (category) => {
      return articles.filter(article => article.tags.includes(category));
    }

    setCategoryArticles(getCategoryArticles(category));
  }, [category, articles]);

  return (<div className="h-full p-8 text-center">

    <h2 className="capitalize text-4xl font-bold mb-8">{category}</h2>

    { categoryArticles.length ?
      (
        <div className="grid grid-flow-row gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6">
          { categoryArticles.map(article => (
            <ArticleCard key={ article.id } article={article} />
          )) }
        </div>
      ) : (
        <p>No articles in this category</p>
      )
    }

  </div>)
}

CategoriesShow.propTypes = {
  articles: PropTypes.array.isRequired,
}

export default CategoriesShow