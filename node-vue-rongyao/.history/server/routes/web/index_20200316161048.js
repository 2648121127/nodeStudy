module.exports = app =>{
    const router = require('express').Router()
    const mongose = require('mongose')
    const Category = mongose.model('Category')
    const Article = mongose.model('Article')

    //初始化录入数据，偷懒，操作数据库录入数据，正常情况下是不允许这么操作的
    router.get('/news/init',async (req,res)=>{
        const cats = await Category.finde().lean()
        const newsTitles = ["体验服爆料丨拒绝被抢野，loading能打气，峡谷调整抢先知", "全新限时活动玩法【万镜觉醒】3.13开启，五倍快乐等你来~", "王者音乐课：五岳山河志", "【虎牙大腿杯S3】玩法升级，火热开战！", "体验服爆料丨全新玩法万镜觉醒，爽快翻5倍！", "3月13日全服不停机更新公告", "【英雄修炼】活动问题修复及优化补偿方案公告", "3月11日全服不停机更新公告", "3月10日全服不停机更新公告", "服务器升级导致部分服务器新用户注册或小队功能异常说明", "白色情人节【玫瑰芬芳，纸短情长】活动公告", "白色情人节 浪漫好礼来袭", "峡谷女神节 福利大集结", "【稷下修学游】活动公告", "伽罗星元上新 多重福利来袭", "王者荣耀国际巡回赛（KPLGT）2020年春季赛开赛时间公告", "2020年KPL春季赛大名单公布", "2020年KPL春季赛“云开赛”在即 全新视觉与六大城市主场来袭！", "高校联赛女神挑战赛周末开赛啦！来看高颜值组合强强联手", "你和那个TA会是峡谷校园最佳CP吗？高校联赛白色情人节开启CP大作战！"]
        const newsList = newsTitles.map(title=>{
           return {
               title:title
           } 
        })
        res.send(newsList)
    })


    app.use('/web/app/api',router)
}