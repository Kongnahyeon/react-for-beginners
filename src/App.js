import { useState, useEffect } from "react";

function App() {
    // React.useState() = useState()
    // useState가 반환값으로 array를 준다.
    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState("")
    const onClick = () => setValue((prev) => prev + 1);
    const onChange = (event) => setKeyword(event.target.value);
    // const iRunOnlyOnce = () => {
    //     console.log("i run all the time")
    // }
    // useEffect(iRunOnlyOnce, []);

    useEffect(() => {
        console.log("i run only once.");
    }, []);
    
    // keyword가 변화할때만 실행이 됨
    // useEffect(() => {
    //     if (keyword !== "" && keyword.length > 5){
    //         console.log("Search for", keyword);
    //     }
    // }, [keyword]);

    // keyword가 변할때마다 실행
    useEffect (() => {
        console.log("i run when 'keyword' changes.");
    }, [keyword]);

    // counter가 변할때마다 실행
    useEffect (() => {
        console.log("i run when 'counter' changes.");
    }, [counter]);

    useEffect (() => {
        console.log("I run when 'keyword' & 'counter' change.");
    }, [keyword, counter]);
    return (
        <div>
            <input value={keyword} onChange={onChange} type="text" placeholder="Search here" />
            <h1>{counter}</h1>
            <button onClick={onClick}>click Me</button>
        </div>
    )
}

export default App;

/*
    ** state가 변화할 때 모든 component는 다시 실행이 되고, 모든 코드들이 재실행됨

    ** rerender 될때 특정 컴포넌트를 제어하고 싶은 경우 (rerender되어도 다시 실행되지 않도록)

        - useEffect = 두 개의 argument를 가지는 function
                    = 우리 코드가 딱 한번만 실행될 수 있도록 보호를 해줌
          첫 번째 argument : 딱 한번만 실행하고 싶은 코드
          두 번째 argument
*/