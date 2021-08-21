import styled from "styled-components";

const VideoModal = () => {
  return (
    <Container>
      <iframe
        width="100%"
        height="300px"
        margin="0px 5px 0 5px"
        src="https://www.youtube.com/embed/iSHPVCBsnLw"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </Container>
  );
};

export default VideoModal;

const Container = styled.div``;
