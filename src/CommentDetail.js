import React from 'react';
import Faker from 'faker';


const CommentDetail = (props) => {
  return   <div className="comment">
      <a className="avatar" href="/">
        <img alt="avatar" src={props.avatar} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">{props.timeAgo}</span>
        </div>
        <div className="text">{Faker.lorem.paragraph()}</div>
      </div>
    </div>
}

export default CommentDetail;
