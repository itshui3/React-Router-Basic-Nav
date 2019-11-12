import React from 'react';

const SubTopic = props => {

  const resource = props.resources.find(({id}) => id === props.match.params.subid);

  return (
    <div>
      <h4>{resource.name}</h4>
    </div>
  )
}

export default SubTopic;