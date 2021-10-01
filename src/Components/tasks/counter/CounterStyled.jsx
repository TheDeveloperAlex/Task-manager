import styled from "styled-components";

export const CounterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  .buttonCounter {
    border: none;
    padding: 0;
    margin: 0;
    background-color: transparent;
    font-size: 18px;
  }

  .buttonCounterLeft {
    margin-right: 20px;
    margin-left: 20px;
  }

  .buttonCounterRight {
    margin-left: 20px;
  }

  .CounterInterfaceWrapper {
    display: flex;
  }

  .counterDay {
    font-size: 18px;
  }

  .counterDate {
    font-size: 12px;
    color: rgba(57, 57, 57, 0.6);
  }

  /* ============================================ Tablet ========================================================= */
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;

    .buttonCounter {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .counterNumberContainer {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .buttonCounterRight {
      margin-right: 40px;
    }

    .counterDate {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
