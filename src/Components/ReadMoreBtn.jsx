import React from 'react'
import '../style.css'
import { ReadMoreArrow } from '../images'
import { useNavigate } from 'react-router-dom';

const ReadMoreBtn = () => {

  const navigate = useNavigate();

  const handleReadMore = () => {
  navigate('/blogs');
};
  return (
    <>
        <button onClick={handleReadMore} className='read-more-btn' style={{width: '140px', height: '50px', border: '2px slim #393939', fontWeight: '600', marginTop: '7%', backgroundColor: '#FFFFFF'}}>Read more <img style={{marginLeft: '5%'}} src={ReadMoreArrow} alt="" /></button>
      
    </>
  )
}

export default ReadMoreBtn
