import React, { useEffect, useState } from "react";
import ProfilePhoto from "../../assets/sweater.svg";
import ProfilePhoto2 from "../../assets/tie.svg";
import ProfilePhoto3 from "../../assets/jacket.svg";
import styled from "styled-components/macro";
import { AnimatePresence, motion } from "framer-motion";
import { name as userInfoName } from "../../data/UserInfo";

import { wrap } from "@popmotion/popcorn";
import FadeIn from "../FadeIn/FadeIn";
import { smallBreakPoint } from "../../constants";

const variants = {
  enter: {
    scaleX: [0.97, 1.03],

    scaleY: 1.03,
    scale: [0.97, 1.03],
  },
  center: {
    opacity: 1,
    scaleX: 1,
    scaleY: 1,
    scale: 1,
    rotate: [0, 5, 0, -5, 0],
  },
  exit: {
    scaleX: [0.97, 1.03],
    scaleY: 1.03,
    scale: [0.97, 1.03],
    rotate: [0, 5, 0, -5, 0],
  },
};

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 250px;
  outline: 0;

  user-select: none;
`;

const Name = styled.div`
  font-size: 2.5em;
  font-weight: 500;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 20px;
`;

const HeaderImage = styled(motion.img)`
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  height: 277px;
  width: auto;
  margin: 15px;
  cursor: pointer;

  @media screen and (max-width: ${smallBreakPoint}) {
    height: 250px;
  }
`;

const Carousel = () => {
  const [page, setPage] = useState(0);
  const [hasPreloadedImages, setHasPreloadedImages] = useState(false);
  const images = [ProfilePhoto, ProfilePhoto2, ProfilePhoto3];

  useEffect(() => {
    if (!hasPreloadedImages) {
      images.forEach((picture) => {
        const img = new Image();
        img.src = picture;
      });
    } else {
      setHasPreloadedImages(true);
    }
  }, [images, hasPreloadedImages]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, images.length, page);

  return (
    <FadeIn>
      <HeaderWrapper>
        <AnimatePresence initial={false} exitBeforeEnter>
          <HeaderImage
            src={images[imageIndex]}
            onClick={() => setPage(page + 1)}
            key={page}
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
    </FadeIn>
  );
};

export default Carousel;
