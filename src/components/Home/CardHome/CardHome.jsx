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

const CardHome = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    const cardElement = cardRef.current;
    const cardHover = new Hover3D(cardElement);

    return () => {
      // Cleanup code when component unmounts
    };
  }, []);

  return (
    <div ref={cardRef} className="card" style={{ width: '24%', height: '24%' }}>
      <img src="https://thebluemanakin.com/wp-content/uploads/2022/09/NFT-moda.png" alt="3D Card Image" />
      <Link
        to="/artist"
        className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium flex justify-center items-center"
        style={{
          position: 'absolute',
          top: '50%',
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
    <div ref={cardRef} className="card" style={{ width: '24%', height: '24%' }}>
      <img src="https://thebluemanakin.com/wp-content/uploads/2022/09/NFT-moda.png" alt="3D Card Image" />
      <Link
        to="/jawerly"
        className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium flex justify-center items-center"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textDecoration: 'none',
          backgroundColor: 'transparent',
          border: 'none',
        }}
      >
        Jawerly
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
    <div ref={cardRef} className="card" style={{ width: '24%', height: '24%' }}>
      <img src="https://vulcanpost.com/wp-content/uploads/2022/08/nft-1.jpeg" alt="3D Card Image" />
      <Link
        to="/artist"
        className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium flex justify-center items-center"
        style={{
          position: 'absolute',
          top: '50%',
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
      <div ref={cardRef} className="card" style={{ width: '24%', height: '10%' }}>
        <img src="https://thebluemanakin.com/wp-content/uploads/2022/09/NFT-moda.png" alt="3D Card Image" />
        <Link
          to="/artist"
          className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium flex justify-center items-center"
          style={{
            position: 'absolute',
            top: '50%',
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
      <CardHome />
      <Jawerly />
      <Collector />
      <Buyer />
    </div>
  );
};

export default CardRow;
