import React from 'react';
import Card from './shared/Card';
import PropTypes from 'prop-types';
import { FaEdit, FaTimes } from 'react-icons/fa';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItem({ item }) {

  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card reverse={true}>
        <div className="num-display">{item.rating}</div>
        <button className='close'
        onClick={() => deleteFeedback(item.id)}
        >
          <FaTimes color='purple'/>
        </button>
        <button onClick={() => editFeedback(item)} className='edit'>
         <FaEdit color='purple'/>
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default FeedbackItem;
