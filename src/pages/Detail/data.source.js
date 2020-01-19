/*
 * @Author       : fatewang
 * @Github       : https://github.com/Burning-Shadow
 * @Major        : Software Engineering
 * @SchoolStatus : 2016
 * @Date         : 2019-12-31 17:42:48
 * @LastEditors  : fatewang
 * @LastEditTime : 2020-01-19 23:44:50
 * @Description  : Edit it for yourself
 * @ContactMe    : siir_52721@qq.com
 */

export const Pricing00DataSource = {
  wrapper: { className: 'home-page-wrapper pricing0-wrapper' },
  OverPack: { playScale: 0.3, className: 'home-page pricing0' },
  imgWrapper: { className: 'pricing0-img-wrapper', md: 12, xs: 24 },
  carouselList: [
    {
      className: 'pricing0-img',
      name: 'image',
      children:
        'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*OnyWT4Nsxy0AAAAAAAAAAABjARQnAQ',
    },
    {
      className: 'pricing0-img',
      name: 'image',
      children:
        'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*OnyWT4Nsxy0AAAAAAAAAAABjARQnAQ',
    },
    {
      className: 'pricing0-img',
      name: 'image',
      children:
        'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*OnyWT4Nsxy0AAAAAAAAAAABjARQnAQ',
    },
    {
      className: 'pricing0-img',
      name: 'image',
      children:
        'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*OnyWT4Nsxy0AAAAAAAAAAABjARQnAQ',
    },
    {
      className: 'pricing0-img',
      name: 'image',
      children:
        'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*OnyWT4Nsxy0AAAAAAAAAAABjARQnAQ',
    },
  ],
  childWrapper: {
    className: 'pricing0-text-wrapper',
    md: 12,
    xs: 24,
    children: [
      {
        name: 'title',
        children: 'Mac-Pro 2019特惠版',
        className: 'pricing0-title',
      },
      {
        name: 'content',
        children:
          '144Hz，16英寸。轻便小巧，配置中高，现购买即可获得价值300的京东E卡，同时赠送16寸电脑包',
        className: 'pricing0-content',
      },
      { name: 'pricing', children: '¥2,200', className: 'pricing0-pricing' },
      {
        name: 'button',
        children: {
          icon: 'shopping-cart',
          href: '#',
          type: 'primary',
          children: '立即购买',
        },
      },
    ],
  },
};
