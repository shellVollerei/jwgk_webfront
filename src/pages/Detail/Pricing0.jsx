import React from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Carousel, Row, Col } from 'antd';
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
          {/* TODO: 此部分替换为轮播图 */}
          <Carousel autoplay>
            {
              dataSource.carouselList.map((item, i) => {
                return (
                  <div style={{backgroundColor: 'red', width: "100%", height: 80}}>
                    <img src={item.children} width="100%" alt="img" key={i} />
                  </div>
                )
              })
            }
          </Carousel>
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
        </QueueAnim>
      </OverPack>
    </div>
  );
}

export default Pricing0;
