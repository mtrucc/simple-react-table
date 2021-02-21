# 简易的react table组件

使用方式：

```shell
cd ./react-table
npm install
npm run start #打开localhost:1234查看页面渲染情况
```

介绍
- ./react-table/src/ReactTable  #组件文件夹
- ./react-table/src/index.tsx   #挂载组件到页面上
- 实例中渲染10000个数据，可以修改count值来设定渲染的个数，
- 已设置列表的前两列靠左固定，最后一列靠右固定
- 使用 parcel 快速搭建开发验证环境，加入 react-list 使用虚拟列表优化， sticky 实现固定列
