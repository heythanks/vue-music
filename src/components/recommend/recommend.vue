<template>
	<div id="recommend">
	<scroll :data="discList" class="recommend-scroll" ref="scroll">
			<div class="recommend-content">
			<!-- 轮播图 -->
				<div class="slider-wrapper" v-if="recommends.length">
					<slider>
						<div v-for="item in recommends">
							<a :href="item.linkUrl">
								<img class="needsclick" :src="item.picUrl" @load="loadimg()">
							</a>
						</div>
					</slider>
				</div>
			<!-- 歌单 -->
				<div class="recommend-list">
					<h1>热门歌单推荐</h1>
					<ul class="list" >
						<li class="list-item" v-for="item in discList">
							<div class="icon">
								<img v-lazy="item.imgurl" class="img">
							</div>
							<div class="text">
								<h2 class="name">{{item.creator.name}}</h2>
								<p class="desc">{{item.dissname}}</p>
							</div>
						</li>
					</ul>
				</div>
			<!-- 加载中 -->
				<div class="loading-container" v-show="!discList.length">
					<loading></loading>	
				</div>
			</div>
	</scroll>
	</div>
</template>
<script type="text/javascript">
import Slider from 'base/slider/slider'//轮播图组件
import Loading from 'base/loading/loading'//加载组件
import {getRecommend} from 'api/recommend'//轮播图数据
import {getDiscList} from 'api/recommend'//歌单列表数据
import Scroll from 'base/scroll/scroll'//
import {ERR_OK} from 'api/config'
export default {
	data() {
		return {
			recommends: [],
			discList: []
		}
	},
	mounted () {
		this._getRecommend();
		setTimeout(() => {
			this._getDiscList()
		},1000)
		

	},
	methods: {
		_getRecommend() {
			console.log("aaaa")
			getRecommend().then((res) => {
				console.log(res,"aaa")
				if (res.code === ERR_OK) {
					// console.log(res.data.slider)
					this.recommends = res.data.slider
				}
			})
		},
		_getDiscList(){
			getDiscList().then((res) => {
				if(res.code === ERR_OK){
					 this.discList = res.data.list
					 console.log(this.discList,'ccc')
				}

				
			}).catch((err) => {
			})
		},
		loadimg(){
			//等待第一张图片加载完后就执行
			if (!this.checkloaded) {
		          this.checkloaded = true
		          this.$refs.scroll.refresh()
        	}
		},
	},
	components: {
		Slider,
		Loading,
		Scroll
		
	}
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
	@import "~common/stylus/variable"
	#recommend{
		width: 100%;
		position: fixed;
		top: 88px;
		bottom: 0;
		.recommend-scroll{
			height: 100%;
			overflow: hidden;
			.recommend-content{
				width: 100%;
				.slider-wrapper{
					position:relative;
					width:100%;
					overflow: hidden;
				}
				.recommend-list{
					h1{
						font-size: 	1.4rem;
						line-height: 65px;
						height: 65px;
						color: $color-theme;
						text-align: center;
						}
					.list{
						width:100%;
						.list-item{
							display: flex;
							width:100%;
							cd 
							height: 85px;
							box-sizing: border-box;
							padding:0 20px 20px 20px;
							.icon{
								flex: 0 0 60px;
	            				width: 60px;
	        					padding-right: 20px;
	        					.img{
	        						width:60px;
	        						height:60px;
	        					}
							}
							.text{
								font-size: 14px;
								justify-content: center
								display: flex;
							    flex-direction: column
								.name{
									margin-bottom: 10px;
									color: $color-text;
								}
								.desc{
									color: $color-text-d;
								}
								
							}
						}
					}

				}
			}
		}
	}
</style>