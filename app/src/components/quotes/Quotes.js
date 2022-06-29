import './Quotes.css';
import {string} from 'prop-types';

export const Quotes = ({ quote, speaker }) => {
    return (
        <div>
            <p className="quote">{quote}</p> 
            <p className="speaker">- {speaker}</p>
            <button> Jutsu</button>
        </div>
    );
};

Quotes.protTypes = {
    p: string
}