import styled from 'styled-components';

export const Container = styled.li`
  width: 274px;
  height: 426px;
`;

export const Photo = styled.img`
  width: 100%;
  height: 268px;
  display: block;
  border-radius: 14px;
  object-fit: cover;
`;

export const PhotoContainer = styled.div`
  position: relative;
  width: 274px;
  height: 268px;
  border-radius: 14px;
`;

export const LikeButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  
  align-items: center;
  justify-content: center;
  text-align: center;

  border: none;
  background: none;
  padding: 0px;

  &:hover,
  &:focus {
    svg {
      stroke: var(--blue);
      fill: var(--blue);
      transition: var(--cubic);
    }
  }

  // &.active {
  //   svg {
  //     stroke: #3470ff;
  //     fill: #3470ff;
  //   }
  }
`;

export const IconHeart = styled.svg`
  width: 18px;
  height: 18px;
  bacground: none;
  stroke: var(--heart);
  fill: transparent;
`;

export const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--gradient);
  border-radius: 14px;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const MainDetails = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const CardTitle = styled.div`
  display: flex;
  margin-bottom: 8px;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  color: var(--text-black);
`;

export const Model = styled.span`
  margin-left: 2px;
  color: var(--blue);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 60px;
`;

export const Details = styled.div`
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  color: var(--text-grey);
`;

export const ModelTooltip = styled.span`
  visibility: hidden;
  width: 120px;
  bottom: 110%;
  left: 50%;
  margin-left: -60px;
  font-size: 12px;
  background-color: var(--secondwhite);
  color: var(--blue);
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 100;
  transition: var(--cubic);
`;

export const Tooltip = styled.div`
  position: relative;
  display: flex;

  &:hover ${ModelTooltip} {
    visibility: visible;
    transition: var(--cubic);
  }
`;
