<template>
	<div>
		<hr />
		<div>
			Pinia 内容
			<strong> 姓名：{{ userInfo.userName }} 性别：{{ userInfo.sex }} 年龄: {{ userInfo.age }} </strong>
		</div>
		<hr />
		<div>
			Vueuse 内容
			<div>pos: {{ x }}, {{ y }}</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import { useMouse } from '@vueuse/core';
import { useUserStore } from '~/store';
const userInfo = useUserStore().userInfo;

// Hook
const { x, y } = useMouse();
</script>
