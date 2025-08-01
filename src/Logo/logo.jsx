import styles from './logo.module.css';

const Logo = ({ size = 32, color = 'currentColor' }) => {
  return (
    <div className={styles.logo}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2 L13 8 L18 9 L13 10 L12 16 L11 10 L6 9 L11 8 Z" />
      </svg>
    </div>
  );
};

export default Logo;