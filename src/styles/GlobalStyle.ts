import { createGlobalStyle } from 'styled-components'
import { colors } from './variables'

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Oleo+Script|Roboto+Mono&display=swap');
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    *:focus {
      outline: 0;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    html{
        font-size: 62.5%;
        min-height: 100vh;
    }
    body{
        background: ${colors.bg};
        color: ${colors.font};
        font-family: Roboto, Arial, Helvetica, sans-serif;
        font-size: 1.6rem;
        min-width: 320px;
        width:100%;
        min-height: 100vh;
    }
    #root{
      position: relative;
      min-height: 100vh;
    }

    button{
      cursor:pointer;
      box-shadow: none;

      &:disabled{
        cursor:not-allowed;
        box-shadow: inset 0 0 0 2000px rgb(0 0 0 / 71%);
      }
    }

    .wrapper{
      width: 100%;
      max-width: 900px;
      margin:auto;
      padding: 0 10px;
      &.center{
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      &.center-colum{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
      }
    }

    main{
      width: 100%;
      padding: 70px 0;
    }

    ul {
      list-style: none;
    }

    ::-webkit-scrollbar-track {
      border-radius: 5px;
      border: none;
      background: #ffffff00;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background: #b0b0b0;
    }

    ::-webkit-scrollbar {
      height: 10px;
      width: 10px;
    }
`
