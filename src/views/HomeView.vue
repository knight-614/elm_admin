<template>
    <div class="container">
        <el-container>
            <el-aside
                width="18%"
                style="background-color: #324057"
            >
                <el-menu background-color="#324057" default-active="homeContent" router ref='menu'>
                    <el-menu-item index="homeContent"><i class="el-icon-menu"></i>首页</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-document"></i>数据管理</template>
                        <el-menu-item index="userList">用户列表</el-menu-item>
                        <el-menu-item index="shopList">商家列表</el-menu-item>
                        <el-menu-item index="foodList">食品列表</el-menu-item>
                        <el-menu-item index="orderList">订单列表</el-menu-item>
                        <el-menu-item index="managerList">管理员列表</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title"><i class="el-icon-plus"></i>添加数目数据</template>
                        <el-menu-item index="addStore">添加商铺</el-menu-item>
                        <el-menu-item index="addCommodity">添加商品</el-menu-item>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title"><i class="el-icon-star-on"></i>图表</template>
                        <el-menu-item index="userDistribution">用户分布</el-menu-item>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title"><i class="el-icon-edit"></i>编辑</template>
                        <el-menu-item index="textEdit">文本编辑</el-menu-item>
                    </el-submenu>
                    <el-submenu index="6">
                        <template slot="title"><i class="el-icon-setting"></i>设置</template>
                        <el-menu-item index="managerSetting">管理员设置</el-menu-item>
                    </el-submenu>
                    <el-submenu index="7">
                        <template slot="title"><i class="el-icon-warning"></i>说明</template>
                        <el-menu-item index="about">说明</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>

            <el-container>
                <el-header>
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item>首页</el-breadcrumb-item>
                        <el-breadcrumb-item v-for="(item,index) in $route.meta" :key="index">{{ item }}</el-breadcrumb-item>
                    </el-breadcrumb>
                    <el-dropdown style="height: 60px;">
                        <span><img class="portrait" src="../../assets/img/portrait.png" alt=""></span>
                        <el-dropdown-menu slot="dropdown" style="width: 100px; text-align: center;">
                            <el-dropdown-item @click.native="$router.push('/home/homeContent')">首页</el-dropdown-item>
                            <el-dropdown-item @click.native="$router.push('/')">退出</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-header>

                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        
    }
};
</script>

<style scoped>
.container {
    box-sizing: border-box;
    height: 100%;
}
.el-container {
    height: 100%;
}
.el-header {
    background-color: #eff2f7;
    color: #333;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.el-header img {
    margin-top: 10px;
    margin-right: 20px;
}
.portrait {
    width: 40px;
    height: 40px;
    border-radius: 20px;
}
.el-aside {
    color: #fff;
    background-color: #324057;
    height: 100%;
}
.el-menu-item {
    background-color: #1f2d3d;
    color: #bfcbd9;
}
.el-submenu /deep/ .el-submenu__title:hover {
    background-color: #48576a;
}
.el-submenu /deep/ .el-submenu__title {
    color: #bfcbd9;

}
.el-menu-item:hover {
    background-color: #48576a;
}
.el-submenu /deep/ i:nth-child(1) {
    color: #bfcbd9;
    font-size: 1.2rem;
    font-weight: bolder;
}
.el-submenu /deep/ i:nth-child(2) {
    color: #bfcbd9;
    font-size: 1.1rem;
}
.el-submenu:nth-child(1) /deep/ i:nth-child(2) {
    display: none;
}
</style>
