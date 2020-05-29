import React from 'react';
import { useStore } from 'store';
import styled, { css } from 'styled-components/macro';
import { bgUrl, bgPosition } from 'components/Image/SanityImage';

const selectFilter = (index, effectList) =>
  effectList[index % effectList.length];

const fixed = css`
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const effectCss = (image, filterNumber) => {
  const filterList = [
    { color: '0,180,155', opacity: '0.3', saturation: '150%' },
    { color: '240, 0, 128', opacity: '0.3', saturation: '120%' },
    { color: '225, 240, 0', opacity: '0.3', saturation: '150%' },
  ];
  const filter = selectFilter(filterNumber, filterList);
  return css`
    background: linear-gradient(
        rgba(${filter.color}, ${filter.opacity}),
        rgba(${filter.color}, ${filter.opacity})
      ),
      linear-gradient(rgba(${filter.color}, 0.75), rgba(${filter.color}, 0.75)),
      url(${bgUrl(image)});
    background-blend-mode: multiply, screen;
    filter: saturate(${filter.saturation});
  `;
};

const BgStyle = styled.div`
  ${fixed}

  ${p => effectCss(p.image, p.filterNumber)}
  background-size: cover;
  background-position: center center;
`;

const VideoStyl = styled.div`
  ${fixed};

  video {
    transform: translate(-50%, 0);
    margin-left: 50%;
    height: 100%;
    width: auto;
  }
`;
export const BgVideo = ({ videoRef }) => {
  const { state } = useStore();
  const video = state.videos.find(v => v._id === videoRef._ref);
  if (!video) return null;
  return (
    <VideoStyl>
      <video muted autoPlay loop poster={bgUrl(video.image)}>
        {video.sources &&
          video.sources.map(source => (
            <source
              src={source.src}
              key={source._key}
              type={`video/${source.type}`}
            />
          ))}
      </video>
    </VideoStyl>
  );
};

export default props => {
  const { video } = props;
  console.log(' { video }', { video });

  return <BgStyle {...props}>{video && <BgVideo videoRef={video} />}</BgStyle>;
};
