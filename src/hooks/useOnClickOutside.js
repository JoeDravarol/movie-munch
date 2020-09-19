import { useEffect } from 'react'

// https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/#close-the-menu-by-clicking-outside-of-it
export default (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  },
  [ref, handler],
  );
}