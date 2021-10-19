import styled from "styled-components";

// interface IContentS {
//   background: string;
// }

interface ITriangleContent {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

export const PlayGroundWrapperS = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
export const ContentS = styled.div`
  width: 180px;
  height: 150px;

  position: relative;
`;

export const TriangleContent = styled.div<ITriangleContent>`
  position: absolute;
  top: ${(props) => (props.top ? props.top : "auto")};
  right: ${(props) => (props.right ? props.right : "auto")};
  bottom: ${(props) => (props.bottom ? props.bottom : "auto")};
  left: ${(props) => (props.left ? props.left : "auto")};
`;
