import './Card.scss';
import 'react-loading-skeleton/dist/skeleton.css'

const Card = (posts) => {

    return ( 
        <div>
        {posts.posts?.map(post => {
          return (  

            <section className="card-container">
                 <article className="c-card">

                    <h1 className='titleheader'>{post.post.title}</h1>
                    <header className="c-card__header">
                         <img src={post.post.image}  className="c-card__image" alt="Card Image" />
                    </header>

                    <div className="c-card__body">
                        <h2 className="c-card__source">
                            {post.post.source}
                        </h2>
                        <p className="c-card__creator">
                            {post.post.creator}
                        </p>
        
                        <p className="c-card__shortdescription">
                            {post.post.shortdescription} 
                        </p>
      
                    </div>

                    <footer className="c-card__footer">
                         <p>{post.post.datetime}</p>
                         <a href={post.post.linktofeed}>Link to feed</a>
                    </footer>
                </article>
            </section>

          );
        })}
        </div>
    );
}

export default Card;