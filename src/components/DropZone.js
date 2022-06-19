import React, { useRef, useState } from "react";
import styled from "styled-components";

const DropZone = () => {
  const [isDragging, setIsDragging] = useState(false);

  //Referencia al input para leer los archivos.
  const inputFileRef = useRef();
  /* const uploadfile = () => {
    console.log(inputFileRef.current.files[0]);
    const reader = new FileReader();

    reader.readAsDataURL(inputFileRef.current.files[0]);
    reader.onload = () => {
      setGld(reader.result);
    };
  }; */

  //Activamos o desactivamos el dragging.
  const uploadfile = () => {
    console.log("draging");
    setIsDragging(!isDragging);
  };

  return (
    <DropZoneContainer>
      <Input
        dragging={isDragging}
        onDragEnter={uploadfile}//Ejecutamos cuando hay archivo/S encima del input
        onDragLeave={uploadfile}//Ejecutamos cuando archivo/s salen de encima del input
        onDrop={uploadfile}//Ejecutamos cuando se suelta archivo/s encima del input
        ref={inputFileRef}
        type="file"
        name="dropzone"
        id="dropzone"
      />
      <UploadButton onClick={uploadfile}>Subir archivo</UploadButton>
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
  position: relative;
`;
const Input = styled.input`
  width: 90%;
  height: 60%;
  background: #130f26;
  border-radius: 5px;
  ${(props) =>
    props.draging
      ? "box-shadow: 0px 0px 35px 0 #569b51;"
      : "box-shadow: 0px 0px 15px 0 #569b51"}
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
