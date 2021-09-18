import styled from 'styled-components';


const AuthWrapper = styled('div')`
  .account-label {
    font-size:25px;
    font-weight:500;
  }
  .mb-25 {
    margin-bottom: 25px;
  }

  .header-section {
    position: absolute;
    right: 5%;
    padding-top: 20px;
    display: flex;
    align-items: center;
  }
  .login-button {
    padding: 13px 50px 13px 50px !important;
    background-color: #fff !important;
    color: #3a8dff !important;
    box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 15%);
  }

  .signup-btn {
    background-color: #fff !important;
    color: #3a8dff !important;
    padding: 12px 20px 12px 20px !important;
    box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 15%);
  }
  .acc-text {
    color: grey;
    font-size: 0.85rem;
  }
  .side-img {
    min-height: 100vh;
    max-width: 100%;
  }
  .form {
    padding:20px;
    margin-top:26%;
  }
`

export default AuthWrapper;