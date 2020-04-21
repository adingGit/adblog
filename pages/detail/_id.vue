<template>
  <div class="container">
    <div class="detail-left-wrap">
      <detail-list :detailInfo="detailInfo"></detail-list>
    </div>
    <div class="detail-right-wrap">
      <tag-block :tagList="tagList"></tag-block>
      <!-- <tag-list></tag-list> -->
    </div>
  </div>
</template>

<script>
import DetailList from '@/components/public/mainPage/DetailList'
import TagBlock from '@/components/public/Tag/TagBlock'
import TagList from '@/components/public/Tag/TagList'
import ArticleModel from '../../models/Article'

const articleModel = new ArticleModel();
export default {
  components: {
    DetailList,
    TagBlock,
    TagList
  },
  data () {
    return {
      
    }
  },
  async asyncData(ctx) {
		let {status, data} = await articleModel.getArticleDetailList(ctx.params.id);
    let {status: statusTag, data: tagData} = await articleModel.getTagList();
		if (status === 200  && statusTag == 200) {
			return {
        detailInfo: data.data.document,
        tagList: tagData.data.data.filter((item) => item._id !== null)
			}
		}
	}
}
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    min-width: 1000px;
    width: 88%;
    margin: 0 auto;
    .detail-left-wrap {
      flex-direction: column;
      background-color: #fff;
      flex: 3;
      display: flex;
      min-width: 700px; 
      min-height: calc(100vh - 163px);
    }
    .detail-right-wrap {
      min-width: 200px;
      margin-left: 20px;
      width: 300px;
    }
  }
</style>
