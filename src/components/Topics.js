import React from 'react';
import {Link, Route} from 'react-router-dom'; 

import Topic from './Topic';

function Topics({topics}){

  return (
    <div>
      <h2>Topics</h2>
      <ul>

        {
          topics.map((d, i) => (
            <li key={i}>
              <Link to={`/topics/${d.id}`}>
                {d.name}
              </Link>
            </li>
          ))
        }

      </ul>
      <div>
        <Route path='/topics/:topicid' render={(props) => <Topic {...props} topics={topics} />}></Route>
      </div>
    </div>
  )
}

export default Topics;