import styled from "styled-components";
export const SprintStyled = styled.div`
width: 100%;
article {
  
  @media screen and (max-width: 414px) {
    padding: 30px 20px 30px 20px;
    margin-left: auto;
    margin-right: auto;
    max-width: 414px;
  }

  @media screen and (min-width: 768px) {
    position: relative;
    padding: 40px 0 30px 20px;
  }

  @media screen and (min-width: 1280px) {
    padding: 40px 0 40px 70px;
  }

  .headerWrap {
    display: flex;
    margin: 0 0 30px;

    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: space-between;
    }

    .contentWrap {
      @media screen and (min-width: 768px) {
        width: 472px;
      }

      @media screen and (min-width: 1280px) {
        width: 400px;
      }

      .titleWrap {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin: 0 0 20px;

        h2 {
          margin-right: 20px;
          font-size: 26px;
          font-weight: 500;
          letter-spacing: 0.04em;
          // добавить троеточие в конце длинных названий
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          @media screen and (max-width: 413px) {
            max-width: 180px;
            height: 64px;
          }
          @media screen and (min-width: 768px) {
            font-size: 36px;
            max-width: 260px;
            height: 44px;
          }
          @media screen and (min-width: 1280) {
            height: 44px;
          }
        }        
      }

      p {
        margin: 0 0 30px;
        letter-spacing: 0.04em;

        @media screen and (max-width: 413px) {
          font-size: 14px;
        }

        @media screen and (min-width: 768px) {
          line-height: 22px;
        }
      }

      .addWrap {
        display: flex;
        align-items: center;
        font-family: Montserrat;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 22px;
        letter-spacing: 0.04em;
        text-align: left;


        .group_add {
          cursor: pointer;
          margin-right: 10px;
          text-decoration: none;
          max-width: 180px;
          height: 30px;
          font-size: 18px;
          color: #181C27;
          background-color: transparent;
          
        }

        .textAddPeople {
          line-height: 16px;
          letter-spacing: 0.04em;
          color: $text-dark;
          border-bottom: 1px solid #181c27;
          cursor: pointer;
          font-weight: 500;
          margin-left: 10px;
        }
      }
    }

    .btnWrap {        
      background-color: transparent;
      border: none;
      outline: none;
      display: flex;
      align-items: center;
      
    }

    .createSprintWrap {
      @media screen and (min-width: 768px) and (max-width: 1279px) {
        position: absolute;
        right: 0px;
      }

      @media screen and (min-width: 1280px) {
        display: flex;
        align-items: center;
        padding-right: 95px;
        height: 52px;
      } 
      
    }
    .createSprintSpan {
        @media screen and (max-width: 1279px) {
        display: none;
        
      }
      
    }
    
    }
  }
}

.add {
  cursor: pointer;
  width: 44px;
  height: 44px;
  border-radius: 25px;

  transition: all 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:focus,
  &:hover {
    outline: none;
    box-shadow: 0px 3px 4px rgba(255, 107, 8, 0.3);
    transform: scale(1.15);
  }
  @media screen and (min-width: 1280px) {
    margin-right: 16px;
  }
  @media screen and (max-width: 767px) {
  position: fixed;
  right: 10px;
  bottom: 60px;
  cursor: pointer;
  z-index: 2;
  }
}
.editDelete {
  &:focus,
  &:hover {
    background-color:#FF6B08;
;
    outline: none;
    box-shadow: 0px 3px 4px rgba(255, 107, 8, 0.3);
    transform: scale(1.15);
  }
}

.inputChangeTitle {
  display: inline-block;
  border: none;
  outline: none;
  box-shadow: 2px 4px 8px rgba(0, 5, 97, 0.1);
  border-radius: 5px;
  font-family: Montserrat;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 44px;
  letter-spacing: 0.04em;
  text-align: center;
  padding: 5px;
  max-width: 260px;

  @media screen and (max-width: 413px) {
    width: 120px;
    height: 32px;
    font-family: Montserrat;
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
    letter-spacing: 0.04em;
    text-align: left;

  }
  @media screen and (min-width: 768px) {
    margin-right: 20px;
    max-width: 260px;
    height: 44px;
    
  }
  @media screen and (min-width: 1280px) {
    margin-right: 40px;
    max-width: 260px;
    height: 44px;
  }
}

.changeTitleForm {
  
  display: none;
  max-width: 260px;
}

.changeTitleFormActive {
  display: flex;
  align-items: center;
}

.createSprintWrap {
  @media screen and (min-width: 768px) and (max-width: 767px) {
    position: absolute;
    right: 0px;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    align-items: center;
    padding-right: 34px;
    height: 52px;
  }


`;
