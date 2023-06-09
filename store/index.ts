import { defineStore } from 'pinia'; // 经过配置无需额外引入

const USER_INFO = {
	userName: 'Huy',
	sex: 'man',
	age: 18,
};

export const useUserStore = defineStore('userInfo', () => {
	const userInfo = reactive(USER_INFO);

	return {
		userInfo,
	};
});
