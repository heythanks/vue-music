<template>
	<div id="search-suggest">
		<div class="list-wrapper">
			<div class="list-item"><span class="icon-music"></span>123</div>
			<div class="list-item"><span class="icon-music"></span>123</div>
		</div>
	</div>
</template>
<script type="text/javascript">
import {search} from 'api/search'
import {ERR_OK} from 'api/config'
	export default{
		props: {
			query: {
				type: String,
				default: ''
			},
			showSinger: {
				type: Boolean,
				default: true
			}
		},
		methods: {
			//向服务端发送请求
			search(this.query,this.page,this.showSinger){

			},
		},
		data() {
			return {
				page: 1,
				result: null,
			}
		},
		watch: {
			query() {
				this.search()
			}
		}
	}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
	#search-suggest .list-wrapper{
		margin-left: 20px;
	}
	#search-suggest .list-item{
		color: rgba(255,255,255,0.3);
		font-size: 14px;
		height: 30px;
		line-height:30px;

	}
	#search-suggest .icon-music{
		margin-right: 10px;
	}
</style>