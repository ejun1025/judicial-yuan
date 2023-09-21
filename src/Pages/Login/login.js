import './login.scss'

export default function Login() {
    return (
      <>
        <div className="main">
          <img className='main__logo' src={require("../../assets/images/logo.png")} alt="司法院Logo"></img>
          <p className='main__title'>後台管理平台</p>
          <input className='main__input' type="text" placeholder='帳號'/>
          <input className='main__input' type="text" placeholder='密碼'/>
          <div className='main__row'>
            <label className='main__checkbox'>
              <input type="checkbox" />
              <i className='icon-checkbox'><svg><polyline points='1,16 10,23 23,0' /></svg></i>
              <p>記住我</p>
            </label>
            <div className='main__link'>書記官登入</div>
          </div>
          <a className='main__button' href=''>登入</a>
        </div>
      </>
    );
}
 