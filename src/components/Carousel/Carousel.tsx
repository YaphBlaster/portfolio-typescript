import React, { useEffect, useState } from "react";
import ProfilePhoto from "../../assets/businessman.svg";
import ProfilePhoto2 from "../../assets/hipster.svg";
import ProfilePhoto3 from "../../assets/fancy.svg";
import ProfilePhoto4 from "../../assets/hipster2.svg";
import ProfilePhoto5 from "../../assets/fancy2.svg";
import styled from "styled-components/macro";
import { AnimatePresence, motion } from "framer-motion";
import { Name as userInfoName } from "../../data/UserInfo";

import { wrap } from "@popmotion/popcorn";

const variants = {
  enter: {
    scaleX: [0.95, 1.05],

    scaleY: 1.05,
    scale: [0.95, 1.05],
  },
  center: {
    opacity: 1,
    scaleX: 1,
    scaleY: 1,
    scale: 1,
    rotate: [0, 10, 0, -10, 0],
  },
  exit: {
    scaleX: [0.95, 1.05],
    scaleY: 1.05,
    scale: [0.95, 1.05],
    rotate: [0, 10, 0, -10, 0],
  },
};

const HeaderImage = styled(motion.img)`
  height: 250px;
  width: 250px;
  margin: 15px;
  cursor: pointer;
  /* animation: hueChange 20s infinite; */
  @keyframes hueChange {
    from {
      filter: hue-rotate(0deg);
    }
    to {
      filter: hue-rotate(260deg);
    }
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 250px;
`;

const Name = styled.div`
  font-size: 2.5em;
  font-weight: 500;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 20px;
`;

const Carousel = () => {
  const [page, setPage] = useState(0);
  const images = [
    ProfilePhoto,
    ProfilePhoto2,
    ProfilePhoto3,
    ProfilePhoto4,
    ProfilePhoto5,
  ];

  useEffect(() => {
    images.forEach((picture) => {
      const img = new Image();
      img.src = picture;
    });
  }, [images]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, images.length, page);

  return (
    <div>
      <HeaderWrapper>
        <AnimatePresence initial={false} exitBeforeEnter>
          <HeaderImage
            onClick={() => setPage(page + 1)}
            key={page}
            src={images[imageIndex]}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              stiffness: 400,
              dampening: 100,
              duration: 0.2,
            }}
          />
        </AnimatePresence>
      </HeaderWrapper>
      <Name>{userInfoName}</Name>
    </div>
  );
};

export default Carousel;
