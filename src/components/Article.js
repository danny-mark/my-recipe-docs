import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const Article = ({ articles }) => {

  let { articleID } = useParams();
  const [articleContent, setArticleContent] = useState('');

  useEffect(() => {

    const getArticleByID = (articleID) => {
      return articles.find(a => a.id === articleID);
    }

    const fetchActiveArticleContent = async () => {
      
      let article = getArticleByID(articleID);
      if (!article) {
        setArticleContent('Ooops, article not found.');
        return;
      };

      const res = await fetch(`/recipes/${articleID}/${articleID}.md`);
      const content = await res.text();

      setArticleContent(content);
    }

    fetchActiveArticleContent();
  }, [articles, articleID]);

  return (
    <div className="prose max-w-full flex-shrink p-16">
      {articleContent.length ? (
        <ReactMarkdown children={articleContent} remarkPlugins={[remarkGfm]} />
      ) : (
        <p>Loading</p>
      )}
    </div>
  )
}

Article.propTypes = {
  articles: PropTypes.array.isRequired
}

export default Article
