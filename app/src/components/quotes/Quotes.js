import './Quotes.css';
import {string} from 'prop-types';
import { Button } from '../button';

export const Quotes = ({ quote, speaker }) => {
    return (
        <div>
            <p className="quote">{quote}</p> 
            <p className="speaker">- {speaker}</p>
            <Button> Jutsu</Button>
        </div>
    );
};

Quotes.protTypes = {
    p: string
}