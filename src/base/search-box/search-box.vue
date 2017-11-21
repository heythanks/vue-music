<template>
	<div id="search-box">
		<div class="search-con">
			<div class="search-box">
				<i class="icon-search"></i>
				<input type="text" ref="query" name="" v-model="query" :placeholder="placeholder">
				<i class="icon-dismiss" v-show="query" @click="clear"></i>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		props: {
			placeholder: {
				type: String,
				default: '搜索歌曲、歌手'
			}
			
		},
		data(){
			return {
				query: ''
			}
		},
		methods: {
			clear() {
				this.query = ''
			},
			blur() {
				this.$refs.query.blur()
			},
			//点击父组件的热门搜索词后填词在搜索框
			setQuery(query){
				this.query = query
			}
		},
		//???为什么用created进行$watch而不是直接用全局监听
		created() {
			this.$watch('query',(newQuery) => {
				this.$emit('query',newQuery)
			})
		}
	}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
    #search-box .search-con{
    	margin: 20px;
    }
    #search-box .search-box{
    	height: 40px;
    	width: 100%;
	    display: flex;
    	background: #333;
    	align-items: center;
    }
    #search-box .icon-search{
    	font-size: 24px;
    	color: gray;
    }
    #search-box .icon-dismiss{
    	font-size: 14px;
    	color: #808080;
    	margin-right: 10px;
    }
    #search-box input{
    	height: 18px;
    	background: #333;
    	border: none;
    	width: 100%;
    	font-size: 14px;
    	color: #fff;
    }

</style>