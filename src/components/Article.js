
import React from 'react';

function generateEmojis(minutes) {
  const emojiType = minutes < 30 ? '☕️' : '🍱';
  const numEmojis = Math.ceil(minutes / (minutes < 30 ? 5 : 10));
  return emojiType.repeat(numEmojis);
}

function Article({ title, date, preview, minutes }) {
  const readingTimeEmojis = generateEmojis(minutes);
  const defaultDate = date || 'January 1, 1970';
  return (
    <article>
      <h3>{title}</h3>
      <small>{defaultDate}</small>
      <p>{preview}</p>
      <p>{readingTimeEmojis} {minutes} min read</p>
    </article>
  );
}

export default Article;
