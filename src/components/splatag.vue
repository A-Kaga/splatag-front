<template>
  <div>
    <el-container>
      <el-header>
        <el-steps :active=currentStep simple>
          <el-step title="背景"></el-step>
          <el-step title="徽章"></el-step>
          <el-step title="称号"></el-step>
        </el-steps>
      </el-header>

      <el-main>
        <el-row>
          <el-col :span="3" v-for="(item, index) in background" :key="index" :offset="1">
            <el-card :body-style="{ padding: '0px' }">
              <img :src=item.path class="image">
              <div style="padding: 14px;">
                <div>{{item.name}}</div>
                <div class="bottom clearfix">
                  <el-button type="text" class="button">选择</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-main>

      <el-footer>
        <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'splatag',
  data () {
    return {
      currentStep: 0,
      msg: "www",
      background: [
        {
          id: '1',
          name: 'Npl_Catalog_Season01_Lv01',
          path: require('@/assets/background/Npl_Catalog_Season01_Lv01.webp')
        },
        {
          id: '2',
          name: 'Npl_Catalog_Season01_Lv02',
          path: require('@/assets/background/Npl_Catalog_Season01_Lv02.webp')
        },
        {
          id: '3',
          name: 'Npl_Catalog_Season01_Lv03',
          path: require('@/assets/background/Npl_Catalog_Season01_Lv03.webp')
        },
        {
          id: '4',
          name: 'Npl_Catalog_Season01_Lv04',
          path: require('@/assets/background/Npl_Catalog_Season01_Lv04.webp')
        },
        {
          id: '5',
          name: 'Npl_Catalog_Season01_Lv05',
          path: require('@/assets/background/Npl_Catalog_Season01_Lv05.webp')
        },
      ],
    }
  },

  methods: {
    next() {
      if (this.currentStep++ > 2) this.currentStep = 0;
      console.log("?");
    }
  }

  
}
</script>

<style>
h1 {
  font-weight: normal;
}
a {
  color: #42b983;
}
</style>
