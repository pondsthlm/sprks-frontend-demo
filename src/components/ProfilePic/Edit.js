import React from 'react';
import styled from 'styled-components/macro';
import ExifOrientationImg from 'react-exif-orientation-img';

import Avatar from 'react-avatar-edit';
const Wrapper = styled.div`
  margin: 0 auto;
  div {
    width: auto;
    margin: 0 auto;
  }
`;

const Preview = styled.div`
  margin: 20px;
  text-align: center;
  img {
    display: inline-block;
  }
  span {
    padding: 20px;
    display: block;
  }
`;
class Edit extends React.Component {
  constructor(props) {
    super(props);
    //const src = './example/einshtein.jpg'
    this.state = {
      preview: null,
      src: null,
    };
    this.onCrop = this.onCrop.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  onClose() {
    this.setState({ preview: null });
  }

  onCrop(preview) {
    this.setState({ preview });
  }

  render() {
    return (
      <Wrapper>
        <Avatar
          label="Klicka här för att välja bild"
          width={390}
          height={295}
          onCrop={this.onCrop}
          onClose={this.onClose}
          src={this.state.src}
        />
        {this.state.preview && (
          <Preview>
            <span>Preview</span>
            <ExifOrientationImg src={this.state.preview} alt="Preview" />
          </Preview>
        )}
      </Wrapper>
    );
  }
}
export default Edit;
