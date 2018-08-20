const defaultState = {
	value:'2',
	list:['ccc','ddd']
}
// 注意点：：：
//1.reducer是一个函数,并且reducer是一个纯函数(给定固定的输入,就会偶固定的输出,并且不能改变参数)
//2.reducer负责处理逻辑但不改变数据，数据的改变是由store来负责的
//3.action中的type在整个应用中必须唯一
export default function(state = defaultState,action){
	console.log(action)
	if (action.type === 'change_value') {
		const newState = JSON.parse(JSON.stringify(state));
		newState.value = action.payload;
		return newState;
	}
	if (action.type === 'add_value') {
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.push(newState.value);
		newState.value = "";
		return newState;
	}
	if (action.type === 'del_value') {
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.splice(action.payload,1);
		return newState;
	}
	return state;
};
