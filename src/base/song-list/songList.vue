<template>
	<div id="song-list">
		<h1 id='title'>{{listTitle}}</h1>
		<div class="list-container">
			<ul>
				<li>
					<div>
						<img src="http://placehold.it/60x60">
					</div>
					<div class="desc">
						<h2>标题</h2>
						<p>青春的最后一件事，那就再爱一次摇滚吧</p>
					</div>
					
				</li>
			</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				listTitle:'热门歌单推荐'
			}
		}
	}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "~common/stylus/variable"
	#song-list{
		width:100%;
		#title{
			width:100%;
			height:65px;
			text-align: center;
			font-size:	14px;
			line-height: 65px;
			color: $color-theme;
		}
		.list-container{
			width: 100%;
			height: 83px;
			display: flex;
			

		}
	}
</style>