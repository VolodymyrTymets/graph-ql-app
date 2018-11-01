const setToken = (_, { token }, { cache, getCacheKey }) => {
  const obj = getCacheKey({ __typename: 'authorization' })
  // const fragment = gql`
  //     fragment completeTodo on TodoItem {
  //         completed
  //     }
  // `;
  // const todo = cache.readFragment({ fragment, id });
  // const data = { ...todo, completed: !todo.completed };
  // cache.writeData({ id, data });
  console.log('---> setToken', token)
  debugger
  //cache.writeData('authorization.token', token);
  return token;
};

export default { setToken };