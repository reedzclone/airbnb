import "./Comment.css";
import comment1 from "../../assets/image/comment1.jpg";
import comment2 from "../../assets/image/comment2.jpg";
import comment3 from "../../assets/image/comment3.jpg";
import comment4 from "../../assets/image/comment4.jpg";

function Comment() {
  return (
    <>
      <div className="comment-wrapper">
        <section>
          <div className="comment">
            <div className="comment-top">
              <img src={comment2} alt="" />
              <div className="comment-title">
                <p className="title">Steve</p>
                <p className="title2">March 2023</p>
              </div>
            </div>
            <div className="comment-desc">
              Abbe&apos;s place was so wonderful and just what I needed. It was
              the perfect escape with a great wood stove, beautiful views,
              horses, and nearby skiing. I&apos;m so grateful.
            </div>
          </div>
          <div className="comment">
            <div className="comment-top">
              <img src={comment1} alt="" />
              <div className="comment-title">
                <p className="title">Emily</p>
                <p className="title2">March 2023</p>
              </div>
            </div>
            <div className="comment-desc">
              The location was very quiet and peaceful. We loved the wood stove
              and the location was convenient, however the interior was not in
              the best shape.
            </div>
          </div>
        </section>
        <section>
          <div className="comment">
            <div className="comment-top">
              <img src={comment3} alt="" />
              <div className="comment-title">
                <p className="title">Daniel</p>
                <p className="title2">March 2023</p>
              </div>
            </div>
            <div className="comment-desc">
              Overall a decent stay. I appreciated having a kitchen and access
              to firewood for the stove which heated up the little cabin very
              effectively.
            </div>
          </div>
          <div className="comment">
            <div className="comment-top">
              <img src={comment4} alt="" />
              <div className="comment-title">
                <p className="title">Jackson</p>
                <p className="title2">March 2023</p>
              </div>
            </div>
            <div className="comment-desc">
              Abbe’s tiny house was a perfect spot to spend the weekend while
              skiing in the Tetons. The space was comfortable and the wood stove
              kept us very warm.
            </div>
          </div>
        </section>
      </div>
      <div className="comment-view">View more</div>
      <hr />
    </>
  );
}

export default Comment;
