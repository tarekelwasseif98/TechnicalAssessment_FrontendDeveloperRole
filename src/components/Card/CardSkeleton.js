import Skeleton from 'react-loading-skeleton'
import './Card.scss';

const CardSkeleton = ({cards}) => {
    return ( 
        Array(cards).fill(0).map((item, i) => <section className="card-container">
        <article className="c-card" key={i}>

            <h1 className='titleheader'><Skeleton/></h1>
            <header className="c-card__header">
                <Skeleton width={320} height={300}/>
            </header>

            <div className="c-card__body">
               <h2 className="c-card__source">
               <Skeleton/>
               </h2>
               <p className="c-card__creator">
               <Skeleton/>
               </p>
               <p className="c-card__shortdescription">
               <Skeleton/>
               </p>
            </div>

            <footer className="c-card__footer">
                <p><Skeleton/></p>
                <a><Skeleton/></a>
            </footer>
       </article>
   </section>)
     );
}
 
export default CardSkeleton;