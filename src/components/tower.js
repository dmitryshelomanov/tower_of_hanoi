import React from "react";
import styled from "styled-components";
import { useDrop } from "react-dnd";
import { Disk } from "./disk";
import { isTSEnumMember } from "@babel/types";

const TowerPlane = styled.div`
  display: block;
  width: 4px;
  height: 200px;
  background-color: black;
  position: absolute;
`;

const TowerBottomLine = styled.div`
  display: block;
  width: 200px;
  height: 4px;
  background-color: black;
`;

const TowerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  position: relative;
  height: 204px;
`;

export const TowersWrapper = styled.div`
  display: flex;
  margin: 15px 0;

  ${TowerContainer} {
    margin-right: 25px;
  }
`;

export function Tower({ children, id, disks = [], onMoveDisk }) {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "disk",
    drop: () => ({ id }),
    canDrop: item => {
      if (disks.length > 0) {
        return disks[0].id > item.id;
      }

      return true;
    },
    collect: monitor => ({
      isOver: monitor.isOver()
    })
  });

  return (
    <TowerContainer ref={drop}>
      <TowerPlane />
      {disks.map((disk, index) => (
        <Disk
          key={disk.id}
          color={disk.color}
          width={disk.width}
          id={disk.id}
          onMove={onMoveDisk}
          canDrag={index === 0}
          towerId={id}
        />
      ))}
      <TowerBottomLine />
    </TowerContainer>
  );
}
