import PropTypes from 'prop-types';
import './Card.less';

/**
 * Card component presents a rectangle box layout with some data to fill it up with.
 */

const Card = ({ title, href, description, path, className }) => {
    function getFullPath() {
        let fullPath = '';
        path.forEach((pathSection, index) => {
            if (index === path.length - 1) {
                fullPath = fullPath.concat(String(pathSection));
            } else {
                fullPath = fullPath.concat(String(pathSection), '/');
            }
        });
        return fullPath;
    }

    return (
        <a className={`Card${className ? ' ' + className : ''}`} href={href}>
            <span className='Card__title'>{title}</span>
            {description ? <span className='Card__description'>{description}</span> : null}
            {path ? (
                <span>
                    <span className='Card__pathTitle'> Path </span>
                    <span className='Card__path'>{getFullPath()}</span>
                </span>
            ) : null}
        </a>
    );
};

Card.propTypes = {
    /** Title for the card */
    title: PropTypes.string.isRequired,

    /** Link is attached to the href attribute for the card */
    href: PropTypes.string.isRequired,

    /** Description inside in the card */
    description: PropTypes.string,

    /** Group to which the card belongs to */
    path: PropTypes.arrayOf(PropTypes.string),

    /** The component class name(s). */
    className: PropTypes.string,
};

export default Card;
