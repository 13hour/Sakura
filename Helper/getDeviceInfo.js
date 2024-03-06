import * as Device from "expo-device";

const headers = {
	"client-device": "5677d1bb67789dc41af5d596ec5477c9", // 设备序列号
	"client-brand": Device.brand, // 获取设别品牌
	"client-version": Device.osVersion, // 获取设别版本号
	"client-channel-": Device.osName, // 获取操作系统名称
	"client-name": "app.maoyankanshu.novel", // 设置app名称
	"alias-name": "maoyankanshu", // 设置app别名
	"client-source": Device.osVersion,
	Authorization:
		" bearereyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hcGkubG9uZ2NodW5iYWppYW8uY29tXC9hdXRoXC90aGlyZCIsImlhdCI6MTcwMTg0NzEzNywiZXhwIjoxNzk1MTU5MTM3LCJuYmYiOjE3MDE4NDcxMzcsImp0aSI6IlJVY29KRmJvWXcydUFxMnUiLCJzdWIiOjYxNzY2NCwicHJ2IjoiYTFjYjAzNzE4MDI5NmM2YTE5MzhlZjMwYjQzNzk0NjcyZGQwMTZjNSJ9.OuiYJ2J42-UnJa0oxKliiBlJ-BcwuiFl603SyXy-zDw", // 设置认证序列号
};

export default headers;
