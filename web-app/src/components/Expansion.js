import React from 'react';
import iconfont from '../iconfont/iconfont.css';
import style from './Expansion.css';
// import PropTypes from 'prop-types';


class ArrowSlide extends React.Component {
  static defaultProps = {
    itemLable: false,
    itemsName: ''
  };
  constructor(props) {
    super(props);
    const { itemLable } = props;
    this.state = {
      itemLable
    };
  }

  /**
   *
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

        <div  style={{ marginTop: '10px' }}>
          <a className="panel-title" onClick={this.handleToggleCondition}>{itemsName}<i className={`iconfont ${itemLable ? 'icon-shangjiantou' : 'icon-xiajiantou'}`} /></a>
          <div  style={{ transition: 'all .1s', maxHeight: itemLable ? '10000px' : '0px', overflow: 'hidden'}}>{this.props.children}</div>
        </div>

    );
  }
}

export default ArrowSlide;