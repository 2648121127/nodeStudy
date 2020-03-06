<template>
<div>
    <h3>分类列表</h3>
    <el-tabel :data="items">
        <el-table-column prop="id" lable="ID"></el-table-column>
        <el-table-column prop="name" lable="名字"></el-table-column>
    </el-tabel>
</div>

</template>