<template>
	<div id="search">
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
			}

		}
	}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
    #search .search-con{
    	margin: 20px;
    }
    #search .search-box{
    	height: 40px;
    	width: 100%;
	    display: flex;
    	background: #333;
    	align-items: center;
    }
    #search .icon-search{
    	font-size: 24px;
    	color: gray;
    }
    #search .icon-dismiss{
    	font-size: 14px;
    	color: #808080;
    	margin-right: 10px;
    }
    #search input{
    	height: 18px;
    	background: #333;
    	border: none;
    	width: 100%;
    	font-size: 14px;
    	color: #fff;
    }

</style>