import Button from "../Components/common/button/Button";
import Title from "../Components/common/title/Title";
import SprintList from "../Components/sprints/SprintList/SprintList";
import { SprintStyled } from "./SprintStyled";
import buttonIcons from "../configs/buttonIcons.json";
import NavContainer from "../Components/common/containers/navContainer/NavContainer";
import NavMenu from "../Components/navMenu/NavMenu";
import CreateMembers from "../Components/projects/addMembers/CreateMember";
import { useState } from "react";
import CreateSprint from "../Components/sprints/createSprint/CreateSprint";

const SprintPage = () => {
  const [openModalMembers, setOpenModalMembers] = useState(false);
  const [openModalSprints, setOpenModalSprints] = useState(false);
  return (
    <>
      <NavContainer>
        <NavMenu title="спринти" />
      </NavContainer>
      <SprintStyled>
        <article>
          <div className="headerWrap">
            <div className="contentWrap">
              <div className="titleWrap">
                <form>
                  <input className="inputChangeTitle" name="name" type="text" />
                </form>
                <>
                  <Button
                    icon={buttonIcons.edit}
                    classBtn="editDelete"
                    title="Edit the name"
                    type="button"
                    className="buttonChange"
                  />
                  <Title />
                </>
              </div>

              <p>current project description</p>

              <div className="addWrap">
                <button
                  className="btnWrap"
                  onClick={() => setOpenModalMembers(true)}
                >
                  <Button
                    icon={buttonIcons.group_add}
                    classBtn="group_add"
                    title="Add people"
                    type="button"
                  />
                  <span className="textAddPeople">Add people</span>
                </button>

                <CreateMembers
                  closeModal={openModalMembers}
                  setCloseModal={setOpenModalMembers}
                />
              </div>
            </div>

            {767 && (
              <>
                <Button
                  icon={buttonIcons.add}
                  classBtn="add"
                  onHandleClick={() => setOpenModalSprints(true)}
                />
                <CreateSprint
                  closeModal={openModalSprints}
                  setCloseModal={setOpenModalSprints}
                />
              </>
            )}
          </div>
          <SprintList />
        </article>
      </SprintStyled>
    </>
  );
};

export default SprintPage;
