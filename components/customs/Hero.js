import styled from "@emotion/styled"
import CardMedia from "@mui/material/CardMedia"

const Hero = styled(CardMedia)`
  background-image: url("/vectors/background.svg");
  background-size: cover;
  margin: 0;
  height: inherit;
  position: relative;
  transform-style: preserve-3d;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1);

  & > span {
    transform-style: preserve-3d;
    position: absolute !important;
    bottom: 20px;
    transform: translate3d(0px, 0px, px);

    & img {
      filter: drop-shadow(0 5px 5px);
      min-height: 92% !important;
    }
  }
`

export default Hero
