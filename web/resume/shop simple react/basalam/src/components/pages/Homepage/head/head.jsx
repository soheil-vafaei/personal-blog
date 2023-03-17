import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt";
import { FaShoppingBag } from "@react-icons/all-files/fa/FaShoppingBag";
import "./head.css";
const Header = () => {
  <header>
    <dev className='contrainer-head'>
      <dev className='header-container'>
        <dev className='head-container-title'>
          <dev className='shop-user'>
            <a href='#'>
              <dev className='login-user'>
                <FaUserAlt size={30} className='loginnn' />
                <p>ورود | ثبت نام</p>
              </dev>
            </a>
            <a href='#'>
              <dev className='basket-user'>
                <FaShoppingBag size={30} />
                <p >سبد خرید</p>
              </dev>
            </a>
          </dev>
          <dev className='search-header'>
            <input type="search" />
            <img src="https://statics.basalam.com/resources/img/basalam-logotype.34a414e.svg" />
          </dev>
        </dev>
      </dev>
    </dev>
  </header>
}

export default Header