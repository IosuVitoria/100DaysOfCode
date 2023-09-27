import styles from "./Rating.module.css";
import icon from "../assets/images/icon-star.svg"
import ilustration from "../assets/images/illustration-thank-you.svg"
import {useState} from "react";

const Rating = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [selectedRating, setSelectedRating] = useState<number>();

    const handleRatingClicked = (rating: number) =>{
        setSelectedRating(rating);

    }

    function handleFormSubmitted(e: React.FormEvent){
        e.preventDefault();
        setIsSubmitted(true);
    }

  return isSubmitted ?   (
    <div className={styles.panel}>
        <img src={ilustration} alt="ilustration image" />
        
        <h3 className={styles.thankYouH3}>You selected {selectedRating} out of 5</h3>
        
        <h4 className={styles.thankYouH4}>Thank You!</h4>
        
        <p className={styles.thankYouP} > We appreciate you taking the time to give a rating. If you ever need more support, 
            don’t hesitate to get in touch!</p>
    </div>
  ): (
    <form onSubmit = {handleFormSubmitted} className={styles.panel}>
        <div className={styles.imageTop}>
            <img src={icon} alt="star icon" className={styles.icon}/>
        </div>
       

        <h1 className={styles.panelTitle}>How did we do?</h1>
        <p className={styles.panelText}>Please let us know how we did with your support request. All feedback is appreciated 
        to help us improve our offering!</p>

        <div className={styles.ratingContainer}>
            <button type= "button" onClick={() => handleRatingClicked(1)} className={styles.rating}>1</button>
            <button type= "button" onClick={() => handleRatingClicked(2)} className={styles.rating}>2</button>
            <button type= "button" onClick={() => handleRatingClicked(3)} className={styles.rating}>3</button>
            <button type= "button" onClick={() => handleRatingClicked(4)} className={styles.rating}>4</button>
            <button type= "button" onClick={() => handleRatingClicked(5)} className={styles.rating}>5</button>
        </div>

        <button disabled = {selectedRating === undefined} className={styles.panelButton}>SUBMIT</button>

    </form>
  )
}

export default Rating