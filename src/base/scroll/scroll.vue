<template>	
	<div ref="wrapper">
		<slot></slot>
	</div>
</template>
<script>
import BScroll from 'better-scroll'
	export default{
		props: {
			//实时派发滚动条的位置
			probeType: {
				type: Number,
				default: 2
			},
			//点击事件
			click: {
				type: Boolean,
				default: true
			},
			//组件数据
			data: {
				type: Array,
				default: null
			}
		},
		mounted(){
			//确保DOM树正确渲染
			setTimeout(() => {
				this.initScroll()
			},20)
			// 将回调延迟到下次Dom更新之后
			/*this.$nextTick(function(){
				this.initScroll()
			})*/
		},
		methods: {
			initScroll() {
				if(!this.$refs.wrapper){
					return
				}
				this.scroll = new BScroll(this.$refs.wrapper,{
					probeType: this.probeType,
					click: this.click
				})
				console.log("aaaa")
			},
			enable() {
				this.scroll && this.scroll.enable()
				console.log(enable);
			},
			disable() {
				this.scroll && this.scroll.disable()
				console.log(disable);
			},
			//刷新滚动条，重新计算高度
			refresh() {
				this.scroll && this.scroll.refresh()
			}
		},
		watch: {
			data(){
				setTimeout(() => {
					this.refresh()
				},20)
			}
		}
	}
</script>
<style>
	
</style>