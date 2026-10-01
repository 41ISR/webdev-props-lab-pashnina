export const ReviewsCard = ({name, avatar, text, course}) => {
    return(
       <div className="review-card">
          <img
            className="review-card__avatar"
            src={avatar}
            alt={name}
          />
          <div className="review-card__content">
            <p className="review-card__text">
              {text}
            </p>
            <span className="review-card__author">
              {name} — курс {course}
            </span>
          </div>
        </div>
    )
}