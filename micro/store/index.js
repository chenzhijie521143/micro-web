export const creatStore = (initData) => (() => {
  let store = initData;
  let observers = []; // 管理所有的订阅者

  // 获取store
  const getStore = () => {
    return store;
  }

  // 更新store
  const updateStore = (newValue) => new Promise((res) => {
    if (newValue !== store) {
      let oldValue = store;
      store = newValue;
      res(store);

      observers.forEach(fn => fn(newValue, oldValue));
    }
  })

  // 添加订阅者
  const subscribeStore = (fn) => {
    observers.push(fn);
  }

  return { getStore, updateStore, subscribeStore }
  
})()


