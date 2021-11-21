import styled from 'styled-components'

const Form = styled.form`
   display: flex;
   flex-direction: column;
   width: 80%;
   label {
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      --bg-primary-color: #4d4d53;
      --bg-primaryGradientColor: #64646c;
      --bg-opaquePrimaryColor: #4d4d5325;
      line-height: 1.42857143;

      display: block;
      font-size: 12px;
      color: #a4aeb6;
      font-weight: 600;
   }
`

export const Input = styled.input`
   font-family: 'Montserrat';
   color: #333333;
   border: 1px solid #333333;
   font-size: 16px;
   font-weight: 400;
   width: 55%;
   &:focus {
      outline: none;
   }
   &[type='text'] {
      padding-left: 16px;
      height: 40px;
   }
   &::placeholder {
      color: #b8b8b8;
   }
`

export default Form
