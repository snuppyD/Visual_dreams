import { useState, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '../../components/button'
import { createDream, resetDreamErrors, updateDream } from '../../store/dream/dreamSlice'
import { paths } from '../../paths'
import { StyledInput } from '../../styled/Input.Styled'
import { TodoStyled, TodoTextStyled, BtnStyled, EditPlusStyled, EditStyled, UlStyled } from '../../styled/Todo.styled'

export const Todo = ({ description, id, name, price, capacity, dreamImage, dreamVideo, finalTime }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [list, setList] = useState([])
  const [inputText, setInputText] = useState('')
  const [editing, setEditing] = useState(false)
  const [editText, setEditText] = useState('')
  const [editingElement, setEditingElement] = useState('')
  const saveEditedElement = id => {
    setEditing(true)
    const updatedList = [...list].map(item => {
      if (item.id === id) {
        item.title = editText
      }
      return item
    })
    setList(updatedList)
    setEditText('')
    setEditing(false)
  }
  const createNewTodo = title => {
    if (title !== '') {
      const customId = new Date().getTime()
      setList([...list, { id: customId, title: inputText }])
      setInputText('')
      console.log(inputText, list)
    }
  }

  const deleteElement = itemId => {
    setList(prev => {
      return [...prev].filter(elem => elem.id !== itemId)
    })
  }
  const editElement = element => {
    setEditing(true)
    setEditingElement(element)
    setEditText(element.title)
  }

  const handleUpdateDream = () => {
    const formData = new FormData()
    formData.append('_id', id)
    formData.append('name', name)
    formData.append('price', price)
    formData.append('description', description)
    formData.append('capacity', capacity)
    formData.append('dreamImage', dreamImage)
    formData.append('dreamVideo', dreamVideo)
    formData.append('finalTime', finalTime)
    // const s = formData.getAll('price', 'description', 'capacity', 'dreamImage', 'dreamVideo', 'finalTime')
    // for (let pair of formData.entries()) {
    //   console.log(pair[0] + ', ' + pair[1])
    // }
    console.log(formData)
    // const param = new URLSearchParams(formData)
    dispatch(updateDream(formData))
  }

  useEffect(() => () => dispatch(resetDreamErrors()), [dispatch])
  return (
    <>
      {description ? (
        <StyledInput
          id="completed"
          type="text"
          value={inputText}
          onChange={e => {
            setInputText(e.target.value)
          }}
          placeholder="Запиши задачу"
        />
      ) : (
        false
      )}
      <BtnStyled onClick={() => createNewTodo(inputText)}>Add</BtnStyled>

      <UlStyled>
        {list.map(item => {
          return (
            <TodoStyled key={item.id}>
              {editing && editingElement.id === item.id ? (
                <StyledInput
                  type="text"
                  value={editText}
                  onChange={e => {
                    setEditText(e.target.value)
                  }}
                />
              ) : (
                <TodoTextStyled>{item.title}</TodoTextStyled>
              )}
              <div>
                <EditStyled
                  onClick={() => {
                    if (editing && editingElement.id === item.id) {
                      saveEditedElement(item.id)
                    } else {
                      editElement(item)
                    }
                  }}
                >
                  {editing && editingElement.id === item.id ? '➕' : '✍'}️
                </EditStyled>
                <EditPlusStyled onClick={() => deleteElement(item.id)}>❌</EditPlusStyled>
              </div>
            </TodoStyled>
          )
        })}
        <Button onClick={handleUpdateDream}>Створити</Button>
      </UlStyled>
    </>
  )
}
