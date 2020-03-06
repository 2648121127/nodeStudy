<template>
    <div>
        <el-card header="请登录">
            <el-form >
                <el-form-item label="用户名">
                    <el-input v-model="model.username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="model.password"></el-input>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>