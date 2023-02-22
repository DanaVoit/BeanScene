import comment from "../data/comment.json";
import { SectionHeader } from "./SectionHeader";


function CommentList() {
  const commentListItems = comment.map((data) =>
    <li key={comment.id} className="feedback-item">
            <p className="feedback-item-symbol">“</p>
            <div className="feedback-item-inner">
              <p className="feedback-item-comment">{data.comment}</p>
              <p className="feedback-item-name">{data.name}</p>
              <p className="main-txt">{data.job}</p>
              <div className="feedback-item-photo"></div>
            </div>
          
    </li>   
  );
  return (
    <ul href="#" className="comment">{commentListItems}</ul>
  );
}




function Feedback() {
  return(
    <section className="container section">
      <SectionHeader 
        title="Our coffee perfection feedback" 
        dscrpt="Our customers has amazing things to say about us"/>
      <CommentList/>
    </section>
    )
}


  export { Feedback };