<template>
	<div id="search">
		<search-box ref="searchBox"></search-box>
		<div class="search-hot-container">
			<div class="hot-search">热门搜索</div>
			<div class="item-container">
				<div class="item" v-for="item in hotkey" @click="clickItem(item.k)">{{item.k}}</div>
			</div>
		</div>
		<search-suggest></search-suggest>
	</div>
</template>
<script type="text/javascript">
import searchBox from 'base/search-box/search-box'//搜索框组件
import searchSuggest from '../suggest/suggest' //模糊搜索
import {getHotKey} from 'api/search'
import {ERR_OK} from 'api/config'
	export default {
		components: {
			searchBox,
			searchSuggest
			},
		data(){
			return {
				hotkey: null,
			}
		},

		methods: {
			_getHotKey() {
				console.log("sss")
				getHotKey().then((res) => {
					if(res.code === ERR_OK){
						this.hotkey = res.data.hotkey.slice(0,10)
					}
				})
			},
			//点击热门搜索将值传入搜索框
			clickItem(query) {
				this.$refs.searchBox.setQuery(query)
			}

		},
		mounted() {
			this._getHotKey()

		}
	}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
#search .search-hot-container{
	margin: 20px;
}
#search .search-hot-container .hot-search{
   	  color: rgba(255,255,255,0.5);
   	  font-size: 14px;
   	  margin-bottom: 20px;
}
#search .search-hot-container .item{
    display: inline-block;
    padding: 5px 10px;
    margin: 0 20px 10px 0;
    border-radius: 6px;
    background: #333;
    font-size: 14px;
    color: rgba(255,255,255,0.3);
}
</style>