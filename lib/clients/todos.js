const todos = [
  {
    id: 1,
    title: 'Todo1',
    description: 'これは一つ目のタスクです',
    expiration: '2022/03/06'
  },
  {
    id: 2,
    title: 'Todo2',
    description: 'これは二つ目のタスクです',
    expiration: '2022/03/08'
  },
  {
    id: 3,
    title: 'Todo3',
    description: 'これは三つ目のタスクです',
    expiration: '2022/03/10'
  }
];

// 本来、ここは DBサーバー または アプリケーションサーバーにリクエストを送るエンドポイントになる
export const getTodosFromDB = () => {
  return todos;
}

export const getTodoFromDB = (id) => {
  let todo;
  for (const ele of todos) {
    if (ele.id === parseInt(id)) {
      todo = ele;
      break;
    }
  }
  return todo;
}

export const getAllTodoIds = () => {
  const todoIds = todos.map(({ id }) => {
    return {
      params: { id: String(id) }
    }
  });
  return todoIds;
}