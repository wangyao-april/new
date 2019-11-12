import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

class IndexPage extends React.Component{
  btnClick(e){
    console.log('e...',e,this)
  }
  render(){
    let {changeNum}=this.props;
    console.log()
    return (
      <div className={styles.normal}>
        <h1 className={styles.title}>Yay! Welcome to dva!</h1>
        <div>
          <button onClick={()=>changeNum('+')}>+</button>
          <span>{this.props.num}</span>
          <button onClick={()=>changeNum('-')}>-</button>
        </div>
      </div>
    );
  }
}
//props类型检测
IndexPage.propTypes = {
  num:Number
};
//props默认值
IndexPage.defaultProps={
  num:100
}

const mapStateToProps=state=>{
  console.log('state...',state);
  return {
    num:state.num.num
  }
}
const mapDispatchToProps=dispatch=>{
  return {
    changeNum:type=>dispatch({
      type:'num/changeNum',
      payload:{type}
    })
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(IndexPage);
