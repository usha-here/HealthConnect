import React,{useState} from 'react'
import {AiFillStar} from 'react-icons/ai'

const FeedbackForm = () => {
    const [rating,setRating] =useState(0);
    const [hover,setHover] =useState(0);
    const [reviewText,setReviewText]=useState(' ');
    
    const handleSubmitReview=async e =>{
        e.preventDefault();
        //later we will use our api
    };
  return (
        <form action="">
            <div>
                <br/><br/><br/><br/>
                <h3 className='text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0 container text-center'>
                    <h1 className='text-[30px] leading-[80px] font-bold text-center text-headingColor  mb-[30px]'>Feedback</h1><br/><br/>
                    How would you like to rate the overall experience?
                </h3>
                <div className='container text-center'>
                    {[...Array(5).keys()].map((_,index)=>{
                        index+=1;
                        return (
                        <button 
                        key={index} 
                        type='button'
                        className={`${
                            index <= ((rating && hover) || hover)
                            ? "text-orange-400"
                            : "text-gray-400"
                        } bg-transparent border-none outline-none text-[22px] cursor-pointer `}
                        onClick={()=>setRating(index)}
                        onMouseEnter={()=> setHover(index)}
                        onMouseLeave={()=>setHover(rating)}
                        onDoubleClick={()=>{
                            setHover(0);
                            setRating(0);
                        }}
                        >
                            <span>
                                <AiFillStar/>
                                </span>
                                </button>);
                    })}
                </div>
            </div>
            <br/>
            <div className='mt-[30px] container text-center'>
            <h3 className='text-headingColor text-[16px] leading-6 font-semibold mb-4'>Share your feedback or suggestions..
                </h3>
                <textarea 
                className='border border-solid border-[#0066ff34] focus:outline outline-primaryColor w-full px-4 py-3 rounded-md ' 
                rows='5' 
                placeholder='Write your message'
                onChange={e=>setReviewText(e.target.value)}
                ></textarea>
            </div>
            <button type='submit' onClick={handleSubmitReview} className='btn container text-center ' >Submit Feedback</button>
        </form>
  )
}

export default FeedbackForm