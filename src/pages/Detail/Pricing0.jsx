import React from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Carousel, Row, Col, Radio } from 'antd';
import { getChildrenToRender } from './utils';

function Pricing0(props) {
  const { ...tagProps } = props;
  const { dataSource, isMobile } = tagProps;
  delete tagProps.dataSource;
  delete tagProps.isMobile;
 
  const animType = {
    queue: isMobile ? 'bottom' : 'right',
    one: isMobile
      ? {
          scaleY: '+=0.3',
          opacity: 0,
          type: 'from',
          ease: 'easeOutQuad',
        }
      : {
          x: '-=30',
          opacity: 0,
          type: 'from',
          ease: 'easeOutQuad',
        },
  };
  return (
    <div {...tagProps} {...dataSource.wrapper}>
      <OverPack component={Row} {...dataSource.OverPack}>
        <TweenOne
          key="img"
          animation={animType.one}
          resetStyle
          {...dataSource.imgWrapper}
          component={Col}
          componentProps={{
            md: dataSource.imgWrapper.md,
            xs: dataSource.imgWrapper.xs,
          }}
        >
          <Carousel autoplay>
            {
              dataSource.carouselList.map((item, i) => {
                return (
                    <img src={item.children} width="100%" alt="img" key={i} />
                )
              })
            }
          </Carousel>
          {/* TODO: 这部分酌情考虑是否可以成为小图 */}
        </TweenOne>
        <QueueAnim
          key="text"
          type={animType.queue}
          leaveReverse
          ease={['easeOutQuad', 'easeInQuad']}
          {...dataSource.childWrapper}
          component={Col}
          componentProps={{
            md: dataSource.childWrapper.md,
            xs: dataSource.childWrapper.xs,
          }}
        >
          {dataSource.childWrapper.children.map(getChildrenToRender)}
          <Radio.Group value={props.spu} onChange={props.handleSpuChange} style={{marginTop: 30}}>
            {
              props.spuList.map((item, i) => {
                return (
                  <Radio.Button value={item} key={i}>{item}</Radio.Button>
                )
              })
            }
          </Radio.Group>
        </QueueAnim>
      </OverPack>
    </div>
  );
}

export default Pricing0;
