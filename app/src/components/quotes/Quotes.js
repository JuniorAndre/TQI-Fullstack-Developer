import './Quotes.css';
import { string, func } from 'prop-types';
import { Button } from '../button';

export const Quotes = ({ quote, speaker, onUpdate }) => {
    return (
        <div>
            <p className="quote">{quote}</p> 
            <p className="speaker">- {speaker}</p>
            <Button onClick={onUpdate}>Jutsu</Button>
        </div>
    );
};

Quotes.propTypes = {
    p: string,
    onUpdate: func
};