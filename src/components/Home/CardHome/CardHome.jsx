import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

class Hover3D {
  constructor(element) {
    this.element = element;
    this.xOffset = 10;
    this.yOffset = 10;
    this.attack = 0.1;
    this.release = 0.5;
    this.perspective = 500;
    this.create();
  }

  create() {
    const rectTransform = this.element.getBoundingClientRect();
    const perspective = "perspective(" + this.perspective + "px) ";
    this.element.style.setProperty("transform-style", "preserve-3d");

    this.element.addEventListener("mouseenter", (e) => {
      this.element.style.setProperty("transition", "transform " + this.attack + "s");
    });

    this.element.addEventListener("mousemove", (e) => {
      let dy = e.clientY - rectTransform.top;
      let dx = e.clientX - rectTransform.left;
      let xRot = this.map(dx, 0, rectTransform.width, -this.xOffset, this.xOffset);
      let yRot = this.map(dy, 0, rectTransform.height, this.yOffset, -this.yOffset);
      let propXRot = "rotateX(" + yRot + "deg) ";
      let propYRot = "rotateY(" + xRot + "deg)";

      this.element.style.setProperty("transform", perspective + propXRot + propYRot);
    });

    this.element.addEventListener("mouseleave", (e) => {
      this.element.style.setProperty("transition", "transform " + this.release + "s");
      this.element.style.setProperty("transform", perspective + "rotateX(0deg) rotateY(0deg)");
    });
  }

  // Processing map() function
  map(value, istart, istop, ostart, ostop) {
    return ostart + ((ostop - ostart) * (value - istart)) / (istop - istart);
  }
}

const Artist = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    const cardElement = cardRef.current;
    const cardHover = new Hover3D(cardElement);

    return () => {
      // Cleanup code when component unmounts
    };
  }, []);

  return (
    <div ref={cardRef} className="card" style={{ width: '24%', height: '24%', boxShadow: '0 15px 6px rgba(0, 0, 0, 0.2)', }}>
      <a href="/artist">
    <img src="https://thebluemanakin.com/wp-content/uploads/2022/09/NFT-moda.png" alt="3D Card Image" style={{}} />
  </a>
      <Link
        to="/artist"
        className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium flex justify-center items-center"
        style={{
          position: 'absolute',
          top: '115%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textDecoration: 'none',
          backgroundColor: 'transparent',
          border: 'none',
        }}
      >
        Artist
      </Link>
    </div>
  );
};

const Jawerly = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    const cardElement = cardRef.current;
    const cardHover = new Hover3D(cardElement);

    return () => {
      // Cleanup code when component unmounts
    };
  }, []);

  return (
    <div
  ref={cardRef}
  className="card"
  style={{
    width: '24%',
    paddingTop: '2%',
    backgroundImage: 'url("https://thumbs.dreamstime.com/b/diamante-abstracto-colorido-91805199.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    boxShadow: '0 15px 6px rgba(0, 0, 0, 0.2)',
  }}
>
  <a href="/jewelry">
    <div
      style={{
        width: '100%',
        height: '100%',
        cursor: 'pointer',
      }}
    ></div>
  </a>
  <Link
    to="/jewelry"
    className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium flex justify-center items-center"
    style={{
      position: 'absolute',
      top: '115%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      textDecoration: 'none',
      backgroundColor: 'transparent',
      border: 'none',
    }}
  >
    Jewelry
  </Link>
</div>
  );
};

const Collector = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    const cardElement = cardRef.current;
    const cardHover = new Hover3D(cardElement);

    return () => {
      // Cleanup code when component unmounts
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="card"
      style={{
        width: '24%',
        paddingTop: '2%',
        backgroundImage:
          'url("https://vulcanpost.com/wp-content/uploads/2022/08/nft-1.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        boxShadow: '0 15px 6px rgba(0, 0, 0, 0.2)',
      }}
    >
        <a href="/collector">
    <div
      style={{
        width: '100%',
        height: '100%',
        cursor: 'pointer',
      }}
    ></div>
  </a>
      <Link
        to="/collector"
        className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium flex justify-center items-center"
        style={{
          position: 'absolute',
          top: '115%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textDecoration: 'none',
          backgroundColor: 'transparent',
          border: 'none',
        }}
      >
        Collector
      </Link>
    </div>
  );
};

const Buyer = () => {
    const cardRef = useRef(null);
  
    useEffect(() => {
      const cardElement = cardRef.current;
      const cardHover = new Hover3D(cardElement);
  
      return () => {
        // Cleanup code when component unmounts
      };
    }, []);
  
    return (
        <div
      ref={cardRef}
      className="card"
      style={{
        width: '24%',
        paddingTop: '2%',
        backgroundImage:
          'url("https://altcoinoracle.com/wp-content/uploads/2022/10/dolce-and-gabbana-dgfamily-nft-community-gallery-02.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        boxShadow: '0 15px 6px rgba(0, 0, 0, 0.2)',
      }}
    >
        <a href="/buyer/code">
    <div
      style={{
        width: '100%',
        height: '100%',
        cursor: 'pointer',
      }}
    ></div>
  </a>
      <Link
        to="/buyer/code"
        className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium flex justify-center items-center"
        style={{
          position: 'absolute',
          top: '115%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textDecoration: 'none',
          backgroundColor: 'transparent',
          border: 'none',
        }}
      >
        Buyer
      </Link>
    </div>
      
    );
  };

const CardRow = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Artist />
      <Jawerly />
      <Collector />
      <Buyer />
    </div>
  );
};

export default CardRow;
