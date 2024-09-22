import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const base =
    'inline-block text-sm bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-yellow-500 disabled:hover:bg-yellow-500';

  const styles = {
    primary: base + ' px-4 py-3 rounded-md',
    small: base + ' px-4 py-3 text-xs rounded-md',
    round:
      ' px-3.5 py-2 rounded-full text-sm border-2 border-stone-300 transition-colors duration-300 hover:bg-stone-300 focus:bg-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-300 focus:ring-offset-2',
    secondary:
      'inline-block text-sm rounded-md border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-stone-300 focus:bg-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-stone-500 disabled:hover:bg-stone-500 px-4 py-2.5',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
