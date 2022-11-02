import { useState, useEffect } from "react";

function Hello() {
    // function byFn() {
    //     console.log("bye :(")
    // }
    // function hiFn() {
    //     console.log("created :)");
    //     return byFn;
    // }

    // useEffect(hiFn, []);
    // useEffect(() => {
    //     console.log("created :)"); //컴포넌트가 처음 생성될때만 실행

    //     // 컴포넌트가 사라질때 실행되는 것
    //     return () => console.log("destroyed :(")
    // }, []);

    // 1번 2번 둘다 동일한 코드 익명의 함수를 통해 더 간략하게 작성이 가능

    // 1.
    useEffect(() => {
        console.log("hi :-)");
        return () => console.log("bye :-(");
    }, [])

    // 2.
    useEffect(function(){
        console.log("hi :-)");
        return function() {
            console.log("bye :-(");
        }
    }, []);
    return <h1>Hello!</h1>;
}

function App() {
    const [showing, setShowing] = useState(false);

    //setShowing을 통해 이전 value를 받고, 그 value의 반댓값을 return 함
    const onClick = () => setShowing(prev => !prev);

    return (
        <div>
            {showing ? <Hello /> : null}
            <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
        </div>
    );
}

export default App;

/*
    ** {} 는 자바스크립트를 사용할때 쓰는 것 ! 꼭 기억해두기 !
       () 는 return을 의미 : es6문법

    ** 컴포넌트는 jsx를 return 해주는 것

    ** 컴포넌트가 destroy 될 때도 코드를 실행할 수 있음

    ** Cleanup function
        - component가 파괴될 때도 function을 실행하고 싶은 경우
          function 안에서 return을 해줘야함

        - useEffect(() => {
                console.log("hi :-)");
                return () => console.log("bye :-(");
          }, [])

          -----> return function을 실행시켜서 코드가 삭제될때 or 생성이될때
                 반대의 경우를 알 수 가 있다. (ex 코드가 실행되는 지점 등등 ...)

    
    * 리렌더링 > 이전 이펙트 클린업 > 이펙트 실행

*/