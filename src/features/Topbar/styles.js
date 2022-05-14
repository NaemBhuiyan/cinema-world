import styled from 'styled-components';

const TopbarWrapper = styled.div`
  .header {
    background-color: #ffffff;
    z-index: 1000;
    position: fixed;
    width: 100%;

    .ant-col {
      /* display: inherit; */
    }
    &-right {
      .ant-col {
        display: inherit;
      }
    }
  }
`;

export default TopbarWrapper;
