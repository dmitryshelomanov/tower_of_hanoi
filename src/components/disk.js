import React from "react";
import { useDrag } from "react-dnd";
import styled from "styled-components";

export const DiskUI = styled.div`
  height: 21px;
  border: 1px solid black;
  width: ${props => props.diskWidth}px;
  background-color: ${props => props.diskColor};
  z-index: 2;
  opacity: ${props => (props.isDragging ? 0 : 1)};
`;

export function Disk({ id, color, width, onMove, canDrag, towerId }) {
  const [{ isDragging }, drag] = useDrag({
    item: { id, type: "disk" },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();

      if (item && dropResult) {
        onMove({ diskId: item.id, toTower: dropResult.id, fromTower: towerId });
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    }),
    canDrag: () => canDrag
  });

  return (
    <DiskUI
      ref={drag}
      diskColor={color}
      diskWidth={width}
      isDragging={isDragging}
    />
  );
}
