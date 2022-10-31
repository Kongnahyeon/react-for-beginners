import PropTypes from "prop-types";
import styles from "./Button.module.css";

//App js에서 Button을 가져오게 하기위해
function Button({ text }){
    return <button className={styles.btn}>{text}</button>;
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Button;

/* 
    ** create-react-app에서 작업시 포인트!
       : "분할" 과 "정복"

    ** 1개의 컴포넌트 당 1개의 .js파일을 가질 수 있어 모듈화가 가능함

    ** 해당 컴포넌트의 style을 변경하는 방법
    1. style.css 파일을 만들어 import 해주는 방법 (기존 html 작성시 사용하는 방법과 동일)
    2. script로 global(전역) 변수를 사용하여 넣는 방법
    - ex) <button style ={{
        backgroundColor: ???,
        color: ???,
    }}></button>
    3. 컴포넌트별 스타일을 ???.module.css 형식으로 파일을 생성한 후 import한 스타일 객체의 property를 전달하여 적용도 가능함
    => 스타일일의 경우 className이나 id로 Import한 스타일 객체의 property를 전달하여 적용이 가능
    기존의 "어떤 class나 id에 적용할 스타일"이 아닌, "특정 jsx element에 적용할 스타일"로 생각할 수 있음

*/