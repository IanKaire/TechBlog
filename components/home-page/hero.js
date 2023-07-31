import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/ianKaire.jpg'
          alt='An image showing Ian'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Ian</h1>
      <p>
        I blog about software development - especially frontend libraries and frameworks like React, NextJS and React Native.
      </p>
    </section>
  );
}

export default Hero;
