import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types'
import ArticleCard from '../ArticleCard';

const SearchResults = ({ articles }) => {

  let { query } = useParams();

  const [MatchingArticles, setMatchingArticles] = useState([]);

  useEffect(() => {
    document.title = process.env.REACT_APP_NAME;
  }, []);

  useEffect(() => {

    const getMatchingArticles = (query) => {
      query = query.toLowerCase();

      return articles.filter(article => {
        
        if (article.id.indexOf(query) !== -1) return true;
        if (article.prettyName.toLowerCase().indexOf(query) !== -1) return true;

        for (const tag of article.tags) {
          if (tag.indexOf(query) !== -1) return true;
        }

        return false;
      });
    }

    setMatchingArticles(getMatchingArticles(query));
  }, [query, articles]);

  return (<div className="h-full p-8 text-center">

    <h2 className="text-4xl font-bold mb-8">Search results for "{query}"</h2>

    { MatchingArticles.length ?
      (
        <div className="grid grid-flow-row gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6">
          { MatchingArticles.map(article => (
            <ArticleCard key={ article.id } article={article} />
          )) }
        </div>
      ) : (
        <p>No results found.</p>
      )
    }

  </div>)
}

SearchResults.propTypes = {
  articles: PropTypes.array.isRequired,
}

export default SearchResults