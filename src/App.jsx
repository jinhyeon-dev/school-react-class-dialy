import './App.css'
import { Routes, Route, Link } from 'react-router-dom' // Link 추가
import React, { useReducer, useRef, useEffect, useState } from 'react'
import Home from './pages/Home'
import New from './pages/New'
import Edit from './pages/Edit'
import Diary from './pages/Diary'
// import { getEmotionImgById } from './util'

export const DiaryStateContext = React.createContext()
export const DiaryDispatchContext = React.createContext()

function reducer(state, action) {
  switch (action.type) {
    case "INIT":
      return action.data
    case "CREATE":
      return [action.data, ...state]
    case "UPDATE":
      return state.map((it) =>
        String(it.id) === String(action.data.id) ? { ...action.data } : it
      )
    case "DELETE":
      return state.filter((it) => String(it.id) !== String(action.targetId))
    default:
      return state
  }
}


function App() {
  const [data, dispatch] = useReducer(reducer, [])
  const [isDataLoaded, setIsDataLoaded] = useState(false)
  const idRef = useRef(0)

  useEffect(() => {
    dispatch({
      type: "INIT",
      data: mockData
    })
    setIsDataLoaded(true)
  }, [])

  const onCreate = ({ date, content, emotionId }) => {
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
        date: new Date(date).getTime,
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

  const mockData = [
    {
      id: "mock1",
      date: new Date().getTime,
      content: "mock1",
      emotionId: 1,
    },

    {
      id: "mock2",
      date: new Date().getTime,
      content: "mock2",
      emotionId: 2,
    },
    {
      id: "mock3",
      date: new Date().getTime,
      content: "mock3",
      emotionId: 3,
    },
  ]

  if (!isDataLoaded) {
    return <div>데이터를 불러오는 중입니다.</div>
  }
  else {

    return (
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{
          onCreate,
          onUpdate,
          onDelete
        }}>
        <div className="App">

          {/* <div>
        <img src={getEmotionImgById(1)} alt="emotion1" />
      </div> */}

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/new' element={<New />} />
            <Route path='/edit' element={<Edit />} />
            <Route path='/diary' element={<Diary />} />
          </Routes>

          {/* <Link to={"/"}>Home</Link> {" "}
      <Link to={"/new"}>New</Link> {" "}
      <Link to={"/edit"}>Edit</Link> {" "}
      <Link to={"/diary"}>Diary</Link> */}

        </div>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    );
  }
}

export default App;