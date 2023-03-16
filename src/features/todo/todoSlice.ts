import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface Todo {
  id: string
  content: string
  isCompleted: boolean
}

const state = {
  todos: [
    {
      id: 'fc3e9096-1970-b847-e5af-428810dacd6a',
      content: 'テスト1の内容',
      isCompleted: false,
    },
    {
      id: '98705c6a-feee-9754-c953-94bd5d129390',
      content: 'テスト2の内容',
      isCompleted: true,
    },
  ],
}

export const todosSlice = createSlice({
  name: 'todosSlice',
  initialState: state,
  reducers: {
    add: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload)
    },
    remove: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
  },
})

export const { add, remove } = todosSlice.actions

export const todosReducer = todosSlice.reducer // sliceをexportしようとしたが、エラーが出たので、一旦名前付きexportに変更
