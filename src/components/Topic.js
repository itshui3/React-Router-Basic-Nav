import React from 'react';
import {Link, Route} from 'react-router-dom';

import SubTopic from './SubTopic';

const Topic = ({ topics, match }) => {
  const topic = topics.find(({id}) => id === match.params.topicid);

  return (
    <div>
      <h2>{topic.description}</h2>
      {
        topic.resources.map((sub) => (
          // <div key={i}>
          //   <h3>{d.name}</h3>
          //   <p>{d.id}</p>
          //   <p>{d.description}</p>
          //   <a href={d.url}>More Resources</a>
          // </div>

          <li key={sub.id}>
            <Link to={`/topics/${match.params.topicid}/${sub.id}`}>{sub.name}</Link>
          </li>
        ))
      }
      <Route path="/topics/:topicid/:subid" render={(props) => <SubTopic {...props} resources={topic.resources} />}></Route>
    </div>
  )
}

export default Topic;