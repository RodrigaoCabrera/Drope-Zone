import React from "react";
import styled from "styled-components";

const DropZone = () => {
  return (
    <DropZoneContainer>
      <Input type="file" name="dropzone" id="dropzone" />
      <UploadButton>Subir archivo</UploadButton>
    </DropZoneContainer>
  );
};
export default DropZone;

const DropZoneContainer = styled.div`
width: max(60%, 440px);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Input = styled.input`
  width: 90%;
  height: 60%;
  background: #130f26;
  border-radius: 5px;
  box-shadow: 0px 0px 15px 0 #569b51;
`;

const UploadButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 56px;
  background-color: #569b51;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 700;
  font-size: 20px;
`;
