import React, {
  useState,
  useMemo,
  useReducer,
  useEffect,
  useCallback,
  useRef
} from "react";
import styled from "styled-components";
import { Tower, TowersWrapper } from "./components";
import { buildDiskSizesForLvls } from "./disk-sizes";
import { alghorithmRunner, FIRST_TOWER, THIRD_TOWER } from "./alghorithm";

const Select = styled.select`
  margin-left: 15px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  margin: 5px;

  > button:not(:last-child) {
    margin-right: 10px;
  }
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > &{Tower} {
    margin-right: 15px
  }

  > p {
    font-weight: bold;
    margin: 10px 0;

    > span {
      font-weight: normal
    }
  }
`;

const initialDisksCount = 3;
const initialGameState = {
  disks: [],
  towers: [[], [], []],
  userMoves: 0
};

function buildDisksState(disksCount, disksScheme) {
  return Array.from({ length: disksCount }, (_, index) => ({
    id: index,
    ...disksScheme[index + 1]
  }));
}

function towersUpdater(towers, updaters) {
  return towers.map((disks, index) => {
    const forRestUpdater = updaters.rest !== undefined;

    if (updaters[index]) {
      return updaters[index](disks);
    }

    return forRestUpdater ? updaters.rest(disks) : [];
  });
}

function disksReducer(state, action) {
  switch (action.type) {
    case "BUILD_DISKS_STATE":
      return {
        ...initialGameState,
        disks: action.payload,
        towers: towersUpdater(state.towers, {
          [FIRST_TOWER]: () => action.payload
        })
      };
    case "MOVE_DISK":
      const { diskId, fromTower, toTower } = action.payload;
      const disk = state.towers[fromTower].find(disk => disk.id === diskId);

      return {
        ...state,
        userMoves: state.userMoves + 1,
        towers: towersUpdater(state.towers, {
          [fromTower]: disks => disks.filter(disk => disk.id !== diskId),
          [toTower]: disks => [disk, ...disks],
          rest: disks => disks
        })
      };
    case "RESTART":
      return {
        ...initialGameState,
        disks: state.disks,
        towers: towersUpdater(state.towers, {
          [FIRST_TOWER]: () => state.disks
        })
      };
    default:
      return state;
  }
}

function useSolver(towers, moveDisk) {
  const [steps, setSteps] = useState([]);
  const [isPause, setPause] = useState(true);
  const intervalId = useRef();
  const step = useRef(0);

  const clearIntervalId = useCallback(() => {
    if (intervalId.current) {
      clearInterval(intervalId.current);

      intervalId.current = undefined;
    }
  }, []);

  const pause = useCallback(() => {
    setPause(true);
    clearIntervalId();
  }, [clearIntervalId]);

  const play = useCallback(() => {
    setPause(false);
    intervalId.current = setInterval(() => {
      if (step.current < steps.length) {
        moveDisk(steps[step.current]);
        step.current += 1;

        return;
      }

      clearIntervalId();
    }, 1000);
  }, [clearIntervalId, moveDisk, steps]);

  useEffect(() => {
    if (steps.length > 0) {
      play();
    }
  }, [play, steps.length]);

  return {
    isPause,
    pause,
    play,
    clearIntervalId,
    solve: () => {
      const rs = alghorithmRunner(towers);

      setSteps(rs);
    }
  };
}

function useCompleteState(disksCount, towers, cb) {
  const isComplete = disksCount === towers[THIRD_TOWER].length;

  useEffect(() => {
    if (isComplete) {
      cb();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isComplete]);
}

function useInitialState(disksCount, towers, cb) {
  const isInitial = disksCount === towers[FIRST_TOWER].length;

  useEffect(() => {
    if (isInitial) {
      cb();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInitial]);
}

const DISKS_VARRIANTS = [3, 4, 5, 6, 7, 8];

export function App() {
  const [disksCount, setDisksCount] = useState(initialDisksCount);
  const [gameState, dispatch] = useReducer(disksReducer, initialGameState);
  const disksScheme = useMemo(() => buildDiskSizesForLvls(disksCount), [
    disksCount
  ]);

  const onMoveDisk = useCallback(({ diskId, fromTower, toTower }) => {
    dispatch({ type: "MOVE_DISK", payload: { fromTower, toTower, diskId } });
  }, []);

  const onRestart = useCallback(() => {
    dispatch({ type: "RESTART" });
  }, []);

  const onCompleteCallback = useCallback(() => {
    setTimeout(() => {
      alert(`Completed in ${gameState.userMoves} moves`);
    }, 100);
  }, [gameState.userMoves]);

  const { solve, clearIntervalId } = useSolver(gameState.towers, onMoveDisk);

  useCompleteState(disksCount, gameState.towers, onCompleteCallback);
  useInitialState(disksCount, gameState.towers, clearIntervalId);

  useEffect(() => {
    dispatch({
      type: "BUILD_DISKS_STATE",
      payload: buildDisksState(disksCount, disksScheme)
    });
  }, [disksCount, disksScheme]);

  return (
    <Wrapper>
      <TowersWrapper>
        {Array.from({ length: 3 }, (_, index) => (
          <Tower
            key={index}
            id={index}
            disks={gameState.towers[index]}
            onMoveDisk={onMoveDisk}
          />
        ))}
      </TowersWrapper>
      <p>
        Your numbers of move: <span>{gameState.userMoves}</span>
      </p>
      <p>
        Number of disks
        <Select
          onChange={event => {
            setDisksCount(event.target.value);
          }}
          value={disksCount}
        >
          {DISKS_VARRIANTS.map(item => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </Select>
      </p>
      <ButtonsWrapper>
        <button onClick={solve}>solve it!</button>
        <button onClick={onRestart}>restart</button>
      </ButtonsWrapper>
    </Wrapper>
  );
}
