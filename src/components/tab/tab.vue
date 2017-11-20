<template>
	<div id="tab">
		<ul class="list">
			<li>
				<router-link tag="div" to="/recommend" class="router-item">
					<span class="active">推荐</span>
				</router-link >
			</li>
			<li>
				<router-link tag="div" to="/singer" class="router-item">
					<span class="active">歌手</span>
				</router-link>
			</li>
			<li>
				<router-link tag="div" to="/rank" class="router-item">
					<span class="active">排行</span>
				</router-link>
			</li>
			<li>
				<router-link tag="div" to="/search" class="router-item">
					<span class="active">搜索</span>
				</router-link>
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default {}
</script>
<style scoped lang="stylus">
	#tab
		width:100%;
		color:rgba(255,255,255,0.5)
		font-size:1.5rem;
		height: 44px;
		line-height: 44px;
		.list
			display: flex;
			li
				width:25%
				text-align:center
			.router-item
				&.router-link-active
					.active 
						color: #ffcd32;
						padding-bottom:5px;
						border-bottom:2px solid #ffcd32;

</style>
