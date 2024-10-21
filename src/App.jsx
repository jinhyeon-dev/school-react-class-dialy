import './App.css';
import { Routes, Route } from 'react-router-dom'
import React,{ useReducer, useRef, useEffect, useState } from 'react';
import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';

export const DiaryStateContext = React.createContext()
export const DiaryDispatchContext = React.createContext()
function reducer(state, action) {
  let newState;
  switch (action.type) {
    case "INIT": {
      newState = action.data;
      localStorage.setItem("diary", JSON.stringify(newState));
      return newState;
    }
    case "CREATE": {
      newState = [action.data, ...state];
      localStorage.setItem("diary", JSON.stringify(newState));
      return newState;
    }
    case "UPDATE": {
      newState = state.map((it) =>
        String(it.id) === String(action.data.id) ? { ...action.data } : it
      );
      localStorage.setItem("diary", JSON.stringify(newState));
      return newState;
    }
    case "DELETE": {
      newState = state.filter((it) => String(it.id) !== String(action.targetId));
      localStorage.setItem("diary", JSON.stringify(newState));
      return newState;
    }
    default:
      return state;
  }
}

// const mockData = [
//   {
//     id: "mock1",
//     date: new Date().getTime() - 1,
//     content: "mock1",
//     emotionId: 1,
//   },
//   {
//     id: "mock2",
//     date: new Date().getTime() - 2,
//     content: "mock2",
//     emotionId: 2,
//   },
//   {
//     id: "mock3",
//     date: new Date().getTime() - 3,
//     content: "mock3",
//     emotionId: 3,
//   },
// ]

function App() {
  const [data, dispatch] = useReducer(reducer, [])
  const [isDataLoaded, setIsDataLoaded] = useState(false)
  const idRef = useRef(0)

  useEffect(() => {
    const rawData = localStorage.getItem("diary")
    if(!rawData) {
      setIsDataLoaded(true)
      return true
    }

    const localData = JSON.parse(rawData)
    if(localData.length === 0) {
      setIsDataLoaded(true)
      return true
    }

    localData.sort((a, b) => Number(b.id) - Number(a.id))
    idRef.current = localData[0].id + 1

    dispatch({true: "INIT", data: localData})
    setIsDataLoaded(true)
  }, [])
  
  // useEffect(() => {
  //   dispatch({
  //     type: "INIT",
  //     data: mockData
  //   })
  //   setIsDataLoaded(true)
  // }, [])

  const onCreate = ({date, content, emotionId}) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current,
        date: new Date(date).getTime(),
        content,
        emotionId
      }
    })
    idRef.current += 1
  }

  const onUpdate = (targetId, date, content, emotionId) => {
    dispatch({
      type: "UPDATE",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotionId
      }
    })
  }

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId
    })
  }

  if(!isDataLoaded) {
    return <div>데이터를 물러오는 중입니다.</div>
  }else {
    return (
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider 
          value={{
          onCreate,
          onUpdate,
          onDelete
          }}
        >
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/diary/:id" element={<Diary />} />
          </Routes>
        </div>
      </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    );
  }
}

export default App;
