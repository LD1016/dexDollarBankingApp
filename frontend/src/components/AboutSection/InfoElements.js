import styled from 'styled-components';

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  } ;
`;

export const InfoContainer = styled.div`
  color: #fff;
  padding: 160px 0;
  background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  } ;
`;

// export const InfoWrapper = styled.div`
//   display: grid;
//   z-index: 1;
//   /* height: 860px; */
//   height: 660px;
//   /* height: 600px; */
//   width: 100px;
//   max-width: 1100px;
//   margin-right: auto;
//   margin-left: auto;
//   padding: 0 24px;
//   justify-content: center;
// `;
export const InfoWrapper = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

// export const InfoRow = styled.div`
//   display: grid;
//   grid-auto-columns: minmax(auto, 1fr);
//   align-items: center;
//   grid-template-areas: ${({ imgStart }) =>
//     imgStart ? `'col2 col1'` : `'col1 col2'`};

//   @media screen and (max-width: 768px) {
//     grid-template-areas: ${({ imgStart }) =>
//       imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
//   } ;
// `;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`;

// export const Column1 = styled.div`
//   margin-bottom: 15px;
//   padding: 0 50px;
//   grid-area: col1;
// `;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

// export const Column2 = styled.div`
//   margin-bottom: 15px;
//   padding: 0 50px;
//   grid-area: col2;
// `;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

// export const ImgWrap = styled.div`
//   max-width: 555px;
//   height: 100%;
// `;

export const ImgWrap = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;

// export const Img = styled.img`
//   /* width: 100%; */
//   margin: 0 0 20px 20px;
//   height: 400px;
//   padding-right: 0 20px;
//   @media screen and (max-width: 768px) {
//     height: 200px;
//     /* width: 160px; */
//     margin-bottom: 10px;
//   }
// `;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;
