import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { resetDreamErrors, updateDream } from '../../store/dream/dreamSlice'
import { StyledInput } from '../../styled/Input.Styled'
import { Text } from '../../components/containers-language/language'
import { TodoStyled, TodoTextStyled, BtnStyled, EditPlusStyled, EditStyled, UlStyled } from '../../styled/Todo.styled'

export const Todo = ({ dream }) => {
  const dispatch = useDispatch()
  const [list, setList] = useState(dream.descriptionTodo)
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
    const res = list.map(elem => {
      const arr = []
      arr.push(elem.title)
      return arr
    })
    const result = [].concat(...res)
    const formData = new FormData()
    formData.append('_id', dream._id)
    for (let data of result) {
      formData.append('descriptionTodo', data)
    }
    // formData.append('descriptionTodo', result)
    for (let pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1])
    }
    dispatch(updateDream(formData)).then(() => {
      console.log('dream updated')
    })
  }

  useEffect(() => {
    dispatch(resetDreamErrors())
  }, [dispatch])
  return (
    <>
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
        <StyledInput
          id="completed"
          type="text"
          value={inputText}
          onChange={e => {
            setInputText(e.target.value)
          }}
          placeholder="Запиши задачу"
        />

        <BtnStyled onClick={() => createNewTodo(inputText)}>
          <Text tid="addButton" />
        </BtnStyled>
        <BtnStyled onClick={() => handleUpdateDream()}>
          <Text tid="updateButton" />
        </BtnStyled>
      </UlStyled>
    </>
  )
}
