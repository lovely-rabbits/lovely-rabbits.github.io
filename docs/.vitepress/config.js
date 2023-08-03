module.exports = {
  title: '可爱的兔子',
  description: '这里是可爱的兔子，欢迎所有宝爸宝妈加入',
  lang: 'zh-CN',
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: 'rabbit.jpg' }]],
  themeConfig: {
		sidebar: {
			'/': [
				{
					text: '首页',
					link: '/'
				},
				{
					text: '胎教故事',
					collapsed: true,
					items: [
						{
							text: '三只小鸡',
							link: '/story/story-1.md'
						},
						{
							text: '小猪屁屁的梦',
							link: '/story/story-2.md'
						},
						{
							text: '小孩与栗子',
							link: '/story/story-3.md'
						}
					]
				},
				{
					text: '关于我们',
					link: '/about/index.md'
				}
			]
		}
	}
}