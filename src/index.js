//
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import Faker from 'faker';

const App = () => {
  return <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail author="Sam" timeAgo="Today at 06:00PM"
          avatar={Faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Alex" timeAgo="Today at 01:15AM"
          avatar={Faker.image.avatar()}
          />
        </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Jane" timeAgo="Yesterday at 07:45PM"
          avatar={Faker.image.avatar()}
          />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Andrew" timeAgo="Yesterday at 03:00AM"
        avatar={Faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Katarina" timeAgo="10/12/2020 at 01:30PM"
          avatar={Faker.image.avatar()}
          />
      </ApprovalCard>
  </div>
}

ReactDOM.render(<App />, document.querySelector('#root'));
