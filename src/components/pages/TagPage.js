import { Link, useParams } from "react-router-dom";

const TagPage = () => {

  let { tag } = useParams();

  return (<div className="h-full p-8">

    <h1>{tag}</h1>

  </div>)
}


export default TagPage