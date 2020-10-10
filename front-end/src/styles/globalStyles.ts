import { createGlobalStyle } from 'styled-components';
import githubBackgount from '../assets/img_de_fundo_git.svg';
export default createGlobalStyle`
*{
margin:0;
padding:0;
box-sizing:border-box;
outline:0;

}
body{
    background:#F0F0F5 url(${githubBackgount} )no-repeat 70% top;
    -webkit-font-smoothing: antialiased;

}
body,input,button{
font:16px Roboto, sans-serif;
}
#root{
    max-width:960px;
    margin: 0 auto;
    padding: 40px 20px
}
button{
    cursor:pointer;

}
`;
