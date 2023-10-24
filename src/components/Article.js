
import React from 'react';

function generateEmojis(minutes) {
  const emojiType = minutes < 30 ? '☕️' : '🍱';
  const numEmojis = Math.floor(minutes / (minutes < 30 ? 5 : 10));
  return emojiType.repeat(numEmojis);
}

function Article(props) {
  const readingTimeEmojis = generateEmojis(props.minutes);
  return (
    <article>
      <h3>{props.title}</h3>
      <small>{props.date || "January 1, 1970"}</small>
      <p>{props.preview}</p>
      <p>{readingTimeEmojis} {props.minutes} min read</p>
    </article>
  );
}

export default Article;

