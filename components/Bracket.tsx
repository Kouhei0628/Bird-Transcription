import styles from "../styles/Bracket.module.scss";

export default function Bracket() {
  return (
    <span className={styles.bracket}>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30.26 27.84'>
        <g>
          <g>
            <circle className='cls-1' cx='8.99' cy='13.9' r='2.04' />
            <circle className='cls-1' cx='15.08' cy='13.9' r='2.04' />
            <circle className='cls-1' cx='21.17' cy='13.9' r='2.04' />
            <path
              className='cls-1'
              d='M0,27.84V0H4.39V.6H.69V27.25h3.7v.6H0Z'
            />
            <path
              className='cls-1'
              d='M25.87,27.25h3.7V.6h-3.7V0h4.39V27.84h-4.39v-.6Z'
            />
          </g>
        </g>
      </svg>
    </span>
  );
}
