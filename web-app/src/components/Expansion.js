import React from 'react';
import iconfont from '../iconfont/iconfont.css';
// import PropTypes from 'prop-types';

// 展开收起组件
class ArrowSlide extends React.Component {
  static defaultProps = {
    itemLable: false,
    itemsName: '' // 检查项目名称// 是否展开
  };
  constructor(props) {
    super(props);
    const { itemLable } = props; // 是否展开收起列表项
    this.state = {
      itemLable
    };
  }

  /**
   * 展开收起切换
   * @memberof EleItem
   */
  handleToggleCondition = () => {
    const { itemLable } = this.state;
    this.setState({ itemLable: !itemLable });
  }


    render() {
    const { itemsName } = this.props;
    const { itemLable } = this.state;


    return (

        <div style={{ marginTop: '10px' }}>
          <a className="arrow-alide" onClick={this.handleToggleCondition}>{itemsName}<i className={`iconfont ${itemLable ? 'icon-shangjiantou' : 'icon-xiajiantou'}`} /></a>
          <div style={{ transition: 'all .1s', maxHeight: itemLable ? '10000px' : '0px', overflow: 'hidden' }}>{this.props.children}</div>
        </div>

    );
  }
}

export default ArrowSlide;