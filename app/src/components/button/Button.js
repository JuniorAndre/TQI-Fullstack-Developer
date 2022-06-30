import { string } from 'prop-types';
export const Button = ({children}) => {
    return <button>{children}</button>;
};

Button.propTypes = {
    children: string
};