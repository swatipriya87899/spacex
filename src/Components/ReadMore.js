import React from 'react'

const ReadMore = () => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
  return (
    <div>ReadMore</div>
  )
}

export default ReadMore