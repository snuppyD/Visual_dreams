import { useState } from 'react'
import { StyledInput } from '../../styled/Input.Styled'
import { TodoStyled, TodoTextStyled, BtnStyled, EditPlusStyled, EditStyled, UlStyled } from '../../styled/Todo.styled'

export const Todo = ({ dream }) => {
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
  return (
    <>
      <StyledInput
        id="completed"
        type="text"
        value={inputText}
        onChange={e => {
          setInputText(e.target.value)
        }}
        placeholder="Запиши задачу"
      />
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
      </UlStyled>
    </>
  )
}
