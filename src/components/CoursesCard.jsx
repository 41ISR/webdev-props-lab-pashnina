export const CoursesCard = ({title, category, image, duration, level, price, rating}) => {
    return(
       <article className="course-card">
          <img
            className="course-card__image"
            src={image}
            alt={title}
          />
          <div className="course-card__body">
            <span className="course-card__category">{category}</span>
        <h3 className="course-card__title">{title}</h3>
            <p className="course-card__meta">{duration} · {level}</p>
            <div className="course-card__footer">
              <span className="course-card__price">{price} ₽</span>
              <span className="course-card__rating">★ {rating}</span>
            </div>
            <button className="btn btn--primary btn--full">Записаться</button>
          </div>
        </article>
    )
}