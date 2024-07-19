import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './FbIcon.module.css'
import { useState } from 'react';

function FbIcon({ width, height, baseColor, hoverColor }) {
    const [color, setColor] = useState(baseColor);

    return (
        <>
            <Link to={'#'} className={`${styles.social}`}>
                  <p>Facebook</p>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 372.07 371.91"
                        width={width}
                        height={height}
                        onMouseEnter={() => setColor(hoverColor)}
                        onMouseLeave={() => setColor(baseColor)}
                        style={{ fill: color }}
                    >
                        <path
                        d="M221.67,305.09c0-20.62,0-41.24,0-61.87c0-5.29,0.02-5.3,5.44-5.3c9.12-0.01,18.25-0.06,27.37,0.03
                            c2.55,0.03,3.72-0.66,4.13-3.46c2.14-14.7,4.42-29.38,6.92-44.02c0.6-3.47-0.55-4.12-3.58-4.11c-15.12,0.08-30.25,0.04-45.37,0.03
                            c-5.4,0-5.41-0.03-5.41-5.41c-0.01-9.87-0.01-19.75,0-29.62c0.02-18.01,10.14-28.48,28.19-28.87c10.12-0.21,20.25-0.18,30.37-0.01
                            c3.36,0.06,4.58-0.84,4.52-4.4c-0.21-12.12-0.26-24.25,0.03-36.37c0.09-3.9-1.53-4.99-4.86-5.3c-6.46-0.6-12.9-1.55-19.37-1.98
                            c-13.33-0.89-26.69-1.6-39.89,1.44c-27.37,6.31-45.51,26.17-49.48,54.15c-0.98,6.93-1.4,13.91-1.44,20.91c-0.06,10-0.01,20-0.02,30
                            c0,5.42-0.01,5.44-5.37,5.45c-10.75,0.02-21.5,0.12-32.24-0.06c-3.48-0.06-4.49,1.13-4.45,4.55c0.16,14.25,0.19,28.5-0.01,42.74
                            c-0.05,3.62,1.27,4.4,4.57,4.35c11-0.17,22,0.03,32.99-0.12c3.3-0.04,4.59,0.84,4.59,4.41c-0.11,41.99-0.1,83.99,0,125.98
                            c0.01,3.42-1.2,4.01-4.21,3.43c-61.3-11.75-106.73-45-135.55-100.41c-10.42-20.03-16.07-41.64-18.4-64.1
                            c-5.36-51.77,8.08-98.21,40.84-138.5C72.85,30.7,112.8,7.76,161.59,1.68c60.38-7.53,112.7,10.27,155.98,52.93
                            c29.68,29.26,47.66,65.06,52.78,106.5c7.11,57.49-7.71,108.73-46.71,152.21c-26.36,29.39-58.83,48.8-97.3,58.01
                            c-4.54,1.09-4.67,0.98-4.67-3.64C221.67,346.83,221.67,325.96,221.67,305.09z"
                        />
                    </svg>
            </Link>
        </>
    );
}

FbIcon.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    baseColor: PropTypes.string,
    hoverColor: PropTypes.string,
};
  
FbIcon.defaultProps = {
    width: '32px',
    height: '32px',
    baseColor: 'black',
    hoverColor: 'red',
};

export default FbIcon;