import styled from "styled-components";

export const LayoutWrapper = styled.div`
  -webkit-overflow-scrolling: touch;

  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 16px;
    cursor: pointer;
    transition: color 0.3s;
  }

  .ant-layout {
    &.main-content {
      overflow: auto;
      overflow-x: hidden;
      @media only screen and (min-width: 768px) and (max-width: 1220px) {
        width: calc(100% - 80px);
        flex-shrink: 0;
      }

      @media only screen and (max-width: 767px) {
        width: 100%;
        flex-shrink: 0;
      }
    }
  }

  .ant-layout-footer {
    font-size: 13px;
    background: #fff;
    @media (max-width: 767px) {
      padding: 10px 20px;
    }
  }
`;
