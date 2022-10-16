import { useEffect, useState } from "react";

const Events = () => {
  const [pressed, setPressed] = useState('')

  const handleKeyDown = (event) => {
    event.preventDefault();
    console.log(event);
  }

  const handleClick = (event) => {
    console.log('click event: ', event);
    setPressed('true');
  }

  const handleSearch = (event) => {
    event.stopPropagation();
    alert('esta saliaendo de la app');
    window.open('https://google.com.ar', '_blank');
  }

  // const handleScroll = event => {
  //   console.log('scrollTop: ', event.currentTarget.scrollTop);
  //   console.log('offsetHeight: ', event.currentTarget.offsetHeight);
  // };

  // useEffect(() => {
  //   const handleResize = () => {
  //     console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
  //   }

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener(handleResize);
  //   }
  // }, [])

  return (
    <div>
      {/* <button onClick={handleClick}>Button</button>
      <p>Pressed? {pressed} </p> */}
      <input onKeyDown={handleKeyDown} />

      {/* <div
        style={{
          border: '3px solid black',
          width: '400px',
          height: '100px',
          overflow: 'scroll',
        }}
        onScroll={handleScroll}
        >
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
      </div> */}
      <a onClick={handleSearch}>
        <button onClick={handleSearch}>Buscar</button>
      </a>
    </div>
  );
}
 
export default Events;